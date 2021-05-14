import React from "react";
import "./question-view.scss";

const AnswerNode = ({ label, children, selected, isCorrect }) => {
    return (
        <div className={"py-2 review-question__answer " + ( selected ? "review-question__answer--selected" : "")}>
            <div className="review-question__answer-label" >
                {label}
            </div>
            <div className={"review-question__answer-statement"}>
                {children} { isCorrect && (
                        <span className={"text-danger ms-4"}> ** Correct Answer ** </span>
                    )
                }
            </div>
        </div>
    )
}

const QuestionView = ({ question }) => {
    const {
        statement,
        answers,
    } = question;
    return (
        <div className={"py-4 review-question__wrapper"}>
            <h3 className={"text-secondary"}>Question:</h3>
            <p className={"mb-4 mt-3"}>
                {statement}
            </p>
            {
                answers.map(({ statement, selected, correctAnswer }, index) => (
                    <AnswerNode
                        key={index}
                        label={String.fromCharCode(index + 65)}
                        selected={selected}
                        isCorrect={correctAnswer}
                    >
                        {statement}
                    </AnswerNode>
                ))
            }
        </div>
    )
}

export default QuestionView;