import JWTConsumer from "./jwt-consumer";
import axios from "axios";
import URI from "urijs";
import ENV from "../env";

export default class User extends JWTConsumer {
    getAllExam() {
        return axios.get(URI(ENV.API_URL + "/user/exams").normalize().toString(), {
            ...this.ajaxOption()
        }).then((response) => {
            return {
                ...response.data
            }
        });
    }

    getOneExam(id) {
        return axios.get(URI(ENV.API_URL + `/user/exams/${id}`).normalize().toString(), {
            ...this.ajaxOption()
        }).then((response) => {
            return {
                ...response.data
            }
        });
    }

    answerOneQuestion( questionId, answerId ) {
        return axios.put(URI(ENV.API_URL + `/user/questions/${questionId}/answers/${answerId}`).normalize().toString(), {
            ...this.ajaxOption()
        });
    }
}