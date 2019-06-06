import React from 'react';
function ProjectTimeline({ data }) {
  const project = data;
  const list = project.timeline;
  return (
    <div>
      <h3 className="sidebar-title">Project Timeline</h3>
      <div className="sidebar-row timeline">
        {list.map((item, i) => (
          <div key={i} className="sidebar-item">
            <span className="sidebar-checked active">
              <img src="/static/iconos/checked.svg" width="19" alt="" />
            </span>
            <h4>{item.date}</h4>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .timeline {
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
                font-weight: 700;
              }
              p {
                font-size: 12px;
                color: #969db6;
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
export default ProjectTimeline;
