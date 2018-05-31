import React from "react";
import { Col,Form, FormGroup, Label, InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
class FormComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            price: undefined,
            movieDataID: undefined,
            movieDataName: undefined,
            movieDataPrice: undefined,
            movieDataImage: undefined,
            movieDataNowShowing: undefined,
        };

        this.handleChange = this.handleChange.bind(this);
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
                            <InputGroupAddon addonType="prepend">Amount</InputGroupAddon>
                            <Input placeholder="ie. 1" type="number" />
                            <InputGroupAddon addonType="append">ea.</InputGroupAddon>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">Money</InputGroupAddon>
                            <Input placeholder="ie. 350" type="number" />
                            <InputGroupAddon addonType="append">Bath</InputGroupAddon>
                        </InputGroup>
                    </FormGroup>
                    <Button color="success">Submit!</Button>
                </Form>
            </div>

            //     <input type = "number" value = {this.state.movieData.price} 
            //     onChange = {this.updateState} />
            //  <h3>{this.state.data}</h3>
        )
    }
}
export default FormComponent;
