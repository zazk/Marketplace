import styled from 'styled-components/macro';

export const TimelineItemChecked = styled.span`
  width: 20px;
  height: 20px;
  top: 2px;
  border-radius: 100%;
  left: 0;
  border: 4px solid #fff;
  z-index: 2;
  position: absolute;
  background-color: #d8d8d8;
  display: block;
  &.active {
    background-color: transparent;
    img {
      display: block;
    }
  }
  img {
    display: none;
  }
`;

export const TimelineItem = styled.div`
  padding-bottom: 20px;
  position: relative;
  padding-left: 50px;
  p,
  h4 {
    margin: 0;
  }
  h4 {
    font-size: 16px;
    color: #030922;
    font-weight: 400;
  }
  p {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
  }
  &:last-child {
    padding-bottom: 0;
    &:after {
      display: none;
    }
  }

  &:after {
    content: '';
    z-index: 1;
    top: 30px;
    left: 13px;
    width: 2px;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    padding-left: 40px;
  }
`;
export const TimeLine = styled.div`
  font-size: 16px;
  color: #4a4a4a;
`;
