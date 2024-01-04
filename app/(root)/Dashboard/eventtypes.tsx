import React from "react";
const EventTypes = ({ eventType, setEventType }: any) => {
  return (
    <div>
      <div className="events-type">
        <div className="events">
          <div className="button-container">
            <div className={`event-button `} onClick={() => setEventType(1)}>
              1. Enter Event Details
            </div>
            <div className={` ${eventType === 1 ? "oval" : "null"}`}></div>
          </div>
          <div className="button-container">
            <div className={`event-button`} onClick={() => setEventType(2)}>
              2. Define Ticket Prices
            </div>
            <div className={` ${eventType === 2 ? "oval" : "null"}`}></div>
          </div>
          <div className="button-container">
            <div className={`event-button`} onClick={() => setEventType(3)}>
              3. Publish Event{" "}
            </div>
            <div className={` ${eventType === 3 ? "oval" : "null"}`}></div>
          </div>
          <div className="button-container">
            <div className={`event-button `} onClick={() => setEventType(4)}>
              4. Share Event
            </div>
            <div className={` ${eventType === 4 ? "oval" : "null"}`}></div>
          </div>
        </div>
      </div>
      <div className="event-parts">
        {eventType === 1 && (
          <>
            <div>please Enter Event Details</div>
          </>
        )}
        {/* tikect prices */}
        {eventType === 2 && (
          <div>
            <DefinePrices />
          </div>
        )}
        {/* Publish event */}
        {eventType === 3 && (
          <div>
            <PublishEvent />
          </div>
        )}
        {/* share Event */}

        {eventType === 4 && (
          <div>
            <ShareEvent />
          </div>
        )}
      </div>
    </div>
  );
};

const DefinePrices = () => {
  return <div>This is event price</div>;
};

const PublishEvent = () => {
  return <div>Please Publish your event</div>;
};

const ShareEvent = () => {
  return <div>share your event</div>;
};

export default EventTypes;
