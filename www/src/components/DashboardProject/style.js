import styled from 'styled-components/macro';

export const DetailMain = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

export const DetailAside = styled.div`
  width: 430px;
  box-sizing: border-box;
  height: calc(100vh - 70px);
  overflow: auto;
  box-sizing: border-box;
  box-shadow: 2px 0 5px 0 rgba(65, 130, 142, 0.19);
  background-color: #fafafa;
  padding-top: 90px;
`;

export const WrapHeadTab = styled.div`
  padding: 15px 20px;
  position: fixed;
  left: 0;
  width: 420px;
  box-sizing: border-box;
  top: 67px;
  background-color: #fafafa;
  z-index: 10;
`;

export const AsideContentTab = styled.div`
  position: relative;
`;

export const AsideHeadTab = styled.div`
  background-color: rgba(65, 130, 142, 0.1);
  border-radius: 4px;
  justify-content: space-between;
  display: flex;
  flex-flow: row wrap;
  button {
    cursor: pointer;
    width: 49%;
    height: 45px;
    border-radius: 4px 4px 0px 0px;
    font-weight: 700;
    color: #c1c5d0;
    font-size: 16px;
    line-height: 24px;
    position: relative;
    &:after {
      content: '';
      display: block;
      height: 4px;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background-image: linear-gradient(269deg, #0fd856, #01a796, #01a697);
      opacity: 0;
    }
    &:hover,
    &.active {
      color: #04b189;
      background-color: #fff;
      box-shadow: 0 5px 20px 0 rgba(7, 93, 108, 0.16);
      &:after {
        opacity: 1;
      }
    }
  }
`;
export const DetailWrapMap = styled.div`
  position: relative;
  width: calc(100vw - 430px);
`;

export const AsideItemTab = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.5s;
  padding: 0 20px;
  box-sizing: border-box;
  padding-bottom: 30px;
  height: 0;
  overflow: hidden;
  &.active {
    overflow: visible;
    opacity: 1;
    height: 100%;
    visibility: visible;
    position: relative;
  }
`;
