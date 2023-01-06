import React from "react";
import UserContext from "store/userContext";
import { ErrorBoundary } from "components";

interface User {
  id: number;
  email: string;
}

function withContainer(WrappedComponent: React.FC<{ loading: boolean }>) {
  return () => {
    const [loading, setLoading] = React.useState<boolean>(true);
    const [user, setUser] = React.useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

    React.useEffect(() => {
      const localStorageUser = localStorage.getItem(
        "digitinary_code_challenge_user"
      );
      const user = JSON.parse(localStorageUser || "{}");
      if (user?.id) {
        setUser(user);
        setIsLoggedIn(true);
      }
      setLoading(false);
    }, []);

    const loginHandler = React.useCallback((newUser: User) => {
      setUser(newUser);
      setIsLoggedIn(true);
      localStorage.setItem(
        "digitinary_code_challenge_user",
        JSON.stringify(newUser)
      );
    }, []);

    const logoutHandler = React.useCallback(() => {
      setUser(null);
      setIsLoggedIn(false);
      localStorage.removeItem("digitinary_code_challenge_user");
    }, []);

    return (
      <UserContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          user: user,
          loginHandler: loginHandler,
          logoutHandler: logoutHandler
        }}
      >
        <ErrorBoundary>
          <WrappedComponent loading={loading} />
        </ErrorBoundary>
      </UserContext.Provider>
    );
  };
}

export default withContainer;
