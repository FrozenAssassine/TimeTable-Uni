import styles from "./App.module.scss";
import type { DayItem, TimePlanItem } from "./backend/types";
import TimeTable from "./components/timetable/timeTable";

const days: DayItem[] = [
  {
    title: "Montag",
    items: [
      null,
      null,
      null,
      {
        headline: "Mathematik",
        kind: "Vorlesung",
        teacher: "",
        room: "A20.1.36",
      },
      {
        headline: "Mathematik",
        kind: "Übung",
        teacher: "",
        room: "A20.1.36",
        optional: true,
      },
      {
        headline: "Mathematik",
        kind: "Übung",
        teacher: "",
        room: "A20.1.36",
        optional: true,
      },
    ],
  },
  {
    title: "Dienstag",
    items: [
      {
        headline: "Mathematik",
        kind: "Vorlesung",
        teacher: "",
        room: "A21.0.03",
      },
      {
        headline: "Mathematik",
        kind: "Übung",
        teacher: "",
        room: "A21.0.03",
        optional: true,
      },
      {
        headline: "Theoretische Informatik",
        kind: "Vorlesung",
        teacher: "",
        room: "D15.0.01",
      },
      {
        headline: "Theoretische Informatik",
        kind: "Übung",
        teacher: "",
        room: "D15.0.01",
      },
      null,
      null,
    ],
  },
  {
    title: "Mittwoch",
    items: [
      {
        headline: "Programmieren",
        kind: "Vorlesung",
        teacher: "",
        room: "A20.1.36",
      },
      {
        headline: "Programmieren",
        kind: "Übung",
        teacher: "",
        room: "A20.1.36",
      },
      {
        headline: "Programmieren",
        kind: "Praktikum",
        teacher: "",
        room: "A20.0.07",
        optional: true,
      },
      {
        headline: "Programmieren",
        kind: "Praktikum",
        teacher: "",
        room: "A20.0.07",
        optional: true,
      },
      {
        headline: "Programmieren",
        kind: "Praktikum",
        teacher: "",
        room: "A20.0.07",
        optional: true,
      },
      null,
    ],
  },
  {
    title: "Donnerstag",
    items: [
      {
        headline: "Praktische Informatik",
        kind: "Praktikum",
        teacher: "",
        room: "A20.1.08/09",
      },
      {
        headline: "Praktische Informatik",
        kind: "Praktikum",
        teacher: "",
        room: "A20.0.08/09",
      },
      {
        headline: "Praktische Informatik",
        kind: "Vorlesung",
        teacher: "",
        room: "A20.1.36",
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
        room: "A20.1.36",
      },
      null,
    ],
  },
  {
    title: "Freitag",
    items: [
      {
        headline: "Technische Informatik",
        kind: "Übung",
        teacher: "",
        room: "A20.2.09/10",
      },
      {
        headline: "Technische Informatik",
        kind: "Übung",
        teacher: "",
        room: "A20.2.09/10",
      },
      {
        headline: "Technische Informatik",
        kind: "Praktikum",
        teacher: "",
        room: "A20.0.09",
      },
      {
        headline: "Technische Informatik",
        kind: "Übung",
        teacher: "",
        room: "A20.2.09/10",
      },
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
    <div className={styles.centeredTT}>
      <TimeTable timeItems={timeItems} days={days} />
    </div>
  );
}

export default App;
