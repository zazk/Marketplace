import styled from 'styled-components/macro';
import theme from '../../utils/theme';

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
export const MoreTransaccions = styled.div`
  color: ${theme.color.secondary};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
