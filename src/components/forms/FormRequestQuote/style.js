import styled from 'styled-components/macro';

export const Formulary = styled.div`
  width: 1024px;
  box-sizing: border-box;
  margin: auto;
  background-color: #fff;
  box-sizing: border-box;
  position: relative;
  @media screen and (max-width: 1024px) {
    width: 95vw;
  }
  @media screen and (max-width: 745px) {
    width: 100vw;
    height: 100vh;
    overflow: auto;
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
  &.active {
    opacity: 1;
    visibility: visible;
    height: 100%;
  }
  @media screen and (max-width: 745px) {
    position: fixed;
  }
`;

export const FormularyMain = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-flow: row wrap;
  @media screen and (max-width: 745px) {
    .form-title-section,
    .form-list-inputs {
      width: 100%;
      box-sizing: border-box;
    }
  }
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
export const SuccessContent = styled.div`
  max-width: 390px;
  text-align: center;
  color: #fff;
`;
export const FormListInputs = styled.div`
  width: 64.5%;
  box-sizing: border-box;
  padding-top: 100px;
  padding-bottom: 70px;
  padding-left: 65px;
  padding-right: 65px;
  @media screen and (max-width: 1024px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media screen and (max-width: 745px) {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  @media screen and (max-width: 640px) {
    background-color: #fafafa;
    padding-left: 15px;
    padding-right: 15px;
  }
`;
export const FormListInner = styled.div`
  max-width: 550px;
  @media screen and (max-width: 745px) {
    max-width: none;
  }
`;
export const FormInfo = styled.div`
  position: absolute;
  right: 0;
  top: -3px;
  z-index: 3;
  .wrap-tooltip .tooltip-inner {
    width: 130px;
  }
`;
export const TwoInput = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  flex-flow: row wrap;
`;

export const FormTitleSection = styled.div`
  padding: 80px 45px;
  box-sizing: border-box;
  width: 35.5%;
  background-image: linear-gradient(210deg, #0fd856, #01a796, #01a697);
  @media screen and (max-width: 1024px) {
    padding-left: 30px;
    padding-right: 30px;
    .form-title {
      font-size: 32px;
    }
  }
  @media screen and (max-width: 745px) {
    padding: 30px;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
export const FormTitleInner = styled.div`
  max-width: 250px;
  @media screen and (max-width: 745px) {
    max-width: none;
  }
`;
export const FormTitle = styled.h3`
  font-size: 44px;
  font-weight: bold;
  font-family: 'Work Sans', sans-serif;
  color: #fff;
  @media screen and (max-width: 745px) {
    margin: 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 26px;
  }
`;
export const FormDescriptionTitle = styled.div`
  font-size: 16px;
  line-height: 26px;
  color: #fff;
  @media screen and (max-width: 745px) {
    p {
      margin: 0;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const FormBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 21px;
`;
