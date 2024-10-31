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

export default function Users() {
  const [popup, showPopup] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.users);
  const router = useRouter();

  async function getUsers(url: string) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data, "dataaaa");
      dispatch(setUsers(data)); 
    } catch (error) {
      console.log(error);
      dispatch(setError("Failed to fetch users")); 
    }
  }

  useEffect(() => {
    getUsers("https://jsonplaceholder.typicode.com/users");
  },);

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
    router.push('/users/approvals');
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
      />
      <button
        className="bg-primary rounded-md p-2 m-2 text-secondary_bg float-right text-sm"
        onClick={manageUsers}
      >
        Manage Users
      </button>
      {popup && (
        <Popup
          onFormSubmit={handleFormSubmit}
          handleClose={handleClose}
        />
      )}
    </div>
  );
}
