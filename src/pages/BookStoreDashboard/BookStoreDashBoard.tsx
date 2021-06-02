import React, { Component } from 'react'
import './BookStoreDashboard.css'
import { Redirect } from "react-router-dom";
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Books from '../../components/bookComponents/bookscomponent';





interface BookStoreState {
    
    redirect: any
    
}

export default class BookStore extends Component<{}, BookStoreState> {

    constructor(props: any) {
        super(props);
        this.state = {
            redirect: null
        }

    }

   

    render() {

        if (this.state.redirect) {

            return <Redirect to={this.state.redirect} />
        }

        return (

            <div>
                <Header/>
                <div className="Body">
                    <div className="Title">Books</div>
                    <Books/>
                </div>

                <Footer/>
            </div>
        )
    }
}