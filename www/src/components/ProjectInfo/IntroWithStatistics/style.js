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
  @media screen and (max-width: 600px) {
    position: relative;
    height: auto;
    padding-top: 30px;
    padding-bottom: 100px;
    &.not-space {
      padding-bottom: 30px;
    }
  }
`;
export const Text = styled.div`
  width: 50%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Description = styled.div`
  font-size: calc(15px + (18 - 15) * ((100vw - 320px) / (1920 - 320)));
  line-height: 24px;
  max-width: 375px;
  padding-right: 20px;
  box-sizing: border-box;
  margin-bottom: 40px;
  p {
    margin: 0;
  }
  @media screen and (max-width: 600px) {
    max-width: none;
    padding-right: 0;
  }
`;
export const Title = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  font-size: calc(25px + (50 - 25) * ((100vw - 320px) / (1920 - 320)));
  font-weight: 500;
  font-family: ${theme.fonts.secondary};
`;

export const ListStatistic = styled.div`
  width: 50%;
  display: flex;
  flex-flow: row wrap;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
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
  @media screen and (max-width: 768px) {
    span {
      font-size: 32px;
    }
    em {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 480px) {
    span {
      font-size: 28px;
      line-height: 25px;
    }
    em {
      font-size: 12px;
    }
  }
`;

export const ItemDescription = styled.div`
  margin-bottom: 0;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const ButtonShare = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
  }
`;
