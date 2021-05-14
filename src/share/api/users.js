import JWTConsumer from "./jwt-consumer";
import axios from "axios";
import URI from "urijs";
import ENV from "../env";
import {LOREM_USER_GET_ALL_EXAMS, LOREM_USER_GET_ONE_EXAM} from "../lorem-ipsum";

export default class User extends JWTConsumer {
    getAllExam() {
        if (!ENV.USE_LIVE_API) {
            return LOREM_USER_GET_ALL_EXAMS;
        }
        return axios.get(URI(ENV.API_URL + "/user/exams").normalize().toString(), {
            ...this.ajaxOption()
        }).then((response) => {
            return {
                ...response.data
            }
        });
    }

    getOneExam(id) {
        if (!ENV.USE_LIVE_API) {
            return LOREM_USER_GET_ONE_EXAM;
        }
        return axios.get(URI(ENV.API_URL + `/user/exams/${id}`).normalize().toString(), {
            ...this.ajaxOption()
        }).then((response) => {
            return {
                ...response.data
            }
        });
    }

    answerOneQuestion( questionId, answerId ) {
        if (!ENV.USE_LIVE_API) {
            return;
        }
        return axios.put(URI(ENV.API_URL + `/user/questions/${questionId}/answers/${answerId}`).normalize().toString(), {
            ...this.ajaxOption()
        });
    }
}