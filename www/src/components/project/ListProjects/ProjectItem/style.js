import styled from 'styled-components/macro';
import theme from '../../../../utils/theme';
import { Link } from 'react-router-dom';
export const ProjectPicture = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 160px;
  height: 100%;
  background-image: url(${props => props.picture});
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  border-radius: 10px 0px 0px 10px;
  &:after,
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &:before {
    opacity: ;
  }
  &:after {
    background-color: #0a5d6c;
    opacity: 0.3;
  }
`;
export const ProjectResumen = styled.div`
  width: 61%;
  padding-left: 24px;
  padding-right: 10px;
  box-sizing: border-box;
`;

export const ProjectDescription = styled.div`
  width: 39%;
  box-sizing: border-box;
`;
export const ProjectUbicationAddress = styled.p`
  position: relative;
  padding-left: 18px;
  &:before {
    content: '\\e904';
    font-family: 'icomoon';
    position: absolute;
    top: 2px;
    left: 0;
    width: 13px;
    height: 17px;
    color: rgba(3, 9, 34, 0.5);
    display: inline-block;
  }
`;
export const ProjectName = styled.h3`
  font-family: ${theme.fonts.secondary};
  font-weight: 500;
  font-size: 20px;
  margin: 0;
  margin-bottom: 5px;
  line-height: 1;
  @media screen and (max-width: 960px) {
    font-size: 16px;
  }
`;
export const ProjectUbication = styled.div`
  margin-bottom: 20px;
  p {
    margin: 0;
    letter-spacing: 0.13;
    color: rgba(3, 9, 34, 0.5);
  }
  img {
    margin-right: 5px;
    opacity: 0.5;
  }
