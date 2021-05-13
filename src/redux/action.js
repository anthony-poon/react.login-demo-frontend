import {APP_LOGIN, APP_LOGOUT} from "./action-type";

export const loginAction = payload => {
    return {
        type: APP_LOGIN,
        payload: payload
    }
};

export const logoutAction = () => {
    return {
        type: APP_LOGOUT
    }
};