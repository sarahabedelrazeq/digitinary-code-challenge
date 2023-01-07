import React from "react";
import { postService } from "services";
import postsContext from "store/postsContext";

function withContainer(
  WrappedComponent: React.FC<{
    posts: Array<object> | null;
    postsLoading: boolean;
    deletePost: Function;
    getComments: Function;
  }>
) {
  return () => {
    const [postsLoading, setPostsLoading] = React.useState<boolean>(false);
    const { posts, addPostsHandler } = React.useContext(postsContext);

    const getPosts = React.useCallback(async () => {
      setPostsLoading(true);
      const posts = await postService.getPosts();
      if (posts?.data) addPostsHandler(posts?.data);
      setPostsLoading(false);
    }, [addPostsHandler]);

    React.useEffect(() => {
      getPosts();
    }, [getPosts]);

    const deleteHandler = React.useCallback(
      async (id: number) => {
        //Promise.all([postService.deletePosts(id), getPosts()]);
        postService.deletePosts(id)
      },
      []
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
