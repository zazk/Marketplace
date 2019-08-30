import styled from 'styled-components/macro';
import theme from '../../utils/theme';

export const TransactionsWrap = styled.div`
  padding: 32px 0;
  &.projects-user {
    padding-top: 0;
  }
`;
export const TransactionsRow = styled.div`
  max-width: 1024px;
  padding: 24px 30px;
  box-sizing: border-box;
  background-color: ${theme.color.mono.white};
  margin: 0 auto;
  margin-bottom: 32px;
  width: 94%;
  border: 1px solid ${theme.color.mono.gray_light4};
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: 600px) {
    position: relative;
    padding-bottom: 80px;
    padding-left: 20px;
    padding-right: 20px;
    .btn {
      position: absolute;
      bottom: 20px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
  }
`;
export const HeadTransaction = styled.div`
  display: flex;
  margin-bottom: 15px;
  @media screen and (max-width: 600px) {
    flex-flow: row wrap;
  }
`;
export const DateTransactions = styled.div`
  font-family: ${theme.fonts.secondary};
  font-weight: 400;
  width: 50%;
  span {
    font-size: 20px;
    font-weight: 500;
    display: block;
    margin-bottom: 5px;
  }
  p {
    margin: 0;
    font-size: 16px;
    color: rgba(54, 54, 54, 0.45);
  }
  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;
export const Controls = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 600px) {
    width: 20%;
  }
`;
export const TransactionList = styled.div``;
export const Name = styled.div`
  width: 58%;
  color: rgba(3, 9, 34, 0.8);
  font-size: 14px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const Ubication = styled.div`
  width: 35%;
  color: rgba(3, 9, 34, 0.5);
  font-size: 14px;
  @media screen and (max-width: 600px) {
    width: 85%;
  }
`;
export const Quantity = styled.div`
  width: 7%;
  color: rgba(3, 9, 34, 0.5);
  font-size: 14px;
`;
export const Menu = styled.button`
  width: 31px;
  height: 41px;
  margin-left: 10px;
  border-radius: 5px;
  display: block;
  border: 1px solid ${theme.color.mono.gray_light5};
  &:after {
    content: '\\e916';
    font-family: 'icomoon';
  }
`;

export const TransactionItem = styled.div`
  min-height: 60px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  border-bottom: 1px solid rgba(3, 9, 34, 0.1);

  &:last-child {
    border-bottom: none;
  }
  @media screen and (max-width: 600px) {
    justify-content: space-between;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
