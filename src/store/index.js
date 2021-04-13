import { createStore } from "redux";

const defaultWeather = {
  location: "Buenos Aires",
};

const weatherReducer = (state = defaultWeather, { type, location = "Unkown"}) => {
  if (type === "CHANGE_LOCATION") {
    return {
      location: location,
    };
  }
  return state;
};

const store = createStore(weatherReducer);

export default store;
