import {
  AccountBox,
  Home,
  ModeNight,
  Person,
  Language,
} from "@mui/icons-material";
import {
  Box,
  FormControlLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

const Sidebar = () => {
  return (
    <Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home Page" sx={{ color: "text.primary" }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" sx={{ color: "text.primary" }} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <FormControlLabel aria-label="Switch theme to the dark" control={<Switch defaultChecked />} label="" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Language />
            </ListItemIcon>
            <ListItemText primary="Change Language" onClick={(e) => {}} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
