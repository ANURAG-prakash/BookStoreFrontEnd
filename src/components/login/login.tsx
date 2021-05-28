import React from 'react';
import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './login.css';

export default class loginbox extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {}
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
                            <Button variant="contained" color="secondary" fullWidth >  Log IN </Button>
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