import { Button } from '@material-ui/core';
import styled from 'styled-components';

export const LandingProyect = styled.div`
  color: #fff;
  background-size: cover;
  position: relative;
  background-image: url(${props => props.picture});
`;
export const LandingMain = styled.div`
  max-width: 1024px;
  margin: auto;
  justify-content: space-between;
  height: calc(100vh - 70px);
  align-items: center;
  position: relative;
  z-index: 10;
  width: 94%;
  display: flex;
  flex-flow: row wrap;
`;
export const Title = styled.h3`
  font-size: 44px;
  margin: 0;
  margin-bottom: 30px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  line-height: 49px;
  @media screen and (max-width: 1024px) {
    font-size: 33px;
    line-height: 35px;
  }
  @media screen and (max-width: 640px) {
    font-size: 26px;
    line-height: 28px;
    padding-right: 30px;
  }
`;
export const SubTitle = styled.h4`
  font-size: 16px;
  margin: 0;
  margin-bottom: 20px;
`;
export const IntroMain = styled.div`
  width: 43%;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;
export const LandingDescription = styled.div`
  width: 43%;
  display: flex;
  flex-flow: row wrap;
  @media screen and (max-width: 640px) {
    width: 100%;
  }
`;
export const Item = styled.div`
  width: 50%;
  margin-bottom: 40px;
  padding-right: 10px;
  box-sizing: border-box;
  span {
    font-size: 37px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
  }
  p {
    margin: 0;
    font-size: 16px;
  }
  @media screen and (max-width: 1024px) {
    span {
      font-size: 26px;
    }
  }
  @media screen and (max-width: 640px) {
    span {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
`;
export const ViewProjects = styled(Button)`
  width: 196px;
  height: 50px;
  &:hover {
    &:after {
      opacity: 0;
    }
    &:before {
      opacity: 1;
    }
  }

  em {
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    transition: all 0.3s;
    color: #fff;
    font-style: normal;
    z-index: 5;
  }
  &:after,
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
    border-radius: 5px;
  }
  &:after {
    background-image: linear-gradient(259deg, #0fd856, #01a796, #01a697);
  }
  &:before {
    background-color: #01a697;
    z-index: 2;
    opacity: 0;
  }
`;
export const RequestAccess = styled.div`
  font-size: 16px;
  line-height: 26px;
  margin: 16px 0;
  color: #fff;
  line-height: 100%;
  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;
