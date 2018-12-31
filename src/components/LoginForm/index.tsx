import * as React from 'react';
import { Redirect } from 'react-router';
import Person from '@material-ui/icons/Person';
import Lock from '@material-ui/icons/Lock';

import TextInput from '../HTMLComponents/TextInput';
import Button from '../HTMLComponents/Buttons/Button';
import Auth from './../../domain/Auth';
import LocalStorage from 'src/domain/LocalStorage';
import LoginData from 'src/models/LoginData';
import ALink from '../HTMLComponents/ALink';
import Constants from 'src/constants/Constants';

type State = {
    username: string,
    password: string,
    isAuthenticated: boolean
};

class LoginForm extends React.Component<{}, State> {

    constructor({}) {
        super({});

        this.state = {
            username: '',
            password: '',
            isAuthenticated: LocalStorage.hasActiveUser()
        }
    }

    usernameChange = (event: HTMLInputElement) => {
        this.setState({ username: event.value });
    }

    passwordChange = (event: HTMLInputElement) => {
        this.setState({ password: event.value });
    }

    _onLoginClick = () => {
        this.doLogin();
    }

    doLogin = () => {
        const { username, password } = this.state;
        const loginData: LoginData = new LoginData(username, password);
        if (Auth.IsValid(loginData)) {
            this.setState({ isAuthenticated: true });
            LocalStorage.setItem(Constants.ACTIVE_USER_KEY, JSON.stringify(loginData));
        }
    }

    _onForgotPasswordClick = () => {
        window.location.pathname = Constants.ROUTES.FORGOT_PASSWORD;
    }

    render() {
        const { isAuthenticated } = this.state;
        if (isAuthenticated) {
            return <Redirect to={'/home'} />
        }

        return (
            <div className="login-form">
                <div className="title">
                    <span>Login Form</span>
                </div>
                <div className="form-body">
                    <TextInput
                        className="username"
                        placeholder="Username"
                        icon={<Person className="icon" />}
                        onChangeCallback={this.usernameChange}
                    />
                    <TextInput
                        className="password"
                        placeholder="Password"
                        inputType="password"
                        icon={<Lock className="icon" />}
                        onChangeCallback={this.passwordChange}
                    />
                    <div className="footer">
                        <Button
                            className="login-btn"
                            btnText="Sign In"
                            onClickCallback={this._onLoginClick}
                        />
                        <ALink
                            className="forgot-password"
                            linkText="Lost Your Password?"
                            onClickCallback={this._onForgotPasswordClick}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginForm;