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
import Badge from '@material-ui/core/Badge';
import Userservice from '../../services/userservices';
import '../../pages/BookStoreDashboard/BookStoreDashboard.css'
import Button from '@material-ui/core/Button';




const axios_service = new Userservice();

interface HeaderState {
    
    redirect: any,
    openDropDown: boolean,
    notes:any,
    books:any,
    openDropDown2: boolean,
    search ?: any,
    searchbook?: any
}

export default class Header extends Component<{}, HeaderState> {
    constructor(props: any) {
        super(props);
        this.state = {
            
            redirect: null,
            openDropDown: false,
            notes:[],
            books:[],
            openDropDown2: false,
            search: '',
            searchbook : ''
        }

    }

    toWishList = () => {
        console.log(window.location.href)
        if(window.location.href !== "http://localhost:3000/Wishlist"){
        this.setState({ redirect: "/Wishlist" });
    }
    }

    toCart = () => {
        console.log(window.location.href)
        if(window.location.href !== "http://localhost:3000/Cart"){
        this.setState({ redirect: "/Cart" });
        }
    }
    toDashboard = () => {
        this.setState({ redirect: "/Dashboard" });
    }

    toLogout = () => {
        this.setState({ redirect: "/LoginSignUp" });
    }

    opendropdown = () => {
        this.setState({ openDropDown: true });
    }

    closedropdown = () => {
        this.setState({ openDropDown: false });
    }

    closedropdown2 = () => {
        this.setState({ openDropDown2: false });
    }

    componentDidMount() {
        this.GetCart();
        this.GetData();
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
    GetData = () => {
        axios_service.Getdata().then((result) => {

            this.setState({ notes: result.data.book.map((obj: object) => (obj = { ...obj, active: false })) });

        }).catch((ex) => {
            console.log(ex);
        })
    }

    search =(e: any) => {
        console.log(e.target.value);
        this.setState({ search : e.target.value });
        this.state.books.forEach((element : any) => {
            if (e.target.value === element.bookName) {
                this.setState({ openDropDown2: true });
                this.setState({ searchbook : element.bookName });
                console.log(element.bookName)
            }
        });
    }

    render() {

        if (this.state.redirect) {

            return <Redirect to={this.state.redirect} />
        }

        return (
            <div>
                <header>
                 <div className="header-part1">
                    <MenuBookSharpIcon className="MenuBookSharpIcon" />
                    <div className="Name"  onClick={this.toDashboard}>Bookstore</div>

                    <div className="inputbase">

                        <div className="searchIcon"><SearchIcon /></div>
                        <InputBase
                            onChange = {e => this.search(e)}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    </div>
                    <div className="header-part2">

                    <div className="PersonOutlineOutlinedIcon">
                            <div className="dropdown">
                            <div className= "close">
                                <PersonOutlineOutlinedIcon onClick={this.opendropdown} />
                                <div className="Style"> Person </div>
                                </div>
                                <div className="Open">
                                <Menu
                                    className="menulist"
                                    keepMounted
                                    open={this.state.openDropDown}
                                    onClose={this.closedropdown}

                                    >
                                    <MenuItem onClick={this.closedropdown}>Welcome Anurag</MenuItem>
                                    <MenuItem onClick={this.toLogout} >< Button className="buttonsize"  size="small"  variant="contained">Logout</Button></MenuItem>

                                </Menu>
                                </div>
                            </div>
                    </div>
                    <div className="ShoppingCartIcon">
                    <Badge badgeContent={this.state.notes.length} >
                        <ShoppingCartIcon onClick={this.toCart} /> 
                        </Badge>
                        <div className="Style">Cart</div>
                        </div>
                    <div className="WishlistIcon"><FavoriteIcon onClick={this.toWishList} /> <div className="Style">WishList</div></div>
                    </div>
                </header>
            </div>
        )  
    }
}