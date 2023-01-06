import React from "react";

interface RouteDataItem {
  path?: string;
  name?: string;
  component?: React.FC;
  isProtected?: boolean;
  isAuth?: boolean;
}

const routes: RouteDataItem[] = [
  {
    path: "/",
    name: "home",
    isProtected: true,
    component: React.lazy(() => import("pages/Home")),
  },
  {
    path: "/login",
    name: "login",
    isAuth: true,
    component: React.lazy(() => import("pages/Login")),
  },
];

export default routes;
