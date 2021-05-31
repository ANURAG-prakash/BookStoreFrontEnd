import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MenuBookSharpIcon from '@material-ui/icons/MenuBookSharp';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import  Wishlistcart from'../../components/bookComponents/bookscomponent';
import '../../pages/BookStoreDashboard/BookStoreDashboard.css'

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
            </div>
        )
    }
}