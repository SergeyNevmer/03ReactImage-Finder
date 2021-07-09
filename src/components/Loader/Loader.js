import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Loader.module.css";

const Loader = () => (
  <div className={styles.wrapper}>
    <Loader
      type="TailSpin"
      color="#00BFFF"
      height={80}
      width={80}
      style={{ margin: "0 auto" }}
    />
  </div>
);

export default Loader;
