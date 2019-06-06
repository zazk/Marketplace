import React from 'react';
import ProjectTimeline from './ProjectTimeline';
import ProjectFiles from './ProjectFiles';
import UnCompliant from './UnCompliant';

function SideBar({ data }) {
  return (
    <div className="leakage-sidebar">
      <div className="sidebar-item-row">
        <ProjectTimeline data={data} />
      </div>

      <div className="sidebar-item-row cuadros">
        <UnCompliant />
      </div>
      <div className="sidebar-item-row">
        <ProjectFiles />
      </div>

      <style jsx>
        {`
          .leakage-sidebar {
            width: 28%;
            padding-top: 10px;

            @media screen and (max-width: 768px) {
              width: 32%;
            }
            @media screen and (max-width: 640px) {
              width: 100%;
              padding-top: 35px;
              padding-left: 40px;
              box-sizing: border-box;
              display: flex;
              flex-flow: row wrap;
              .sidebar-item-row {
                width: 50%;
                &.cuadros {
                  width: 100%;
                }
              }
            }
            @media screen and (max-width: 480px) {
              .sidebar-item-row {
                width: 100%;
              }
            }
          }

          .sidebar-item-row {
            margin-bottom: 50px;
          }
        `}
      </style>
    </div>
  );
}

export default SideBar;
