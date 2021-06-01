import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MenuBookSharpIcon from '@material-ui/icons/MenuBookSharp';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import Wishlistcart from '../../components/bookComponents/bookscomponent';
import '../../pages/BookStoreDashboard/BookStoreDashboard.css'
import { Redirect } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
                            <div className="dropdown">
                                <div className="x"><PersonOutlineOutlinedIcon onClick={this.closedropdown} /></div>
                                <div className="y">
                                    <Menu
                                        id="simple-menu"
                                        keepMounted
                                        open={this.state.openDropDown}
                                        onClose={this.closedropdown}
                                    >
                                        <MenuItem onClick={this.closedropdown}>Hello User!!</MenuItem>
                                        <MenuItem onClick={this.toWishList}>My WishList</MenuItem>
                                        <MenuItem onClick={this.closedropdown}>Logout</MenuItem>

                                    </Menu>
                                </div>
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
            </div>
        )
    }
}