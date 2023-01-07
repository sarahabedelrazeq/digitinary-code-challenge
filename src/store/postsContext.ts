import React from "react";

interface Posts {
  id?: number;
  title?: FormDataEntryValue | string | null;
  body?: FormDataEntryValue | string | null;
  userId?: number;
}

interface UserContextInterface {
  posts: Array<Posts> | null;
  addPostsHandler: Function;
}

const postsContext = React.createContext({} as UserContextInterface);

export default postsContext;
