import React, { useState } from "react";
import SideBar from "../components/userDashboard/Sidebar";
import OverView from "../components/userDashboard/Overview";
import Profile from "../components/userDashboard/Profile";
import Application from "../components/userDashboard/Application";
import ForgetPassword from './ForgetPassword';

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  return (
    <>
      <div className="flex h-[91vh]">
        <div className="w-3/17 ">
          <SideBar active={active} setActive={setActive} />
        </div>
        <div className="w-14/17 ">
          {active === "overview" && <OverView />}
          {active === "profile" && <Profile />}
          {active === "application" && <Application />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;