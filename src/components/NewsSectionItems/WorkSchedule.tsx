/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { WorkSchedule } from "@/info";
import WorkScheduleList from "./WorkScheduleList";

interface WorkSchedule {
  id: number;
  date: string;
  title: string;
  text: string;
  link: string;
  image: string;
}

export default function Portfolio() {
  const [selected, setSelected] = useState<string>("work-schedule");
  const [data, setData] = useState<WorkSchedule[]>([]);
  const list = [
    {
      id: "work-schedule",
    },
    {
      id: "wqq",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "work-schedule":
        setData(WorkSchedule as WorkSchedule[]);
        break;
      case "wqq":
        setData(WorkSchedule as WorkSchedule[]);
        break;
      default:
        setData(WorkSchedule as WorkSchedule[]);
    }
  }, [selected]);

  return (
    <div>
      {data.map((d) => (
        <div className="item" rel="noreferrer" key={d.id}>
          <div className="text-white mb-[20px]">
            <span className="text-[16px]">{d.date}</span>
            <h2 className="text-[24px] max-w-[800px]">
              <a href="/News/1">{d.title}</a>
            </h2>
          </div>
          <div className="block gap-[20px] mb-[50px] sm:flex">
            <div className="basis-full max-w-[250px]">
              <a href="">
                <img
                  src={d.image}
                  alt="work-schedule"
                  className="rounded-md "
                />
              </a>
            </div>
            <div className="basis-full">
              <p className="text-[18px] mt-4 sm:mt-0">{d.text}</p>
              <div className="items-end">
                <a
                  href=""
                  className="flex-col flex text-white justify-center bg-[#087ea4] w-[180px] h-[60px] rounded-[30px] text-[20px] mt-[24px] items-center transition-all duration-300 hover:bg-[#B673F8] active:text-[22px] "
                >
                  Читать далее
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
