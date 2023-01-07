import { User } from "interfaces";
import React from "react";

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
