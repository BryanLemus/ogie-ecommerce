import { createContext } from "react";

export interface SidebarContextInterface {
  activePage: string | number;
  setActivePage: (value: string | number) => void;
}

export const SidebarContext = createContext<SidebarContextInterface | null>(
  null
);
