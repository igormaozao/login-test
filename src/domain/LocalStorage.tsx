import Constants from 'src/constants/Constants';
import LoginData from 'src/models/LoginData';

export default class LocalStorage {

    static getItem(keyName: string): string {
        return localStorage.getItem(keyName) || '';
    }

    static setItem(keyName: string, value: string) {
        localStorage.setItem(keyName, value);
    }

    static hasActiveUser(): boolean { 
        const data = this.getItem(Constants.ACTIVE_USER_KEY);
        return data !== null && data !== '';
    }

    static logoutUser() {
        localStorage.removeItem(Constants.ACTIVE_USER_KEY);
    }

    static getUsername(): string {
        if (!this.hasActiveUser()) {
            return '';
        }

        const loginData: LoginData = JSON.parse(this.getItem(Constants.ACTIVE_USER_KEY));
        return loginData.username;
    }
}