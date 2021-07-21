import React, { useContext } from "react";
import { ThemeContext } from "../../context";

import styles from "./MobileContact.module.css";

const MobileContact = () => {
  const theme = useContext(ThemeContext);

  return (
    <div id="mobile-contact" className={theme.isNight ? styles["night-mobile-about"] : styles["day-mobile-about"]}>
      <p>Contact</p>
    </div>
  );
};

export default MobileContact;
