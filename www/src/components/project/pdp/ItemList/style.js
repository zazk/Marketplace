import styled from 'styled-components/macro';

export const FeatureListItem = styled.div`
  margin-bottom: 17px;
  padding-right: 10px;
  box-sizing: border-box;
  position: relative;
  padding-left: 40px;
  img {
    position: absolute;
    top: 5px;
    left: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
  h4 {
    font-size: 20px;
    margin: 0;
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    margin-bottom: 2px;
    font-weight: normal;
    line-height: 1;
    color: #030922;
  }
  p {
    margin: 0;
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
  }
  @media screen and (max-width: 640px) {
    h4 {
      font-size: 18px;
    }
  }
`;
