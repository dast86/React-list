import { Users } from "../../../../entities/users";
import FavoriteUserItem from "../FavoriteUserItem/FavoriteUserItem";

interface Props {
  users: Users[];
  handelModalOpen: () => void;
}

const FavoriteUserList = ({ users, handelModalOpen }: Props) => {
  return (
    <ul>
      {users.map((user) => (
        <FavoriteUserItem
          user={user}
          handelModalOpen={handelModalOpen}
          key={user.id}
        />
      ))}
    </ul>
  );
};

export default FavoriteUserList;
