import { useGetUserQuery } from "../../store/services/userApi";
import UsersList from "../../Component/UsersList/UsersList";
import ListHeader from "../../Component/ListHeader/ListHeader";

const UsersPage = () => {
  const { data, isLoading } = useGetUserQuery();

  return (
    <>
      <ListHeader/>
      {!isLoading && data && <UsersList data={data} />}
    </>
  );
};

export default UsersPage;
