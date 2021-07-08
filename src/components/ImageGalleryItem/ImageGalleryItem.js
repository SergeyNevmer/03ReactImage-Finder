import React from "react";
import styles from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ src, bigSrc }) => (
  <li className={styles.ImageGalleryItem}>
    <img
      src={src}
      alt=""
      datallargeurl={bigSrc}
      className={styles.ImageGalleryItemImage}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  bigSrc: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
