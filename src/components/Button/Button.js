import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ onClick }) => (
  <div className={styles.wrapper}>
    <button className={styles.Button} type="button" onClick={onClick}>
      Load More
    </button>
  </div>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
