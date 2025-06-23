import "./App.css";
import SignUp from "./components/signup";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/signin";
import NewTask from "./components/newTask";
import SideBar from "./components/sideBar";
import { MainContext } from "./components/context";
import { useContext, useRef } from "react";

function App() {
  const taskRef = useRef<HTMLDivElement | null>(null);
  const { openTask, setOpenTask } = useContext(MainContext);
  return (
    <div
      className="flex  flex-col md:flex-row min-h-[100dvh] w-full  bg-zinc-900 justify-center items-center  px-1 md:px-0"
      onClick={(e) => {
        if (openTask && !taskRef.current?.contains(e.target as Node)) {
          setOpenTask(false);
        }
      }}
    >
      <SideBar></SideBar>
      {openTask && (
        <div
          ref={taskRef}
          className={`transition-all duration-300 ease-in-out transform bg-black/50 z-50  max-w-xl w-full`}
          onTransitionEnd={() => {
            if (!openTask) setOpenTask(false);
          }}
        >
          <NewTask></NewTask>
        </div>
      )}
    </div>
  );
}

export default App;
