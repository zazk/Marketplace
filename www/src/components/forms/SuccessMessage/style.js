import styled from 'styled-components/macro';
export const SuccessBtn = styled.div`
  justify-content: center;
  margin-top: 65px;
  display: flex;
  flex-flow: row wrap;
  @media screen and (max-width: 480px) {
    padding-left: 30px;
    padding-right: 30px;
    .btn {
      width: 100%;
    }
  }
`;

export const FormularySuccess = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(240deg, #0fd856, #01a796, #01a697);
  opacity: 0;
  visibility: hidden;
  height: 0;
  overflow: hidden;
  transition: opacity 0.5s;
  &.isPopup {
    position: static;
    width: 1024px;
    opacity: 1;
    visibility: visible;
    height: 100%;
    overflow: visible;
    ${SuccessBtn} {
      display: none;
    }
  }
  &.active {
    opacity: 1;
    visibility: visible;
    height: 100%;
    overflow: visible;
  }
  @media screen and (max-width: 745px) {
    position: fixed;
  }
`;
export const SuccessContent = styled.div`
  max-width: 390px;
  text-align: center;
  color: #fff;
`;

export const SuccessTitle = styled.h3`
  font-size: 44px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 49px;
  font-family: 'Work Sans', sans-serif;
  @media screen and (max-width: 640px) {
    font-size: 28px;
    line-height: 100%;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const SuccessDescription = styled.div`
  p {
    margin: 0;
    font-size: 16px;
    line-height: 26px;
  }
  @media screen and (max-width: 640px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
