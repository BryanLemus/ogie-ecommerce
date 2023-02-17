import { Sidebar, SidebarItem } from "@/components";
import React, { ReactNode } from "react";
import styles from "./Layout.module.css";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Sidebar className={styles.sidebar}>
        <SidebarItem value={"computers"} label="Computers">
          <SidebarItem value={"processors"} label="Processors" />
          <SidebarItem value={"storage"} label="Storage" />
          <SidebarItem value={"memory"} label="Memory" />
          <SidebarItem value={"monitor"} label="Monitors" />
          <SidebarItem value={"keyboards"} label="Keyboards" />
          <SidebarItem value={"mouses"} label="Mouses" />
          <SidebarItem value={"cases"} label="Cases" />
        </SidebarItem>
        <SidebarItem value={"photography"} label="Photography">
          <SidebarItem value={"cameras"} label="Cameras" />
          <SidebarItem value={"lenses"} label="Lenses" />
          <SidebarItem value={"memorycards"} label="Memory Cards" />
          <SidebarItem value={"Tripods"} label="Tripods" />
        </SidebarItem>
        <SidebarItem value={"living"} label="Living">
          <SidebarItem value={"tvs"} label="TVs" />
          <SidebarItem value={"sound"} label="Sound" />
          <SidebarItem value={"tables"} label="Tables" />
          <SidebarItem value={"cabinets"} label="Cabinets" />
        </SidebarItem>
        <SidebarItem value={"electronics"} label="Electronics" />
        <SidebarItem value={"bathroom"} label="Bathroom" />
      </Sidebar>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
