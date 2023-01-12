import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";

function DashboardLayouts() {
  return (
    <div>
      <Header />

      <div id="content">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayouts;
