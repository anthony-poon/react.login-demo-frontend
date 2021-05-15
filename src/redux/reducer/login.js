import { APP_LOGIN, APP_LOGOUT } from "../action-type";
import { REHYDRATE } from "redux-persist";
import moment from "moment";

const initState = {
    username: null,
    userType: null,
    jwt: null,
    roles: []
};

export default function(state = initState, action) {
    switch (action.type) {
        case REHYDRATE:
            const s = action.payload ? {...action.payload.login} : { ...initState}
            return s
        case APP_LOGIN:
            const jwt = action.payload;
            const claims = JSON.parse(atob(jwt.split(".")[1]));
            const authorities = [...(claims["authorities"] ?? [])];
            const newState = {
                username: claims["username"],
                jwt: jwt,
                roles: authorities
            };
            if (authorities.includes("ROLE_ADMIN")) {
                newState.userType = "ROLE_ADMIN";
            } else if (authorities.includes("ROLE_USER")) {
                newState.userType = "ROLE_USER";
            } else{
                newState.userType = null;
            }
            return {
                ...initState,
                ...newState
            };
        case APP_LOGOUT:
            return {...initState};
        default:
            return state;
    }
}