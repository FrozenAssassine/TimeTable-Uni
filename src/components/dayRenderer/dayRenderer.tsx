import type { DayItem, TimePlanItem } from "../../backend/types";
import styles from "./dayRenderer.module.scss";
import HourItemRenderer from "../hourItemRenderer/hourItemRenderer";

type Props = {
  day?: DayItem;
  timePlanItems?: TimePlanItem[];
  highlightedIndex?: number;
};

export default function DayRenderer({
  day,
  timePlanItems,
  highlightedIndex,
}: Props) {
  const title = day?.title ?? "Zeit";

  return (
    <div className={styles.dayRenderer}>
      <div
        className={`${styles.headline} ${
          highlightedIndex !== undefined && styles.highlightedHeadline
        }`}
      >
        {title}
      </div>
      <div className={styles.items}>
        {timePlanItems !== undefined &&
          timePlanItems.map((item, index) => (
            <HourItemRenderer
              key={index}
              hourItem={item}
              highlighted={index === highlightedIndex}
            />
          ))}
        {day !== undefined &&
          day.items.map((item, index) => (
            <HourItemRenderer
              key={index}
              hourItem={item}
              highlighted={index === highlightedIndex}
            />
          ))}
      </div>
    </div>
  );
}
