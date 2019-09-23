import styled from 'styled-components/macro';

export const BiomassContent = styled.div`
  background-color: #fafafa;
  max-width: 1280px;
  padding: 34px 20px;
  box-sizing: border-box;
  margin: auto;
  font-size: 14px;
`;

export const BiomasGraficoDetail = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  figure {
    width: 74%;
    border-radius: 10px;
    box-shadow: 0 10px 34px 0 rgba(7, 93, 108, 0.14);
    background-color: #ffffff;
    overflow: hidden;
  }
  @media screen and (max-width: 960px) {
    figure {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
`;

export const BiomassDetail = styled.div`
  width: 217px;
  height: 124px;
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  box-sizing: border-box;
  @media screen and (max-width: 960px) {
    height: auto;
    padding-left: 0;
    margin-bottom: 20px;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    order: -1;
  }

  @media screen and (max-width: 640px) {
    width: 100%;
    order: -1;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const BiomassItems = styled.div`
  margin-top: 130px;
  border-radius: 6px;
  box-shadow: 0 3px 10px 2px rgba(3, 9, 34, 0.07), 0 0 4px 0 rgba(3, 9, 34, 0.05);
  background-color: #ffffff;
  padding-top: 18px;
  padding-bottom: 12px;
  display: flex;
  flex-flow: row wrao;
  justify-content: center;
  @media screen and (max-width: 640px) {
    margin-top: 30px;
  }
`;
export const GraphicItem = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 20px;
  align-items: center;
  @media screen and (max-width: 960px) {
    margin: 0px 10px;
    margin-bottom: 0px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 10px;
  }
  &:last-child {
    margin-bottom: 0;
  }
  span {
    width: 49px;
    display: block;
    height: 17px;
    margin-right: 15px;
    background-color: #ebedf4;
  }
  p {
    margin: 0;
    color: #969db6;
  }
  &:nth-child(2) {
    span {
      opacity: 0.49;
      background-image: linear-gradient(to right, #cbd5ff, #17b363);
    }
  }
  &:nth-child(3) {
    span {
      height: 0px;
      box-sizing: border-box;
      border-style: solid;
      border-width: 3px;
      border-image-source: linear-gradient(to right, #8c9ad6, #17b363);
      border-image-slice: 1;
    }
  }
`;
export const BiommasNumbers = styled.div`
  justify-content: space-between;
  padding: 15px 15px;
  padding-bottom: 0;
  align-items: flex-end;
  display: flex;
  flex-flow: row wrap;
`;

export const BiomasNumberItem = styled.div`
  span {
    font-size: 32px;
    font-family: 'Work Sans', sans-serif;
    line-height: 1;
  }
  p {
    margin: 0;
    color: rgba(0, 0, 0, 0.5);
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-size: 12px;
  }
  &.info {
    text-align: right;
    span {
      font-size: 20px;
    }
  }
  .biommas-icon {
    margin-left: 5px;
    img {
      width: 14px;
      height: auto;
    }
  }
  @media screen and (max-width: 480px) {
    span {
      font-size: 18px;
    }
    &.info {
      span {
        font-size: 18px;
      }
    }
  }
`;
