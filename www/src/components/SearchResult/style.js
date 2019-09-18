import styled from 'styled-components/macro';
import theme from '../../utils/theme';
export const Wrap = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 94%;
  padding-top: 108px;
  padding-bottom: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const Figure = styled.figure``;
export const Title = styled.h3`
  color: rgba(54, 54, 54, 0.5);
  font-family: ${theme.fonts.secondary};
  font-weight: 300;
  margin-bottom: 40px;
`;
export const Description = styled.div`
  margin-top: 24px;
  font-family: ${theme.fonts.secondary};
  font-weight: 500;
  font-size: 16px;
  color: ${theme.color.secondary};
  strong {
    font-weight: 500;
    color: ${theme.color.primary};
  }
`;
