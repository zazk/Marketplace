import styled from 'styled-components/macro';
import theme from '../../../utils/theme';
export const IntroWrap = styled.div`
  background-image: linear-gradient(102deg, #0fd856, #01a697);
`;

export const Content = styled.div`
  max-width: 1024px;
  width: 94%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  height: 276px;
  align-items: center;
  color: ${theme.color.mono.white};
`;
export const Text = styled.div`
  width: 50%;
`;

export const Title = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: 500;
  font-family: ${theme.fonts.secondary};
`;

export const ListStatistic = styled.div`
  width: 50%;
  display: flex;
  flex-flow: row wrap;
`;

export const ItemStatistic = styled.div`
  width: 50%;
`;

export const Number = styled.div`
  display: flex;
  font-family: ${theme.fonts.secondary};
  font-weight: 400;
  align-items: flex-end;
  span {
    margin-right: 5px;
    font-size: 40px;
    line-height: 32px;
  }
  em {
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
  }
`;

export const ItemDescription = styled.div`
  margin-bottom: 0;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
`;
