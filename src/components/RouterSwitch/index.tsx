import * as React from 'react';
import { Switch, Route } from 'react-router';

const Login = React.lazy(() => import('./../../views/Login'));
const NotFound = React.lazy(() => import('./../../views/NotFound'));
import Home from './../../views/Home/index';
import ForgotPassword from './../../views/ForgotPassword/ForgotPassword';
import Constants from 'src/constants/Constants';

class RouterSwitch extends React.Component {
    
    render() {
        return (
            <React.Suspense fallback={null}>
                <Switch>
                    <Route path={Constants.ROUTES.LOGIN} exact={true} component={Login} />
                    <Route path={Constants.ROUTES.HOME} exact={true} component={Home} />
                    <Route path={Constants.ROUTES.FORGOT_PASSWORD} exact={true} component={ForgotPassword} />
                    <Route component={NotFound} />
                </Switch>
            </React.Suspense>
        ); 
    }
}

export default RouterSwitch;