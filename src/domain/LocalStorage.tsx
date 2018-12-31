import Constants from 'src/constants/Constants';

export default class LocalStorage {

    static getItem(keyName: string): string | null {
        return localStorage.getItem(keyName);
    }

    static setItem(keyName: string, value: string) {
        localStorage.setItem(keyName, value);
    }

    static hasActiveUser(): boolean { 
        return this.getItem(Constants.ACTIVE_USER_KEY) !== null;
    }

    static logoutUser() {
        localStorage.removeItem(Constants.ACTIVE_USER_KEY);
    }
}