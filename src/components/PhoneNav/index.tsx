import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import { Menu, Home, Group } from "@mui/icons-material";

export default function PhoneNav({
  value,
  setValue,
}: {
  value: number;
  setValue: Function;
}) {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: { lg: "none" },
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction icon={<Menu />} />
        <BottomNavigationAction icon={<Home />} />
        <BottomNavigationAction icon={<Group />} />
      </BottomNavigation>
    </Paper>
  );
}
