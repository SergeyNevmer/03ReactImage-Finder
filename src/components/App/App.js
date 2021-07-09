import React from "react";
import arrImages from "../../services/imagesApi";
import Searcbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";

export default class App extends React.Component {
  state = {
    images: [],
    query: "",
    page: 1,
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value, page: 1 });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { query, page } = this.state;

    if (query === "") return;

    arrImages(query, page)
      .then((data) =>
        this.setState({
          images: [...data],
        })
      )
      .catch(console.log);
  };

  onIncrementPage = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;

    if (prevState.page !== this.state.page) {
      arrImages(query, page)
        .then((data) =>
          this.setState((prevState) => ({
            images: [...prevState.images, ...data],
          }))
        )
        .catch(console.log);
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  render() {
    const { query, images } = this.state;
    return (
      <>
        <Searcbar
          value={query}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <ImageGallery images={images} />
        {images.length > 0 && <Button onClick={this.onIncrementPage} />}
      </>
    );
  }
}
