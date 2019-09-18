import React from 'react';
import IntroCalculated from '../ProjectInfo/IntroCalculated';
import ProjectList from '../project/List';
import { Title, Wrapper, PreviousYears } from './style';
function ProjectsBacked() {
  return (
    <>
      <IntroCalculated
        customClass="start-position"
        percentage="50"
        title="Google"
        description="So far in 2019, you’ve offset your emmisions through 3 different projects"
      />
      <Wrapper>
        <Title>Projects backed in 2019</Title>
        <ProjectList customClass="projects-backed list-default" />
        <PreviousYears>Show projects backed on previous years</PreviousYears>
      </Wrapper>
    </>
  );
}

export default ProjectsBacked;
