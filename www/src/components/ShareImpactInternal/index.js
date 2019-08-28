import React from 'react';
import IntroWithStatistics from '../ProjectInfo/IntroWithStatistics';
import Transactions from '../Transactions';
import ListProjects from '../project/ListProjects';
function ShareImpactInternal() {
  return (
    <>
      <IntroWithStatistics
        title="Google"
        cto={false}
        description="So far in 2019, Google has compensated its emmisions by backing 3 different projects"
      ></IntroWithStatistics>
      <ListProjects></ListProjects>
      <Transactions></Transactions>
    </>
  );
}

export default ShareImpactInternal;
