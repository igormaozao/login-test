import * as React from 'react';
import Lock from '@material-ui/icons/Lock';
import Person from '@material-ui/icons/Person';

import './index.scss';

class Login extends React.Component {

    render() {
        return(
            <div className="login-screen">
                <div className="login-form">
                    <div className="title">
                        <span>Login Form</span>
                    </div>
                    <div className="form-body">
                        <div className="username">
                            <input type="text" placeholder="Username" />
                            <Person className="icon" />
                        </div>
                        <div className="password">
                            <input type="password" placeholder="Password" />
                            <Lock className="icon" />
                        </div>
                        <div className="footer">
                            <div className="login-btn">
                                <button>Sign In</button>
                            </div>
                            <div className="forgot-password">
                            Lost Your Password?
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;