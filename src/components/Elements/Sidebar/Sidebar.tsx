import React, { ReactElement, ReactNode, useState } from "react";
import { SidebarItem } from "./SidebarItem/SidebarItem";
import {
  SidebarContext,
  SidebarContextInterface,
} from "@/context/SidebarContext";
import styles from "./Sidebar.module.css";

/**
 * Component Props
 */
interface Props extends React.HTMLProps<HTMLDivElement> {
  header?: ReactNode;
  footer?: ReactNode;
  children:
    | ReactElement<typeof SidebarItem>
    | ReactElement<typeof SidebarItem>[];
  initialValue?: string | number;
  collapsed?: boolean;
}

/**
 * Component Function
 */
export const Sidebar = ({
  header,
  footer,
  children,
  collapsed,
  initialValue = 0,
}: Props) => {
  /**
   * State
   */
  const [activePage, setActivePage] = useState<string | number>(initialValue);

  /**
   * Save current state into Sidebar context
   */
  const SidebarContextValue: SidebarContextInterface = {
    activePage,
    setActivePage,
  };

  return (
    <SidebarContext.Provider value={SidebarContextValue}>
      <div
        className={`${styles.container}  ${collapsed ? styles.collapsed : ""}`}
      >
        {/* Sidebar Header */}
        {header ? <div className={styles.header}>{header}</div> : null}

        {/* Sidebar Tray */}
        <div className={styles.tray}>{children}</div>

        {/* Sidebar Footer */}
        {footer ? <div className={styles.footer}>{footer}</div> : null}
      </div>
    </SidebarContext.Provider>
  );
};
