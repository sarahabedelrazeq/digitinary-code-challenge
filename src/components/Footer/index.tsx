import React from "react";
import moment from "moment";

const Footer = () => {
  return (
    <footer style={{ textAlign: "center" }}>
      <p>All copy rights reserved to IPA School Library © {moment().year()} </p>
    </footer>
  );
};

export default Footer;
