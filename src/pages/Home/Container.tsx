import React from "react";
import { postService } from "services";

function withContainer(
  WrappedComponent: React.FC<{
    posts: Array<object> | null;
    postsLoading: boolean;
    deletePost: Function;
    getComments: Function;
  }>
) {
  return () => {
    const [posts, setPosts] = React.useState<Array<object> | null>(null);
    const [postsLoading, setPostsLoading] = React.useState<boolean>(false);

    const getPosts = React.useCallback(async () => {
      setPostsLoading(true);
      const posts = await postService.getPosts();
      if (posts?.data) setPosts(posts?.data);
      setPostsLoading(false);
    }, []);

    React.useEffect(() => {
      getPosts();
    }, [getPosts]);

    const deleteHandler = React.useCallback(
      async (id: number) => {
        Promise.all([postService.deletePosts(id), getPosts()]);
      },
      [getPosts]
    );

    const getComments = React.useCallback(async (id: number) => {
      const comments = await postService.getComments(id);
      if (comments?.data) return comments?.data;
      else return [];
    }, []);

    return (
      <WrappedComponent
        posts={posts}
        postsLoading={postsLoading}
        deletePost={deleteHandler}
        getComments={getComments}
      />
    );
  };
}

export default withContainer;
