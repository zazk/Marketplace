import React from 'react';
import IntroWithStatistics from '../components/ProjectInfo/IntroWithStatistics';
import Transactions from '../components/Transactions';

function MyCertificates() {
  return (
    <>
      <IntroWithStatistics title="My certificates" cto={true}></IntroWithStatistics>
      <Transactions></Transactions>
    </>
  );
}

export default MyCertificates;
