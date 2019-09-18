import styled from 'styled-components/macro';
import theme from '../../../utils/theme';
export const StatisticsWrap = styled.div`
  background-image: linear-gradient(102deg, #0fd856, #01a697);
`;

export const StatisticsList = styled.div`
  max-width: 1024px;
  width: 94%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  height: 276px;
  align-items: center;
  @media screen and (max-width: 1024px) {
    height: 200px;
  }
  @media screen and (max-width: 480px) {
    height: 150px;
  }
`;
export const ItemStatistic = styled.div`
  width: 33.33%;
  color: ${theme.color.mono.white};
  font-family: ${theme.fonts.secondary};
  font-weight: 400;
  padding-left: 60px;
  box-sizing: border-box;
  &:first-child {
    padding-left: 0;
  }
  @media screen and (max-width: 1024px) {
    padding-left: 0;
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    width: 50%;
    &:last-child {
      width: 100%;
    }
  }
`;
export const Number = styled.p`
  margin: 0;
  font-size: calc(25px + (40 - 25) * ((100vw - 320px) / (1920 - 320)));
`;
export const Description = styled.h3`
  font-size: calc(12px + (16 - 12) * ((100vw - 320px) / (1920 - 320)));
  text-transform: uppercase;
  font-weight: 400;
  margin: 0;
`;
