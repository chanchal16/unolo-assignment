import React from "react";
import {
  SidebarContent,
  Sidebar,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
  SidebarHeader,
} from "./ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  Calendar,
  LayoutDashboard,
  CalendarDays,
  ClipboardCheck,
  Menu,
  Building2,
  Activity,
  X,
  Target,
  ClipboardList,
  PackageCheck,
  CircleDollarSign,
  Users,
  NotebookText,
} from "lucide-react";
import Image from "next/image";
import { SidebarItem } from "@/types/type";

// Menu items
const items:SidebarItem[] = [
  { title: "Dashboard", url: "#", icon: LayoutDashboard, tooltip: "Dashboard" },
  { title: "Attendance", url: "#", icon: CalendarDays, tooltip: "Attendance" },
  { title: "Leaves", url: "#", icon: Calendar, tooltip: "Leaves" },
  { title: "Organisation", url: "#", icon: Building2, tooltip: "Organisation" },
  { title: "Tasks", url: "#", icon: ClipboardCheck, tooltip: "Tasks" },
  { title: "Beat", url: "#", icon: Activity, tooltip: "Beat" },
  { title: "Targets", url: "#", icon: Target, tooltip: "Targets" },
  { title: "Form", url: "#", icon: ClipboardList, tooltip: "Form" },
  { title: "Order", url: "#", icon: PackageCheck, tooltip: "Order" },
  { title: "Expenses", url: "#", icon: CircleDollarSign, tooltip: "Expenses" },
  {
    title: "Clients & Sites",
    url: "#",
    icon: Users,
    tooltip: "Clients & Sites",
  },
  { title: "Report", url: "#", icon: NotebookText, tooltip: "Report" },
];

const AppSidebar = () => {
  const { openMobile, setOpenMobile, isMobile } = useSidebar();

  const toggleSidebar = () => {
    setOpenMobile(!openMobile);
  };

  return (
    <TooltipProvider>
      {isMobile && (
        <button
          className="p-2 m-2 bg-blue-500 text-white rounded fixed top-0 left-0 z-50"
          onClick={toggleSidebar}
        >
          {openMobile ? <X /> : <Menu />}
        </button>
      )}
      <Sidebar
        className={`!bg-white ${isMobile && !openMobile ? "hidden" : ""}`}
      >
        <SidebarHeader>
          <Image
            className="m-auto"
            src={"/logo.jpeg"}
            alt="logo"
            width={26}
            height={26}
          />
        </SidebarHeader>
        <SidebarContent className="p-2">
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarMenuButton tooltip={item.tooltip} asChild>
                      <a
                        href={item.url}
                        className={`gap-2 h-auto ${
                          item.title === "Dashboard"
                            ? "bg-indigo-50"
                            : "bg-transparent"
                        }`}
                      >
                        <item.icon
                          className={`!h-[22px] md:m-auto !w-6 ${
                            item.title === "Dashboard"
                              ? "text-indigo-500"
                              : "text-gray-500"
                          }  `}
                        />
                        <span className="text-xs block md:hidden">
                          {item.title}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </TooltipTrigger>
                  <TooltipContent side="right">{item.tooltip}</TooltipContent>
                </Tooltip>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </TooltipProvider>
  );
};

export default AppSidebar;