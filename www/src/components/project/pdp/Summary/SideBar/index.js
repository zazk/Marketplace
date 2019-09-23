import React from 'react';
import ProjectTimeline from '../../Timeline';
import ProjectFiles from '../../ProjectFiles';
import UnCompliant from '../../UnCompliant';
import { SidebarItemRow, LeakageSidebar } from './style';

function SideBar({ data }) {
  return (
    <LeakageSidebar>
      <SidebarItemRow>
        <ProjectTimeline data={data} />
      </SidebarItemRow>

      <SidebarItemRow className="cuadros">
        <UnCompliant data={data} />
      </SidebarItemRow>
      <SidebarItemRow>
        <ProjectFiles />
      </SidebarItemRow>
    </LeakageSidebar>
  );
}

export default SideBar;
