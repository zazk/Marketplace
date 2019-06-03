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
            <i>{item.date}</i>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .timeline {
          font-size: 16px;
          color: #4a4a4a;
          .sidebar-item {
            padding-bottom: 20px;
            position: relative;
            padding-left: 60px;
            p {
              margin: 0;
            }
            &:last-child {
              padding-bottom: 0;
              &:after {
                display: none;
              }
            }

            &:before,
            &:after {
              content: '';
              position: absolute;
              background-color: #d8d8d8;
              display: block;
            }
            &:before {
              width: 20px;
              height: 20px;
              top: 8px;
              border-radius: 100%;
              left: 0;
              border: 4px solid #fff;
              z-index: 2;
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
            font-size: 14px;
            .sidebar-item {
              padding-left: 40px;
            }
          }
        }
      `}</style>
    </div>
  );
}
export default ProjectTimeline;
