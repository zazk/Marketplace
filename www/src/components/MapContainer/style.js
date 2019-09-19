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
