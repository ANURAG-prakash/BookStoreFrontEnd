import React, { Component } from 'react'

import './Cart.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { Redirect } from "react-router-dom";

import Userservice from '../../services/userservices';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import book1 from '../../assert/book1.png';

const axios_service = new Userservice();



interface CartState {
    notes: any,
    redirect: any,
    openDropDown: boolean,
    openDetails: boolean,
    openDetailsSummary: boolean,
    FullName: string,
    Number: string,
    PinCode: any,
    Locality: string,
    Address: string,
    City: string,
    LandMark?: string,
    Email: string,
    Password: string,
    FullNameError: boolean,
    NumberError: boolean,
    PinCodeError: boolean,
    LocalityError: boolean,
    AddressError: boolean,
    CityError: boolean,
    LandMarkError: boolean,
    EmailError: boolean,
    PasswordError: boolean
    
}

export default class Cart extends Component<{}, CartState> {

    constructor(props: any) {
        super(props);
        this.state = {
            notes: [],
            redirect: null,
            openDropDown: false,
            openDetails: false,
            openDetailsSummary: false,
            FullName: '',
            Number: '',
            PinCode: '',
            Locality: '',
            Address: '',
            City: '',
            LandMark: '',
            Email: '',
            Password: '',
            FullNameError: false,
            NumberError: false,
            PinCodeError: false,
            LocalityError: false,
            AddressError: false,
            CityError: false,
            LandMarkError: false,
            EmailError: false,
            PasswordError: false
            
        }

    }

    change = (e: any) => {

        console.log(e.target.value);
        this.setState({ Email: e.target.value });
    }

    changeFullName = (e: any) => {

        console.log(e.target.value);
        this.setState({ FullName: e.target.value });
    }

    changeNumber = (e: any) => {

        console.log(e.target.value);
        this.setState({ Number: e.target.value });
    }

    changePincode = (e: any) => {

        console.log(e.target.value);
        this.setState({ PinCode: e.target.value });
    }

    changeLocality = (e: any) => {

        console.log(e.target.value);
        this.setState({ Locality: e.target.value });
    }

    changeAddress = (e: any) => {

        console.log(e.target.value);
        this.setState({ Address : e.target.value });
    }

    changeCity = (e: any) => {

        console.log(e.target.value);
        this.setState({ City : e.target.value });
    }

    changeLandmark = (e: any) => {

        console.log(e.target.value);
        this.setState({ LandMark : e.target.value });
    }


    componentDidMount() {
        this.GetCart();
    }

    GetCart = () => {
        axios_service.Getcart().then((result) => {
            console.log(result.data.book);
            this.setState({ notes: result.data.book });
            console.log(this.state.notes);
            console.log(this.state.notes.bookName[0]);
        }).catch(() => {

        })
    }

    orderItems = (id: any, quantity: any) => {
        axios_service.Order(id, quantity).then((result) => {
            console.log(result.data);
        }).catch(() => {

        })
    }
    toCart = () => {
        this.setState({ redirect: "/Cart" });
    }

    openDetailsforCustomer = () => {
        this.setState({ openDetails: true });
    }

    validation = () => {
        let isError : boolean = false;
        const errors : any = this.state;

        errors.FullNameError = this.state.FullName === '' ? true : false;
        errors.NumberError = this.state.Number === '' ? true : false;
        errors.PinCodeError = this.state.PinCode === '' ? true : false;
        errors.LocalityError = this.state.Locality === '' ? true : false;
        errors.AddressError = this.state.Address === '' ? true : false;
        errors.CityError = this.state.City === '' ? true : false;
        errors.LandMarkError = this.state.LandMark === '' ? true : false;

        this.setState({
    
          ...errors
        })
        return isError = (errors.FullName !== '' && errors.Number !== ''
        && errors.PinCode !== '' && errors.Locality !== ''
        && errors.Address !== '' && errors.City !== ''
        && errors.LandMark !== '') ? true : false
    }

