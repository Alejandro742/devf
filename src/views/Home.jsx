import { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [giphy, setGipgy] = useState("");
  const fetchGiphy = async () => {
    try {
      const giphyFetch = await axios.get(
        "https://api.giphy.com/v1/gifs/random?api_key=9MY2uJ4MPIjCeikd1h5oYTsCHh965juM&tag=family%guy&rating=g"
      );
      const giph = giphyFetch.data.data.images.downsized_large;
      console.log(giph);
      setGipgy(giph.url);
    } catch (error) {}
  };
  useEffect(() => {
    (async function fetchData() {
      await fetchGiphy();
    })();
  }, []);
  return (
    <div className="mt-3 w-50 mx-auto container justify-content-between">
      <h1 className="text-center">Prueba Técnica DevF</h1>
      <img className="text-center w-100 mx-auto " src={giphy} alt="aa" />
    </div>
  );
};

export default Home;
