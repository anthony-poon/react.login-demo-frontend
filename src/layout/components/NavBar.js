import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./navbar.scss";
import {connect} from "react-redux";
import {logoutAction} from "../../redux/action";

const LoginLogoutButton = ({ isLoggedIn, onLogout }) => {
    const text = isLoggedIn ? "Logout" : "Login";
    const url = isLoggedIn ? "/logout" : "/login";
    return (
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                {
                    isLoggedIn ? (
                        <button className={"btn btn-link"} onClick={onLogout}> Logout </button>
                    ) : (
                        <Link className="nav-link text-primary" to={url}>{text}</Link>
                    )
                }
            </li>
        </ul>
    )
}

const Navbar = ({ isLoggedIn, username, onMenuHover, logoutAction }) => {
    return (
        <nav className={"layout__navbar navbar navbar-expand-md navbar-light bg-light border-bottom"}>
            <button className={"btn btn-link text-secondary d-block me-4"} onMouseEnter={onMenuHover}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <div className="navbar-brand ml-auto">
                <span className={"ml-3"}>ISTO</span>
            </div>
            <div className={"flex-grow-1"}>
            </div>
            <div className={"d-flex align-items-center"}>
                {
                    isLoggedIn && (
                        <div className={"text-secondary pe-4"}> Hi, {username} </div>
                    )
                }
                <LoginLogoutButton isLoggedIn={isLoggedIn} onLogout={logoutAction}/>
            </div>

        </nav>
    );
}


const mapStateToProps = state => {
    return {
        isLoggedIn: state.login.jwt !== null,
        username: state.login.username
    }
};

export default connect(
    mapStateToProps,
    { logoutAction }
)(Navbar)