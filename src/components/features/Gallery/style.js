import styled from 'styled-components/macro';

export const GalleryItem = styled.div`
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 20px;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  &:after {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, rgba(25, 36, 79, 0.91), rgba(11, 16, 36, 0));
  }
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
  }
  img {
    width: 100%;
  }
`;

export const Figcaption = styled.figcaption`
  font-size: 12px;
  margin-top: 10px;
  color: #fff;
  position: absolute;
  width: 100%;
  bottom: 0px;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  z-index: 5;
  padding: 10px;
  box-sizing: border-box;
  &.box {
    width: 80vw;
  }
`;

export const ItemLightbox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: 0;
  height: 85vh;
  width: 100%;
  text-align: center;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s;
  box-sizing: border-box;
  padding: 0 30px;
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active {
    opacity: 1;
    visibility: visible;
  }

  img {
    height: auto;
    width: 80vw;
  }
  figcaption {
    font-size: 16px;
    color: #fff;
  }
`;

export const LightboxControls = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  &.next {
    right: 10px;
  }
  &.prev {
    left: 10px;
  }
`;
export const CloseLightbox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: #000;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export const WrapLightbox = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1200;
  height: 0;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s;
  &.active {
    height: 100vh;
    opacity: 1;
    visibility: visible;
  }
`;
