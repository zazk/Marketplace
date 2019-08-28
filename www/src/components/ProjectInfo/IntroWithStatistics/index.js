import React, { useState } from 'react';
import { IntroWrap, Content, Text, Title, ListStatistic, ItemStatistic, Number, ItemDescription } from './style';
import ModalBox from '../../features/ModalBox/index';
import ShareImpact from '../../ShareImpact';
function IntroWithStatistics() {
  const [openLightbox, setOpenLightbox] = useState(0);

  const toggle = () => {
    setOpenLightbox(1);
  };
  return (
    <IntroWrap>
      <Content>
        <Text>
          <Title>My certificates</Title>

          <button className="btn white medium" onClick={toggle}>
            <span>Share your impact</span>
          </button>
          <ModalBox isOpen={openLightbox} toggle={toggle}>
            <ShareImpact></ShareImpact>
          </ModalBox>
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

export default IntroWithStatistics;
