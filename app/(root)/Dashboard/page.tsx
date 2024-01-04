"use client";
import Link from "next/link";
import "./index.css";
import { FaUser } from "react-icons/fa";
import { TfiDashboard } from "react-icons/tfi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineEventNote } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TbReportMoney } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { IoArrowBackOutline } from "react-icons/io5";

// Import icons from React Icons library
import React, { useState } from "react";
import DashboardSidebar from "./dashboardsidebar";
import DashboardContent from "./dashboardcontent";
const Dashboard = () => {
  const [active, setActive] = useState(1);
  const [eventType, setEventType] = useState(1);

  console.log("🚀 ~ file: page.tsx:20 ~ Dashboard ~ active:", active);

  return (
    <div className="main_container">
      <div className="login_container">
        <div className="login_section">
          <div className="coustomer_form">
            <div className="sidebar">
              <DashboardSidebar
                active={active}
                setActive={setActive}
                eventType={eventType}
                setEventType={setEventType}
              />
            </div>
            <div className="riht-part">
              <DashboardContent
                active={active}
                eventType={eventType}
                setEventType={setEventType}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
