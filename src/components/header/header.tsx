import React, { Component } from 'react'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MenuBookSharpIcon from '@material-ui/icons/MenuBookSharp';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Redirect } from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';

interface HeaderState {
    
    redirect?: any,
    openDropDown?: boolean
}

export default class Header extends Component<{}, HeaderState> {
    constructor(props: any) {
        super(props);
        this.state = {
            
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
    toDashboard = () => {
        this.setState({ redirect: "/Dashboard" });
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
                    <div className="Name"  onClick={this.toDashboard}>Bookstore</div>

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
                                <div className= "Close"><PersonOutlineOutlinedIcon onClick={this.closedropdown} /></div>
                                <div className="Open">
                                <Menu
                                    id="simple-menu"
                                    keepMounted
                                    open={this.state.openDropDown}
                                    onClose={this.closedropdown}
                                    >
                                    <MenuItem onClick={this.closedropdown}>Welcome Anurag</MenuItem>

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
                    <div className="WishlistIcon"><FavoriteIcon onClick={this.toWishList} /> <div className="Style">WishList</div></div>

                </header>
            </div>
        )
    }
}