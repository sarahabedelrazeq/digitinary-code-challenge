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
import { darkLogo, logo } from "constants/images";
import styles from "./style.module.scss";
import useScrollTrigger from "@mui/material/useScrollTrigger";

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
          <img src={trigger ? darkLogo : logo} alt="logo"  width={200} />
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
        <Grid item lg={4} xs={8}>
          <Stack
            direction="row"
            justifyContent="end"
            alignItems="center"
            spacing={2}
          >
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
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
              aria-label="account of current user"
              aria-controls="demo-positioned-menu"
              aria-haspopup="true"
              color="inherit"
              sx={{ display: { xs: "flex", md: "none" } }}
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
              aria-controls="demo-positioned-menu"
              aria-haspopup="true"
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
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}