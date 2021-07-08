const LINKS = {
  baseUrl: "https://pixabay.com/api/",
  apiKey: "21992403-2602b5d506ba3879747240055",
};

const fetchImages = async (searchQuery, page) => {
  const { baseUrl, apiKey } = LINKS;

  try {
    const response = await fetch(
      `${baseUrl}?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const data = await response.json();
    return data.hits;
  } catch (error) {
    throw error;
  }
};

export default fetchImages;
