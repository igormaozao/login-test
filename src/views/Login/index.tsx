import * as React from 'react';

import './index.scss';
import LoginForm from 'src/components/LoginForm';

class Login extends React.Component {

    render() {
        return(
            <div className="login-screen">
                <LoginForm />
            </div>
        );
    }
}

export default Login;