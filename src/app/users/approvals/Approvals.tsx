'use client'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableComponent from '@/app/components/Table';
import { AppDispatch, RootState } from '../../redux/store';
import { Icon } from '@iconify/react/dist/iconify.js';
import { User } from '@/app/utils/types';

export default function Approvals() {
  const dispatch = useDispatch<AppDispatch>();
  const columns = ["Name", "Status","User Name", "Approve"];

  const users = useSelector((state: RootState) => state.users.users);
  const deletedUsers = useSelector((state: RootState) => state.users.deletedUsers);
  const renderActions = (user: User) => {
    console.log(user);
    return (
      <div className="flex justify-center space-x-2">
        <button
          className="cursor-pointer hover:text-primary"
          onClick={() => approve()}
        >
          <Icon icon="material-symbols:approval-delegation-outline-rounded" />
        </button>
        
      </div>
    );
  };
  const approve=()=>{

  }
  useEffect(() => {
    console.log(deletedUsers,'userss');
    
  }, [dispatch,users,deletedUsers]);


  return (
    <div>
      <TableComponent
        title="Table Component"
        columns={columns}
        data={users}
        action={true}
        setData={() => {}}
        renderActions={renderActions}
      />
    </div>
  );
}
