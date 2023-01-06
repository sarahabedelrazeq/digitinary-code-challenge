import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const RightBar = () => {
  return (
    <Box px="25px" maxWidth={300}>
      <div>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
      </div>
      <div>
        <AvatarGroup sx={{ justifyContent: "center" }} max={7}>
          {Array(7)
            .fill(0)
            .map((_, index) => (
              <div style={{ marginRight: -5 }} key={index}>
                <Link to={`/`} aria-label={`go to the user profile user ${index + 1}`}>
                  <Avatar alt="user" src={""} />
                </Link>
              </div>
            ))}
        </AvatarGroup>
      </div>
      <div>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
      </div>
      <div>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""
              width={100}
              height={100}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""
              width={100}
              height={100}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""
              width={100}
              height={100}
            />
          </ImageListItem>
        </ImageList>
      </div>
    </Box>
  );
};

export default RightBar;
