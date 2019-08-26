import React from 'react';
import Statistics from '../components/ProjectInfo/statistics';
import IntroCto from '../components/ProjectInfo/IntroCto';
import ListProjects from '../components/project/ListProjects';
import IntroWithStatistics from '../components/ProjectInfo/IntroWithStatistics';

function MyCertificates() {
  return (
    <>
      <IntroWithStatistics></IntroWithStatistics>
      <ListProjects></ListProjects>
    </>
  );
}

export default MyCertificates;
