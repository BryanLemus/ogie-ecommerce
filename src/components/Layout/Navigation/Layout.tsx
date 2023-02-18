import { Sidebar, SidebarItem } from "@/components";
import { Appbar } from "@/components/Elements/Appbar/Appbar";
import { Router } from "next/router";
import React, { ReactNode, useState } from "react";
import styles from "./Layout.module.css";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className={styles.layout}>
      <Appbar className={styles.appbar}>
        <button
          style={
            showSidebar ? { backgroundColor: "black", color: "white" } : {}
          }
          onClick={() => setShowSidebar(!showSidebar)}
        >
          Explore
        </button>
        <div>Logo</div>
        <input
          style={{ maxWidth: "40rem", flexGrow: 1 }}
          type="search"
          name="search"
        />
        <div>
          <button>Cart</button>
          <button>Profile</button>
        </div>
      </Appbar>

      {showSidebar ? (
        <Sidebar className={styles.sidebar}>
          <SidebarItem
            value={"computers"}
            label="Computers"
            onClick={(value: any) => {
              alert(value);
            }}
          >
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
      ) : null}

      <main className={styles.main}>{children}</main>
    </div>
  );
};
