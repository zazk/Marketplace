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
  width: 56%;
`;
export const Title = styled.h3`
  margin: 0;
  font-size: 50px;
  font-weight: 500;
  font-family: ${theme.fonts.secondary};
`;
export const Description = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  line-height: 24px;
`;

export const Cto = styled.div`
  width: 44%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
