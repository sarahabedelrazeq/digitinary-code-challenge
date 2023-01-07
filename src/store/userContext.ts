import React from "react";

interface User {
  id: number;
  email: string;
}

interface UserContextInterface {
  isLoggedIn: boolean;
  user: User | null;
  loginHandler: Function;
  logoutHandler: Function;
}

const userContext = React.createContext({
  isLoggedIn: false,
  user: null,
} as UserContextInterface);

export default userContext;
