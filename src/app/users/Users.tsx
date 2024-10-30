"use client";
import { useEffect, useState } from "react";
import TableComponent from "../components/Table";
import Popup from "../components/Popup";

export default function Users() {
    const [users, setUsers] = useState<User[]>([]);
    const [popup,showPopup]=useState(false)
  async function getUsers(url: string) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data, "dataaaa");
      setUsers(data);
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    getUsers("https://jsonplaceholder.typicode.com/users");
  }, []);
  const columns = ["Name", "Role", "Status", "Action"];
  
  const addNewUser = () => {
    showPopup(true)
  };
  const handleFormSubmit=(user:User)=>{
    showPopup(false)
    setUsers((prevUsers) => [...prevUsers, user]);
  }
  const handleClose=()=>{
    showPopup(false)
  }
  return (
    <div className="">
      <button className='bg-primary rounded-md p-2 m-2 text-secondary_bg float-right text-sm' onClick={addNewUser}>
        Create Users
      </button>
      
      <TableComponent
        title="Table Component"
        columns={columns}
        data={users}
        action={true}
        setData={setUsers}
      />
      {popup&&<Popup onFormSubmit={handleFormSubmit} handleClose={handleClose}></Popup >}
    </div>
  );
}

