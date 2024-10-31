"use client";
import { useEffect, useState } from "react";
import TableComponent from "../components/Table";
import Popup from "../components/Popup";
import { User } from "../utils/types";
import { createUser } from "../redux/userActions";
import { AppDispatch, RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setUsers, setError } from "../redux/slices/userSlices";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Users() {
  const [popup, showPopup] = useState(false);
  const [selecteduser, setSelectedUser] = useState<User>();
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.users);
  const router = useRouter();

  async function getUsers(url: string) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch(setUsers(data));
    } catch (error) {
      console.log(error);
      dispatch(setError("Failed to fetch users"));
    }
  }
  useEffect(() => {
    getUsers("https://jsonplaceholder.typicode.com/users");
  });
  const renderActions = (user: User) => {
    return (
      <div className="flex justify-center space-x-2">
        <button
          className="cursor-pointer hover:text-red-800"
          onClick={() => handleDelete(user.id!)}
        >
          <Icon icon="material-symbols:delete" />
        </button>
        <button
          className="cursor-pointer hover:text-blue-800"
          onClick={() => handleCustomAction(user, "edit")}
        >
          <Icon icon="material-symbols:edit" />
        </button>
        <button
          className="cursor-pointer hover:text-green-800"
          onClick={() => handleCustomAction(user, "view")}
        >
          <Icon icon="material-symbols:view" />
        </button>
      </div>
    );
  };
  const handleDelete =async (id: string) => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Failed to delete user");
      }
      dispatch(setUsers(users.filter(user => user.id !== id)));
    } catch (error) {
      console.error(error);
      dispatch(setError("Failed to delete user"));
    }
  };

  const handleCustomAction = (user: User, actionType: string) => {
    console.log(`Action: ${actionType} for user:`, user);
    if(actionType==='edit'){
      showPopup(true);
      setSelectedUser(user)
    }
  };


  const columns = ["Name", "Role", "Status", "Action"];

  const addNewUser = () => {
    showPopup(true);
  };

  const handleFormSubmit = (user: User) => {
    showPopup(false);
    dispatch(createUser(user));
  };

  const handleClose = () => {
    showPopup(false);
  };

  const manageUsers = () => {
    router.push("/users/approvals");
  };

  return (
    <div className="">
      <button
        className="bg-primary rounded-md p-2 m-2 text-secondary_bg float-right text-sm"
        onClick={addNewUser}
      >
        Create Users
      </button>

      <TableComponent
        title="Table Component"
        columns={columns}
        data={users}
        action={true}
        setData={() => {}}
        renderActions={renderActions}
      />
      <button
        className="bg-primary rounded-md p-2 m-2 text-secondary_bg float-right text-sm"
        onClick={manageUsers}
      >
        Manage Users
      </button>
      {popup && (
        <Popup initialData={selecteduser} onFormSubmit={handleFormSubmit} handleClose={handleClose} />
      )}
    </div>
  );
}
