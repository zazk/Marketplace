import styled from 'styled-components/macro';

export const CardContent = styled.div`
  width: 23%;
  margin-left: 2.6%;
  padding: 0 14px;
  box-sizing: border-box;
  padding-left: 50px;
  position: relative;
  border-left: 1px solid #e2e5ee;
  &.disabled {
    display: none;
  }
  span {
    position: absolute;
    top: 28px;
    left: 10px;
    width: 28px;
    height: 28px;
    display: block;
    margin-right: 10px;
    border-radius: 100%;
    border: solid 1px #979797;
    background-color: #d8d8d8;
  }

  &:first-child {
    margin-left: 0;
    border: none;
  }
  @media screen and (max-width: 960px) {
    margin-left: 0.5%;
    width: 24.6%;
    padding-left: 20px;
  }
  @media screen and (max-width: 768px) {
    width: 49.7%;
    margin-bottom: 30px;
    &:nth-child(2n + 1) {
      margin-left: 0;
    }
    &:first-child {
      margin-left: 0;
    }
    &:nth-last-child(2) {
      margin-bottom: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    margin-left: 0;
    border-left: none;
    position: relative;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 0;
    &:last-child {
      &:after {
        display: none;
      }
    }
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      height: 1px;
      width: 90%;
      background-color: #e2e5ee;
    }
  }
`;
export const CardHeader = styled.div`
  margin-bottom: 15px;
  h5 {
    font-size: 22px;
    margin: 0;
    font-weight: 500;
    color: #030922;
  }
  p {
    font-size: 14px;
    margin: 0;
    color: #969db6;
  }
  @media screen and (max-width: 960px) {
    h5 {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 480px) {
    padding-left: 40px;
  }
`;

export const CardIcon = styled.img`
  @media screen and (max-width: 480px) {
    position: absolute;
    top: 25px;
    left: 18px;
  }
`;
