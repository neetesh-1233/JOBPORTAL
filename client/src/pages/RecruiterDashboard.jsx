import React, { useState } from "react";
import SideBar from "../components/recruiterDashboard/Sidebar";
import OverView from "../components/recruiterDashboard/Overview";
import Profile from "../components/recruiterDashboard/Profile";
import Application from "../components/recruiterDashboard/Application";

const RecruiterDashboard = () => {
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

export default RecruiterDashboard;