    openDetailsforSummary = () => {
        var isValidated = this.validation();
        console.log(isValidated);
        if (isValidated) {
        this.setState({ openDetailsSummary: true });
        };
    }
    render() {

        if (this.state.redirect) {

            return <Redirect to={this.state.redirect} />
        }

        return (

            <div>
                <Header />
                <div className="MyCart">My Cart </div>
                <div className="ConatinerCart">

                    <div className="Cart">


                        {this.state.notes.slice(0).reverse().map((value: any) =>

                            <div key={value.id} className="cartitems">

                                <img id="image3" src={book1} alt="Book" />

                                <div className="CartPaper">

                                    <div className="BookName">Source of Dream</div>
                                    <div className="price">Rs.{value.price}</div>
                                    <label>Quantity :</label>
                                    <input type="number" id="quantity" name="quantity" min="1" max="99"></input>

                                </div>

                                {this.state.openDetails ?

                                    <div></div>

                                    :

                                    <div className="PlaceOrder">
                                        <Button className="buttonsize" onClick={this.openDetailsforCustomer} size="small" color="primary" variant="contained">
                                            Place Order
                                    </Button>
                                    </div>
                                }
                            </div>

                        )}
                    </div>
                          
                    <div className="space1"></div>
                    
                    {this.state.openDetails ?

                        <div className="openDetails">
                            <div className="left"><strong>Customer Details</strong></div>
                            <div className="takeinput">
                                <div className="giveinput">
                                    <div className="InputFields">
                                        <TextField
                                            error={this.state.FullNameError}
                                            size="small"
                                            label="FullName"
                                            type="text"
                                            name="text"
                                            variant="outlined"
                                            onChange={e => this.changeFullName(e)}
                                            helperText={this.state.FullNameError ? "Enter FullName" : ''}
                                        />
                                    </div>
                                    <div className="InputFields">
                                        <TextField
                                            error={this.state.NumberError}
                                            size="small"
                                            label="Phone Number"
                                            type="Number"
                                            name="Number"
                                            variant="outlined"
                                            onChange={e => this.changeNumber(e)}
                                            helperText={this.state.NumberError ? "Enter Phone Number" : ''}
                                        />
                                    </div>
                                </div>
                                <div className="giveinput">
                                    <div className="InputFields">
                                        <TextField
                                            error={this.state.PinCodeError}
                                            size="small"
                                            label="Pin Code"
                                            type="text"
                                            name="text"
                                            variant="outlined"
                                            onChange={e => this.changePincode(e)}
                                            helperText={this.state.PinCodeError ? "Enter Pincode " : ''}
                                        />
                                    </div>
                                    <div className=".InputFields">
                                        <TextField
                                            error={this.state.LocalityError}
                                            size="small"
                                            label="Locality"
                                            type="text"
                                            name="text"
                                            variant="outlined"
                                            onChange={e => this.changeLocality(e)}
                                            helperText={this.state.LocalityError ? "Enter Locality" : ''}
                                        />
                                    </div>
                                </div>
                                <div className="AddressBar">
                                    <TextField
                                        error={this.state.AddressError}
                                        label="Address"
                                        type="text"
                                        name="text"
                                        variant="outlined"
                                        fullWidth
                                        onChange={e => this.changeAddress(e)}
                                        helperText={this.state.AddressError ? "Enter Address" : ''}
                                    />
                                </div>
                                <div className="giveinputnew">
                                    <div className=".InputFields">
                                        <TextField
                                            error={this.state.CityError}
                                            size="small"
                                            label="City"
                                            type="text"
                                            name="text"
                                            variant="outlined"
                                            onChange={e => this.changeCity(e)}
                                            helperText={this.state.CityError ? "Enter City" : ''}
                                        />
                                    </div>
                                    <div className="InputField">
                                        <TextField
                                            error={this.state.LandMarkError}
                                            size="small"
                                            label="LandMark"
                                            type="text"
                                            name="text"
                                            variant="outlined"
                                            onChange={e => this.changeLandmark(e)}
                                            helperText={this.state.LandMarkError ? "Enter LandMark" : ''}
                                        />
                                    </div>
                                </div>

                                <div className="left">Type</div>

                                <div className="left">

                                    <FormControlLabel
                                        control={
                                            <Checkbox

                                                name="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="Home"
                                    />

                                    <FormControlLabel
                                        control={
                                            <Checkbox

                                                name="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="Work"
                                    />

                                    <FormControlLabel
                                        control={
                                            <Checkbox

                                                name="checkedB"
                                                color="primary"
                                            />
                                        }
                                        label="Other"
                                    />

                                    {this.state.openDetailsSummary ?

                                        <div></div>

                                        :

                                        <div className="PlaceOrder">
                                            <Button className="buttonsize" onClick={this.openDetailsforSummary} size="small" color="primary" variant="contained">
                                                Place Order
                                            </Button>
                                        </div>
                                    }

                                </div>

                            </div>
                        </div>

                        :
                        <div className="Details">
                            Customer Details
                        </div>
                    }

                        <div className="space1"></div>

                    {this.state.openDetailsSummary ?


                        <div className="Cart">
                            <div className="heading">My Cart</div>

                            {this.state.notes.slice(0).reverse().map((value: any) =>

                                <div key={value.id} className="cartItemsSummery">

                                    <img id="image2" src={book1} alt="Book" />

                                    <div className="Paper2">

                                        <div>Sourace of Dreams</div>
                                        <div className="price">Rs.{value.price}</div>
                                    </div>





                                    <div className="Place">
                                        <Button className="buttonsize" onClick={() => this.orderItems(value.bookId, value.quantity)} size="small" color="primary" variant="contained">
                                            Checkout
                                </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                        :

                        <div className="Details">
                            Order Summary
                        </div>

                    }
                </div>

                <div className="space1"></div>
                <Footer />

            </div>
        )
    }
}