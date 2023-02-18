import { ReactNode } from "react";
import styles from "./Appbar.module.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Appbar = ({ className, children }: Props) => {
  return <div className={`${className} ${styles.container}`}>{children}</div>;
};
