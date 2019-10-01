import styled from 'styled-components/macro';

export const Bgbanner = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  &:before,
  &:after {
    content: '';
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:after {
    background-color: #0a5d6c;
    opacity: 0.53;
    z-index: 1;
  }
  &:before {
    content: '';
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.63;
    background-image: linear-gradient(to right, rgba(25, 36, 79, 0.91), rgba(11, 16, 36, 0));
    z-index: 2;
  }
  @media screen and (max-width: 745px) {
    height: 470px;
    border-radius: 0px;
    &:before,
    &:after {
      border-radius: 0px;
    }
  }
`;
export const Banner = styled.div`
  position: relative;
  z-index: 100;
`;
export const BannerMain = styled.div`
  height: 440px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  max-width: 1024px;
  width: 94%;
  margin: 0 auto;
  position: relative;
  z-index: 3;
  justify-content: space-between;
  &.content {
    padding: 0px;
  }
  @media screen and (max-width: 745px) {
    height: auto;
  }
`;
export const BannerIntro = styled.div`
  width: 47.7%;
  @media screen and (max-width: 745px) {
    width: 100%;
  }
`;

export const FeatureDescription = styled.div`
  max-width: 414px;
  width: 100%;
  padding: 20px;
  padding-bottom: 26px;
  padding-top: 58px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 3px 10px 2px rgba(3, 9, 34, 0.07), 0 0 4px 0 rgba(3, 9, 34, 0.05);
  background-color: #ffffff;
  @media screen and (max-width: 960px) {
    width: 48%;
    max-width: none;
  }
  @media screen and (max-width: 745px) {
    width: 100%;
    margin-left: 0;
    margin-top: 70px;
  }
`;
export const Progressbar = styled.div`
  height: 6px;
  background-color: #e2e5ee;
  border-radius: 3px;
`;
export const ProgressbarItem = styled.div`
  border-radius: 3px;
  width: 80%;
  background-image: linear-gradient(to left, #17b363, #33da9c);
  height: 100%;
  position: relative;
  span {
    width: 35px;
    height: 32px;
    background-color: #17b363;
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    font-size: 12px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    em {
      font-size: 10px;
      font-weight: 700;
    }
  }
`;

export const FeatureList = styled.div`
  margin-top: 15px;
  margin-bottom: 24px;
`;
export const FeatureControls = styled.div`
  align-items: center;
  display: flex;
  figure {
    margin-left: 28px;
    img {
      height: 43px;
      width: auto;
    }
  }
  @media screen and (max-width: 640px) {
    justify-content: center;
  }
`;
