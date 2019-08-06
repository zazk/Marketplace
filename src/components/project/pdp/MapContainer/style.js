import styled from 'styled-components/macro';

export const FeatureMap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
export const MapFeature = styled.div`
  position: relative;
  width: 100%;
  height: 415px;
  figure {
    width: 28%;
    height: 400px;
  }
  @media screen and (max-width: 745px) {
    margin-top: 30px;
  }
  @media screen and (max-width: 480px) {
    figure {
      width: 100%;
      margin-bottom: 20px;
      text-align: center;
    }
  }
`;
export const ImagenTextItem = styled.div`
  margin-bottom: 14px;
  h3,
  p {
    margin: 0;
  }
  h3 {
    margin: 0;
    font-size: 22px;
    font-weight: normal;
  }
  p {
    font-size: 12px;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
  }
  @media screen and (max-width: 480px) {
    text-align: left;
  }
`;
export const InfoFigure = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
  @media screen and (max-width: 640px) {
    max-width: 285px;
    margin: auto;
  }
`;

export const ImagenNumbers = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 20px;
`;
export const NumbersItem = styled.div`
  width: 33.33%;
  font-size: 12px;
  color: #969db6;
  &:nth-child(2) {
    text-align: center;
  }
  &:last-child {
    text-align: right;
  }
`;

export const InfoTitle = styled.h3`
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  font-size: 16px;
  margin: 0;
  margin-bottom: 20px;
`;
export const ImagenInfo = styled.div`
  z-index: 1000;
  width: 324px;
  padding: 20px;
  padding-bottom: 28px;
  box-sizing: border-box;
  height: 283px;
  border-radius: 6px;
  box-shadow: 0 2px 40px 0 rgba(38, 43, 65, 0.39);
  background-color: #ffffff;
  @media screen and (max-width: 640px) {
    width: 100%;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const ContentMain = styled.div`
  z-index: 2;
  position: relative;
  align-items: center;
  height: 100%;
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
`;
