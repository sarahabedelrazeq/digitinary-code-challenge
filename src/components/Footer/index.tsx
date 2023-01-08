import { Typography } from "@mui/material";
import moment from "moment";

const Footer = () => {
  return (
    <footer>
      <Typography align="center" variant="subtitle2" gutterBottom>
        All copy rights reserved to Digitinary Code Challenge © {moment().year()}
      </Typography>
    </footer>
  );
};

export default Footer;
