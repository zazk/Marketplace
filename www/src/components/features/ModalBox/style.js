import styled from 'styled-components/macro';

export const ModalBoxWrap = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  opacity: 0;
  height: 0;
  overflow: hidden;
  transition: opacity 0.3s;
  &.active {
    height: 100vh;
    opacity: 1;
    visibility: visible;
  }
`;
export const ModalboxClose = styled.div`
  width: 40px;
  height: 40px;
  color: #000;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  span {
    position: relative;
    z-index: 2;
  }
`;
export const ModalboxOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
export const ModalboxContent = styled.div`
  position: relative;
  z-index: 2;
  display: inline-block;
`;
