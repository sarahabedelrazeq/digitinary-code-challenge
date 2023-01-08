import { Post } from "interfaces";
import React from "react";
import { postService } from "services";
import postsContext from "store/postsContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function withContainer(
  WrappedComponent: React.FC<{
    posts: Array<Post> | null;
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
        MySwal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        }).then((result) => {
          if (result.isConfirmed) {
            addPostsHandler(posts?.filter((item) => !(item?.id === id)));

            postService
              .deletePosts(id)
              .then(() =>
                MySwal.fire(
                  "Deleted!",
                  "Your file has been deleted.",
                  "success"
                )
              );
          } else if (
            result.dismiss === Swal.DismissReason.cancel
          ) {
            MySwal.fire("Cancelled", "Your post is safe :)", "error");
          }
        });
      },
      [posts, addPostsHandler]
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
