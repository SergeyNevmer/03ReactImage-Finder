import React from "react";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";
import FetchImages from "../../services/imagesApi";

export default class Searcbar extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();

    await FetchImages(this.props.value).then((images) =>
      this.props.onSubmit(images)
    );
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormBtn}>
            <span className={styles.SearchFormBtnLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </form>
      </header>
    );
  }
}

Searcbar.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
