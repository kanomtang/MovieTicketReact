import React from "react";
import { Modal, ModalHeader, ModalBody,
     ModalFooter,Col,Form, FormGroup, Label,
      InputGroup, InputGroupAddon, InputGroupText,
       Input, Button } from 'reactstrap';
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
                changeMoney: 0,
                oneThousand:0,
                fiveHundred:0,
                oneHundred:0,
                fifty:0,
                twenty:0,
                ten:0,
                five:0,
                two:0,
                one:0
            }],
            inputAmount: 0,
            inputMoney: 0,

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
        this.setState({
            inputMoney: e.target.value,
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
        
        this.setState({
            modal: !this.state.modal
          });
    }


    render() {
        return (
            <div>
                <Form style={{width: '50%'}}>
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

                   <Button color="danger" onClick={this.submitHandle}>Submit</Button> 
                </Form>

        
        {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Confirm Ticket</ModalHeader>
          <ModalBody>
            <h1>{this.state.movieDataName} x {this.state.inputAmount}</h1>
            <h2>Price: {this.state.movieDataPrice}</h2>
            <h2>Deposit Money: {this.state.inputMoney}</h2>
            <h2>Change: {this.state.changeMoney}</h2>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Confirm</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal> */}
            </div>


        )
    }
}
export default FormComponent;
