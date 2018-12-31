import LoginData from './../models/LoginData';

export default class Auth {
    static IsValid(data: LoginData): boolean {
        if (data.username === 'admin' && data.password === 'admin') {
            return true;
        }

        return false;
    }
}