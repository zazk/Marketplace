import styled from 'styled-components';

export const ProjectLogo = styled.figure`
  margin-bottom: 20px;
`;
export const ViewProject = styled.button`
  font-size: 16px;
  line-height: 24px;
  color: #41828e;
  font-weight: 700;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  box-shadow: 0 5px 20px 0 rgba(7, 93, 108, 0.16);
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(65, 130, 142, 0.1);
  }
`;
