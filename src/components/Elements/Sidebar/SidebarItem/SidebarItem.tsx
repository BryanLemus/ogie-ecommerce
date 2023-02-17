import { SidebarContext } from "@/context/SidebarContext";
import { ReactElement, ReactNode, useContext, useState } from "react";
import styles from "./SidebarItem.module.css";

/**
 * Component Props
 */
interface Props {
  children?: ReactNode;
  value: string | number;
  label: string;
  icon?: ReactElement<SVGElement>;
  onClick?: () => void;
}

/**
 * Component Function
 */
export const SidebarItem = ({
  children,
  value,
  label,
  icon,
  onClick,
}: Props) => {
  const [expanded, setExpanded] = useState(false);

  const context = useContext(SidebarContext);

  const clickHandler = () => {
    if (onClick) onClick();
    context?.setActivePage(value);
  };

  return (
    <>
      <div
        className={
          `${styles.container}` +
          `${context?.activePage === value ? " " + styles.selected : ""}`
        }
        onClick={clickHandler}
      >
        {/** Sidebar Item Icon */}
        {icon ? <div className={styles.icon}>{icon}</div> : null}

        {/** Sidebar Item Label */}
        <label className={styles.label}>{label}</label>

        {/** Sidebar Item Dropdown Button */}
        {children ? (
          <div
            className={
              `${styles.dropdownButton}` +
              `${expanded ? " " + styles.expanded : ""}`
            }
            onClick={() => setExpanded(!expanded)}
          >
            <img src="/expand_more_FILL0_wght400_GRAD0_opsz48.svg" />
          </div>
        ) : null}
      </div>

      {/** Sidebar Item Content */}
      {children && expanded ? (
        <div
          className={
            `${styles.content}` + `${expanded ? " " + styles.expanded : ""}`
          }
        >
          {children}
        </div>
      ) : null}
    </>
  );
};
