import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AdminUserList.css";

const AdminUserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/admin/users", {
      headers: {
        "auth-token": localStorage.getItem("auth-token")
      }
    })
    .then(response => {
      console.log("User details received:", response.data);
      setUsers(response.data);
    })
    .catch(error => {
      console.error("Error fetching users:", error);
    });
  }, []);

  return (
    <div className="adminuserlist">
      <h2>User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
           {console.log("Rendering user:", user);
          return (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);
}
export default AdminUserList;
