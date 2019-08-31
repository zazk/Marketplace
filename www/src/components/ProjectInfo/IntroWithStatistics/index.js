import React, { useState } from 'react';
import {
  IntroWrap,
  Content,
  Text,
  Title,
  ListStatistic,
  ItemStatistic,
  Number,
  ItemDescription,
  Description,
  ButtonShare,
} from './style';
import ModalBox from '../../features/ModalBox/index';
import ShareImpact from '../../ShareImpact';
function IntroWithStatistics({ title, description, cto }) {
  const [openLightbox, setOpenLightbox] = useState(0);

  function toggle(set) {
    setOpenLightbox(set);
  }
  return (
    <IntroWrap>
      <Content className={cto ? '' : 'not-space'}>
        <Text>
          <Title>{title}</Title>
          {description && (
            <Description>
              <p>{description}</p>
            </Description>
          )}
          {cto && (
            <>
              <ButtonShare>
                <button className="btn white medium" onClick={() => toggle(1)}>
                  <span>Share your impact</span>
                </button>
              </ButtonShare>
              <ModalBox isOpen={openLightbox} toggle={toggle}>
                <ShareImpact toggle={toggle}></ShareImpact>
              </ModalBox>
            </>
          )}
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
