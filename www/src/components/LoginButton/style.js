import styled from 'styled-components/macro';

export const CompanyName = styled.div`
  font-size: 14px;
  color: #818490;
`;
export const CompanyImage = styled.div`
  width: 34px;
  height: 34px;
  background-size: 100%;
`;

export const LoginLink = styled.div`
  text-decoration: none;
  font-size: 14px;
  color: #363636;
  transition: all 0.3s;
  font-family: 'Lato', sans-serif;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
export const WrapLabelDropdown = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  padding: 5px;
  &:hover {
    border: 1px solid #eee;
  }
`;
