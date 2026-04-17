import styles from "./App.module.scss";
import type { DayItem, TimePlanItem } from "./backend/types";
import TimeTable from "./components/timetable/timeTable";

const days: DayItem[] = [
  {
    title: "Montag",
    items: [
      {
        headline: "Theoretische Informatik",
        kind: "Vorlesung",
        teacher: "",
        room: "Online",
        optional: true,
      },
      null,
      {
        headline: "Theoretische Informatik",
        kind: "Vorlesung",
        teacher: "",
        room: "A20.1.36",
        optional: true,
      },
      {
        headline: "Theoretische Informatik",
        kind: "Übung",
        teacher: "",
        room: "A20.1.36",
        optional: true,
      },
      null,
      null,
    ],
  },
  {
    title: "Dienstag",
    items: [
      null,
      {
        headline: "Praktische Informatik",
        kind: "Vorlesung",
        teacher: "",
        room: "A21.0.03",
        optional: true,
      },
      {
        headline: "Mathematik",
        kind: "Übung",
        teacher: "",
        room: "A20.2.09",
        optional: true,
      },
      {
        headline: "Mathematik",
        kind: "Übung",
        teacher: "",
        room: "A20.2.09",
        optional: true,
      },
      null,
      null,
    ],
  },
  {
    title: "Mittwoch",
    items: [
      {
        headline: "Mathematik",
        kind: "Übung",
        teacher: "",
        room: "A20.1.09",
        optional: true,
      },
      {
        headline: "Mathematik",
        kind: "Übung",
        teacher: "",
        room: "A20.1.09",
        optional: true,
      },
      {
        headline: "Mathematik",
        kind: "Vorlesung",
        teacher: "",
        room: "A20.1.07",
      },
      {
        headline: "Technische Informatik",
        kind: "Vorlesung",
        teacher: "",
        room: "A20.1.36",
      },
      {
        headline: "Technische Informatik",
        kind: "Übung",
        teacher: "",
        room: "A20.1.09",
      },
      null,
    ],
  },
  {
    title: "Donnerstag",
    items: [
      null,
      {
        headline: "Programmieren",
        kind: "Vorlesung",
        teacher: "Herziberzi",
        room: "A20.1.36",
        optional: true,
      },
      {
        headline: "Programmieren",
        kind: "Praktikum",
        teacher: "Herziberzi",
        room: "A20.0.07",
      },
      null,
      null,
      null,
    ],
  },
  {
    title: "Freitag",
    items: [
      null,
      {
        headline: "Praktische Informatik",
        kind: "Vorlesung",
        teacher: "",
        room: "A21.0.01",
        optional: true,
      },
      {
        headline: "Praktische Informatik",
        kind: "Praktikum",
        teacher: "",
        room: "A21.0.01",
      },
      null,
      null,
      null,
    ],
  },
];

const timeItems: TimePlanItem[] = [
  { start: 8, end: 9.3, text: "8:00 - 9:30" },
  { start: 9.5, end: 11.2, text: "9:50 - 11:20" },
  { start: 11.3, end: 13.0, text: "11:30 - 13:00" },
  { start: 14.0, end: 15.3, text: "14:00 - 15:30" },
  { start: 15.45, end: 17.15, text: "15:45 - 17:15" },
  { start: 17.3, end: 19.0, text: "17:30 - 19:00" },
];

function App() {
  return (
    <div className={styles.higherContent}>
      <div className={styles.centeredTT}>
        <TimeTable timeItems={timeItems} days={days} />
      </div>
    </div>
  );
}

export default App;
