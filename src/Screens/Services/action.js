import { FETCH_DATA } from "./constants.js";

export function fetchDetails(id) {
  return {
    type: FETCH_DATA,
    payload: { id }
  };
}
