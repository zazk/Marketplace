import styled from 'styled-components/macro';

export const ItemTextFeature = styled.div`
  min-height: 87px;
  margin-top: 32px;
  display: flex;
  border-radius: 8px;
  border: solid 1px #e2e5ee;
  padding: 5px 23px;
  box-sizing: border-box;
  align-items: center;
  p {
    flex: 1;
    font-size: 16px;
    color: #030922;
    margin: 0;
    line-height: 22px;
  }
  img {
    width: 32px;
    display: block;
    height: auto;
    margin-right: 24px;
    align-self: center;
  }
  @media screen and (max-width: 480px) {
    padding-left: 15px;
    padding-right: 15px;
    img {
      margin-right: 14px;
    }
  }
`;
