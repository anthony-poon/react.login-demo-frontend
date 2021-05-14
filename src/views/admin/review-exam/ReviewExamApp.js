import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import QuestionView from "./components/QuestionView";
import API from "../../../share/api";
import { LOREM_IPSUM_QUESTION } from "./lorem-ipsum";
import _ from "lodash";

const USE_LIVE_API = false;

const ReviewExamApp = () => {
    const { id } = useParams();
    const [ score, setScore ] = useState(0);
    const [ questions, setQuestions ] = useState([]);
    const [ examName, setExamName ] = useState("");
    useEffect(() => {
        (async () => {
            if (USE_LIVE_API) {
                const response = await API.admin.getOneExam(id);
                const {
                    name,
                    score,
                    questions
                } = response;
                setScore(score)
                setQuestions(_.cloneDeep(questions));
                setExamName(name);
            } else {
                setScore(50);
                setQuestions( _.cloneDeep(LOREM_IPSUM_QUESTION))
                setExamName("Lorem Ipsum Exam");
            }

        })()
    }, [id])
    return (
        <div className={"container"}>
            <div className={"py-5"}>
                <div className={"row"}>
                    <div className={"col-md-9 col mx-auto exam-app__container"}>
                        <h5 className={"mb-4"}>{examName}</h5>
                        <div className={"mb-3"}>Total Score: {score}</div>
                        {
                            questions.map((question, index) => (
                                <QuestionView
                                    key={index}
                                    question={question}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewExamApp;