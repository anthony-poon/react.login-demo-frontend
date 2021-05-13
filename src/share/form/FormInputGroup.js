import React from "react"
import PropTypes from "prop-types";

export default class FormInputGroup extends React.Component {
    render() {
        const {
            label,
            children,
            labelPosition
        } = this.props;
        return (
            <div className={"mb-4"}>
                <div className={"row"}>
                    <div className={"text-secondary" + (labelPosition === "horizontal" ? " col-12 col-md-3" : " col-12 mb-2")}>
                        {label}
                    </div>
                    <div className={"col"}>
                        { children }
                    </div>
                </div>
            </div>
        );
    }
}

FormInputGroup.defaultProps = {
    className: "",
    labelPosition: "horizontal"
};

FormInputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    labelPosition: PropTypes.oneOf([
        "vertical",
        "horizontal"
    ])
};