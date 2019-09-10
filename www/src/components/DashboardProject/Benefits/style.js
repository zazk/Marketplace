import styled from 'styled-components/macro';

export const WrapBenefits = styled.div`
  margin-bottom: 15px;
  padding: 0 20px;
`;

export const BenefitsItem = styled.div`
  position: relative;
  padding-right: 140px;
  padding-bottom: 22px;
  margin-bottom: 15px;
  border-bottom: 1px solid rgba(151, 151, 151, 0.34);
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

export const BenefitsNumbers = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  span {
    font-size: 32px;
    margin-right: 5px;
    font-family: 'Work Sans', sans-serif;
  }
  em {
    font-style: normal;
    display: block;
    font-size: 12px;
    color: #01a697;
    text-align: right;
  }
`;
export const BenefitsText = styled.div`
  font-size: 14px;
  color: #000;
  p {
    margin: 0;
    font-weight: 300;
  }
`;
export const BenefitsTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  font-family: 'Work Sans', sans-serif;
  margin: 0;
`;
