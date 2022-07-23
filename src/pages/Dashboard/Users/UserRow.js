import React from "react";

const UserRow = ({ user, index }) => {
  const { email } = user;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
        <button class="btn btn-xs btn-secondary text-accent">Make Admin</button>
      </td>
      <td>
        <button class="btn btn-xs btn-error ">Delete User</button>
      </td>
    </tr>
  );
};

export default UserRow;
