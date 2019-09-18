import styled from 'styled-components/macro';

export const DetailLogoProject = styled.figure`
  margin-left: 18px;
`;

export const HeadNameProject = styled.div`
  margin: 0;
  font-size: 16px;
  line-height: 33px;
  margin-left: 13px;
  font-family: serif;
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
`;

export const DetailHeader = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 70px;
  border-bottom: 1px solid rgba(151, 151, 151, 0.3);
  box-sizing: border-box;
`;

export const HeadLeft = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
export const HeadRight = styled.div`
  padding-right: 20px;
`;

export const SelectControl = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  &.close-select {
    display: none;
  }
`;

export const WrapBtn = styled.div`
  margin-left: 25px;
  &.active {
    img {
      transform: rotate(180deg);
    }
    .open-select {
      display: none;
    }
    .close-select {
      display: block;
    }
  }
`;
