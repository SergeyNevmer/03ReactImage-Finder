import React from "react";
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";

export default class ImageGallery extends React.Component {
  state = {
    isOpen: false,
    currentTargetUrl: "",
  };

  handleOpen = (e) => {
    if (e.target === e.currentTarget) return;

    if (e.target.hasAttribute("data-largeurl")) {
      this.setState({ isOpen: true });
      let url = e.target.dataset.largeurl;
      this.setState({ currentTargetUrl: url });
    }
  };

  handleClose = (e) => {
    if (e.target.hasAttribute("class")) {
      this.setState({ isOpen: false });
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.onKeyPressed);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyPressed);
  }

  onKeyPressed = (e) => {
    if (e.key === "Escape") {
      this.setState({ isOpen: false });
    }
  };

  render() {
    const { images } = this.props;
    const { isOpen, currentTargetUrl } = this.state;
    return (
      <ul className={styles.ImageGallery} onClick={this.handleOpen}>
        {images.map((image) => (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            bigSrc={image.largeImageURL}
          />
        ))}
        {isOpen && <Modal src={currentTargetUrl} onClick={this.handleClose} />}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
