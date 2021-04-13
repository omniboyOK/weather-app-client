import { createStore } from "redux";

const initialState = {
  location: "Buenos Aires",
  city: "Ubicación Actual",
};

const weatherReducer = (state = initialState, action) => {
  if (action.type === "CHANGE_LOCATION") {
    return {
      ...state,
      location: action.location,
    };
  }
  if (action.type === "CHANGE_CITY") {
    return {
      ...state,
      city: action.city,
    };
  }
  return state;
};

const store = createStore(weatherReducer);

export default store;
