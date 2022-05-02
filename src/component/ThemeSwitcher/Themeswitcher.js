import React, { useEffect, useState } from "react";
import "./style.scss";

 const Themeswitcher = () => {
  const [colortheme, setColortheme] = useState("theme-orange");
  useEffect(() => {
    const currentThemecolor = localStorage.getItem("theme-color");
    if (currentThemecolor) {
      setColortheme(currentThemecolor);
    }
  }, []);
  const handleClick = (theme) => {
    setColortheme(theme);
    localStorage.setItem("theme-color", theme);
  };

  return (
    <div className={`App ${colortheme}`}>
      <div className="container py-5">
        <div className="theme-options">
        <div
        id="theme-orange"
        onClick={() => handleClick("theme-orange")}
        className={`${colortheme === "theme-orange" ? "active" : ""}`}
      ></div>
      <div
        id="theme-purple"
        onClick={() => handleClick("theme-purple")}
        className={`${colortheme === "theme-purple" ? "active" : ""}`}
      ></div>
        <div
        id="theme-blue"
        onClick={() => handleClick("theme-blue")}
        className={`${colortheme === "theme-blue" ? "active" : ""}`}
      ></div>
          
        </div>
        <div className="content-box">
          <h3>Multiple Themes Swither / React</h3>
          <h5>(ReactJS, SCSS/CSS, Local Storage)</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          </p>
        </div>
      </div>
    </div>
    
  );
};
export default Themeswitcher;