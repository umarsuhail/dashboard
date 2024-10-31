'use client'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TableComponent from '@/app/components/Table';
import { AppDispatch, RootState } from '../../redux/store';

export default function Approvals() {
  const dispatch = useDispatch<AppDispatch>();
  const columns = ["Name", "Status","role", "Action"];

  const users = useSelector((state: RootState) => state.users.users);

  useEffect(() => {
    console.log(users,'userss');
    
  }, [dispatch,users]);


  return (
    <div>
      <TableComponent
        title="Table Component"
        columns={columns}
        data={users}
        action={true}
        setData={() => {}}
      />
    </div>
  );
}
