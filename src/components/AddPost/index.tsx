import {
  Alert,
  Box,
  Button,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Add, Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { postService } from "services";
import userContext from "store/userContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  maxWidth: "100vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

// id,
// title,
// body,
// userId,

export default function AddPost({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [image, setImage] = React.useState(false);
  const { user } = React.useContext(userContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddPost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget);
    postService.addPost({
      userId: user && user.id,
      title: data.get("title"),
      body: data.get("body"),
    });
    // setLoading(true);
    // // const { data: post, error } = await supabase.from("posts").insert([
    // //   {
    // //     text: data.get("text"),
    // //     image: image
    // //       ? "https://jhdpgjjcbrlbvddzodju.supabase.co/storage/v1/object/public/" +
    // //         image
    // //       : "",
    // //     user_id: user.id,
    // //   },
    // // ]);
    // setLoading(false);
    // if (error && error.message) setError(error.message);
    // else if (post) setOpen(false);
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
            add post
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={loading ? () => {} : handleAddPost}
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
              add Post
            </LoadingButton>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
