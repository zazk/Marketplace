import React from 'react';

function Events() {
  return (
    <div className="wraps-events">
      <h3 className="aside-title">upcoming events</h3>
      <div className="spaces">
        <div className="events-item">
          <h3 className="event-title">
            <span className="event-circle" />
            Tree planting
            <span className="event-date">In 15 days</span>
          </h3>
          <div className="event-wrap-tags">
            <span className="event-tag">biomass ++</span>
            <span className="event-tag">biodiversity ++</span>
          </div>
        </div>
        <div className="events-item">
          <h3 className="event-title">
            <span className="event-circle" />
            Tree planting
            <span className="event-date">In 15 days</span>
          </h3>
          <div className="event-wrap-tags">
            <span className="event-tag">biomass ++</span>
            <span className="event-tag">biodiversity ++</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .event-title {
            display: flex;
            font-size: 16px;
            columns: #000000;
            font-weight: 500;
            position: relative;
            padding-right: 80px;
            margin: 0;
            line-height: 100%;
            .event-date {
              position: absolute;
              top: 0;
              right: 0;
              font-size: 12px;
              color: rgba(0, 0, 0, 0.5);
            }

            .event-circle {
              width: 20px;
              height: 20px;
              border-radius: 100%;
              display: inline-block;
              background-color: #d8d8d8;
              margin-right: 10px;
            }
          }
          .event-wrap-tags {
            padding-left: 30px;
            padding-bottom: 15px;
          }
          .events-item {
            padding: 20px 0;
            border-bottom: 1px solid rgba(151, 151, 151, 0.34);
          }
          .event-tag {
            display: inline-block;
            font-size: 12px;
            color: rgba(0, 0, 0, 0.5);
            background-color: #fff;
            border-radius: 10px;
            padding: 2px 7px;
            background-color: #d8d8d8;
            text-transform: uppercase;
            margin-right: 10px;
          }
        `}
      </style>
    </div>
  );
}
export default Events;
