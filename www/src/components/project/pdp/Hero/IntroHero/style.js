import styled from 'styled-components';
export const Intro = styled.div`
  max-width: 700px;
  margin: auto;
  text-align: left;
  @media screen and (max-width: 768px) {
    padding: 30px 0;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 0;
  }
`;

export const IntroTitle = styled.h3`
  font-size: calc(25px + (38 - 25) * ((100vw - 320px) / (1920 - 320)));
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  color: #fff;
  line-height: 40px;
  margin: 0px;
  margin-bottom: 15px;
  @media screen and (max-width: 960px) {
    line-height: 30px;
  }
`;
export const IntroDescripcion = styled.p`
  font-size: 16px;
  color: #4a4a4a;
  font-family: 'Lato', sans-serif;
  color: #fff;
  line-height: 26px;
  margin: 0px;
  @media screen and (max-width: 640px) {
    font-size: 16px;
    line-height: 20px;
  }
`;
