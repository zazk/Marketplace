import React from 'react';
import { TimeLine, TimelineItem, TimelineItemChecked } from './style';
function ProjectTimeline({ data }) {
  const project = data;
  const list = project.timeline;
  return (
    <div>
      <h3 className="sidebar-title">Project Timeline</h3>
      <TimeLine>
        {list.map((item, i) => (
          <TimelineItem key={i}>
            <TimelineItemChecked className="active">
              <img src="/static/iconos/checked.svg" width="19" alt="" />
            </TimelineItemChecked>
            <h4>{item.date}</h4>
            <p>{item.text}</p>
          </TimelineItem>
        ))}
      </TimeLine>
    </div>
  );
}
export default ProjectTimeline;
