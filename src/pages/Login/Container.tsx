import React from "react";
import { userService } from "services/UserService";

interface User {
  id: number;
  email: string;
}

function withContainer(
  WrappedComponent: React.FC<{
    users: Array<User> | null;
    usersLoading: boolean;
  }>
) {
  return () => {
    const [users, setUsers] = React.useState<Array<User> | null>(null);
    const [usersLoading, setUsersLoading] = React.useState<boolean>(false);

    const getUsers = React.useCallback(async () => {
      setUsersLoading(true);
      const users = await userService.getUsers();
      if (users?.data) setUsers(users?.data);
      setUsersLoading(false);

    }, []);

    React.useEffect(() => {
      getUsers();
    }, [getUsers]);

    return <WrappedComponent users={users} usersLoading={usersLoading} />;
  };
}

export default withContainer;
