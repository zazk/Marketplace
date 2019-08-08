import styled from 'styled-components/macro';

export const Controls = styled.div`
  overflow: hidden;
`;
export const ControlItem = styled.div`
  height: 212px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-size: 16px;
  font-style: italic;
  background-color: #d8d8d8;
  color: #4a4a4a;
  text-decoration: none;
  position: relative;
  padding: 0 55px;
  h5,
  p {
    margin: 0;
  }
  h5 {
    color: #fff;
    font-weight: 700;
    font-family: 'Work Sans', sans-serif;
    margin-bottom: 10px;
    font-size: 16px;
  }
  p {
    color: #17b363;
    font-size: 16px;
    font-weight: 500;
  }
  &:hover {
    p {
      text-decoration: underline;
    }
  }
  &:last-child {
    background-color: rgba(216, 216, 216, 0.3);
  }
  &.prev,
  &.next {
    background-color: rgba(3, 9, 34, 0.91);
    &:before {
      content: '';
      position: absolute;
      width: 100vw;
      height: 100%;
      right: 100%;
      display: block;
      bottom: 0;
      z-index: -1;
      background-color: rgba(3, 9, 34, 0.91);
    }
  }
  &.prev {
    img {
      margin-right: 10px;
    }
  }
  &.next {
    background-color: rgba(3, 9, 34, 0.95);
    align-items: flex-end;
    img {
      margin-left: 10px;
    }
    h5 {
      text-align: right;
    }
    &:before {
      content: '';
      left: 100%;
      right: inherit;
      background-color: rgba(3, 9, 34, 0.95);
    }
  }
  @media screen and (max-width: 640px) {
    padding: 0 10px;
    h5,
    p {
      font-size: 14px;
    }
  }
`;
export const ControlContent = styled.div`
  max-width: 1280px;
  box-sizing: border-box;
  margin: auto;
  font-size: 14px;
  display: flex;
  flex-flow: row wrap;
  a {
    width: 50%;
    display: block;
  }
`;
