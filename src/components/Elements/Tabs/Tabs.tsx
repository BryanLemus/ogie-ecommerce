import { ReactElement, useState } from "react";
import { Tab } from "@/components/Elements/Tabs/Tab/Tab";
import styles from "./Tabs.module.css";
import { TabsContext, TabsContextInterface } from "@/context/TabsContext";

export interface Props {
  children: ReactElement<typeof Tab> | ReactElement<typeof Tab>[];
  initialValue?: number | string;
  onChange?: (value?: number | string) => void;
}

export const Tabs = ({ children, initialValue = 0, onChange }: Props) => {
  /**
   ActiveTabValue, is the active tab index state, setActiveTabValue, is the change function, travel through the context and change the index value from a child tab
   */
  const [activeTabValue, setActiveTabValue] = useState(initialValue);

  /**
   * Configure values to the context.
   */
  const TabsContextValue: TabsContextInterface = {
    activeTabValue,
    setActiveTabValue,
  };

  /* onChange Callback, returns the activeTabValue */
  if (onChange) onChange(activeTabValue);

  return (
    <TabsContext.Provider value={TabsContextValue}>
      <div className={styles.container}>{children}</div>
    </TabsContext.Provider>
  );
};
