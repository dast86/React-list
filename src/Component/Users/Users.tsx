import { useGetUserQuery } from "../../store/services/userApi";
import UsersList from "../UsersList/UsersList";





const Users = () => {
  const { data, isLoading } = useGetUserQuery();

  return (
    <>
          {!isLoading && data && <UsersList data={data} />} 
    </>
  );
};

export default Users;
