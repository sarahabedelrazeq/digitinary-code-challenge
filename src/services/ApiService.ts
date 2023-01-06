import axios from "axios";
import { API_URL } from "constantData";

class ApiService {
  unauthenticated() {
    return axios.create({
      baseURL: API_URL,
    });
  }
}

export const apiService = new ApiService();
