import React from 'react';
import Loginbox from '../components/login/login';
import Signup from '../components/signup/signup';
import { Redirect } from "react-router-dom";
import logo from '../assert/cmp.png';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './loginSignup.css';

interface IProps {
}

interface RegistationPagesState {
    openbox: boolean,
}

export default class RegistationPages extends React.Component<{}, RegistationPagesState> {
    constructor(props: any) {
        super(props)
        this.state = {
            openbox: true,
        }
    }
    componentDidMount() {
        document.title = `RegistationPages`;

    }

    toSignUp = (e: any) => {
        this.setState({ openbox: false });
    }

    toSignIn = (e: any) => {
        this.setState({ openbox: true });
    }

    render() {

        return (
            <div className="Dash-Page">

                <div className="Dash-Body">
                    <div className="Dash-Image">

                        <img id="image" src={logo} alt="BookStore" />
                        <div className="belowImage"><strong>ONLINE BOOK SHOPPING</strong></div>
                    </div>

                    <div className="dash">

                        {this.state.openbox

                            ?

                            <div className="Login">
                                <div className="Change">
                                    <Button variant="contained">  Login </Button>
                                    <Button variant="contained" onClick={this.toSignUp}>  Sign Up </Button>
                                </div>
                                <div className="Login-box">

                                    <Loginbox />

                                </div>

                            </div>

                            :

                            <div className="SignUp">

                                <div className="Change">
                                    <Button variant="contained" onClick={this.toSignIn}>  Login </Button>
                                    <Button variant="contained">  Sign Up </Button>
                                </div>

                                <div className="FullName">
                                    <Signup />

                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>

        )
    }
}