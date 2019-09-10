import styled from 'styled-components';

export const ProjectUbication = styled.div`
  padding-bottom: 15px;
  margin-bottom: 20px;
  border-bottom: 1px solid #d8d8d8;
  p {
    font-size: 12px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    color: rgba(54, 54, 54, 0.8);
    margin: 0;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
`;

export const TitleUbication = styled.h3`
  font-size: 22px;
  color: #363636;
  margin: 0;
  font-family: 'Work Sans', sans-serif;
  line-height: 33px;
  font-weight: 600;
`;
export const WrapInfoItem = styled.div`
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  flex-flow: row wrap;
`;

export const ProjectInfoItem = styled.div`
  width: 50%;
  margin-bottom: 25px;
  padding-left: 10px;
  box-sizing: border-box;
  font-family: 'Work Sans', sans-serif;
  span {
    font-size: 32px;
    font-weight: 400;
  }
  p {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    margin: 0;
    text-transform: uppercase;
  }
`;
