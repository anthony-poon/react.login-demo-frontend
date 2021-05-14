import axios from "axios";
import URI from "urijs";
import {LOREM_ADMIN_LOGIN, LOREM_USER_LOGIN} from "../lorem-ipsum";
import ENV from "../env";

export default class Authentication {
    login({username, password}) {
        if (!ENV.USE_LIVE_API) {
            if (username === "user") {
                return LOREM_USER_LOGIN;
            } else {
                return LOREM_ADMIN_LOGIN;
            }
        }
        if (ENV.USE_LIVE_API) {
            return axios.post(URI(ENV.API_URL + "/login").normalize().toString(), {
                username, password
            }).then((response) => {
                return {
                    ...response.data
                }
            });
        }
    }
}