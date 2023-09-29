"use client";

import WorkSchedule from "./NewsSectionItems/WorkSchedule";

export default function NewsSection() {
  return (
    <div className="px-[10px] mb-[30px]">
      <div className="text-[20px] font-semibold text-[#A3B3BC] flex-col flex gap-[20px] ">
        <WorkSchedule />
      </div>
    </div>
  );
}
