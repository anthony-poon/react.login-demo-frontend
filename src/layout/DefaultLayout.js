import React, {useState} from "react";
import { connect } from "react-redux";
import Menu from "./components/Menu";
import Navbar from "./components/NavBar";

const DefaultLayout = ({ children }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    return (
        <div className={"bg-light min-vh-100 container-fluid"}>
            <Menu
                isActive={isMenuVisible}
                onClose={() => setIsMenuVisible(false)}
            />
            <Navbar onMenuHover={() => setIsMenuVisible(!isMenuVisible)}/>
            { children }
        </div>
    );
}

export default DefaultLayout;