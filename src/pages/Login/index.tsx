import * as React from "react";
import { Button, TextField, Box, Grid, Typography, Paper } from "@mui/material";
import userContext from "store/userContext";
import { Alert } from "@mui/material";
import withContainer from "./Container";

interface User {
  id: number;
  email: string;
}

function Login({
  users,
  usersLoading,
}: {
  users: Array<User> | null;
  usersLoading: boolean;
}) {
  const [error, setError] = React.useState("");
  const { loginHandler } = React.useContext(userContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    if (users) {
      const findUser = users.filter((user) => user.email === email);
      if (findUser.length > 0) loginHandler(findUser[0]);
    }
  };

  return (
    <div id="login-page">
      <section>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <div>
                <Typography textAlign="center" component="h1" variant="h5">
                  login
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 1 }}
                >
                  {error !== "" && <Alert severity="error">{error}</Alert>}
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, color: "white" }}
                  >
                    login
                  </Button>
                </Box>
              </div>
            </Box>
          </Grid>
        </Grid>
      </section>
    </div>
  );
}
export default withContainer(Login);
