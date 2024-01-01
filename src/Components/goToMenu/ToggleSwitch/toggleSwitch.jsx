


// import React, { useState } from "react";
// import "./toggleSwitch.css"; // Create a CSS file for styling

// const ToggleSwitch = () => {
//   const [isRight, setIsRight] = useState(true);
//   const [isDarkTheme, setIsDarkTheme] = useState(false);

//   const handleToggle = () => {
//     setIsRight((prevIsRight) => !prevIsRight);
//   };

//   const handleThemeChange = () => {
//     setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
//     document.body.classList.toggle("dark-theme");
//   };

//   return (
//     <div
//       className={`profile-elipse ${isDarkTheme ? "dark-theme" : "light-theme"}`}
//     >
//       <button
//         onClick={handleToggle}
//         className={`toggle-button ${isRight ? "right" : "left"}`}
//       >
      
//       </button>
//       <button onClick={handleThemeChange} className="theme-button">
//         {isDarkTheme ? "Light Theme" : "Dark Theme"}
//       </button>
//     </div>
//   );
// };

// export default ToggleSwitch;


import React, { useState } from "react";
import "./toggleSwitch.css"; // Create a CSS file for styling

const ToggleSwitch = (toggleTheme) => {
  const [isRight, setIsRight] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleToggle = () => {
    setIsRight((prevIsRight) => !prevIsRight);
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
    document.body.classList.toggle("dark-theme");
  };

  const toggle = toggleTheme ? "app-container" : "app-container2";

  return (
    <div  className={`${toggle} ${isDarkTheme}`}>
      <button
        onClick={handleToggle}
        className={`toggle-button ${isRight ? "right" : "left"}`}
      ></button>
    </div>
  );
};

export default ToggleSwitch;
