import React from 'react';
import { Wrap, Title, List, Item, MoreTransaccions, TooltipWrap } from './style';
function ProjectOffsetHistory() {
  return (
    <>
      <Wrap>
        <Title>Offset history</Title>
        <List>
          <Item>
            <strong>10 credits</strong>
            on August 19, 2019
          </Item>
          <Item>
            <strong>10 credits</strong>
            on July 3, 2019
          </Item>
        </List>
        <MoreTransaccions>
          2 more transactions
          <TooltipWrap>
            <p>10 credits on June 5th, 2019</p>
            <p>15 credits on April 8th, 2019</p>
          </TooltipWrap>
        </MoreTransaccions>
      </Wrap>
    </>
  );
}

export default ProjectOffsetHistory;
