import React from "react";
import { Box, Skeleton, Stack } from "@mui/material";
import Post from "components/Post";

export default function PostsSection({
  posts,
  loading,
}: {
  posts: Array<object> | null;
  loading: boolean;
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
            {posts.map((post, index) => (
              <Post {...post} key={index} />
            ))}
          </Box>
        )
      )}
    </div>
  );
}
