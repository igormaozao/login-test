import * as React from 'react';
import Button from 'src/components/HTMLComponents/Buttons/Button';
import LocalStorage from 'src/domain/LocalStorage';
import Constants from './../../constants/Constants';

class NavBar extends React.Component {

    _logoutUser = () => {
        LocalStorage.logoutUser();
        window.location.pathname = Constants.ROUTES.LOGIN;
    }

    render() {
        return (
            <div className="top-bar">
                <span>Logged in as Admin</span>
                <Button
                    className="logout-btn"
                    btnText="Logout"
                    onClickCallback={this._logoutUser}
                />
            </div>
        );
    }
}

export default NavBar;