import { endPoints } from "api/endPoints";
import { apiService } from "./ApiService";

class PostService {
  getAllEndPoint = endPoints.general.getPosts;

  async getPosts() {
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

export const postService = new PostService();
