import UserRow from "./UserRow";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Shared/Loading/Loading";

const Users = () => {
  const {
    isLoading,
    error,
    refetch,
    data: users,
  } = useQuery(["users"], () =>
    fetch("https://food-delivery-20mn.onrender.com/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h2>All-Users: {users.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Sl/NO</th>
              <th>Email</th>
              <th>Admin Role</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                user={user}
                index={index}
                key={user.id}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
