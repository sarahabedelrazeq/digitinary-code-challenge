import React from "react";
import { Box, Skeleton, Stack } from "@mui/material";
import Post from "components/Post";
import { Post as PostInterface } from "interfaces";

export default function PostsSection({
  posts,
  loading,
  deleteFun,
  getComments,
}: {
  posts: Array<PostInterface> | null;
  loading: boolean;
  deleteFun: Function;
  getComments: Function;
}) {
  return (
    <div>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        posts && (
          <Box>
            {posts.map((post, index) => {
              return <Post post={post} getComments={getComments} deleteFun={deleteFun} key={post.id} />;
            })}
          </Box>
        )
      )}
    </div>
  );
}
