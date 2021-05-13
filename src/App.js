import "./app.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import LoginApp from "./views/login/LoginApp";
import {connect} from "react-redux";
import AdminExamApp from "./views/admin/AdminExamApp";
import ConductExamApp from "./views/user/conduct-exam/ConductExamApp";
import ListExamApp from "./views/user/ListExamApp";


const PrivateRoutes = ({ userType }) => {
    switch (userType) {
        case "ROLE_USER":
            return (
                <Switch>
                    <Route path={"/user/exam/:id"}>
                        <ConductExamApp/>
                    </Route>
                    <Route path={"/user/exam"}>
                        <ListExamApp/>
                    </Route>
                    <Redirect from={"*"} to={"/user/exam"}/>
                </Switch>
            );
        case "ROLE_ADMIN":
            return (
                <Switch>
                    <Route path={"/admin/exam"}>
                        <AdminExamApp/>
                    </Route>
                    <Redirect from={"*"} to={"/admin/exam"}/>
                </Switch>

            )
        default:
            return (
                <Switch>
                    <Redirect from={"*"} to={"/login"}/>
                </Switch>
            )
    }
}

function App({ userType }) {
    return (
        <Router>
            <DefaultLayout>
                <Switch>
                    <Route path={"/login"} component={LoginApp}/>
                    <PrivateRoutes userType={userType}/>
                </Switch>
            </DefaultLayout>
        </Router>
    );
}


const mapStateToProps = state => {
    return {
        isLoggedIn: state.login.jwt !== null,
        userType: state.login.userType
    }
};

export default connect(
    mapStateToProps,
    null
)(App)