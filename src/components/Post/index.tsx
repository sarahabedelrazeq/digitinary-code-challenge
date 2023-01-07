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
} from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import userContext from "store/userContext";
import EditPost from "components/EditPost";

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const Post = ({
  id,
  title,
  body,
  userId,
  deleteFun,
  getComments,
}: {
  id?: number;
  title?: string;
  body?: string;
  userId?: number;
  deleteFun: Function;
  getComments: Function;
}) => {
  const [show, setShow] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [comments, setComments] = React.useState<Array<Comment>>([]);
  const { user } = React.useContext(userContext);

  React.useEffect(() => {
    getComments(id).then((data: Array<Comment>) => setComments(data));
  }, [id, getComments]);

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
                  }}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                >
                  {user && userId === user.id && (
                    <MenuItem>
                      <EditPost post={{ id, title, body, userId }}>
                        edit post
                      </EditPost>
                    </MenuItem>
                  )}
                  {user && userId === user.id && (
                    <MenuItem onClick={() => id && deleteFun(id)}>
                      delete post
                    </MenuItem>
                  )}
                  <MenuItem>report</MenuItem>
                </MenuList>
              )}
            </Box>
          }
          title={title}
          subheader="today"
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {body}
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
            {comments
              .slice(0, show ? comments.length : 1)
              .map((item, index) => (
                <List key={index}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar alt="user" src={""} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item?.body}
                      secondary="Jan 7, 2014"
                    />
                  </ListItem>
                </List>
              ))}
            {comments.length > 1 && !show && (
              <Button
                onClick={() => setShow(true)}
                sx={{ color: "black" }}
                aria-label="show all comments"
              >
                show all comments
              </Button>
            )}
          </div>
        )}
      </Card>
    </div>
  );
};

export default Post;
