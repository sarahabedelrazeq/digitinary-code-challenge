import {
  Alert,
  Box,
  Button,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Add } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { postService } from "services";
import postsContext from "store/postsContext";
import { Post } from "interfaces";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  maxWidth: "calc(100vw - 30px)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function EditPost({
  children,
  post,
}: {
  children: React.ReactNode;
  post: Post;
}) {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { posts, addPostsHandler } = React.useContext(postsContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleEditPost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);
    if (data.get("title")) {
      postService.editPost({
        ...post,
        title: data.get("title"),
        body: data.get("body"),
      });
      if (posts)
        addPostsHandler(
          posts.map((item) =>
            item.id === post.id
              ? (item = {
                  ...item,
                  title: data.get("title"),
                  body: data.get("body"),
                })
              : item
          )
        );
      handleClose();
    } else setError("you should fill title field");
    setLoading(false);
  };

  return (
    <>
      <Button
        variant="text"
        onClick={handleOpen}
        color="inherit"
        sx={{ border: "0px", padding: 0 }}
      >
        {children}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography component="h1" variant="h5">
            Edit post
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={loading ? () => {} : handleEditPost}
            sx={{ mt: 1 }}
          >
            {error !== "" && <Alert severity="error">{error}</Alert>}
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="title"
              name="title"
              autoFocus
              variant="standard"
              defaultValue={post.title}
              rows={4}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="body"
              label="body"
              name="body"
              autoFocus
              variant="standard"
              defaultValue={post.body}
              rows={4}
            />
            <LoadingButton
              loading={loading}
              loadingPosition="end"
              endIcon={<Add />}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color: "white" }}
            >
              Edit post
            </LoadingButton>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
