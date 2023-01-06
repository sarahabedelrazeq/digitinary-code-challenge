import { endPoints } from "api/endPoints";
import { apiService } from "./ApiService";

class UserService {
  getAllEndPoint = endPoints.user.getUsers;

  async getUsers() {
    try {
      const data = await apiService
        .unauthenticated()
        .get(this.getAllEndPoint)
        .then(({ data }) => data);
      return { success: true, data };
    } catch ({ response }) {
      return { success: false, response };
    }
  }
}

export const userService = new UserService();
