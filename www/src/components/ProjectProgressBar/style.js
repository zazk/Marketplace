import styled from 'styled-components/macro';
import theme from '../../utils/theme';
export const ProgressBar = styled.div`
  margin: 8px 0;
  height: 4px;
  background-color: #e2e5ee;
  border-radius: 3px;
  max-width: 140px;
`;
export const ProgressbarItem = styled.div`
  border-radius: 3px;
  width: 30%;
  background-image: linear-gradient(to left, #17b363, #33da9c);
  height: 100%;
  position: relative;
`;
export const ProgresNumbers = styled.div`
  p {
    margin: 0;
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    text-transform: uppercase;
    strong {
      font-size: 14px;
      font-family: ${theme.fonts.secondary};
      font-weight: 500;
      color: #363636;
      margin-right: 5px;
    }
  }
`;
export const ProjectProgress = styled.div`
  ${ProgresNumbers} {
    strong {
      font-size: 16px;
    }
    @media screen and (max-width: 960px) {
      p {
        font-size: 11px;
      }
      strong {
        font-size: 14px;
      }
    }
  }
`;
