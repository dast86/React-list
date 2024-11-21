import { useGetUserQuery } from "../../store/services/userApi";
import UserListHeader from "../../Component/UserListHeader/UserListHeader";
import UsersList from "../../Component/UsersList/UsersList";

const Users = () => {
  const { data, isLoading } = useGetUserQuery();

  return (
    <>
      <UserListHeader />
      {!isLoading && data && <UsersList data={data} />}
    </>
  );
};

export default Users;
