import styled from 'styled-components/macro';
export const AccountBanner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 330px;
  background-size: cover;
  background-position: center center;
  z-index: 1;
  &:before,
  &:after {
    content: '';
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:after {
    background-color: #0a5d6c;
    opacity: 0.53;
    z-index: 1;
  }
  &:before {
    content: '';
    height: 250px;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.63;
    background-image: linear-gradient(to bottom, rgba(25, 36, 79, 0.91), rgba(11, 16, 36, 0));
    z-index: 2;
  }
  @media screen and (max-width: 640px) {
    position: relative;
    height: 220px;
  }
  @media screen and (max-width: 480px) {
    height: 180px;
  }
`;
export const CreateAcountTitle = styled.div`
  @media screen and (max-width: 640px) {
    position: absolute;
    height: 220px;
    width: 100%;
    top: 0px;
    left: 0px;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    height: 180px;
  }
`;

export const FormTitle = styled.h3`
  font-size: 44px;
  margin: 0;
  line-height: 49px;
  font-weight: bold;
  font-family: 'Work Sans', sans-serif;
  color: #fff;
  text-align: center;
  @media screen and (max-width: 640px) {
    font-size: 28px;
  }
  @media screen and (max-width: 480px) {
    line-height: 100%;
  }
`;

export const FormDescriptionTitle = styled.h3`
  font-size: 16px;
  line-height: 26px;
  color: #fff;
  margin-bottom: 30px;
  text-align: center;
  p {
    margin: 0;
  }
  @media screen and (max-width: 640px) {
    margin-bottom: 0;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 0;
    font-size: 13px;
  }
`;

export const FormTitleForm = styled.h3`
  font-size: 20px;
  font-family: 'Work Sans', sans-serif;
  margin: 0;
  font-weight: 400;
  margin-bottom: 10px;
`;
export const FormListInner = styled.div`
  padding: 32px 40px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 34px 0 rgba(7, 93, 108, 0.14);
  @media screen and (max-width: 480px) {
    background-color: #fafafa;
    border-radius: 0px;
    padding-left: 15px;
    padding-right: 15px;
  }
`;
export const CreateAcountMain = styled.div`
  position: relative;
  z-index: 2;
  max-width: 500px;
  margin: auto;
  padding-top: 50px;
  @media screen and (max-width: 640px) {
    position: static;
    padding-top: 30px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    padding-top: 0px;
  }
`;
export const WrapSuccessAcount = styled.div`
  position: relative;
  width: 1024px;
  height: 595px;
  @media screen and (max-width: 1024px) {
    width: 90vw;
    height: 90vh;
  }
  @media screen and (max-width: 640px) {
    width: 100vw;
    height: 100vh;
    .success-title {
      font-size: 28px;
      line-height: 33px;
    }
    .formulary-success {
      box-sizing: border-box;
      padding: 30px;
    }
  }
`;
export const InputAcountItem = styled.div`
  margin-bottom: 10px;
`;

export const CreateAcount = styled.div`
  position: relative;
`;
