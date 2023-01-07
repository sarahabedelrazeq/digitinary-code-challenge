import axios from "axios";
import { API_URL } from "constantData";

class ApiService {
  unauthenticated() {
    return axios.create({
      baseURL: API_URL,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }
}

export const apiService = new ApiService();
