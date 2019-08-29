import React from 'react';
import { ProgressBar, ProgressbarItem, ProgresNumbers, ProjectProgress } from './style';

function ProjectProgressBar({ data, type }) {
  return (
    <ProjectProgress className={type && type}>
      <ProgressBar>
        <ProgressbarItem style={{ width: `80%` }} />
      </ProgressBar>
      <ProgresNumbers>
        <p>
          <strong>{data.credits_avail.quatinty}</strong>
          carbon credits available
        </p>
      </ProgresNumbers>
    </ProjectProgress>
  );
}

export default ProjectProgressBar;
