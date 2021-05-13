import React, {useState} from "react";
import "./conduct-exam-app.scss";
import InstructionView from "./components/InstructionView";
import QuestionView from "./components/QuestionView";
import EndingView from "./components/EndingView";
import _ from "lodash";

const LOREM_IPSUM_QUESTION = [
    {
        "statement": "Lorem Ipsum 1",
        "options": [
            {
                "statement": "Answer 1",
                "isSelected": false,
            },{
                "statement": "Answer 2",
                "isSelected": false,
            },{
                "statement": "Answer 3",
                "isSelected": false,
            },{
                "statement": "Answer 4",
                "isSelected": false,
            },
        ]
    },{
        "statement": "Lorem Ipsum 2",
        "options": [
            {
                "statement": "Answer 1",
                "isSelected": false,
            },{
                "statement": "Answer 2",
                "isSelected": false,
            },{
                "statement": "Answer 3",
                "isSelected": false,
            },{
                "statement": "Answer 4",
                "isSelected": false,
            },
        ]
    },{
        "statement": "Lorem Ipsum 3",
        "options": [
            {
                "statement": "Answer 1",
                "isSelected": false,
            },{
                "statement": "Answer 2",
                "isSelected": false,
            },{
                "statement": "Answer 3",
                "isSelected": false,
            },{
                "statement": "Answer 4",
                "isSelected": false,
            },
        ]
    }
];

const ConductExamApp = () => {
    const [state, setState] = useState({
        examName: "",
        pageIndex: 0,
        questions: LOREM_IPSUM_QUESTION,
    })

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

    const handleSelect = (questionIndex, answerIndex) => {
        const clone = _.cloneDeep(questions);
        clone[questionIndex]["options"] = clone[questionIndex]["options"].map((option, index) => {
            if (index === answerIndex) {
                option["isSelected"] = true;
            } else {
                option["isSelected"] = false;
            }
            return option;
        })
        setState((prevState => ({
            ...prevState,
            questions: clone
        })))
    }

    let view;
    if (pageIndex === 0) {
        view = (
            <InstructionView/>
        )
    } else if (pageIndex > 0 && pageIndex < totalPage - 1) {
        const currQuestion = questions[pageIndex - 1] ?? null;
        view = (
            <QuestionView
                onSelect={handleSelect}
                pageIndex={pageIndex}
                question={currQuestion}
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