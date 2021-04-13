import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import NavBar from "./main/Layout/NavBar";
import InnerPage from "./main/Layout/InnerPage";
import Footer from "./main/Layout/Footer";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(
    function () {
      const getData = () => {
        axios
          .get("/v1/location")
          .then((response) => {
            dispatch({ type: "CHANGE_LOCATION", location: response.data });
            dispatch({ type: "CHANGE_CITY", city: response.data });
          })
          .catch((error) => {
            console.log(error);
          });
      };

      getData();

      return null;
    },
    [dispatch]
  );

  return (
    <div className="App">
      <NavBar />
      <InnerPage />
      <Footer></Footer>
    </div>
  );
}

export default App;
