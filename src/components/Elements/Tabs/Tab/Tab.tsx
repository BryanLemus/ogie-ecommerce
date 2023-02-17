import { TabsContext } from "@/context/TabsContext";
import React, { ReactNode, useContext } from "react";

interface Props {
  value: number | string;
  children: ReactNode;
}

export const Tab = ({ value, children }: Props) => {
  const context = useContext(TabsContext);
  return (
    <div
      className={
        "Tab" + value == context?.activeTabValue ? " Tab--selected" : ""
      }
      onClick={() => {
        context?.setActiveTabValue(value);
      }}
    >
      {children}
    </div>
  );
};
