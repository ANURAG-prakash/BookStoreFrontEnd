import React, { Component } from 'react'
import '../../pages/Cart/Cart.css';


import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';


import { Redirect } from "react-router-dom";

import Userservice from '../../services/userservices';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Button from '@material-ui/core/Button';
import book1 from '../../assert/book1.png'

const axios_service = new Userservice();

interface IProps {
}

interface IState {
    notes?: any,
    redirect?: any,
    openDropDown?: boolean,
    openDetails?: boolean,
    openDetailsSummary?: boolean,
    FullName?: string,
    Email?: string,
    Password?: string,
    Number?: string,
    FullNameError?: boolean,
    EmailError?: boolean,
    PasswordError?: boolean,
    NumberError?: boolean
}

export default class WishList extends Component<IProps, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            notes: [],
            redirect: null,
            openDropDown: false,
            openDetails: false,
            openDetailsSummary: false,
            FullName: '',
            Email: '',
            Password: '',
            Number: '',
            FullNameError: false,
            EmailError: false,
            PasswordError: false,
            NumberError: false
        }

    }

    componentDidMount() {
        this.GetWishList();
    }

    GetWishList = () => {
        axios_service.Getwishlist().then((result) => {
            console.log(result.data.wishList);
            this.setState({ notes: result.data.wishList });
            console.log(this.state.notes);
            console.log(this.state.notes.bookName[0]);
        }).catch(() => {

        })
    }

    movetoCart = (value: any) => {
        console.log();
        axios_service.AddtoCart(value).then((result) => {
            console.log(result.data);

        }).catch(() => {

        })
    }


    render() {

        if (this.state.redirect) {

            return <Redirect to={this.state.redirect} />
        }

        return (
            <div>
                <Header />
                <div className="Container1">
                    <div className="Title1">WishList</div>
                   
                   <div className="GridContainer">

                    <Grid item xs={12}>
                        <Grid container justify="flex-start">

                            {this.state.notes.slice(0).reverse().map((value: any) =>
                                <div className="Cart">
                                    <div key={value.id} className="cartItemsSummery">

                                        <img id="image3" src={book1} alt="Book" />
                                        <div className="extra">
                                        <div className="Intro">
                                             <div className="NameDiscription">Source of Dream</div>
                                            <div className="price">Rs.{value.price}</div>
                                            <p></p>
                                            <div><button onClick={() => this.movetoCart(value.bookId)}>Move to Cart</button>  </div>
                                        </div>
                                        <div className="DeleteIcon"><DeleteOutlineOutlinedIcon className="DeleteIcon" /></div>

                                        </div>


                                    </div>
                                </div>



                            )}
                        </Grid>
                    </Grid>

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}