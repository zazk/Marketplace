import React from 'react';
import Statistics from '../components/ProjectInfo/statistics';
import IntroCto from '../components/ProjectInfo/IntroCto';
import ListProjects from '../components/project/ListProjects';
import IntroWithStatistics from '../components/ProjectInfo/IntroWithStatistics';

function ExploreRequest() {
  return (
    <>
      <IntroCto></IntroCto>
      <ListProjects></ListProjects>
    </>
  );
}

export default ExploreRequest;
