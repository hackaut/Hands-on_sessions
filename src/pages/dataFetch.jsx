import { useEffect, useState } from "react";
import axios from "axios";

const AxiosFetchPage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const res = await axios.get("https://official-joke-api.appspot.com/random_ten");
        setJokes(res.data);
      } catch (err) {
        console.error("Error fetching jokes:", err);
      }
    };

    fetchJokes();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-400 to-pink-500 text-white px-6">
      <h1 className="text-4xl font-bold mb-6">Axios Fetch Page</h1>
      <p className="mb-4 text-lg">This page fetches random jokes using <code>axios</code> and <code>useEffect</code>.</p>

      {jokes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jokes.map(joke => (
            <div key={joke.id} className="bg-white text-black p-4 rounded-xl shadow-lg w-72">
              <h2 className="text-lg font-semibold mb-2">Type: {joke.type}</h2>
              <p className="mb-2">🧠 {joke.setup}</p>
              <p className="text-purple-600 font-semibold">😂 {joke.punchline}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg mt-4">Loading jokes...</p>
      )}
    </div>
  );
};

export default AxiosFetchPage;
