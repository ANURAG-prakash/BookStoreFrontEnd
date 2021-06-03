import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../../pages/BookStoreDashboard/BookStoreDashboard.css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import book1 from '../../assert/book1.png';
import Userservice from '../../services/userservices';




const axios_service = new Userservice();

interface BookComponentState {

    notes?: any,
    redirect: any,
    openDropDown: boolean

}

export default class BookComponent extends Component<{}, BookComponentState> {

    constructor(props: any) {
        super(props);
        this.state = {

            redirect: null,
            notes: [],
            openDropDown: false

        }

    }
    componentDidMount() {
        this.GetData();
    }
    GetData = () => {
        axios_service.Getdata().then((result) => {

            this.setState({ notes: result.data.book.map((obj: object) => (obj = { ...obj, active: false })) });

        }).catch((ex) => {
            console.log(ex);
        })
    }



    addtoCart = (value: any, index: any) => {

        let findIndex = this.state.notes.findIndex((element: any) => element.id == value);

        console.log(findIndex);

        let newArray = [...this.state.notes]

        newArray[findIndex] = { ...newArray[findIndex], active: true }

        console.log(newArray[findIndex]);

        this.setState({ notes: newArray });


        console.log(value);
        axios_service.AddtoCart(value).then((result) => {
            console.log(result.data);

        }).catch(() => {

        })


    }


    addtoWishList = (value: any) => {
        axios_service.AddtoWishList(value).then((result) => {
            console.log(result.data);
        }).catch(() => {

        })
    }


    render() {
        console.log(this.state.notes)
        return (
            <Grid item xs={8}>
                <Grid container justify="flex-start">
                    {this.state.notes.slice(0).reverse().map((value: any, index: any) =>

                        <Grid key={value.id} item >

                            <Paper className="paper">

                                <div>
                                    <div className="img">
                                        <img id="image2" src={book1} alt="Book" />
                                    </div>

                                    <div className="Intro">

                                        <div className="bookName">{value.bookName} </div>
                                        <div className="by">by {value.authors}</div>
                                        <div className="rating">4.5 <div className="number">({value.availableBooks})</div></div>
                                        <div className="price">Rs.{value.price}</div>
                                        {value.active ?

                                            <div className="bookbuttons2">

                                                <Button className="buttonsize1" size="small" variant="contained" color="primary"> 
                                                    Added to Bag
                                                </Button>

                                            </div>

                                            :

                                            <div className="bookbuttons">

                                                <div >
                                                    <Button className="buttonsize" onClick={() => this.addtoCart(value.id, index)} size="small" variant="contained" color="secondary">
                                                        Add to Bag
                                                    </Button>
                                                </div>
                                                <div >
                                                    <Button className="buttonsize" onClick={() => this.addtoWishList(value.id)} size="small" variant="contained">
                                                        WishList
                                                    </Button>
                                                </div>

                                            </div>
                                        }
                                    </div>

                                </div>

                            </Paper>

                        </Grid>

                    )}
                </Grid>
            </Grid>

        )
    }
}

