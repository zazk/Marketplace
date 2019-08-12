import styled from 'styled-components/macro';
export const CuadrosItem = styled.div`
  width: 32%;
  margin-left: 1.9%;
  margin-bottom: 1.9%;
  @media screen and (max-width: 480px) {
    width: 28.5%;
  }
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  &:hover {
    opacity: 0.5;
  }
  &:nth-child(3n + 1) {
    margin-left: 0;
  }
  &:first-child {
    margin-left: 0;
  }
  &.c-1 {
    background-color: #717171;
  }
  &.c-2 {
    background-color: #d8d8d8;
  }
  &.c-3 {
    background-color: #c0c0c0;
  }
`;
