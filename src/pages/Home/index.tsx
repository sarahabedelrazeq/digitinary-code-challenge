import { Box } from "@mui/material";
import { Main } from "components/Layouts";
import Section from "components/Section";
import PostsSection from "./components/PostsSection";
import withContainer from "./Container";
import { Post } from "interfaces";

function Home({
  posts,
  postsLoading,
  deletePost,
  getComments,
}: {
  posts: Array<Post> | null;
  postsLoading: boolean;
  deletePost: Function;
  getComments: Function;
}) {
  return (
    <Main id="home-page">
      <Section>
        <PostsSection
          posts={posts}
          loading={postsLoading}
          deleteFun={deletePost}
          getComments={getComments}
        />
      </Section>
    </Main>
  );
}

export default withContainer(Home);
