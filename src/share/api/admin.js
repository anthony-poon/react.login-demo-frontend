import JWTConsumer from "./jwt-consumer";
import axios from "axios";
import URI from "urijs";
import ENV from "../env";

export default class Admin extends JWTConsumer {
    getAllExam() {
        return axios.get(URI(ENV.API_URL + "/admin/exams").normalize().toString(), {
            ...this.ajaxOption()
        }).then((response) => {
            return {
                ...response.data
            }
        });
    }

    getOneExam(id) {
        return axios.get(URI(ENV.API_URL + `/admin/exams/${id}`).normalize().toString(), {
            ...this.ajaxOption()
        }).then((response) => {
            return {
                ...response.data
            }
        });
    }
}