import React from "react";
import { Navigate } from "react-router-dom";
import userContext from "store/userContext";

interface Props {
  children?: React.ReactNode;
  isProtected?: boolean;
  isAuth?: boolean;
}

export default function Auth({ children, isAuth, isProtected }: Props) {
  const { isLoggedIn } = React.useContext(userContext);

  if (isAuth && isLoggedIn) return <Navigate to="/" />;

  if (isProtected && !isLoggedIn) return <Navigate to="/login" />;

  return <div>{children}</div>;
}
