import styled from 'styled-components/macro';

export const ItemSource = styled.div`
  font-size: 14px;
  margin-top: 10px;
  color: #17b363;
  a {
    text-decoration: none;
    color: #4a4a4a;
    color: #17b363;
    &:hover {
      opacity: 0.5;
    }
  }
  span {
    margin-right: 3px;
  }
`;

export const ItemTitle = styled.h5`
  font-size: 22px;
  font-weight: normal;
  margin: 0;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-family: 'Work Sans', sans-serif;
  font-weight: 700;
  color: #09c173;
  img {
    margin-right: 10px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;
export const ItemDescripcion = styled.div`
  font-size: 16px;
  line-height: 26px;
  color: #4a4a4a;
  p {
    margin: 0;
  }
`;
export const ItemOne = styled.div`
  margin-bottom: 45px;
  &.two {
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 10px 34px 0 rgba(7, 93, 108, 0.14);
    padding: 25px 23px;
    .item-title {
      color: #030922;
      text-transform: inherit;
      font-weight: 400;
      font-size: 20px;
    }
  }
`;
