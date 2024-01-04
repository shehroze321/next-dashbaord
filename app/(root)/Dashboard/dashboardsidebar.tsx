"use client";
import Link from "next/link";
// import "./index.css";
import { FaUser } from "react-icons/fa";
import { TfiDashboard } from "react-icons/tfi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineEventNote } from "react-icons/md";
import { FaLocationDot, FaRegCircle } from "react-icons/fa6";
import { TbReportMoney } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import React, { useState } from "react";
const DashboardSidebar = ({
  active,
  setActive,
  eventType,
  setEventType,
}: any) => {
  console.log("🚀 ~ file: dashboardsidebar.tsx:23 ~ eventType:", eventType);
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <ul>
        <li>
          <Link href="/" passHref>
            <div className="nav-item">
              <IoArrowBackOutline size={20} color="#ffe100" />
            </div>
          </Link>
        </li>
        <li>
          <div>
            <div className="nav-item" onClick={() => setActive(1)}>
              <TfiDashboard size={20} color={active === 1 ? "#ffe100" : ""} />{" "}
              <span
                className={`${active === 1 ? "active-text" : "null"} nav-text `}
              >
                Dashboard
              </span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div className="nav-item" onClick={() => setActive(2)}>
              <IoMdAddCircleOutline
                size={20}
                color={active === 2 ? "#ffe100" : ""}
              />{" "}
              <span
                className={`${active === 2 ? "active-text" : "null"} nav-text `}
              >
                {" "}
                Create An Event
              </span>
            </div>
          </div>
        </li>
        <li>
          <div>
            <div className="nav-item" onClick={() => setActive(3)}>
              <MdOutlineEventNote size={20} />
              <span className={`nav-text `}>Events</span>
              {open === false && (
                <IoIosArrowForward size={20} onClick={() => setOpen(true)} />
              )}
              {open === true && (
                <IoIosArrowDown size={20} onClick={() => setOpen(false)} />
              )}
            </div>
          </div>
        </li>
        {open === true && (
          <div className="event-menue">
            <li>
              <div>
                <div className="nav-item" onClick={() => setEventType(1)}>
                  <FaRegCircle
                    size={10}
                    color={eventType === 1 ? "#ffe100" : ""}
                  />{" "}
                  <span
                    className={`${
                      eventType === 1 ? "active-text" : "null"
                    } nav-text `}
                  >
                    Enter Event Details
                  </span>{" "}
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="nav-item" onClick={() => setEventType(2)}>
                  <FaRegCircle
                    size={10}
                    color={eventType === 2 ? "#ffe100" : ""}
                  />{" "}
                  <span
                    className={`${
                      eventType === 2 ? "active-text" : "null"
                    } nav-text `}
                  >
                    Define Ticket Prices{" "}
                  </span>{" "}
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="nav-item" onClick={() => setEventType(3)}>
                  <FaRegCircle
                    size={10}
                    color={eventType === 3 ? "#ffe100" : ""}
                  />{" "}
                  <span
                    className={`${
                      eventType === 3 ? "active-text" : "null"
                    } nav-text `}
                  >
                    Publish Event{" "}
                  </span>{" "}
                </div>
              </div>
            </li>
            <li>
              <div>
                <div className="nav-item" onClick={() => setEventType(4)}>
                  <FaRegCircle
                    size={10}
                    color={eventType === 4 ? "#ffe100" : ""}
                  />{" "}
                  <span
                    className={`${
                      eventType === 4 ? "active-text" : "null"
                    } nav-text `}
                  >
                    Share Event{" "}
                  </span>{" "}
                </div>
              </div>
            </li>
          </div>
        )}
        <li>
          <div>
            <div className="nav-item" onClick={() => setActive(4)}>
              <FaLocationDot size={20} color={active === 4 ? "#ffe100" : ""} />{" "}
              <span
                className={`${active === 4 ? "active-text" : "null"} nav-text `}
              >
                Venues
              </span>{" "}
            </div>
          </div>
        </li>
        <li>
          <div>
            <div className="nav-item" onClick={() => setActive(5)}>
              <TbReportMoney size={20} color={active === 5 ? "#ffe100" : ""} />{" "}
              <span
                className={`${active === 5 ? "active-text" : "null"} nav-text `}
              >
                Reports
              </span>{" "}
            </div>
          </div>
        </li>
        <li>
          <div>
            <div className="nav-item" onClick={() => setActive(6)}>
              <MdOutlineSettings
                size={20}
                color={active === 6 ? "#ffe100" : ""}
              />{" "}
              <span
                className={`${active === 6 ? "active-text" : "null"} nav-text `}
              >
                Settings
              </span>{" "}
            </div>
          </div>
        </li>
        <li>
          <div>
            <div className="nav-item" onClick={() => setActive(7)}>
              <FaRegMessage size={20} color={active === 7 ? "#ffe100" : ""} />{" "}
              <span
                className={`${active === 7 ? "active-text" : "null"} nav-text `}
              >
                Sms Campaigns
              </span>{" "}
            </div>
          </div>
        </li>
        <li>
          <div>
            <div className="nav-item" onClick={() => setActive(8)}>
              <FaUser size={20} color={active === 8 ? "#ffe100" : ""} />
              <span
                className={`${active === 8 ? "active-text" : "null"} nav-text `}
              >
                {" "}
                My Account
              </span>{" "}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
