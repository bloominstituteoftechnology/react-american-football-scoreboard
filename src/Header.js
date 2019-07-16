import React from "react";
import "./App.css";




function Header () {

    const headerStyles = {
        backgroundColor: "#0b5402",
        color: "white",
        textAlign: "center",

    }

    return (
        <div>
            <header>
                <h1 style = {headerStyles}>Super Bowl Lambda</h1>
            </header>
        </div>

    )
    

}

export default Header;



