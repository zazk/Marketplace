import styled from 'styled-components/macro';

export const TooltipMap = styled.div`
  position: absolute;
`;
export const TooltipInner = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 10;
  transform: translateX(-50%) translateY(-25px);
  background-color: #fff;
  border-radius: 7px;
  z-index: 10;
  box-shadow: 0 15px 45px 0 rgba(109, 100, 206, 0.21);
  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 100%;
    left: 0px;
    right: 0;
    margin: 0 auto;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: #ffffff transparent transparent transparent;
  }
`;
export const DetailMap = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 70px);
  figure img {
    width: 100%;
    height: calc(100vh - 70px);
  }
`;
