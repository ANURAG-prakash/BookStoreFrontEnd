import React, { Component } from 'react'

import './BookStoreDashboard.css'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MenuBookSharpIcon from '@material-ui/icons/MenuBookSharp';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';

import { Redirect } from "react-router-dom";

import Userservice from '../../services/userservices';

import book1 from '../../assert/book1.png';
import book2 from '../../assert/book2.png';
import book3 from '../../assert/book3.png';
import book4 from '../../assert/book4.png';

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
                <header>

                    <MenuBookSharpIcon className="MenuBookSharpIcon" />
                    <div className="Name">Bookstore</div>

                    <div className="inputbase">

                        <div className="searchIcon"><SearchIcon /></div>
                        <InputBase
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                    <div className="PersonOutlineOutlinedIcon">
                        {this.state.openDropDown ?
                            <div className="dropdown">
                                <PersonOutlineOutlinedIcon onClick={this.closedropdown} />
                                <form>
                                    <select>
                                        <option>Anurag Prakash</option>
                                        <option onClick={this.toWishList}>WishList</option>
                                    </select>
                                </form>
                            </div>
                            :
                            <div>
                                <PersonOutlineOutlinedIcon onClick={this.opendropdown} />
                                <div className="Style"> Person </div>
                            </div>
                        }
                    </div>
                    <div className="ShoppingCartIcon"><ShoppingCartIcon onClick={this.toCart} /> <div className="Style">Cart</div></div>

                </header>


                <div className="Body">
                    <div className="Title">Books</div>
                    <div className="Book-body">
                        <div className="Book-dashboard-row1">
                            <div className="book">
                                <div className="Image-bg">
                                    <img id="image" src={book1} alt="BookStore" />
                                </div>
                                <div className="belowImage"><strong>ONLINE BOOK SHOPPING</strong></div>
                            </div>
                            <div className="book">
                                <div className="Image-bg">
                                    <img id="image" src={book2} alt="BookStore" />
                                </div>
                                <div className="belowImage"><strong>ONLINE BOOK SHOPPING</strong></div>
                            </div>
                            <div className="book">
                                <div className="Image-bg">
                                    <img id="image" src={book3} alt="BookStore" />
                                </div>
                                <div className="belowImage"><strong>ONLINE BOOK SHOPPING</strong></div>
                            </div>
                            <div className="book">
                                <div className="Image-bg">
                                    <img id="image" src={book4} alt="BookStore" />
                                </div>
                                <div className="belowImage"><strong>ONLINE BOOK SHOPPING</strong></div>
                            </div>
                        </div>
                        <div className="Book-dashboard-row1">
                            <div className="book">
                                <div className="Image-bg">
                                    <img id="image" src={book4} alt="BookStore" />
                                </div>
                                <div className="belowImage"><strong>ONLINE BOOK SHOPPING</strong></div>
                            </div>
                            <div className="book">
                                <div className="Image-bg">
                                    <img id="image" src={book3} alt="BookStore" />
                                </div>
                                <div className="belowImage"><strong>ONLINE BOOK SHOPPING</strong></div>
                            </div>
                            <div className="book">
                                <div className="Image-bg">
                                    <img id="image" src={book2} alt="BookStore" />
                                </div>
                                <div className="belowImage"><strong>ONLINE BOOK SHOPPING</strong></div>
                            </div>
                            <div className="book">
                                <div className="Image-bg">
                                    <img id="image" src={book1} alt="BookStore" />
                                </div>
                                <div className="belowImage"><strong>ONLINE BOOK SHOPPING</strong></div>
                            </div>
                        </div>
                        <div className="Book-dashboard-row1">
                            <div className="book">
                                <div className="Image-bg">
                                    <img id="image" src={book1} alt="BookStore" />
                                </div>
                                <div className="belowImage"><strong>ONLINE BOOK SHOPPING</strong></div>
                            </div>
                            <div className="book">
                                <div className="Image-bg">
                                    <img id="image" src={book2} alt="BookStore" />
                                </div>
                                <div className="belowImage"><strong>ONLINE BOOK SHOPPING</strong></div>
                            </div>
                            <div className="book">
                                <div className="Image-bg">
                                    <img id="image" src={book3} alt="BookStore" />
                                </div>
                                <div className="belowImage"><strong>ONLINE BOOK SHOPPING</strong></div>
                            </div>
                            <div className="book">
                                <div className="Image-bg">
                                    <img id="image" src={book4} alt="BookStore" />
                                </div>
                                <div className="belowImage"><strong>ONLINE BOOK SHOPPING</strong></div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="text">
                        Copyright 2020, BookStore Private Limited.All Rights Reserved
                    </div>
                </footer>
            </div>
        )
    }
}