import React from "react";
import { Favorite, FavoriteBorder, MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  MenuItem,
  MenuList,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import userContext from "store/userContext";
import EditPost from "components/EditPost";
import { Comment, Post as PostInterfaces } from "interfaces";

const Post = ({
  post,
  deleteFun,
  getComments,
}: {
  post: PostInterfaces;
  deleteFun: Function;
  getComments: Function;
}) => {
  const [show, setShow] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [comments, setComments] = React.useState<Array<Comment>>([]);
  const { user } = React.useContext(userContext);

  React.useEffect(() => {
    getComments(post.id).then((data: Array<Comment>) => setComments(data));
  }, [post.id, getComments]);

  return (
    <div>
      <Card sx={{ marginBottom: "24px" }}>
        <CardHeader
          avatar={
            <Link to={`/`} aria-label="open user profile">
              <Avatar alt="user" src={""} />
            </Link>
          }
          action={
            <Box sx={{ position: "relative" }}>
              <IconButton onClick={() => setOpen(!open)} aria-label="settings">
                <MoreVert />
              </IconButton>

              {open && (
                <MenuList
                  sx={{
                    position: "absolute",
                    right: 0,
                    backgroundColor: "white",
                    border: (theme) => `1px solid ${theme.palette.grey[400]}`,
                    zIndex: "2",
                  }}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                >
                  {user && post.userId === user.id && (
                    <MenuItem>
                      <EditPost post={post}>edit post</EditPost>
                    </MenuItem>
                  )}
                  {user && post.userId === user.id && (
                    <MenuItem onClick={() => deleteFun(post.id)}>
                      delete post
                    </MenuItem>
                  )}
                  <MenuItem>report</MenuItem>
                </MenuList>
              )}
            </Box>
          }
          title={String(post.title)}
          subheader="today"
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {String(post.body)}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            borderTop: "1px solid",
            borderBottom: "1px solid",
            paddingTop: 0,
            paddingBottom: 0,
            borderColor: (theme) => theme.palette.grey[400],
          }}
          disableSpacing
        >
          <FormControlLabel
            aria-label="like the post"
            control={
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
            }
            label=""
          />
          <Button sx={{ color: "black" }} aria-label="show all comments">
            comments
          </Button>
        </CardActions>

        {comments && (
          <div>
            <List>
              {comments
                .slice(0, show ? comments.length : 1)
                .map((item, index) => (
                  <>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar alt="user" src={""} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Box
                            sx={{
                              p: 1,
                              bgcolor: "grey.100",
                              border: "1px solid",
                              borderColor: "grey.300",
                              borderRadius: 2,
                              mb: 1,
                            }}
                          >
                            <Typography
                              component="p"
                              sx={{
                                color: "grey.800",
                                fontSize: "0.875rem",
                                fontWeight: "700",
                                m: 0,
                              }}
                              className=" text-overflow-2"
                            >
                              {item?.body}
                            </Typography>
                          </Box>
                        }
                        secondary="Jan 7, 2014"
                      />
                    </ListItem>

                    <Divider variant="inset" component="li" />
                  </>
                ))}

              {comments.length > 1 && (
                <Button
                  onClick={() => setShow(!show)}
                  sx={{ color: "black" }}
                  aria-label="show all comments"
                >
                  {!show ? "show all comments" : "hidden comments"}
                </Button>
              )}
            </List>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Post;
