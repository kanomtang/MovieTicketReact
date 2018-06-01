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
            movieDataID: undefined,
            movieDataName: undefined,
            movieDataPrice: 0,
            movieDataImage: undefined,
            movieDataNowShowing: undefined,
            inputAmount: 0,
            inputMoney: 0,
            modal: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.changeInputAmount = this.changeInputAmount.bind(this);
        this.changeMoneyValue = this.changeMoneyValue.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    handleChange = (e) => {

        var valueData = this.props.values.filter(function (item) {
            return item.name === e.target.value
        })
        this.setState({
            movieDataID: valueData[0].id,
            movieDataName: valueData[0].name,
            movieDataPrice: valueData[0].price,
            movieDataImage: valueData[0].image,
            movieDataNowShowing: valueData[0].now_showing,

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
                        <h3><Label >{this.state.movieDataPrice}</Label>{' '}</h3>
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
                           this.state.inputAmount>0 && this.state.movieDataPrice> 0 && <h3><Label >
                           {this.state.inputAmount * this.state.movieDataPrice}</Label>{' '}</h3> }
                        
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Confirm</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal> */}
            </div>

            //     <input type = "number" value = {this.state.movieData.price} 
            //     onChange = {this.updateState} />
            //  <h3>{this.state.data}</h3>
        )
    }
}
export default FormComponent;
