import * as React from 'react';
import { Switch, Route } from 'react-router';

const Login = React.lazy(() => import('./../../views/Login'));
const NotFound = React.lazy(() => import('./../../views/NotFound'));

class RouterSwitch extends React.Component {
    
    render() {
        return (
            <React.Suspense fallback={null}>
                <Switch>
                    <Route path={'/login'} exact={true} component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </React.Suspense>
        ); 
    }
}

export default RouterSwitch;