import type { TableEntry, TimePlanItem } from "../../backend/types";
import styles from "./hourItemRenderer.module.scss";

type Props = {
  hourItem: TableEntry | null | TimePlanItem;
  highlighted?: boolean;
};

export default function HourItemRenderer({ hourItem, highlighted }: Props) {
  if (hourItem === null) return <div className={styles.hourItem} />;

  if (hourItem.hasOwnProperty("text")) {
    const currentItem = hourItem as TimePlanItem;
    return (
      <div className={styles.hourItem}>
        <div className={styles.time}>{currentItem.text}</div>
      </div>
    );
  }

  const currentItem = hourItem as TableEntry;

  return (
    <div
      className={`${styles.hourItem} ${
        currentItem.optional ? styles.optional : ""
      } ${highlighted ? styles.highlighted : ""}`}
    >
      <div className={styles.headline}>{currentItem.headline}</div>
      <div className={styles.kind}>{currentItem.kind}</div>
      <div className={styles.room}>{currentItem.room}</div>
    </div>
  );
}
