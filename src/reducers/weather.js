import { FETCH_WEATHER } from "../constants";

export default function(state = [], action) {
  console.log("Action recieved", action);
  switch (action.type) {
    case FETCH_WEATHER:
      // Adds the new data to the new state (Doesn't mutate it! :D)
      // new state is concated to previous state
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
