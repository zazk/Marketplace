import styled from 'styled-components/macro';
import theme from '../../utils/theme';

export const Title = styled.h3`
  font-size: 18px;
  font-family: ${theme.fonts.secondary};
  font-weight: 400;
  color: ${theme.color.mono.black};
  margin: 0;
  margin-top: 40px;
  margin-bottom: 25px;
`;
export const Wrapper = styled.div`
  max-width: 1024px;
  width: 94%;
  margin 0 auto;
  padding-bottom: 50px;
`;

export const PreviousYears = styled.div`
  margin-top: 20px;
  border-radius: 10px;
  border: solid 1px rgba(3, 9, 34, 0.1);
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: rgba(3, 9, 34, 0.4);
`;
