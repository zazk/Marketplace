import React from 'react';
import IntroWithStatistics from '../ProjectInfo/IntroWithStatistics';
import Transactions from '../Transactions';
import ListProjects from '../project/ListProjects';
import { Title, Wrapper } from './style';
function ShareImpactInternal() {
  return (
    <>
      <IntroWithStatistics
        title="Google"
        cto={false}
        description="So far in 2019, Google has compensated its emmisions by backing 3 different projects"
      ></IntroWithStatistics>
      <Wrapper>
        <Title>Projects backed in 2019</Title>
        <ListProjects customClass="projects-user"></ListProjects>
        <Title className="nomargin">Transaction history</Title>
        <Transactions customClass="projects-user"></Transactions>
      </Wrapper>
    </>
  );
}

export default ShareImpactInternal;
