import { createContext } from "react";

export interface TabsContextInterface {
  activeTabValue: number | string;
  setActiveTabValue: (id: number | string) => void;
}

export const TabsContext = createContext<TabsContextInterface | null>(null);
