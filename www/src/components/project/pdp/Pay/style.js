import styled from 'styled-components/macro';

export const PayTitle = styled.h3`
  font-size: 25px;
  line-height: 37px;
  font-weight: 700;
  font-family: 'Work Sans', sans-serif;
  color: #fff;
  margin: 0;
  margin-bottom: 25px;
  @media screen and (max-width: 480px) {
    font-size: 22px;
    line-height: 29px;
  }
`;
export const PayContent = styled.div`
  background-size: cover;
  background-position: bottom center;
  .content {
    padding-top: 48px;
    padding-bottom: 58px;
  }
  .content-main {
    max-width: 980px;
    text-align: center;
  }
  .btn {
    margin-left: auto;
    margin-right: auto;
  }
`;
