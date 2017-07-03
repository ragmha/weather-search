import axios from "axios";

import { API_KEY, ROOT_URL, FETCH_WEATHER } from "../constants";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`; // us is country code [Change Later]

  const request = axios.get(url); // returns a Promise :D

  console.log("REQUEST: ", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
