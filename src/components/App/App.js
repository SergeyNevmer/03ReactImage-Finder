import React from "react";
import Searcbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMore from "../LoadMore/LoadMore";

export default class App extends React.Component {
  state = {
    images: [],
    valueFromInput: "",
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ valueFromInput: value });
  };

  onLoadMore = (arr) => {
    this.setState((prevState) => ({
      images: [...prevState.images, ...arr],
    }));
  };

  onGetNewImages = (newImages) => {
    this.setState({
      images: [],
    });
    this.setState((prevState) => ({
      images: [...prevState.images, ...newImages],
    }));
  };

  render() {
    const { valueFromInput, images } = this.state;
    return (
      <>
        <Searcbar
          value={valueFromInput}
          onChange={this.handleChange}
          onSubmit={this.onGetNewImages}
        />
        <ImageGallery images={images} />
        {images.length > 0 && (
          <LoadMore value={valueFromInput} onClick={this.onLoadMore} />
        )}
      </>
    );
  }
}
