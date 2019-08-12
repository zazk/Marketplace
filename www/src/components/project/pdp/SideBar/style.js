import styled from 'styled-components/macro';

export const SidebarItemRow = styled.div`
  margin-bottom: 50px;
`;
export const LeakageSidebar = styled.div`
  width: 28%;
  padding-top: 10px;

  @media screen and (max-width: 768px) {
    width: 32%;
  }
  @media screen and (max-width: 640px) {
    width: 100%;
    padding-top: 35px;
    padding-left: 40px;
    box-sizing: border-box;
    display: flex;
    flex-flow: row wrap;
    .sidebar-item-row {
      width: 50%;
      &.cuadros {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .sidebar-item-row {
      width: 100%;
    }
  }
`;
