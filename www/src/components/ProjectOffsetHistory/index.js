import React from 'react';
import { Wrap, Title, List, Item, MoreTransaccions } from './style';
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
        <MoreTransaccions>2 more transactions</MoreTransaccions>
      </Wrap>
    </>
  );
}

export default ProjectOffsetHistory;
