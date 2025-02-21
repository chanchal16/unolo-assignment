import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type SidebarItem = {
  title: string;
  url: string;
  icon: LucideIcon;
  tooltip: string;
};

export type TabItem = {
  label: string;
  icon: ReactNode;
};