import React from "react";
import "./question-view.scss";

const AnswerNode = ({ label, children, selected, onSelect }) => {
    return (
        <div className={"py-2 test-question__answer " + ( selected ? "test-question__answer--selected" : "")} onClick={onSelect}>
            <div className="test-question__answer-label" >
                {label}
            </div>
            <div className={"test-question__answer-statement"}>
                {children}
            </div>
        </div>
    )
}

const QuestionView = ({ pageIndex, question, onSelect }) => {
    const {
        statement,
        answers,
    } = question;
    const questionIndex = pageIndex - 1;
    return (
        <div className={"h-100 pt-5 test-question__wrapper"}>
            <h3 className={"text-secondary"}>Question:</h3>
            <p className={"mb-4 mt-3"}>
                {statement}
            </p>
            {
                answers.map(({ statement, selected }, index) => (
                    <AnswerNode
                        key={index}
                        label={String.fromCharCode(index + 65)}
                        onSelect={() => {
                            onSelect(questionIndex, index);
                        }}
                        selected={selected}
                    >
                        {statement}
                    </AnswerNode>
                ))
            }
        </div>
    )
}

export default QuestionView;