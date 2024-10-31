import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { User } from "../utils/types";

interface TableProps {
  title: string;
  columns: string[];
  data:User[];
  action: boolean;
  setData: React.Dispatch<React.SetStateAction<User[]>>;
}

const TableComponent: React.FC<TableProps> = ({
  title,
  columns,
  data,
  action,
  setData,
}) => {
  const handleDelete =( id: string)=>{
    setData(prevData => prevData.filter(user => user.id !== id));

  }
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <Table aria-label="Example static collection table text-gray-950">
        <TableHeader className="">
          {columns.map((column, index) => (
            <TableColumn
              className="text-gray-700 text-xl text-left border-b border-gray-300"
              key={index}
            >
              {column}
            </TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {data.map((user) => (
            <TableRow key={user.id} className="text-gray-800">
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {action && (
                  <button className="flex justify-center" onClick={()=>handleDelete(user.id!)}>
                    <Icon
                      icon="material-symbols:delete"
                      className="cursor-pointer hover:text-red-800"
                    />
                  </button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableComponent;
