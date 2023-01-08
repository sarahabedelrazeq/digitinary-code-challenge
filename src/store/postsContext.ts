import { Post } from "interfaces";
import React from "react";

interface UserContextInterface {
  posts: Array<Post> | null;
  addPostsHandler: Function;
}

const postsContext = React.createContext({} as UserContextInterface);

export default postsContext;
