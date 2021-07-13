import React from "react";
import FetchImages from "../../services/imagesApi";
import PropTypes from "prop-types";
import styles from "./LoadMore.module.css";

export default class LoadMore extends React.Component {
  state = {
    page: 2,
  };

  handleClickLoadMore = async () => {
    const { page } = this.state;
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));

    await FetchImages(this.props.value, page).then((images) => {
      this.props.onClick(images);
    });

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <button
          className={styles.Button}
          type="button"
          onClick={this.handleClickLoadMore}
        >
          Load More
        </button>
      </div>
    );
  }
}

LoadMore.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
