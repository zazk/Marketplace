import styled from 'styled-components/macro';

export const OverviewContent = styled.div`
  position: relative;
  padding: 44px 20px;
  background-color: #fafafa;
  max-width: 1280px;
  box-sizing: border-box;
  margin: auto;
  color: #363636;
  text-align: left;
  font-size: 14px;
`;
export const TabItem = styled.div`
  justify-content: space-between;
  display: flex;
  flex-flow: row wrap;
`;
export const TabContent = styled.div`
  width: 57%;
  display: flex;
  flex-flow: row wrap;
  @media screen and (max-width: 768px) {
    width: 59%;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;
export const TabTitle = styled.h3`
  font-size: 24px;
  color: #09c173;
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  margin: 0;
  margin-bottom: 20px;
  text-transform: uppercase;
  img {
    margin-right: 12px;
  }
`;
export const TabDescription = styled.div`
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 25px;
  color: #030922;
`;
export const FeatureList = styled.div`
  border-radius: 10px;
  box-shadow: 0 10px 34px 0 rgba(7, 93, 108, 0.14);
  background-color: #ffffff;
  padding: 25px 17px;
  display: flex;
  flex-flow: row wrap;
`;
export const FeatureItem = styled.div`
  width: 50%;
  margin-bottom: 20px;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
  &:last-child,
  :nth-last-child(2) {
    margin-bottom: 0;
  }
`;
export const TabContentGallery = styled.div`
  padding-top: 35px;
  width: 40.5%;
  flex-direction: column;
  justify-content: center;
  display: flex;
  flex-flow: row wrap;
  @media screen and (max-width: 640px) {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
`;
