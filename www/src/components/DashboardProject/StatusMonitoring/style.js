import styled from 'styled-components/macro';

export const StatusCircles = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-flow: row wrap;
`;
export const StatusItem = styled.div`
  position: relative;
  width: 58px;
  height: 58px;
  margin-right: 12px;
  background-color: #fff;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &.description {
    cursor: pointer;
  }
  &:hover {
    box-shadow: 0 3px 4px 0 rgba(7, 93, 108, 0.16);
    img {
      transform: scale(1.2);
    }
  }
  &:last-child {
    margin-right: 0;
  }
  img {
    transition: all 0.3s;
    display: block;
    margin: auto;
  }
`;

export const WrapStatusText = styled.div`
  margin-bottom: 20px;
`;

export const StatusTextItem = styled.div`
  font-size: 14px;
  color: #000;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 10px 34px 0 rgba(7, 93, 108, 0.14);
  background-color: #ffffff;
  margin-bottom: 16px;
  position: relative;
  padding-left: 45px;
  box-sizing: border-box;
  border: 1px solid transparent;
  &:last-child {
    margin-bottom: 0;
  }
  p {
    margin: 0;
  }
  &.active {
    border: 1px solid #ff6e5d;
  }
`;

export const StatusColor = styled.span`
  position: absolute;
  top: 0;
  left: 10px;
  bottom: 0;
  margin: auto;
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  img {
    width: auto;
    height: 27;
  }
`;
