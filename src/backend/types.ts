type DayItem = {
  title: string;
  items: (TableEntry | null)[];
};

type TableEntry = {
  headline: string;
  kind: "Vorlesung" | "Praktikum" | "Übung";
  teacher: string;
  room: string;
  optional?: boolean;
};

type TimePlanItem = {
  start: number;
  end: number;
  text: string;
};

export type { DayItem, TableEntry, TimePlanItem };
