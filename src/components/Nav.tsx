import React from "react";
import { Bell, MessageSquareText } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { getInitials } from "@/lib/getInitials";

const Nav = () => {
  const { user } = useUser();
  const initials = getInitials(user?.firstName ?? "U", user?.lastName ?? "");
  return (
    <div className="p-2 w-full">
      <ul className="flex gap-4 px-2 items-center justify-end text-gray-500">
        <li>
          <MessageSquareText size={20} />
        </li>
        <li>
          <Bell size={20} />
        </li>
        <li>
          <div className="bg-indigo-50 text-indigo-500 p-2.5 cursor-pointer text-sm rounded-full">
            {initials}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Nav;