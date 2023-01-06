import React from "react";
import { Fallback, Auth } from "components";
import { Route, Routes } from "react-router-dom";
import routes from "routes";
import withContainer from "Container";
import "assets/sass/index.scss";
import { ThemeProvider } from "@mui/material";
import { mainTheme } from "themes";

function App({ loading }: { loading: boolean }) {
  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        {loading ? (
          <div style={{ height: "100vh" }}>
            <Fallback />
          </div>
        ) : (
          <React.Suspense
            fallback={
              <div style={{ height: "100vh" }}>
                <Fallback />
              </div>
            }
          >
            <Routes>
              {routes.map((route, index) => {
                return (
                  route.component && (
                    <Route
                      key={index}
                      element={
                        <Auth {...route}>
                          <route.component />
                        </Auth>
                      }
                      {...route}
                    />
                  )
                );
              })}
            </Routes>
          </React.Suspense>
        )}
      </ThemeProvider>
    </div>
  );
}

export default withContainer(React.memo(App));
