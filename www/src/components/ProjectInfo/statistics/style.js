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
  justify-content: space-between;
  height: 276px;
  align-items: center;
`;
export const ItemStatistic = styled.div`
  width: 33.33%;
  color: ${theme.color.mono.white};
  font-family: ${theme.fonts.secondary};
  font-weight: 400;
`;
export const Number = styled.p`
  margin: 0;
  font-size: 40px;
`;
export const Description = styled.h3`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 400;
  margin: 0;
`;
