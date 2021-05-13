import React from "react";
import PropTypes from "prop-types";

class FormSection extends React.Component {
    renderBorderClass() {
        const {
            showBorderTop,
            showBorderBottom
        } = this.props;
        let rtn = "";
        rtn = rtn + (showBorderTop ? "border-top" : "");
        rtn = rtn + (showBorderBottom ? " border-bottom " : "");
        return rtn;
    }

    render() {
        const {
            children
        } = this.props;
        return (
            <div className={"px-md-5 px-4"}>
                <div className={"py-md-5 py-4 " + this.renderBorderClass()}>
                    { children }
                </div>
            </div>
        );
    }
}

FormSection.propTypes = {
    showBorderTop: PropTypes.bool,
    showBorderBottom: PropTypes.bool
};

FormSection.defaultProps = {
    showBorderTop: false,
    showBorderBottom: true
}

export default FormSection