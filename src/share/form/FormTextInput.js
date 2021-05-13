import React from "react"
import PropTypes from "prop-types";
import FormInputGroup from "./FormInputGroup";

export default class FormTextInput extends React.Component {
    render() {
        const {
            type,
            label,
            labelPosition,
            value,
            name,
            error,
            className,
            onChange,
            hint,
        } = this.props;
        return (
            <FormInputGroup label={label} labelPosition={labelPosition}>
                <input
                    type={type}
                    value={value}
                    className={"form-control " + className}
                    name={name}
                    onChange={onChange}
                />
                {
                    hint && (
                        <div>
                            <small className={"text-secondary"}>
                                {hint}
                            </small>
                        </div>
                    )
                }
                <div>
                    <small className={"text-danger position-absolute"}>
                        {error}
                    </small>
                </div>
            </FormInputGroup>
        );
    }
}

FormTextInput.defaultProps = {
    className: "",
    labelPosition: "horizontal",
    type: "text"
};

FormTextInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf([
        "text",
        "password",
        "email"
    ]),
    value: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    className: PropTypes.string,
    hint: PropTypes.string,
    labelPosition: PropTypes.oneOf([
        "vertical",
        "horizontal"
    ])
};