import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./main/Layout/NavBar";
import InnerPage from "./main/Layout/InnerPage";
import Footer from "./main/Layout/Footer";

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

  function handleLocationChange(str) {
    setLocation(str);
  }

  return (
    <div className="App">
      <NavBar location={location} onSelect={handleLocationChange} />
      <InnerPage city={location} />
      <Footer></Footer>
    </div>
  );
}

export default App;
