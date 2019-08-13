import styled from 'styled-components/macro';

export const ProgressBar = styled.div`
  margin: 8px 0;
  height: 4px;
  background-color: #e2e5ee;
  border-radius: 3px;
  max-width: 140px;
`;
export const ProgressbarItem = styled.div`
  border-radius: 3px;
  width: 30%;
  background-image: linear-gradient(to left, #17b363, #33da9c);
  height: 100%;
  position: relative;
`;
export const ProgresNumbers = styled.div`
  p {
    margin: 0;
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    text-transform: uppercase;
    strong {
      font-size: 14px;
      font-family: 'Work Sans', sans-serif;
      font-weight: 500;
      color: #363636;
      margin-right: 5px;
    }
  }
`;

export const ProjectPicture = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 160px;
  height: 100%;
  background-image: url(${props => props.picture});
  background-position: center center;
  background-size: cover;
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
    content: '';
    position: absolute;
    top: 3px;
    left: 0;
    width: 13px;
    height: 17px;
    background-image: url('/static/iconos/ico-feature-3.svg');
    display: inline-block;
  }
`;
export const ProjecprojectName = styled.h3`
  font-family: 'Work Sans', sans-serif;
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
    font-family: 'Work Sans', sans-serif;
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
export const Project = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 24px 0;
  padding-left: 160px;
  border-radius: 10px;
  border: solid 1px #eeeeee;
  background-color: #ffffff;
  display: block;
  margin-bottom: 16px;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 10px 34px 0 rgba(7, 93, 108, 0.21);
  }
  &.two-item {
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
    ${ProgresNumbers} {
      strong {
        font-size: 16px;
      }
      @media screen and (max-width: 960px) {
        p {
          font-size: 11px;
        }
        strong {
          font-size: 14px;
        }
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
        background-image: url('/static/iconos/ico-feature-w-3.svg');
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
