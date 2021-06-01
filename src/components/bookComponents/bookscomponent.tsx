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
            console.log(result.data.books);
            this.setState({ notes: result.data.books });
            console.log(this.state.notes);
            console.log(this.state.notes.bookName[0]);
        }).catch(() => {

        })
    }



    addtoCart = (value: any) => {
        console.log();
        axios_service.AddtoCart(value).then((result) => {
            console.log(result.data);

        }).catch(() => {

        })
    }


    render() {
        return (
            <Grid item xs={8}>
                <Grid container justify="flex-start">
                    {this.state.notes.slice(0).reverse().map((value: any) =>

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
                                        <div className="bookbuttons">

                                            <div >
                                                <Button className="buttonsize" onClick={() => this.addtoCart(value.id)} size="small" variant="contained" color="secondary">
                                                    Add to Bag
                                     </Button>
                                            </div>
                                            <div >
                                                <Button className="buttonsize" size="small" variant="contained">
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

        )
    }
}

