import React, { useContext } from "react";
import { ThemeContext } from "../../context";

import "./MobileContact.css";

const MobileContact = () => {
  const theme = useContext(ThemeContext);

  return (
    <div id="mobile-contact" className={theme.isNight ? "night-mobile-about" : "day-mobile-about"}>
      <p>Contact</p>
    </div>
  );
};

export default MobileContact;
