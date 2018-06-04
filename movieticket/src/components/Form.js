import React from "react";
import {Row, Modal, ModalHeader, ModalBody,
        ModalFooter,Col,Form, FormGroup, Label,
        InputGroup, InputGroupAddon,
        Input, Button } from 'reactstrap';
import logo from '../logo.svg';
class FormComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            price: undefined,
            MovieData: [{
                ID: undefined,
                Name: undefined,
                Price: 0,
                Image: undefined,
                Now_showing: undefined,
            }],
            ChangeDetail: [{
                ChangeMoney: 0,
                OneThousand:0,
                FiveHundred:0,
                OneHundred:0,
                Fifty:0,
                Twenty:0,
                Ten:0,
                Five:0,
                Two:0,
                One:0,
            }],
            inputAmount: 0,
            inputMoney: 0,
            ButtonState: false,

            modal: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.changeInputAmount = this.changeInputAmount.bind(this);
        this.changeMoneyValue = this.changeMoneyValue.bind(this);
        this.toggle = this.toggle.bind(this);
        this.submitHandle = this.submitHandle.bind(this);
    }
    handleChange = (e) => {

        var valueData = this.props.values.filter(function (item) {
            return item.name === e.target.value
        })
        let newState = Object.assign({}, this.state.MovieData,{
            ID:valueData[0].id,
            Name:valueData[0].name,
            Price:valueData[0].price,
            Image:valueData[0].image,
            Now_showing:valueData[0].now_showing,
        });
        this.setState({
           MovieData: newState,
        })
        e.preventDefault();
    }
    changeInputAmount(e){
        this.setState({
            inputAmount: e.target.value,
        });
        e.preventDefault();
    }
    changeMoneyValue(e){
        let checkMoney = false;
        if(e.target.value  - (this.state.inputAmount*this.state.MovieData.Price)>0){
            checkMoney = true;
        }
        this.setState({
            inputMoney: e.target.value,
            ButtonState: checkMoney,
        });
        e.preventDefault();
    }
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    submitHandle(){
        /* calculate the change money*/
        let mchangeMoney = (this.state.inputMoney)-(this.state.MovieData.Price*this.state.inputAmount);
        let moneyChangeValue = mchangeMoney;
        let moneThousand , mfiveHundred , moneHundred , mfifty , mtwenty , mten ,mfive , mtwo , mone;
        moneThousand = mfiveHundred = moneHundred = mfifty = mtwenty = mten = mfive = mtwo = mone = 0;
        while(mchangeMoney>0){
            if(mchangeMoney>= 1000){
                mchangeMoney -= 1000;
                moneThousand += 1;
            }
            else if (mchangeMoney>= 500 && mchangeMoney < 1000){
                mchangeMoney -= 500;
                mfiveHundred +=1;
            }
            else if (mchangeMoney>= 100 && mchangeMoney < 500){
                mchangeMoney -= 100;
                moneHundred +=1 ;
            }
            else if (mchangeMoney>= 50 && mchangeMoney < 100){
                mchangeMoney -= 50;
                mfifty+=1;
            }
            else if (mchangeMoney>= 20 && mchangeMoney < 50){
                mchangeMoney -= 20;
                mtwenty+=1;
            }
            else if (mchangeMoney>= 10 && mchangeMoney < 20){
                mchangeMoney -= 10;
                mten+=1;
            }
            else if (mchangeMoney>= 5 && mchangeMoney < 10){
                mchangeMoney -= 5;
                mfive+=1;
            }
            else if (mchangeMoney>= 2 && mchangeMoney < 5){
                mchangeMoney -= 2;
                mtwo+=1;
            }
            else if (mchangeMoney>= 1 && mchangeMoney < 2){
                mchangeMoney -= 1;
                mone+=1;
            }
        }
        let newState = Object.assign({}, this.state.ChangeDetail,{
            ChangeMoney: moneyChangeValue,
            OneThousand:moneThousand,
            FiveHundred:mfiveHundred,
            OneHundred:moneHundred,
            Fifty:mfifty,
            Twenty:mtwenty,
            Ten:mten,
            Five:mfive,
            Two:mtwo,
            One:mone
        });
        this.setState({
            ChangeDetail: newState,
            modal: !this.state.modal
          });
    }


    render() {
        return (
            <div>
                <Row>
                <Col md={6}>
                <Form >
                    <FormGroup>
                        <InputGroup>
                            <select onChange={this.handleChange}>
                                {this.props.values.map(function (data, key) {
                                    return (
                                        <option key={key} value={data.name}>{data.name}</option>)
                                })}
                            </select>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                        <InputGroupAddon addonType="prepend">Price</InputGroupAddon>
                        <Col sm={10}>
                        <h3><Label >{this.state.MovieData.Price}</Label>{' '}</h3>
                        </Col>
                        </InputGroup>
                    </FormGroup>

                     <FormGroup>
                        <InputGroup>
                             <InputGroupAddon addonType="prepend" >Amount</InputGroupAddon>
                            <Input placeholder="ie. 1" type="number" value={this.state.inputAmount} onChange={this.changeInputAmount} />
                            <InputGroupAddon addonType="append">pcs.</InputGroupAddon>                            
                        </InputGroup>
                    </FormGroup>

                    <FormGroup>
                        <InputGroup>
                        <InputGroupAddon addonType="prepend">Total</InputGroupAddon>
                        <Col sm={10}>{
                           this.state.inputAmount>0 && this.state.MovieData.Price> 0 && <h3><Label >
                            {this.state.inputAmount * this.state.MovieData.Price}</Label>{' '}</h3> }
                        
                        </Col>
                        </InputGroup>
                    </FormGroup>

                    <FormGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">Money</InputGroupAddon>
                            <Input placeholder="ie. 350" type="number"  value={this.state.inputMoney} onChange={this.changeMoneyValue} />
                            <InputGroupAddon addonType="append">Bath</InputGroupAddon>
                        </InputGroup>
                    </FormGroup>

                   <Button outline color="danger"   disabled={!this.state.ButtonState} onClick={this.submitHandle}>Submit</Button> 
                </Form>
                </Col>
                <Col md = {6}>
                    {this.state.MovieData.Image ? (
                    <img src={this.state.MovieData.Image} alt="Movie now showing" />
                    ) : <img src={logo} alt="waiting for select movie" />}
                </Col>
                </Row>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Confirm Ticket</ModalHeader>
          <ModalBody>
            <h4>{this.state.MovieData.Name} x {this.state.inputAmount}</h4>
            <h4>Price: {this.state.MovieData.Price} Bath</h4>
            <h5>Deposit Money: {this.state.inputMoney}  Bath</h5>
            <h5>Change: {this.state.ChangeDetail.ChangeMoney} Bath</h5>
            <Row>
                <Col md = {3}>1000 x {this.state.ChangeDetail.OneThousand}</Col>
                <Col md = {3}>500 x {this.state.ChangeDetail.FiveHundred}</Col>
                <Col md = {3}>100 x {this.state.ChangeDetail.OneHundred}</Col>
            </Row>
            <Row>
                <Col md = {3}>50 x {this.state.ChangeDetail.Fifty}</Col>
                <Col md = {3}>20 x {this.state.ChangeDetail.Twenty}</Col>
                <Col md = {3}>10 x {this.state.ChangeDetail.Ten}</Col>
            </Row>
            <Row>
                <Col md = {3}>5 x {this.state.ChangeDetail.Five}</Col>
                <Col md = {3}>2 x {this.state.ChangeDetail.Two}</Col>
                <Col md = {3}>1 x {this.state.ChangeDetail.One}</Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Confirm</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
            </div>


        )
    }
}
export default FormComponent;
