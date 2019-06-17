import React from 'react';

function Events() {
  return (
    <div className="wraps-events">
      <h3 className="aside-title">upcoming events</h3>
      <div className="spaces events-list">
        <div className="events-item">
          <span className="event-date">03/11</span>
          <div className="event-inner">
            <h3 className="event-title">Tree planting</h3>
            <span className="event-tag" style={{ backgroundColor: `#bef8f1` }}>
              biomass ++
            </span>
            <span className="event-tag" style={{ backgroundColor: `#b6f1d0` }}>
              biodiversity ++
            </span>
          </div>
        </div>
        <div className="events-item">
          <span className="event-date">03/11</span>
          <div className="event-inner">
            <h3 className="event-title">Tree planting</h3>
            <span className="event-tag" style={{ backgroundColor: `#bef8f1` }}>
              biomass ++
            </span>
            <span className="event-tag" style={{ backgroundColor: `#b6f1d0` }}>
              biodiversity ++
            </span>
          </div>
        </div>
        <div className="events-item">
          <span className="event-date">03/11</span>
          <div className="event-inner">
            <h3 className="event-title">Tree planting</h3>
            <span className="event-tag" style={{ backgroundColor: `#bef8f1` }}>
              biomass ++
            </span>
            <span className="event-tag" style={{ backgroundColor: `#b6f1d0` }}>
              biodiversity ++
            </span>
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
            margin: 0;
            line-height: 100%;
            font-size: 16px;
            margin-bottom: 8px;
            font-family: 'Work Sans', sans-serif;
            &:before {
              content: '';
              width: 15px;
              height: 15px;
              display: block;
              position: absolute;
              top: 30px;
              left: 0;
              background-image: url('/static/iconos/hoja-r.svg');
              background-size: 100%;
              background-repeat: no-repeat;
            }
          }
          .event-date {
            position: absolute;
            top: 30px;
            left: 0;
            font-size: 14px;
            letter-spacing: 2px;
            color: rgba(0, 0, 0, 0.5);
          }
          .events-list {
            position: relative;
          }
          .event-inner {
            position: relative;
            padding: 20px 0;
            padding-left: 30px;
            &:before {
              content: '';
              display: block;
              position: absolute;
              left: 0;
              top: 0;
              display: block;
              width: 1px;
              height: 100%;
              opacity: 0.5;
              background-color: #08c075;
            }
          }
          .event-wrap-tags {
            padding-left: 115px;
            padding-bottom: 15px;
            margin-top: 5px;
          }
          .events-item {
            position: relative;
            padding-left: 70px;
            &:nth-child(even) {
              .event-title {
                &:before {
                  left: inherit;
                  right: 100%;
                  background-image: url('/static/iconos/hoja-l.svg');
                }
              }
            }
          }
          .event-tag {
            display: inline-block;
            font-size: 12px;
            color: #0e745c;
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
