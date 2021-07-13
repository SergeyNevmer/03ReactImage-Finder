import axios from "axios";

const refs = {
  baseUrl: "https://pixabay.com/api/",
  key: "21992403-2602b5d506ba3879747240055",
};

const FetchImages = (searchQuery, page = 1) => {
  return axios
    .get(
      `${refs.baseUrl}?q=${searchQuery}&page=${page}&key=${refs.key}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default FetchImages;
