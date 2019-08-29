import React from 'react';
import Statistics from '../components/ProjectInfo/statistics';
import ListProjects from '../components/project/ListProjects';

function Explore() {
  return (
    <>
      <Statistics></Statistics>
      <ListProjects customClass="list-default"></ListProjects>
    </>
  );
}

export default Explore;
