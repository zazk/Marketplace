import React from 'react';
import IntroCto from '../components/ProjectInfo/IntroCto';
import ListProjects from '../components/project/ListProjects';

function ExploreRequest() {
  return (
    <>
      <IntroCto></IntroCto>
      <ListProjects customClass="list-default"></ListProjects>
    </>
  );
}

export default ExploreRequest;
