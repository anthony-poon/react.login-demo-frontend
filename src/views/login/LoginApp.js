import React, {useState} from "react";
import {connect} from 'react-redux';
import {loginAction} from "../../redux/action";
import useFormHook from "../../share/hooks/form-hook";
import "./login-app.scss";
import FormBody from "../../share/form/FormBody";
import FormTextInput from "../../share/form/FormTextInput";
import FormSection from "../../share/form/FormSection";
import API from "../../share/api";
import FormHeader from "../../share/form/FormHeader";
import { useHistory } from "react-router-dom";

const LoginApp = ({loginAction}) => {
    const [ formData, handleChange ] = useFormHook({
        "username": "",
        "password": ""
    })
    const [ error, setError ] = useState("");
    const {
        username,
        password
    } = formData;

    const history = useHistory();

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const response = await API.authentication.login({ username, password });
            const {
                accessToken
            } = response.data;
            loginAction(accessToken);
            history.push("/");
        } catch (e) {
            if (e.response) {
                switch (e.response.status) {
                    case 400:
                        setError("Wrong username or password");
                        break;
                    case 500:
                        setError("Service unavailable. Please try again later");
                        break;
                    default:
                        console.error(e);
                        setError("Unknown Error.");
                        break;
                }
            } else {
                console.error(e);
                setError("Service unavailable. Please try again later");
            }
        }
    }

    return (
        <div className={"row login__wrapper"}>
            <div className={"col-12 col-md-8 col-lg-6 m-auto py-5"}>
                <FormBody onSubmit={handleSubmit}>
                    <FormSection showBorderBottom={false}>
                        <div className={error ? "mb-4" : "mb-5"}>
                            <FormHeader header={"Login"}/>
                        </div>
                        {
                            error && (
                                <div className={"alert alert-danger mb-4"}>{error}</div>
                            )
                        }
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
                        <button type={"submit"} className={"mt-3 btn btn-block btn btn-primary"}>
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