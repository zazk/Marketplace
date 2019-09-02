import styled from 'styled-components/macro';
import theme from '../../utils/theme';

export const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 1001;
  width: 100%;
  height: 0%;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.45s ease;
  &.active {
    opacity: 0.8;
    height: 100%;
    visibility: visible;
  }
`;
export const MenuResponsiveSidebar = styled.div`
  position: relative;
  z-index: 1010;
  background-color: ${theme.color.mono.white};
`;
export const MenuMobileOpen = styled.div`
  display: none;
  transition: all 0.45s ease;
  position: absolute;
  top: 13px;
  right: 10px;
  font-size: 23px;
  color: ${theme.color.primary};
  &.active {
    visibility: hidden;
    opacity: 0;
    z-index: 1000;
    transform: rotate(-90deg);
  }
  &:after {
    content: '\\e917';
    font-family: 'icomoon';
  }
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const MenuMobileClose = styled.div`
  color: ${theme.color.primary};
  cursor: pointer;
  height: 42px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 5px;
  top: 5px;
  width: 42px;
  transform: rotate(0deg);
  visibility: hidden;
  opacity: 0;
  z-index: 1011;
  transition: all 0.45s ease;
  &.active {
    opacity: 1;
    visibility: visible;
    transform: rotate(-90deg);
  }
  &:after {
    content: '\\e918';
    font-family: 'icomoon';
  }
`;

export const LogoCompany = styled.figure`
  padding: 0 20px;
  height: 41px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  img {
    width: auto;
    height: 22px;
  }
`;

export const MenuItem = styled.div`
  border-bottom: 1px solid rgba(216, 216, 216, 0.42);
`;

export const MenuLink = styled.div`
  width: 100%;
  padding: 0 25px;
  box-sizing: border-box;
  display: flex;
  height: 55px;
  align-items: center;
  font-size: 16px;
  text-decoration: none;
  color: ${theme.color.secondary};
`;

export const WrapMenuResponsive = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 1000;
  transform: translateY(-150%);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, transform 0.3s;
  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0%);
  }
`;
