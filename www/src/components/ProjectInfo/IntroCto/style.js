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
  @media screen and (max-width: 1024px) {
    height: 200px;
  }
  @media screen and (max-width: 640px) {
    height: auto;
    padding: 30px 0;
  }
`;
export const Text = styled.div`
  width: 56%;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;
export const Title = styled.h3`
  margin: 0;
  font-size: calc(25px + (50 - 25) * ((100vw - 320px) / (1920 - 320)));
  font-weight: 500;
  font-family: ${theme.fonts.secondary};
`;
export const Description = styled.div`
  font-size: calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)));
  font-weight: 400;
  margin: 0;
  line-height: 24px;
`;

export const Cto = styled.div`
  width: 44%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 640px) {
    width: 100%;
  }

  @media screen and (max-width: 640px) {
    justify-content: center;
    margin-top: 30px;
  }
`;
