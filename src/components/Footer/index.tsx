import { Typography } from "@mui/material";
import moment from "moment";

const Footer = () => {
  return (
    <footer>
      <Typography align="center" variant="subtitle2" gutterBottom>
        All copy rights reserved to IPA School Library © {moment().year()}
      </Typography>
    </footer>
  );
};

export default Footer;
