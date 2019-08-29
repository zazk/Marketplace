import React from 'react';
import {
  IntroWrap,
  Content,
  Text,
  Title,
  Description,
  ProgressCalculated,
  Numbers,
  NumberItem,
  ProgressBar,
  ProgressbarItem,
  DescriptionBar,
  DescriptionItem,
} from './style';
function IntroWithStatistics({ title, description, percentage, customClass }) {
  console.log('percentage', percentage);
  return (
    <IntroWrap>
      <Content>
        <Text>
          <Title>{title}</Title>
          <Description>
            <p>{description}</p>
          </Description>
          <button className="btn white medium">
            <span>View certificates</span>
          </button>
        </Text>
        <ProgressCalculated>
          <Numbers>
            <NumberItem className={customClass === 'start-position' && 'active'}>
              <span>40</span>
              <em>tn CO2e</em>
            </NumberItem>
            <NumberItem className={customClass === 'end-position' && 'active'}>
              <span>40</span>
              <em>tn CO2e</em>
            </NumberItem>
          </Numbers>
          <ProgressBar>
            <ProgressbarItem percentage={percentage} />
          </ProgressBar>
          <DescriptionBar>
            <DescriptionItem className={customClass === 'start-position' && 'active'}>CURRENT OFFSET</DescriptionItem>
            <DescriptionItem className={customClass === 'end-position' && 'active'}>
              yearly FOOTPRINT ESTIMATE
            </DescriptionItem>
          </DescriptionBar>
        </ProgressCalculated>
      </Content>
    </IntroWrap>
  );
}

export default IntroWithStatistics;
