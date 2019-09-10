import styled from 'styled-components/macro';

export const DetailGraphic = styled.div`
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 34px 0 rgba(7, 93, 108, 0.14);
  background-color: #ffffff;
  figure {
    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
  }
`;
export const GraphicDate = styled.div`
  width: 50%;
  span {
    font-size: 20px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    margin-right: 5px;
  }
`;
export const WrapGraphicInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
  padding: 13px 16px;
  padding-bottom: 25px;
  p {
    margin: 0;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
  }
  ${GraphicDate} {
    text-align: right;
  }
`;

export const GraphicNumber = styled.div`
  width: 50%;
  span {
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    font-size: 32px;
  }
`;

export const GraphicOpenLightbox = styled.div`
  margin: 0;
  padding: 05px;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-block;
  &:hover {
    transform: scale(1.2);
  }
`;
export const LightboxMainGraphic = styled.div`
  position: relative;
  z-index: 2;
  background-color: #fff;
  max-width: 490px;
  min-height: 325px;
  margin: 0 auto;
  border-radius: 10px;
  border: solid 1px #979797;
  padding: 100px 40px;
  padding-bottom: 90px;
  box-sizing: border-box;
`;

export const LightboxItems = styled.div`
  position: relative;
`;

export const LightboxItemGraphic = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
  &.active {
    opacity: 1;
    visibility: visible;
    position: relative;
  }
`;

export const LightboxDescription = styled.div`
  font-weight: 300;
  font-size: 14px;
  color: #000;
  p {
    margin-top: 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const LightboxTitle = styled.div`
  font-size: 16px;
  color: #000;
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  margin: 0;
  margin-bottom: 14px;
`;

export const Sheets = styled.figure`
  position: absolute;
  z-index: 3;
  &.sheet-1 {
    top: -70px;
    left: 0;
  }
  &.sheet-2 {
    bottom: -30px;
    right: 5px;
  }
`;

export const WrapGraphics = styled.div`
  padding: 0 20px;
`;
