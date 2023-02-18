import { SidebarContext } from "@/context/SidebarContext";
import {
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from "react";
import styles from "./SidebarItem.module.css";

/**
 * Component Props
 */
interface Props extends Omit<HTMLAttributes<HTMLDivElement>, "onClick"> {
  children?: ReactNode;
  value: string | number;
  label: string;
  icon?: ReactElement<SVGElement>;
  onClick?: (value: string | number) => void;
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
    if (onClick) onClick(value);
    context?.setActivePage(value);
  };

  return (
    <>
      <div
        className={
          // Base container style
          `${styles.container}` +
          // Apply Selected style, if activePage value is the same that sidebar item value
          `${context?.activePage === value ? " " + styles.selected : ""}`
        }
        onClick={clickHandler}
      >
        {/** Icon */}
        {icon ? <div className={styles.icon}>{icon}</div> : null}

        {/** Label */}
        <label className={styles.label}>{label}</label>

        {/** Expand Button */}
        {children ? (
          <div
            className={
              `${styles.expandButton}` +
              `${expanded ? " " + styles.expanded : ""}`
            }
            onClick={(event) => {
              event.stopPropagation();
              setExpanded(!expanded);
            }}
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
