import styled from 'styled-components/macro';

export const FeaturesContent = styled.div`
  background-color: #fafafa;
  max-width: 1280px;
  padding: 34px 20px;
  box-sizing: border-box;
  margin: auto;
  font-size: 14px;
`;
export const FeaturesList = styled.div`
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
