import styled from 'styled-components/macro';

export const LeakageDescription = styled.div`
  width: 63%;
  box-sizing: border-box;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 58%;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
    padding-right: 0px;
  }
`;

export const LeakageContent = styled.div`
  padding-top: 122px;
  @media screen and (max-width: 768px) {
    padding-bottom: 30px;
  }
  @media screen and (max-width: 640px) {
    overflow: hidden;
  }
  .content-main {
    justify-content: space-between;
  }
`;
