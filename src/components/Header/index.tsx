import React from "react";
import {
  Mail,
  Notifications,
  Search as SearchIcon,
  AccountCircle,
} from "@mui/icons-material";
import {
  AppBar,
  IconButton,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Grid,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import Search from "./components/Search";
import { darkLogo, logo } from "constantData";
import styles from "./style.module.scss";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import userContext from "store/userContext";
import AddPost from "components/AddPost";

interface Props {
  window?: () => Window;
}

export default function Header({ window }: Props) {
  const [open, setOpen] = React.useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  const { logoutHandler } = React.useContext(userContext);

  return (
    <AppBar
      sx={{
        backgroundColor: trigger
          ? (theme) => theme.palette.background.default
          : (theme) => theme.palette.secondary.dark,
      }}
      position="sticky"
      elevation={trigger ? 4 : 0}
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        py="8px"
        mx={0}
      >
        <Grid item lg={2} xs={4}>
          <img
            src={trigger ? darkLogo : logo}
            alt="logo"
            width={150}
            height={37.188}
          />
        </Grid>
        <Grid item lg={6} xs={0} sx={{ display: { xs: "none", lg: "block" } }}>
          <Search>
            <InputBase
              placeholder="search..."
              className={styles.searchInput}
              name="search"
              defaultValue={""}
              key={""}
            />
          </Search>
        </Grid>
        <Grid item lg={4} xs={7}>
          <Stack
            direction="row"
            justifyContent="end"
            alignItems="center"
            spacing={1}
          >
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <Badge badgeContent={4} color="error">
                <Mail
                  sx={{
                    color: trigger
                      ? (theme) => theme.palette.secondary.dark
                      : (theme) => theme.palette.background.default,
                  }}
                />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <Badge badgeContent={17} color="error">
                <Notifications
                  sx={{
                    color: trigger
                      ? (theme) => theme.palette.secondary.dark
                      : (theme) => theme.palette.background.default,
                  }}
                />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="search"
              color="inherit"
              sx={{ display: { xs: "flex", lg: "none" } }}
            >
              <SearchIcon
                sx={{
                  color: trigger
                    ? (theme) => theme.palette.secondary.dark
                    : (theme) => theme.palette.background.default,
                }}
              />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              onClick={() => setOpen(true)}
              color="inherit"
            >
              <AccountCircle
                sx={{
                  color: trigger
                    ? (theme) => theme.palette.secondary.dark
                    : (theme) => theme.palette.background.default,
                }}
              />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          top: 45,
        }}
      >
        <MenuItem>
          <Link to={`/`} style={{ color: "inherit", textDecoration: "none" }}>
            Profile
          </Link>
        </MenuItem>
        <MenuItem>
          <AddPost>Add Post</AddPost>
        </MenuItem>
        <MenuItem onClick={() => logoutHandler()}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
