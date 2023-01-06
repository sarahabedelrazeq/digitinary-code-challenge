import { endPoints } from "api/endPoints";
import { apiService } from "./ApiService";

interface Item {
  id: number;
  comments: Array<{ id: number }>;
}

class PostService {
  getAllEndPoint = endPoints.general.getPosts;
  getCommentsEndPoint = endPoints.general.getComments;

  async getComments(id: number) {
    try {
      const data = await apiService
        .unauthenticated()
        .get(`${this.getCommentsEndPoint}?postId=${id}`)
        .then(async ({ data }: { data: Array<{ id: number }> }) => {
          return data;
        });
      return { success: true, data };
    } catch ({ response }) {
      return { success: false, response };
    }
  }

  async getPosts() {
    try {
      const data = await apiService
        .unauthenticated()
        .get(this.getAllEndPoint)
        .then(async ({ data }: { data: Array<Item> }) => {
          for (let i = 0; i < data.length; i++) {
            const comments = await this.getComments(data[i].id);
            if (comments.success && comments.data)
              data[i] = { ...data[i], comments: comments.data };
          }
          console.log("data", data);
          return data;
        });
      return { success: true, data };
    } catch ({ response }) {
      return { success: false, response };
    }
  }
}

export const postService = new PostService();
