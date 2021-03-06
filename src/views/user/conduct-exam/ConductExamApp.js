import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import InstructionView from "./components/InstructionView";
import QuestionView from "./components/QuestionView";
import EndingView from "./components/EndingView";
import _ from "lodash";
import "./conduct-exam-app.scss";
import API from "../../../share/api";

const ConductExamApp = () => {
    const [state, setState] = useState({
        examName: "",
        pageIndex: 0,
        questions: [],
    })
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const response = await API.user.getOneExam(id);
            const {
                name,
                questions
            } = response;
            setState((prevState => ({
                ...prevState,
                examName: name,
                questions: _.cloneDeep(questions)
            })))

        })()
    }, [id])

    const {
        examName,
        pageIndex,
        questions
    } = state;

    const totalPage = questions.length + 2;
    const handleNextPage = () => {
        if (pageIndex >= totalPage - 1) {
            return;
        }
        setState((prev) => ({
            ...prev,
            pageIndex: prev.pageIndex + 1
        }))
    }

    const handlePreviousPage = () => {
        if (pageIndex === 0) {
            return;
        }
        setState((prev) => ({
            ...prev,
            pageIndex: prev.pageIndex - 1
        }))
    }

    const handleSelect = async (questionIndex, answerIndex) => {
        const question = questions[questionIndex];
        const answer = question["answers"][answerIndex];
        await API.user.answerOneQuestion(question.id, answer.id)
        setState(prevState => {
            const clone = _.cloneDeep(prevState.questions);
            clone[questionIndex]["answers"] = question["answers"].map((answer, index) => {
                answer["selected"] = index === answerIndex;
                return answer;
            })
            return {
                ...prevState,
                questions: [
                    ...questions
                ]
            }
        })
    }

    let view;
    if (pageIndex === 0) {
        view = (
            <InstructionView/>
        )
    } else if (pageIndex > 0 && pageIndex < totalPage - 1) {
        const question = questions[pageIndex - 1] ?? null;
        view = (
            <QuestionView
                onSelect={handleSelect}
                pageIndex={pageIndex}
                question={question}
            />
        )
    } else {
        view = (
            <EndingView/>
        )
    }

    return (
        <div className={"container"}>
            <div className={"py-5"}>
                <div className={"row"}>
                    <div className={"col-md-9 col mx-auto exam-app__container"}>
                        <h5 className={"text-secondary"}>
                            Exam: {examName}
                        </h5>
                        <div className={"exam-app__view-container"}>
                            { view }
                        </div>
                        <div className={"row"}>
                            <div className={"col-auto"}>
                                <button className={"btn btn-link"} onClick={handlePreviousPage}>Previous</button>
                            </div>
                            <div className={"col text-center"}>
                                Page {pageIndex + 1} of {totalPage}
                            </div>
                            <div className={"col-auto"}>
                                <button className={"btn btn-link"} onClick={handleNextPage}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConductExamApp;