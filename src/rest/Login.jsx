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
                <GoogleLogin
                    clientId="720480809303-063b44q42hupv3krkn4l0retj9stopg6.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />
            </div>
        );
    }
}
export default Login;