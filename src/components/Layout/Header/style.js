import styled from 'styled-components';

export const Logo = styled.figure`
  margin: 0;
`;
export const HeaderMain = styled.header`
  background-color: #fff;
`;
export const HeaderInner = styled.div`
  max-width: 1280px;
  padding: 0 20px;
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  height: 70px;
  align-items: center;
  position: relative;
  background-color: #fff;

  @media screen and (max-width: 480px) {
    justify-content: space-between;
  }
`;
export const Nav = styled.nav`
  margin-left: 27px;
`;
export const MenuItem = styled.li`
  margin-left: 20px;
`;
export const MenuLink = styled.span`
  text-decoration: none;
  font-size: 14px;
  color: #363636;
  transition: all 0.3s;
  font-family: 'Lato', sans-serif;
  &:hover {
    opacity: 0.5;
  }
`;
