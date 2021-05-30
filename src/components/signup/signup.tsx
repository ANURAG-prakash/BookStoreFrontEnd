import React from 'react';
import TextField from '@material-ui/core/TextField';
import './signup.css';
import Button from '@material-ui/core/Button';

export  default class signupbox extends React.Component{
    constructor(props : any){
        super(props)
        this.state = {}
    }
    render(){
        return(
             <div className="inner-container">
                 <div className="box">
                     <div className ="Inner-content">
                 <div className ="input-group">
                        <TextField
                  
                         label="Full Name" 
                         name="full name"
                         type="Full Name"
                         variant="outlined" 
                         size = "small"
                         fullWidth
                         />
                     </div>
                     <div className ="input-group">
                        <TextField
                  
                         label="Email" 
                         name="email"
                         type="Email"
                         variant="outlined" 
                         size = "small"
                         fullWidth
                         />
                     </div>
                     <div className ="input-group">
                        <TextField
                  
                         label="Password" 
                         name="password"
                         type="password"
                         variant="outlined" 
                         size = "small"
                         fullWidth
                         />
                     </div>
                     <div className ="input-group">
                        <TextField
                  
                         label="Mobile Number" 
                         name="mobile number"
                         type="Mobile Number"
                         variant="outlined" 
                         size = "small"
                         fullWidth
                         />
                     </div>

                     <div className= "ButtonSignup">
                            <Button variant="contained" color="secondary" fullWidth>  SignUp </Button>
                        </div>
                     </div>
                 </div>
              </div>
        )
    }
}