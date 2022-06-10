import http from "./httpService";
import config from "../config";

const apiEndpoint = config.apiUrl + "/genres/";

export function getGenres() {
  return http.get(apiEndpoint);
}

export function getGenre(id) {
    return http.get(apiEndpoint + id);
}