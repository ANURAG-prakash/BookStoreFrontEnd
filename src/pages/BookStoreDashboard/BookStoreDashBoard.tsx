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

const axios_service = new Userservice();



interface BookStoreState {
    notes: any,
    redirect: any,
    openDropDown : boolean
}

export default class BookStore extends Component<{},BookStoreState> {

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
        this.setState({ openDropDown : true });
    }

    closedropdown = () => {
        this.setState({ openDropDown : false });
    }

    render() {

        if (this.state.redirect) {

            return <Redirect to={this.state.redirect} />
        }

        return (

            <div>
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
                        <div className = "dropdown">
                            <PersonOutlineOutlinedIcon onClick={this.closedropdown}/>
                            <form>
                            <select>
                                <option>Anurag Prakash</option>
                                <option onClick = {this.toWishList}>WishList</option>
                            </select>
                            </form>
                        </div>
                        :
                        <div>
                        <PersonOutlineOutlinedIcon onClick={this.opendropdown}/>
                        <div className="Style"> Person </div> 
                        </div>
                        }
                    </div>
                    <div className="ShoppingCartIcon"><ShoppingCartIcon onClick={this.toCart} /> <div className="Style">Cart</div></div>

                </header>
                <div className="Body">
                    <div className="Title">Books</div>


                    <Grid item xs={12}>
                        <Grid container justify="flex-start">
                            {this.state.notes.slice(0).reverse().map((value: any) =>

                                <Grid key={value.id} item >

                                    <Paper className="paper">

                                        <div>
                                            <div className="img">
                                                <img id = "image2" src={book1} alt="Book" />
                                            </div>

                                            <div className="Intro">

                                                <div className="bookName">{value.bookName} </div>
                                                <div className="by">by {value.authors}</div>
                                                <div className="rating">4.5 <div className="number">({value.availableBooks})</div></div>
                                                <div className="price">Rs.{value.price}</div>
                                                <div className= "bookbuttons">

                                                <div >
                                                <Button className = "buttonsize"  size = "small" variant="contained" color="secondary">
                                                Add to Bag
                                                </Button>
                                                </div>
                                                <div >
                                                <Button className = "buttonsize"  size = "small" variant="contained">
                                                WishList
                                                </Button>
                                                </div>

                                                </div>
                                            </div>

                                        </div>

                                    </Paper>

                                </Grid>

                            )}
                        </Grid>
                    </Grid>


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