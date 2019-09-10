import styled from 'styled-components/macro';

export const ModuloItem = styled.div`
  width: 23.5%;
  margin-left: 2%;
  margin-bottom: 2%;
  box-sizing: border-box;
  background-color: #d8d8d8;
  border-radius: 10px;
  img {
    width: 100%;
    height: auto;
  }
  &:nth-child(4n + 1) {
    margin-left: 0;
  }
  &:first-child {
    margin-left: 0;
  }
`;
export const DetailWrapModulos = styled.div`
  padding: 0 20px;
  margin-top: 40px;
`;
