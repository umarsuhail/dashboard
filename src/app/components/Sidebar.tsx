"use client";
import { useState } from "react";
import { menuItems } from "../utils/common";
import { Icon } from "@iconify/react";
import Link from "next/link";
export default function Sidebar() {

  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleClose=()=>{
    setIsCollapsed(!isCollapsed)
  }
  return (
    <div className={`${isCollapsed ? "w-16" : "w-44"} h-screen bg-primary`}>
      <button className={` ${isCollapsed ? "ml-8" : "ml-36"}`} onClick={handleClose}>
        {isCollapsed?<Icon icon="ci:expand" className="text-secondary_bg m-3 text-sm hover:text-white"/>:<Icon icon="bx:collapse-horizontal" className="text-secondary_bg m-3 text-sm hover:text-white" />}
      
      
      </button>
      <ul>
        {menuItems.map((menu) => (
          <li
            key={menu.title}
            className="cursor-pointer shadow-md my-4 text-sm text-primary bg-secondary_bg rounded-md p-2 m-2 flex items-center hover:bg-opacity-45 hover:border-r-4 hover:border-white hover:text-secondary_bg"
          >
            <Link href={menu.navigateTo} className="w-full flex justify-start items-center">
            <Icon icon={menu.icon} className="mx-2"></Icon>
            {isCollapsed?"":menu.title}
            </Link>
          
            
          </li>
        ))}
      </ul>
    </div>
  );
}
