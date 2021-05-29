import React from 'react';
import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './login.css';
import Userservice from '../../services/userservices';




const axios_service = new Userservice();

interface IProps {
}

interface loginboxState {
    email: string,
    password: string,
    emailerror: boolean,
    passworderror: boolean, 
    redirect: any,
    open: boolean
}


export default class loginbox extends React.Component<{}, loginboxState> {
    constructor(props: any) {
        super(props)
        this.state = {
            email: '',
            password: '',
            emailerror: false,
            passworderror: false,
            redirect: null,
            open: false
        }
    }
   

      validation = () =>{
        let isError : boolean = false;
        const errors : any = this.state;
        errors.emailerror = this.state.email === '' ? true : false;
        errors.passworderror = this.state.password === '' ? true : false;
        this.setState({
            ...errors,
            // ...this.state
        })
        return isError = (errors.email!=='' && errors.password!=='' ) ? true : false
    }
     
    Next = () => {

        var isValidated = this.validation();
        console.log(this.state.email);
        console.log(this.state.password);
    
        if (isValidated) {
          this.setState({ open: true });
          let data = {
            "email": this.state.email,
            "password": this.state.password
          };
    
          console.log("validation successful");
          axios_service.Login(data).then((result) => {
            console.log(result);
            this.setState({ open: true });
            localStorage.setItem('id',result.data.token);
            setTimeout(() => this.setState({ redirect: "/bookStore" }), 4000)
    
          }).catch(() => {
    
          })
    
        }
    }


    render() {
        return (
            <div className="inner-container">
                <div className="box">
                    <div className="Inner-content">
                        <div className="input-group">
                            <TextField

                                label="Email"
                                name="email"
                                type="Email"
                                variant="outlined"
                                size="small"
                                fullWidth
                            />
                        </div>
                        <div className="input-group">
                            <TextField

                                label="Password"
                                name="password"
                                type="password"
                                variant="outlined"
                                size="small"
                                fullWidth
                            />
                        </div>

                        <div className="Button">
                            <Button variant="contained" color="secondary" onClick={this.Next} >  Log IN </Button>
                        </div>

                        <div className="Or-Tag">

                            <strong>----------OR----------</strong>
                        </div>

                        <div className="Login-Type">

                            <div className="Facebook">
                                <Button variant="contained" size="small" color="primary">  Facebook </Button>
                            </div>
                            <div className="Google">
                                <Button variant="contained" size="small"  >  Google </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}