import type { DayItem, TimePlanItem } from "../../backend/types";
import styles from "./timeTable.module.scss";
import DayRenderer from "../dayRenderer/dayRenderer";
import { useEffect, useState } from "react";

type Props = {
  days: DayItem[];
  timeItems: TimePlanItem[];
};

export default function TimeTable({ days, timeItems }: Props) {
  const [highlightedDay, setHighlightedDay] = useState(0);
  const [highlightedHour, setHighlightedHour] = useState(0);

  function getCurrentTime(d: Date) {
    var minute = d.getMinutes();
    var out;

    if (minute.toString().length == 1) {
      out = "0" + minute;
    } else {
      out = minute;
    }
    return parseFloat(d.getHours() + "." + out);
    //return 10.10;
  }

  function updateHighlight() {
    const now = new Date();
    const currentDay = now.getDay() - 1;
    const currentTime = getCurrentTime(now);

    setHighlightedDay(currentDay);

    const hourIndex = timeItems.findIndex((item) => {
      return item.start <= currentTime && currentTime <= item.end;
    });

    setHighlightedHour(hourIndex);
  }

  useEffect(() => {
    updateHighlight();

    setInterval(() => {
      updateHighlight();
    }, 10000);
  }, []);

  return (
    <div className={styles.timeTable}>
      <div className={styles.weekDays}>
        <DayRenderer timePlanItems={timeItems} />
        {days.map((day, index) => (
          <DayRenderer
            highlightedIndex={
              index === highlightedDay ? highlightedHour : undefined
            }
            day={day}
          />
        ))}
      </div>
    </div>
  );
}
