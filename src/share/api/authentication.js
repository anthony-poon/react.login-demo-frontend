import axios from "axios";
import URI from "urijs";
import ENV from "../env";

export default class Authentication {
    login({username, password}) {
        return axios.post(URI(ENV.API_URL + "/login").normalize().toString(), {
            username, password
        });
    }
}