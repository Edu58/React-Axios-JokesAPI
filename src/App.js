import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {

  const [joke, setJoke] = useState("")
  const [response, setResponse] = useState("");

  const getJoke = () => {
    Axios.get("https://v2.jokeapi.dev/joke/Any?type=twopart")
      .then((response) => {
        setJoke(response.data.setup)
        setResponse(response.data.delivery)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="App bg-indigo">
        <button
          onClick={getJoke}
          className="text-2xl text-white font-bold no-underline bg-green-700 py-2 px-4 rounded hover:bg-indigo-800"
        >
          Click to request joke
        </button>
      </div>
      <div className="jokes" id="joke">
        {joke} <br></br>
        <br>
        </br>
        {response}
      </div>
    </>
  );
}

export default App;
