import JWTConsumer from "./jwt-consumer";
import axios from "axios";
import URI from "urijs";
import ENV from "../env";
import {LOREM_ADMIN_GET_ALL_EXAMS, LOREM_ADMIN_GET_ONE_EXAM} from "../lorem-ipsum";

export default class Admin extends JWTConsumer {
    getAllExam() {
        if (!ENV.USE_LIVE_API) {
            return LOREM_ADMIN_GET_ALL_EXAMS;
        }
        return axios.get(URI(ENV.API_URL + "/admin/exams").normalize().toString(), {
            ...this.ajaxOption()
        }).then((response) => {
            return {
                ...response.data
            }
        });
    }

    getOneExam(id) {
        if (!ENV.USE_LIVE_API) {
            return LOREM_ADMIN_GET_ONE_EXAM;
        }
        return axios.get(URI(ENV.API_URL + `/admin/exams/${id}`).normalize().toString(), {
            ...this.ajaxOption()
        }).then((response) => {
            return {
                ...response.data
            }
        });
    }
}