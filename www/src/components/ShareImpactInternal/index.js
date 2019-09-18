import React from 'react';
import IntroWithStatistics from '../ProjectInfo/IntroWithStatistics';
import Transactions from '../Transactions';
import ProjectList from '../project/List';
import { Title, Wrapper } from './style';
function ShareImpactInternal() {
  return (
    <>
      <IntroWithStatistics
        title="Google"
        cto={false}
        description="So far in 2019, Google has compensated its emmisions by backing 3 different projects"
      />
      <Wrapper>
        <Title>Projects backed in 2019</Title>
        <ProjectList customClass="projects-user" />
        <Title className="nomargin">Transaction history</Title>
        <Transactions customClass="projects-user" />
      </Wrapper>
    </>
  );
}

export default ShareImpactInternal;
