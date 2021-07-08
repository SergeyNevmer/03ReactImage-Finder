import React from "react";
// import "./App.module.css";
import arrImages from "../../services/imagesApi";
import Searcbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Button from "../Button/Button";
import Loader from "react-loader-spinner";

export default class App extends React.Component {
  state = {
    images: [],
    query: "",
    page: 1,
    isLoading: false,
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value, page: 1 });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { query, page } = this.state;

    if (query === "") return;

    this.setState({ isLoading: true });
    arrImages(query, page)
      .then((data) =>
        this.setState({
          images: [...data],
        })
      )
      .catch(console.log)
      .finally(this.setState({ isLoading: false }));
  };

  onIncrementPage = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, query } = this.state;

    if (prevState.page !== this.state.page) {
      this.setState({ isLoading: true });
      arrImages(query, page)
        .then((data) =>
          this.setState((prevState) => ({
            images: [...prevState.images, ...data],
          }))
        )
        .catch(console.log)
        .finally(this.setState({ isLoading: false }));
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  render() {
    const { query, images, isLoading } = this.state;
    return (
      <>
        <Searcbar
          value={query}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        ) : (
          <ImageGallery images={images} />
        )}
        {images.length > 0 && <Button onClick={this.onIncrementPage} />}
      </>
    );
  }
}
