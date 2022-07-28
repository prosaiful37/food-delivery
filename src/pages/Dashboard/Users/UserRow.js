import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:5000/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization : `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => {
      if(res.status === 403){
        toast.error('Faild to make an admin');
      }
      return res.json()})
    .then(data => {
      if(data.modifiedCount > 0){
        refetch();
        toast.success('Admin Created successfully');
      }
    })

  }

  const handleDeleteUser = (email) => {
    fetch(`http://localhost:5000/users/${email}`, {
      method: 'DELETE',
      headers: {
        authorization : `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount){
        Swal.fire({
          title: 'Are you sure?',
          text: "You delete this user!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Deleted!',
              'Your user has deleted.',
              'success'
            )
          }
        })
        refetch();
      }
    })
  }

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>
         { role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs btn-secondary text-accent">Make Admin</button>}
      </td>
      <td>
        <button onClick={() => handleDeleteUser(email)} class="btn btn-xs btn-error ">Delete User</button>
      </td>
    </tr>
  );
};

export default UserRow;
