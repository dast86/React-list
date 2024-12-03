import UsersList from "../../features/users/UsersList/UsersList";
import { useGetUserQuery } from "../../shared/api/userApi";
import ListHeader from "../../shared/ui/ListHeader/ListHeader";

const UsersPage = () => {
  const { data, isLoading } = useGetUserQuery();

  return (
    <>
      <ListHeader />
      {!isLoading && data && <UsersList data={data} />}
    </>
  );
};

export default UsersPage;
