import React from "react";

interface WorkScheduleListProps {
  id: string;
  title: string;
  active: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export default function WorkScheduleList({
  id,
  title,
  active,
  setSelected,
}: WorkScheduleListProps) {
  return (
    <li
      className={active ? "WorkScheduleList active" : "WorkScheduleList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
