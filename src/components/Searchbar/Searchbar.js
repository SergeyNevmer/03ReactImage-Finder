import React from "react";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";

const Searcbar = ({ value, onChange, onSubmit }) => (
  <header className={styles.Searchbar}>
    <form className={styles.SearchForm} onSubmit={onSubmit}>
      <button type="submit" className={styles.SearchFormBtn}>
        <span className={styles.SearchFormBtnLabel}>Search</span>
      </button>

      <input
        className={styles.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={value}
        onChange={onChange}
      />
    </form>
  </header>
);

Searcbar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Searcbar;
