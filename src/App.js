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
import AdminListExamApp from "./views/admin/AdminListExamApp";
import ConductExamApp from "./views/user/conduct-exam/ConductExamApp";
import UserListExamApp from "./views/user/UserListExamApp";
import ReviewExamApp from "./views/admin/review-exam/ReviewExamApp";


const PrivateRoutes = ({ userType }) => {
    switch (userType) {
        case "ROLE_USER":
            return (
                <Switch>
                    <Route path={"/user/exam/:id"}>
                        <ConductExamApp/>
                    </Route>
                    <Route path={"/user/exam"}>
                        <UserListExamApp/>
                    </Route>
                    <Redirect from={"*"} to={"/user/exam"}/>
                </Switch>
            );
        case "ROLE_ADMIN":
            return (
                <Switch>
                    <Route path={"/admin/exam/:id"}>
                        <ReviewExamApp/>
                    </Route>
                    <Route path={"/admin/exam"}>
                        <AdminListExamApp/>
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