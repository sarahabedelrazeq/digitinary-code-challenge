import { Box } from "@mui/material";
import React from "react";

export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <Box component="section" mb="50px">
      {children}
    </Box>
  );
}
