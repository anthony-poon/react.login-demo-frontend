import React from "react";
import FormHeader from "./FormHeader";
import FormSection from "./FormSection";

class FormBody extends React.Component {
    render() {
        const {
            header,
            subHeader,
            children,
            onSubmit
        } = this.props;
        return (
            <form className={"card px-0"} onSubmit={(evt) => onSubmit(evt)}>
                {
                    header && (
                        <div className={"px-md-5 px-4 pt-md-5 pt-4 pb-4"}>
                            <FormHeader header={header} subHeader={subHeader}/>
                        </div>
                    )
                }
                <div>
                    { children }
                </div>
            </form>
        );
    }
}

export default FormBody