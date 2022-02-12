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
    <><div className="App">
      <button onClick={getJoke}>Click to request joke</button>
    </div>
    <div className="jokes">
        Setup: {joke} <br></br>
        <br></br>
        Delivery: {response}
    </div></>
  );
}

export default App;
