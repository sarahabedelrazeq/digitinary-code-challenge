import React from "react";
import UserContext from "store/userContext";
import PostsContext from "store/postsContext";
import { ErrorBoundary } from "components";
import { User } from "interfaces";

function withContainer(WrappedComponent: React.FC<{ loading: boolean }>) {
  return () => {
    const [loading, setLoading] = React.useState<boolean>(true);
    const [user, setUser] = React.useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
    const [posts, setPosts] = React.useState<Array<object> | null>(null);

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
          logoutHandler: logoutHandler,
        }}
      >
        <PostsContext.Provider
          value={{
            posts: posts,
            addPostsHandler: setPosts,
          }}
        >
          <ErrorBoundary>
            <WrappedComponent loading={loading} />
          </ErrorBoundary>
        </PostsContext.Provider>
      </UserContext.Provider>
    );
  };
}

export default withContainer;
