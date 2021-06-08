import React, { Component } from 'react'
import './BookStoreDashboard.css'
import { Redirect } from "react-router-dom";
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Books from '../../components/bookComponents/bookscomponent';
import Userservice from '../../services/userservices';
import Pagination from '@material-ui/lab/Pagination';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import book1 from '../../assert/book1.png'




const axios_service = new Userservice();





interface BookState {

    notes?: any,
    redirect: any,
    openDropDown: boolean,
    currentPage: any,
    openbutton? : boolean
    cartnotes:any

}



export default class BookComponent extends Component<{}, BookState> {

    constructor(props: any) {
        super(props);
        this.state = {

            redirect: null,
            notes: [],
            openDropDown: false,
            currentPage: 0,
            cartnotes: [],
            openbutton: false,
          

        }

    }
    componentDidMount() {
        this.GetData();
        this.GetCart();
    }

    GetData = () => {
        axios_service.Getdata().then((result) => {

            this.setState({ notes: result.data.book.map((obj: object) => (obj = { ...obj, active: false })) });

        }).catch((ex) => {
            console.log(ex);
        })
    }

    page = (event: any , page: number) => {
        console.log(" Page: " + page + " nextIndex: " + (page -1) * 12);
        this.setState({currentPage: (page -1) * 12 });
    }
    CheckTF = (id: any): boolean => {
        let check: boolean = false;
        this.state.cartnotes.forEach((value: any) => {
            if (value.bookId === id) {
                check = true;
            }
        })

        return check;

    }

    GetCart = () => {
        axios_service.Getcart().then((result) => {
            this.setState({ cartnotes: result.data.book });
            console.log(this.state.cartnotes);
        }).catch(() => {

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

        if (this.state.redirect) {

            return <Redirect to={this.state.redirect} />
        }

        return (

            <div>
                <Header/>
                <div className="Container">
                    <div className="Title">Books({this.state.notes.length}) </div>
                    <Grid item xs={10}>
                <Grid container justify="flex-start">
                    {this.state.notes.slice(this.state.currentPage , this.state.currentPage+12 ).reverse().map((value: any, index: any) =>

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
                                        {/* {value.active ? */}
                                        {this.CheckTF(value.id)
                                            ?

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
                </div>
                <Pagination className = "pageination" onChange = {this.page} count={Math.ceil(this.state.notes.length / 12)} variant="outlined" shape="rounded" />


                <Footer/>
            </div>
        )
    }
}    