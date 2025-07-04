import { Plus, Search, Calendar1, CalendarDays, Sidebar } from "lucide-react";
import { SideHeadCompo } from "./sideBarCompo";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "./context";
export default function SideBar() {
  const [open, SetOpen] = useState(true);
  const { openTask, setOpenTask } = useContext(MainContext);
  useEffect(() => {
    function handleSize() {
      window.addEventListener("resize", () => {
        if (window.innerWidth < 768) {
          SetOpen(false);
        } else {
          SetOpen(true);
        }
      });
    }
    return handleSize();
  }, []);

  return (
    <div className="min-h-screen fixed top-0 left-0 ">
      {
        <div>
          {" "}
          <Sidebar
            color="white"
            onClick={() => {
              SetOpen(true);
            }}
            size={42}
            className={`${open === true ? "hidden" : "block"} pt-5`}
          ></Sidebar>
        </div>
      }

      <div
        className={` flex flex-col shadow-lg  fixed     left-0 top-0 gap-2 w-64 min-h-screen transform transition-all duration-300 ease-in-out bg-zinc-800 pt-5 px-3  max-w-[360px] ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between px-3">
          <h1 className="text-white font-medium">Dharm Singh</h1>
          <Sidebar
            color="white"
            onClick={() => {
              SetOpen(false);
            }}
          />
        </div>
        <div
          className="flex flex-col gap-3"
          onClick={() => {
            setOpenTask(true);
          }}
        >
          <SideHeadCompo
            heading="New Task"
            Icon={
              <Plus
                color="white"
                size={33}
                className="bg-blue-500 rounded-full p-1 "
              />
            }
            textColor="white"
            fontWidth="bold"
          />
          <SideHeadCompo
            heading="Search"
            Icon={
              <Search color="gray" size={30} className="rounded-full p-1 " />
            }
            textColor="white"
            fontWidth="medium"
          />
          <SideHeadCompo
            heading="Today"
            Icon={
              <Calendar1 color="gray" size={30} className="rounded-full p-1 " />
            }
            textColor="white"
            fontWidth="medium"
          />
          <SideHeadCompo
            heading="Upcoming"
            Icon={
              <CalendarDays
                color="gray"
                size={30}
                className="rounded-full p-1 "
              />
            }
            textColor="white"
            fontWidth="medium"
          />
        </div>
      </div>
    </div>
  );
}
