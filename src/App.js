import "./app.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import LoginApp from "./views/login/LoginApp";
import LogoutApp from "./views/logout/LogoutApp";


const PrivateRoutes = ({ userType }) => {
    switch (userType) {
        case "ROLE_USER":
            return (
                <Route path={"/exam"}>Exam</Route>
            );
        case "ROLE_ADMIN":
            return (
                <Route path={"/admin/exam"}>Exam</Route>
            )
        default:
            return (
                <Redirect from={"/"} to={"/login"}/>
            )
    }
}

function App(props) {
    const {
        userType
    } = props;
    return (
        <Router>
            <DefaultLayout>
                <Switch>
                    <Route path={"/login"} component={LoginApp}/>
                    <Route path={"/logout"} component={LogoutApp}/>
                    <PrivateRoutes userType={userType}/>
                </Switch>
            </DefaultLayout>
        </Router>
    );
}

export default App;
