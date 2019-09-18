import React from 'react';
import { WrapInfoItem, InfoDescriptionItem } from './style';
function InfoDescription() {
  return (
    <div className="wrap-info-description">
      <WrapInfoItem>
        <InfoDescriptionItem>
          <span>Boulder Creek</span>
          <p>California, United States</p>
        </InfoDescriptionItem>

        <InfoDescriptionItem>
          <span>Improved Forest Management</span>
          <p>Reduced harvesting and tree enrichment</p>
        </InfoDescriptionItem>
      </WrapInfoItem>
    </div>
  );
}
export default InfoDescription;
