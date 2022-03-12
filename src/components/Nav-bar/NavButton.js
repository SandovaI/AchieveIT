import React from "react";
import styles from "./button.module.scss";

const NavButton = (props) => {
  const scroll = () => {
    var my_element = document.getElementById(props.name);
    my_element.scrollIntoView({
      behavior: "smooth",
      // block: "start",
      // inline: "nearest",
    });
  };
  return (
    <button className={styles.button} onClick={scroll}>
      {props.name}
    </button>
  );
};
export default NavButton;
