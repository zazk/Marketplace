import React from 'react';
import Statistics from '../components/ProjectInfo/statistics';
import IntroCto from '../components/ProjectInfo/IntroCto';
import ListProjects from '../components/project/ListProjects';
import IntroWithStatistics from '../components/ProjectInfo/IntroWithStatistics';

function Explore() {
  return (
    <>
      <Statistics></Statistics>
      <ListProjects></ListProjects>
    </>
  );
}

export default Explore;
