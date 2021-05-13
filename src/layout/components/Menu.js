import React from "react";
import "./menu.scss";
import {Link, NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

const MENU_CONFIG = {
    "ROLE_ADMIN": [
        {
            "test": "View Exam",
            "url": "/admin/exam",
        }
    ],
    "ROLE_USER": [
        {
            "test": "Take Exam",
            "url": "/exam",
        }
    ]
};

const Menu = ({ userType, isActive, onClose }) => {
    const items = MENU_CONFIG[userType] ?? [];
    return (
        <div
            className={"layout-menu__container " + (isActive ? "layout-menu__container--active" : "")}
            onMouseLeave={() => onClose()}
        >
            <div className={"layout-menu__header"}>
                <div className={"text-right d-block d-md-none"}>
                    <button className={"btn btn-link mr-3 text-white"} onClick={() => onClose()}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                </div>
                <div>
                    <FontAwesomeIcon icon={faUserCircle}/> <span className={"ml-3"}> Menu </span>
                </div>
            </div>
            <div className={"layout-menu__body"}>
                {
                    items.map(({text, url}, index) => (
                        <NavLink exact to={url} className={"layout-menu__item px-4 py-2"} key={index} onClick={() => onClose(false)}>
                            { text }
                        </NavLink>
                    ))
                }
            </div>
            <div className={"layout-menu__footer pb-5"}>
                <Link to={"/logout"} className={"layout-menu__item px-4 py-2"}>
                    Sign Out
                </Link>
            </div>
        </div>
    )
}

export default Menu;