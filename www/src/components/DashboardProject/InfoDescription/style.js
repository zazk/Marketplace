import styled from 'styled-components/macro';

export const WrapInfoItem = styled.div`
  padding: 20px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid #d8d8d8;
`;
export const InfoDescriptionItem = styled.div`
  margin-bottom: 20px;
  span {
    font-size: 20px;
    font-weight: 500;
    font-family: 'Work Sans', sans-serif;
    color: #000;
    line-height: 100%;
  }
  p {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.5);
    margin: 0;
    font-weight: 300;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
