import React from 'react';
import { FileName, SidebarItem } from './style';
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
          <SidebarItem key={i}>
            <figure>
              <img src="/static/iconos/icon-paper.svg" width="11" alt="" />
            </figure>
            <FileName>
              <h3>{item.title}</h3>
              <p>{item.date}</p>
            </FileName>
          </SidebarItem>
        ))}
        <SidebarItem className="more">
          <figure>
            <img src="/static/iconos/icon-paper.svg" width="11" alt="" />
          </figure>
          <div className="file-name">
            <h3>3 more...</h3>
          </div>
        </SidebarItem>
      </div>
    </div>
  );
}
export default ProjectFiles;
