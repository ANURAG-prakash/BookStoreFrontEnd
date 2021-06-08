import React, { Component } from 'react'
import './BookStoreDashboard.css'
import { Redirect } from "react-router-dom";
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Books from '../../components/bookComponents/bookscomponent';
import Userservice from '../../services/userservices';
import Pagination from '@material-ui/lab/Pagination';
import { AnyPtrRecord } from 'dns';
import { isConstructorDeclaration } from 'typescript';





const axios_service = new Userservice();





interface BookState {

    notes?: any,
    redirect: any,
    openDropDown: boolean,
    currentPage: any

}



export default class BookComponent extends Component<{}, BookState> {

    constructor(props: any) {
        super(props);
        this.state = {

            redirect: null,
            notes: [],
            openDropDown: false,
            currentPage: 0

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

    pageFunction = (event: object, page: number) => {
        console.log(" Page: " + page + " nextIndex: " + (page -1) * 12);
        this.setState({currentPage: (page -1) * 12 });
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
                <Pagination className = "pageination" onChange = {this.pageFunction} count={Math.ceil(this.state.notes.length / 12  )} variant="outlined" shape="rounded" />


                <Footer/>
            </div>
        )
    }
}    