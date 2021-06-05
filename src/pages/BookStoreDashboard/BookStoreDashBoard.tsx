import React, { Component } from 'react'
import './BookStoreDashboard.css'
import { Redirect } from "react-router-dom";
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Books from '../../components/bookComponents/bookscomponent';
import Userservice from '../../services/userservices';




const axios_service = new Userservice();





interface BookState {

    notes?: any,
    redirect: any,
    openDropDown: boolean

}

export default class BookComponent extends Component<{}, BookState> {

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

   

    render() {

        if (this.state.redirect) {

            return <Redirect to={this.state.redirect} />
        }

        return (

            <div>
                <Header/>
                <div className="Container">
                    <div className="Title">Books({this.state.notes.length}) </div>
                    <Books/>
                </div>

                <Footer/>
            </div>
        )
    }
}