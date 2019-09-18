import styled from 'styled-components/macro';
import theme from '../../../../utils/theme';

export const Wrap = styled.div`
  font-size: 14px;
`;
export const Title = styled.div`
  font-weight: 700;
  margin-bottom: 10px;
`;
export const List = styled.div`
  color: ${theme.color.mono.gray_light6};

  strong {
    font-weight: 700;
    color: ${theme.color.primary};
    margin-right: 5px;
  }
`;
export const Item = styled.div`
  position: relative;
  margin-bottom: 10px;
  &:before {
    content: '';
    width: 6px;
    height: 6px;
    display: block;
    border-radius: 100%;
    background-color: ${theme.color.mono.gray_light6};
    position: absolute;
    top: 5px;
    left: -20px;
  }
  @media screen and (max-width: 640px) {
    &:before {
      left: -12px;
    }
  }
`;

export const TooltipWrap = styled.div`
  background-color: ${theme.color.mono.black};
  width: 172px;
  padding: 8px 0;
  position: absolute;
  top: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  z-index: 10;
  transform: translateX(-20px);
  line-height: 18px;
  opacity: 0;
  visibility: hidden;
  transform: translatey(-10px);
  &:after {
    content: '';
    position: absolute;
    left: 0px;
    right: 0;
    margin: 0 auto;
    bottom: 100%;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 6px 8px 6px;
    border-color: transparent transparent #000000 transparent;
  }
  p {
    color: ${theme.color.mono.white};
    margin: 0;
    font-size: 12px;
  }
`;
export const MoreTransaccions = styled.div`
  color: ${theme.color.secondary};
  cursor: pointer;
  padding-bottom: 10px;
  position: relative;
  &:hover {
    text-decoration: underline;
    ${TooltipWrap} {
      opacity: 1;
      transform: translateX(0px);
      visibility: visible;
    }
  }
`;
