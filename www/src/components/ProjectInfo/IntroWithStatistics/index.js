import React from 'react';
import { IntroWrap, Content, Text, Title, ListStatistic, ItemStatistic, Number, ItemDescription } from './style';

function IntroCto() {
  return (
    <IntroWrap>
      <Content>
        <Text>
          <Title>My certificates</Title>
          <button className="btn white medium">
            <span>Share your impact</span>
          </button>
        </Text>
        <ListStatistic>
          <ItemStatistic>
            <Number>
              <span>3</span>
              <em>tn CO2e</em>
            </Number>
            <ItemDescription>projects backed</ItemDescription>
          </ItemStatistic>
          <ItemStatistic>
            <Number>
              <span>3</span>
              <em>tn CO2e</em>
            </Number>
            <ItemDescription>projects backed</ItemDescription>
          </ItemStatistic>
        </ListStatistic>
      </Content>
    </IntroWrap>
  );
}

export default IntroCto;
