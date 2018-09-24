import React from 'react';
import { Typography } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';

class Login extends React.Component {


    responseGoogle(response) {
        console.log(response);
      }

    render() {
        return(
            <div>
                <Typography>
                    This Page is the login page.
                </Typography>
                <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />
            </div>
        );
    }
}
export default Login;