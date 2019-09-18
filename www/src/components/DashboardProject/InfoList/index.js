import React from 'react';
import { DescriptionList, ProgressTitle, ProgressBar, ProgressbarItem, ProgressDescription } from './style';
function InfoList() {
  return (
    <>
      <ProgressTitle>524 credits available</ProgressTitle>
      <ProgressBar>
        <ProgressbarItem />
      </ProgressBar>
      <ProgressDescription>
        <p>This project generates 725 per year</p>
      </ProgressDescription>

      <DescriptionList>
        <span>Bluesource</span>
        <p>Project developer</p>
      </DescriptionList>
    </>
  );
}
export default InfoList;
