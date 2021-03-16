import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./main/Layout/NavBar";
import InnerPage from "./main/Layout/InnerPage";

function App() {
  const [location, setLocation] = useState("");
  useEffect(function () {
    const getData = () => {
      axios
        .get("/v1/location")
        .then((response) => {
          setLocation(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getData();

    return null;
  }, []);
  return (
    <div className="App">
      <NavBar location={location} />
      <InnerPage />
    </div>
  );
}

export default App;
