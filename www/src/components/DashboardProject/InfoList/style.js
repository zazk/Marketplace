import styled from 'styled-components/macro';

export const DescriptionList = styled.div`
  margin-bottom: 25px;
  span {
    font-size: 20px;
    font-weight: 500;
    font-family: 'Work Sans', sans-serif;
    color: rgba(0, 0, 0, 0.5);
  }
  p {
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    margin: 0;
  }
`;

export const ProgressTitle = styled.h3`
  font-size: 20px;
  color: #07bc7a;
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  margin: 0;
`;

export const ProgressBar = styled.div`
  margin: 8px 0;
  height: 4px;
  background-color: #e2e5ee;
  border-radius: 3px;
`;

export const ProgressbarItem = styled.div`
  border-radius: 3px;
  width: 30%;
  background-image: linear-gradient(to left, #17b363, #33da9c);
  height: 100%;
  position: relative;
`;
export const ProgressDescription = styled.div`
  margin-bottom: 20px;
  p {
    margin: 0;
    font-size: 12px;
    color: #000;
  }
`;
