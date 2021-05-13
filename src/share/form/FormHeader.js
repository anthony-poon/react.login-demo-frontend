import React from "react";
import PropTypes from "prop-types";

class FormHeader extends React.Component {
    render() {
        const {
            header,
            subHeader,
            button
        } = this.props;
        return (
            <div className={"row"}>
                <div className={"col"}>
                    <h4 className={"text-info mb-0"}>{ header }</h4>
                    {
                        subHeader && (
                            <div className={"d-inline-block"}>
                                <small className={"text-secondary"}>{ subHeader }</small>
                            </div>
                        )
                    }
                </div>
                {
                    button && (
                        <div className={"col-auto d-flex"}>
                            <div className={"my-auto"}>
                                { button }
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

FormHeader.propTypes = {
    header: PropTypes.string,
    subHeader: PropTypes.string,
    button: PropTypes.element
};

export default FormHeader