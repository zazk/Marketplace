import React from 'react';
import { SidebarItem, TimeLine, SidebarChecked } from './style';
function ProjectTimeline({ data }) {
  const project = data;
  const list = project.timeline;
  return (
    <div>
      <h3 className="sidebar-title">Project Timeline</h3>
      <TimeLine>
        {list.map((item, i) => (
          <SidebarItem key={i}>
            <SidebarChecked className="active">
              <img src="/static/iconos/checked.svg" width="19" alt="" />
            </SidebarChecked>
            <h4>{item.date}</h4>
            <p>{item.text}</p>
          </SidebarItem>
        ))}
      </TimeLine>
    </div>
  );
}
export default ProjectTimeline;
