import styled from 'styled-components/macro';
import device from '../../../utils/responsive';

export const ModalBoxWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100vh
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
  margin-top: 32px;
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



  @media ${device.mobileS} {
    width: 280px;
    height: 460px;
    padding-top: 32px;
  }

  @media ${device.mobileM} {
    width: 320px;
    height: 600px;
    padding-top: 32px;
  }


  @media ${device.tablet} {
    width: 740px;
    height: 600px;
    padding-top: 32px;
  }

  @media ${device.laptop} {
    padding-top: 32px;
    width: 1000px;
    height: 620px;
  }

  @media ${device.laptopL} {
    width: 1200px;
    padding-top: 32px;
    height: 640px;
  }


`;
