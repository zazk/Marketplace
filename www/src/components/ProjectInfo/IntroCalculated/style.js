import styled from 'styled-components/macro';
import theme from '../../../utils/theme';
export const IntroWrap = styled.div`
  background-image: linear-gradient(102deg, #0fd856, #01a697);
`;

export const Content = styled.div`
  max-width: 1024px;
  width: 94%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  height: 276px;
  align-items: center;
  color: ${theme.color.mono.white};
`;
export const Text = styled.div`
  width: 50%;
`;

export const Description = styled.div`
  font-size: 18px;
  line-height: 24px;
  max-width: 375px;
  margin-bottom: 40px;
  p {
    margin: 0;
  }
`;
export const Title = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  font-size: 50px;
  font-weight: 500;
  font-family: ${theme.fonts.secondary};
`;

export const ProgressCalculated = styled.div`
  width: 50%;
`;

export const Numbers = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const NumberItem = styled.div`
  font-family: ${theme.fonts.secondary};
  font-weight: 500;
  font-size: 16px;
  opacity: 0.6;
  display: flex;
  align-items: flex-end;
  margin-bottom: 8px;
  &.active {
    opacity: 1;
    span {
      font-size: 40px;
      line-height: 34px;
    }
  }
  em {
    font-style: normal;
    font-weight: 500;
  }
`;
export const ProgressBar = styled.div`
  height: 4px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  position: relative;
  margin-bottom: 10px;
`;
export const ProgressbarItem = styled.div`
  position: absolute;
  height: 100%;
  left: 0;
  border-radius: 10px;
  background-color: ${theme.color.mono.white};
  width: ${props => props.percentage}%;
`;
export const DescriptionBar = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DescriptionItem = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.5px;
  opacity: 0.6;
  &.active {
    opacity: 1;
  }
`;
