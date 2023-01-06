import React from "react";
import { Grid } from "@mui/material";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./style.module.css";
import { Sidebar, RightBar, PhoneNav } from "components";
import { Box } from "@mui/system";

interface Props {
  children?: React.ReactNode;
  id: string;
}

const Main = (props: Props) => {
  const [value, setValue] = React.useState(1);

  return (
    <div id="main-layout">
      <Header />
      <div className={styles.pageContainer} id={props.id ? props.id : "page"}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid
            item
            lg={2}
            xs={12}
            sx={{ display: { xs: value !== 0 ? "none" : "", lg: "block" } }}
          >
            <Sidebar />
          </Grid>
          <Grid
            item
            lg={6}
            xs={12}
            sx={{
              display: { xs: value !== 1 ? "none" : "", lg: "block" },
            }}
          >
            <Box
              sx={{
                padding: { xs: "25px 8px", lg: "25px 0" },
              }}
            >
              {props.children}
            </Box>
          </Grid>
          <Grid
            item
            lg={4}
            xs={12}
            sx={{ display: { xs: value !== 2 ? "none" : "", lg: "block" } }}
          >
            <RightBar />
          </Grid>
        </Grid>
        <PhoneNav value={value} setValue={setValue} />
        <Footer />
      </div>
    </div>
  );
};
export default Main;
