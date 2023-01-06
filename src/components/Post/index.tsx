import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  FormControlLabel,
  IconButton,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Post = ({
  id,
  title,
  body,
  userId,
}: {
  id?: number;
  title?: string;
  body?: string;
  userId?: number;
}) => {
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
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={title}
          subheader="today"
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
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
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
