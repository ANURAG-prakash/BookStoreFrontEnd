import React, { Component } from 'react'

import './BookStoreDashboard.css'

import { Redirect } from "react-router-dom";

import Userservice from '../../services/userservices';

import book1 from '../../assert/book1.png';
import book2 from '../../assert/book2.png';
import book3 from '../../assert/book3.png';
import book4 from '../../assert/book4.png';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Books from '../../components/bookComponents/bookscomponent';

const axios_service = new Userservice();



interface BookStoreState {
    notes: any,
    redirect: any,
    openDropDown: boolean
}

export default class BookStore extends Component<{}, BookStoreState> {

    constructor(props: any) {
        super(props);
        this.state = {
            notes: [],
            redirect: null,
            openDropDown: false
        }

    }





    toWishList = () => {
        this.setState({ redirect: "/Wishlist" });
    }

    toCart = () => {
        this.setState({ redirect: "/Cart" });
    }

    opendropdown = () => {
        this.setState({ openDropDown: true });
    }

    closedropdown = () => {
        this.setState({ openDropDown: false });
    }

    render() {

        if (this.state.redirect) {

            return <Redirect to={this.state.redirect} />
        }

        return (

            <div className="Full-Body">

                <Header />



                <div className="Body">
                    <div className="Title">Books</div>
                       <Books/>
                </div>

                <Footer />
            </div>
        )
    }
}