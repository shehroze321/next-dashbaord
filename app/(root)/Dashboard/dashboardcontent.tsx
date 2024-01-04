"use client";
import React, { useState } from "react";
import EventTypes from "./eventtypes";

const DashboardContent = ({ active, eventType, setEventType }: any) => {
  return (
    <div>
      {active === 1 && (
        <>
          <div>this is dashbard component</div>
        </>
      )}
      {/* create event */}
      {active === 2 && <CreateEvent />}
      {/* events */}
      {active === 3 && (
        <Events eventType={eventType} setEventType={setEventType} />
      )}
      {/* venues */}
      {active === 4 && <Venues />}
      {/* reports */}
      {active === 5 && <Reports />}
      {/* settings */}
      {active === 6 && <Settings />}
      {/* smscom */}
      {active === 7 && <SmsCampaigns />}
      {/* myaccount */}
      {active === 8 && <MyAccount />}
    </div>
  );
};

const CreateEvent = () => {
  return <div>Create Event</div>;
};
const Events = ({ eventType, setEventType }: any) => {
  return (
    <div>
      {" "}
      <EventTypes eventType={eventType} setEventType={setEventType} />
    </div>
  );
};
const Venues = () => {
  return <div>these are venues </div>;
};
const Reports = () => {
  return <div>these is Report </div>;
};
const Settings = () => {
  return <div>these is setting page </div>;
};
const SmsCampaigns = () => {
  return <div>these is SmsCampaigns page </div>;
};
const MyAccount = () => {
  return <div>these is MyAccount page </div>;
};

export default DashboardContent;
