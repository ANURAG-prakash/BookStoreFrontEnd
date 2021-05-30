import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './login.css';
import Userservice from '../../services/userservices';
import { Redirect } from "react-router-dom";




const axios_service = new Userservice();



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
   
    
    handleClose = () => {
        this.setState({ open: false });
      };

      validation = () =>{
        let isError : boolean = false;
        const errors :any = this.state;
        errors.emailerror= this.state.email === '' ? true : false;
        errors.passworderror= this.state.password === '' ? true : false;
        this.setState({
            ...errors,
            // ...this.state
        })
        return isError = (errors.email!=='' && errors.password!=='' ) ? true : false
    }
     
    Next = () => {

        var isValidated = this.validation();
    
        if (isValidated) {
          
          let data = {
            "email": this.state.email,
            "password": this.state.password
          };
    
          console.log("Login Is done");
          axios_service.Login(data).then((result) => {
            console.log(result);
            this.setState({ open: true });
            localStorage.setItem('id',result.data.token);
            this.setState({ redirect: "/Dashboard" })
    
          })
    
        }
        if(!isValidated)
          {
            alert("validation unsuccessful");
        }
    }


    change = (e : any) => {

        console.log(e.target.value);
        this.setState({ email: e.target.value });
    }
    
    handleChange = (e : any) => {
    
        console.log(e.target.value);
        this.setState({ password: e.target.value });
    }

    render() {
        if (this.state.redirect) {

            return <Redirect to={this.state.redirect} />
        }
      
        return (
            <div className="inner-container">
                <div className="box">
                    <div className="Inner-content">
                        <div className="input-group">
                            <TextField
                                 error = {this.state.emailerror}
                                label="Email"
                                name="email"
                                type="email"
                                variant="outlined"
                                size="small"
                                fullWidth
                                onChange={e => this.change(e)}
                                helperText={this.state.emailerror ? "Enter Email" : ''}
                            />
                        </div>
                        <div className="input-group">
                            <TextField
                                error = {this.state.passworderror}
                                label="Password"
                                name="password"
                                type="password"
                                variant="outlined"
                                size="small"
                                fullWidth
                                onChange={e => this.handleChange(e)}
                                helperText={this.state.passworderror ? "Enter password" : ''} 
                            />
                        </div>

                        <div className="Button">
                            <Button variant="contained" color="secondary" onClick={this.Next} >  Log IN </Button>
                        </div>

                        {/* <div className="Or-Tag"> */}

                            <strong>----------OR----------</strong>
                        {/* </div> */}

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