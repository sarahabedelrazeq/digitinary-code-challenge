import { Posts } from "interfaces";
import React from "react";

interface UserContextInterface {
  posts: Array<Posts> | null;
  addPostsHandler: Function;
}

const postsContext = React.createContext({} as UserContextInterface);

export default postsContext;
