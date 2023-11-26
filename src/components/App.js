import React, { useState } from "react";
import "../styles/App.css";

export default function App() {
    const [isLightTheme,setIsLightTheme]=useState(true);

    const toggleTheme=()=>{
        setIsLightTheme(prevTheme=> !prevTheme);
    };
    return (
        <div className={`App ${isLightTheme ? 'light' : 'dark' }`}>
            <h1>Newton School</h1>
            <div>
                <form>
                    <label>UserName</label>
                    <input></input>
                    <label>Password</label>
                    <input></input>
                    <button onClick={toggleTheme}>Login</button>
                </form>
            </div>
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <input type="checkbox" id="switch" />
            <label for="switch" className="label">
                Toggle
            </label>
        </div>
    );
}
