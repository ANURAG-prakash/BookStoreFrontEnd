import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './bookscomponent';

import Userservice from '../../services/userservices';




const axios_service = new Userservice();

interface BookComponentState {
   
    redirect?: any,
   
}

export default class BookComponent extends Component<{}, BookComponentState> {

    constructor(props: any) {
        super(props);
        this.state = {
            
            redirect: null,
           
        }

    }
   

    addtoCart = (value : any) => {
        console.log();
        axios_service.AddtoCart(value).then((result) => {
            console.log(result.data);
            
        }).catch(() => {

        })
    }
    
    addtoWishList = (value : any) => {
        axios_service.AddtoWishList(value).then((result) => {
            console.log(result.data);
        }).catch(() => {

        })
    }


    render() {
        return (
            <div className="Book-details">

            <div className="bookName">bookName </div>
            <div className="by">by Anurag</div>
            <div className="ratingnumber">
            <div className="rating">4.5 </div>
            <div className="number">5</div></div>
            <div className="price">Rs.500</div>
            <div className= "bookbuttons">

            <div  className="book-buttons">
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
        )
    }
}