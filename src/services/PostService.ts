import { endPoints } from "api/endPoints";
import { apiService } from "./ApiService";

interface Item {
  id: number;
  comments: Array<{ id: number }>;
}

class PostService {
  getAllEndPoint = endPoints.general.getPosts;
  getSingleEndPoint = endPoints.general.getPost;
  getCommentsEndPoint = endPoints.general.getComments;

  async getComments(id: number) {
    try {
      const data = await apiService
        .unauthenticated()
        .get(`${this.getCommentsEndPoint}?postId=${id}`)
        .then(async ({ data }: { data: Array<{ id: number }> }) => data);
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
        .then(async ({ data }: { data: Array<Item> }) => data);
      return { success: true, data };
    } catch ({ response }) {
      return { success: false, response };
    }
  }

  async deletePosts(id: number) {
    try {
      await apiService
        .unauthenticated()
        .delete(`${this.getSingleEndPoint}/${id}`);
    } catch ({ response }) {}
  }

  async addPost(item: object) {
    try {
      const data = await apiService
        .unauthenticated()
        .post(this.getAllEndPoint, item);
      return { success: true, data };
    } catch ({ response }) {
      return { success: false, response };
    }
  }

  async editPost(item: {
    id?: number;
    title?: FormDataEntryValue | string | null;
    body?: FormDataEntryValue | string | null;
    userId?: number;
  }) {
    try {
      const data = await apiService
        .unauthenticated()
        .put(`${this.getAllEndPoint}/${item.id}`, item);
      return { success: true, data };
    } catch ({ response }) {
      return { success: false, response };
    }
  }
}

export const postService = new PostService();
