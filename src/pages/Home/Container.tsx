import React from "react";
import { postService } from "services";

function withContainer(
  WrappedComponent: React.FC<{ posts: Array<object> | null, postsLoading:boolean }>
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
    return <WrappedComponent posts={posts} postsLoading={postsLoading} />;
  };
}

export default withContainer;
