import React from "react";
import {connect} from 'react-redux';
import {loginAction} from "../../redux/action";
import useFormHook from "../../share/hooks/form-hook";
import "./login-app.scss";
import FormBody from "../../share/form/FormBody";
import FormTextInput from "../../share/form/FormTextInput";
import FormSection from "../../share/form/FormSection";
import API from "../../share/api";
const LoginApp = ({loginAction}) => {
    const [ formData, handleChange ] = useFormHook({
        "username": "",
        "password": ""
    })
    const {
        username,
        password
    } = formData;

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const response = await API.authentication.login({ username, password });
        const {
            accessToken
        } = response.data;
        loginAction(accessToken);
    }

    return (
        <div className={"row login__wrapper"}>
            <div className={"col-12 col-md-8 col-lg-6 m-auto py-5"}>
                <FormBody header={"Login"} onSubmit={handleSubmit}>
                    <FormSection showBorderBottom={false}>
                        <FormTextInput
                            label={"Username"}
                            onChange={handleChange}
                            value={username}
                            name={"username"}
                        />
                        <FormTextInput
                            label={"Password"}
                            onChange={handleChange}
                            value={password}
                            name={"password"}
                        />
                        <button type={"submit"} className={"mt-4 btn btn-block btn btn-primary"}>
                            Submit
                        </button>
                    </FormSection>

                </FormBody>
            </div>
        </div>
    )
}

export default connect(
    null,
    { loginAction }
)(LoginApp)