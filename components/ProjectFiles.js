import React from 'react';
const listFiles = [
  { title: 'Verification statement', date: '2 February, 2019' },
  { title: 'Monitoring report', date: '3 February, 2019' },
  { title: 'Verification report', date: '4 February, 2019' },
  { title: 'Verification statement', date: '5 February, 2019' },
];
function ProjectFiles() {
  return (
    <div>
      <h3 className="sidebar-title">Project files</h3>
      <div className="sidebar-row files">
        {listFiles.map((item, i) => (
          <a key={i} href="" className="sidebar-item">
            <figure>
              <img src="/static/assets/images/ico-paper.png" alt="" />
            </figure>
            <div className="file-name">
              <h3>{item.title}</h3>
              <p>{item.date}</p>
            </div>
          </a>
        ))}
        <a href="" className="sidebar-item">
          <figure>
            <img src="/static/assets/images/ico-paper.png" alt="" />
          </figure>
          <div className="file-name">
            <h3>3 more</h3>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .files {
            .sidebar-item {
              display: flex;
              text-decoration: none;
              margin-bottom: 10px;
              &:hover {
                h3 {
                  text-decoration: underline;
                }
              }
              figure {
                margin-right: 10px;
              }
              .file-name {
                flex: 1;
                color: #4a4a4a;
                h3 {
                  font-size: 16px;
                  line-height: 18px;
                  margin: 0;
                  font-weight: normal;
                }
                p {
                  font-size: 12px;
                  line-height: 28px;
                  margin: 0;
                }
              }
            }
            @media screen and (max-width: 768px) {
              .sidebar-item {
                .file-name h3 {
                  font-size: 14px;
                }
              }
            }
          }
        `}
      </style>
    </div>
  );
}
export default ProjectFiles;