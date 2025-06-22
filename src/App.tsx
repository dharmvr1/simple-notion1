import "./App.css";
import SignUp from "./components/signup";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from "./components/signin";
import SideBar from "./components/sideBar";
function App() {
  return (
<div className="min-h-screen bg-zinc-900">
  <SideBar></SideBar>
</div>
  );
}

export default App;
