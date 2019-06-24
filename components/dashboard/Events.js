import React from 'react';

function Events() {
  return (
    <div className="wraps-events">
      <h3 className="aside-title">upcoming events</h3>
      <div className="spaces events-list timeline-events">
        <div className="sidebar-item">
          <span className="sidebar-checked active">
            <img src="/static/iconos/checked.svg" width="19" alt="" />
          </span>
          <h4>May 12</h4>
          <p>
            <em>Tree planting</em>
            <span className="event-tag" style={{ backgroundColor: `#bef8f1` }}>
              biomass ++
            </span>
            <span className="event-tag" style={{ backgroundColor: `#b6f1d0` }}>
              biodiversity ++
            </span>
          </p>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-checked active">
            <img src="/static/iconos/checked.svg" width="19" alt="" />
          </span>
          <h4>May 17</h4>
          <p>
            <em>Tree planting</em>
            <span className="event-tag" style={{ backgroundColor: `#bef8f1` }}>
              biomass ++
            </span>
            <span className="event-tag" style={{ backgroundColor: `#b6f1d0` }}>
              biodiversity ++
            </span>
          </p>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-checked active">
            <img src="/static/iconos/checked.svg" width="19" alt="" />
          </span>
          <h4>August 5</h4>
          <p>
            <em>Tree planting</em>
            <span className="event-tag" style={{ backgroundColor: `#bef8f1` }}>
              biomass ++
            </span>
            <span className="event-tag" style={{ backgroundColor: `#b6f1d0` }}>
              biodiversity ++
            </span>
          </p>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-checked active">
            <img src="/static/iconos/checked.svg" width="19" alt="" />
          </span>
          <h4>September 16</h4>
          <p>
            <em>Tree planting</em>
            <span className="event-tag" style={{ backgroundColor: `#bef8f1` }}>
              biomass ++
            </span>
            <span className="event-tag" style={{ backgroundColor: `#b6f1d0` }}>
              biodiversity ++
            </span>
          </p>
        </div>
      </div>
      <style jsx>
        {`
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

          .timeline-events {
            font-size: 16px;
            color: #4a4a4a;
            .sidebar-item {
              padding-bottom: 20px;
              position: relative;
              padding-left: 50px;
              p,
              h4 {
                margin: 0;
              }
              h4 {
                font-size: 16px;
                color: #030922;
                font-weight: 500;
              }
              p {
                font-size: 12px;
                color: rgba(0, 0, 0, 0.5);
                text-transform: uppercase;
                em {
                  font-style: normal;
                  margin-right: 5px;
                }
              }
              &:last-child {
                padding-bottom: 0;
                &:after {
                  display: none;
                }
              }

              .sidebar-checked,
              &:after {
                content: '';
                position: absolute;
                background-color: #d8d8d8;
                display: block;
              }
              .sidebar-checked {
                width: 20px;
                height: 20px;
                top: 2px;
                border-radius: 100%;
                left: 0;
                border: 4px solid #fff;
                z-index: 2;
                &.active {
                  background-color: transparent;
                  img {
                    display: block;
                  }
                }
                img {
                  display: none;
                }
              }
              &:after {
                z-index: 1;
                top: 30px;
                left: 13px;
                width: 2px;
                height: 100%;
              }
            }
            @media screen and (max-width: 768px) {
              .sidebar-item {
                padding-left: 40px;
              }
            }
          }
        `}
      </style>
    </div>
  );
}
export default Events;
