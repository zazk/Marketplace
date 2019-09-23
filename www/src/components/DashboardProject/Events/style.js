import styled from 'styled-components/macro';

export const WrapsEvents = styled.div``;
export const EventTag = styled.span`
  display: inline-block;
  font-size: 12px;
  color: #0e745c;
  background-color: #fff;
  border-radius: 10px;
  padding: 2px 7px;
  background-color: #d8d8d8;
  text-transform: uppercase;
  margin-right: 10px;
`;

export const TimelineEvents = styled.div`
  font-size: 16px;
  color: #4a4a4a;
`;
export const SidebarChecked = styled.span`
  width: 20px;
  height: 20px;
  top: 2px;
  border-radius: 100%;
  left: 0;
  border: 4px solid #fff;
  z-index: 2;
  background-color: transparent;
  position: absolute;
  display: block;

  img {
    display: block;
  }
`;
export const SidebarItem = styled.div`
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
    font-weight: 500;
  }
  p {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
    em {
      font-style: normal;
      margin-right: 5px;
    }
  }
  &:last-child {
    padding-bottom: 0;
    &:after {
      display: none;
    }
  }

  &:after {
    content: '';
    position: absolute;
    background-color: #d8d8d8;
    display: block;
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