`;
export const DescriptionItem = styled.div`
  position: relative;
  padding-left: 40px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  img {
    position: absolute;
    top: 5px;
    left: 0;
  }
  span {
    font-family: ${theme.fonts.secondary};
    font-weight: 500;
    font-size: 14px;
  }
  p {
    margin: 0;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
`;

export const ProjectDetail = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
export const HistoryProjects = styled.div`
  width: 30%;
  padding-right: 20px;
  box-sizing: border-box;
`;

export const Project = styled(Link)`
  width: 100%;
  position: relative;
  padding: 24px 0;
  padding-left: 160px;
  border-radius: 10px;
  border: solid 1px #eeeeee;
  background-color: #ffffff;
  display: block;
  margin-bottom: 16px;
  box-sizing: border-box;
  &:last-child {
    margin-bottom: 0;
  }
  &:after {
    content: '\\e903';
    font-family: 'icomoon';
    position: absolute;
    top: 0;
    right: 20px;
    font-size: 12px;
    height: 12px;
    bottom: 0;
    margin: auto 0;
    color: #000;
    opacity: 0;
    transition: all 0.4s;
  }
  &:hover {
    box-shadow: 0 10px 34px 0 rgba(7, 93, 108, 0.21);
    &:after {
      opacity: 0.5;
    }
  }
  &.list-default {
    @media screen and (max-width: 600px) {
      padding: 15px;
      padding-left: 0px;
      ${ProjectResumen}, ${ProjectDescription} {
        width: 100%;
      }
      ${ProjectResumen} {
        padding-left: 120px;
      }
      ${ProjectPicture} {
        width: 100px;
        height: 100px;
        border-radius: 5px;
        top: 10px;
        left: 10px;
        overflow: hidden;
      }
      ${ProjectDescription} {
        padding-left: 10px;
        padding-right: 10px;
        box-sizing: border-box;
        display: flex;
        flex-flow: row wrap;
        margin-top: 15px;
      }
      ${DescriptionItem} {
        width: 50%;
        box-sizing: border-box;
        margin: 0px;
        padding-right: 10px;
      }
    }
    @media screen and (max-width: 480px) {
      padding: 0;
      padding-bottom: 24px;
      ${ProjectPicture} {
        height: 170px;
        width: 100%;
        position: relative;
        top: 0;
        left: 0;
      }
      ${ProjectResumen} {
        padding-left: 0px;
      }
      ${ProjectUbicationAddress} {
        position: absolute;
        top: 0px;
        left: 0px;
        padding: 10px;
        padding-left: 28px;
        box-sizing: border-box;
        color: ${theme.color.mono.white};
        &:before {
          color: ${theme.color.mono.white};
          top: 12px;
          left: 10px;
        }
      }
      ${ProjectDetail} {
        padding: 15px;
        padding-bottom: 0;
      }
      ${DescriptionItem} {
        width: 100%;
        margin-bottom: 5px;
      }
      ${ProjectUbication} {
        margin: 0;
      }
    }
  }
  &.projects-backed {
    ${ProjectUbicationAddress} {
      font-size: 14px;
    }
  }
  &.projects-user {
    display: flex;
    flex-flow: row wrap;
    padding-top: 22px;
    padding-bottom: 22px;
    ${ProjectDetail} {
      width: 70%;
    }
    ${ProjectUbicationAddress} {
      font-size: 14px;
    }
    ${ProjectResumen} {
      width: 100%;
      padding-right: 34px;
    }
    ${ProjectDescription} {
      display: flex;
      flex-flow: row wrap;
      width: 100%;
      padding-left: 24px;
      padding-right: 34px;
      box-sizing: border-box;
    }
    ${DescriptionItem} {
      width: 45%;
      box-sizing: border-box;
      margin-bottom: 0;
      .description-text {
        margin-top: 5px;
      }
    }
    @media screen and (max-width: 640px) {
      ${ProjectDetail} {
        width: 100%;
        padding-right: 24px;
      }
      ${HistoryProjects} {
        width: 100%;
        padding: 0;
        padding-left: 24px;
        padding-right: 24px;
        padding-top: 30px;
      }
      ${DescriptionItem} {
        width: 50%;
      }
      ${ProjectResumen} {
        padding-right: 0;
      }
    }
    @media screen and (max-width: 480px) {
      padding: 0;
      padding-bottom: 24px;
      ${ProjectPicture} {
        height: 170px;
        width: 100%;
        position: relative;
        top: 0;
        left: 0;
      }
      ${ProjectResumen} {
        padding-left: 0px;
      }
      ${ProjectUbicationAddress} {
        position: absolute;
        top: 0px;
        left: 0px;
        padding: 10px;
        padding-left: 28px;
        box-sizing: border-box;
        color: ${theme.color.mono.white};
        &:before {
          color: ${theme.color.mono.white};
          top: 12px;
          left: 10px;
        }
      }
      ${ProjectDetail} {
        padding: 15px;
        padding-bottom: 0;
      }
      ${DescriptionItem} {
        width: 100%;
        margin-bottom: 5px;
      }
      ${ProjectUbication} {
        margin: 0;
      }
      ${ProjectDescription} {
        padding: 0;
      }
    }

    }
  }
  &.columns {
    width: 49%;
    padding-top: 0;
    box-sizing: border-box;
    padding-left: 0;
    position: relative;
    @media screen and (max-width: 480px) {
      width: 100%;
    }
    ${ProjectDetail} {
      padding: 24px;
      padding-bottom: 0;
      flex-direction: column;
      @media screen and (max-width: 960px) {
        padding: 15px;
        padding-bottom: 0;
      }
    }
    ${ProjectPicture} {
      position: relative;
      height: 170px;
      width: 100%;
      &:after {
        z-index: 1;
      }
      &:before {
        z-index: 2;
        opacity: 0.63;
        position: absolute;
        background-image: linear-gradient(to right, rgba(25, 36, 79, 0.91), rgba(11, 16, 36, 0));
      }
    }

    ${ProjectResumen} {
      padding: 0;
      width: 100%;
    }
    ${ProjectUbicationAddress} {
      position: absolute;
      z-index: 3;
      top: 0;
      left: 0;
      width: 100%;
      padding: 10px;
      padding-left: 28px;
      box-sizing: border-box;
      color: #fff;
      &:before {
        top: 10px;
        left: 10px;
        color: ${theme.color.mono.white};
      }
      @media screen and (max-width: 960px) {
        font-size: 14px;
      }
    }
    ${ProjectDescription} {
      display: flex;
      flex-flow: row wrap;
      width: 100%;
      margin-top: 25px;
    }
    ${ProjectUbication} {
      margin-bottom: 0;
    }
    ${DescriptionItem} {
      width: 33.33%;
      padding-right: 10px;
      padding-left: 20px;
      box-sizing: border-box;
      margin-bottom: 0;
      &:first-child {
        padding-left: 0;
      }
      p {
        text-transform: inherit;
      }
      img {
        position: relative;
        margin-bottom: 10px;
      }
      @media screen and (max-width: 960px) {
        width: 100%;
        padding-left: 35px !important;
        margin-bottom: 5px;
        img {
          position: absolute;
          top: 5px;
          left: 0;
        }
      }
    }
  }
`;
