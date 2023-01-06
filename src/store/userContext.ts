import React from "react";

interface UserContextInterface {
  isLoggedIn: boolean;
  user: object | null;
  loginHandler: Function
}

const userContext = React.createContext({
  isLoggedIn: false,
  user: null,
} as UserContextInterface);

export default userContext;
