import React from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

const Modal = ({ src, onClick }) => (
  <div className={styles.Overlay} onClick={onClick}>
    <div className={styles.Modal}>
      <img src={src} alt="" />
    </div>
  </div>
);

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Modal;
