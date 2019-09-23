import styled from 'styled-components/macro';

export const DetailLegend = styled.div`
  width: 234px;
  padding-top: 10px;
  border-radius: 10px;
  box-shadow: 0 0 1px 2px rgba(9, 43, 49, 0.14);
  background-color: #ffffff;
  box-sizing: border-box;
  position: absolute;
  top: 13px;
  left: 18px;
  z-index: 1;
  figure {
    border-radius: 0px 0px 10px 10px;
    overflow: hidden;

    img {
      max-width: 100%;
      height: auto;
      display: block;
    }
  }
`;

export const SelectControl = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  &.close-select {
    display: none;
  }
`;
export const LegendSelectIcon = styled.img`
  transform: rotate(-90deg);
  margin-left: 10px;
`;
export const LegendSelect = styled.div`
  display: inline-block;
  position: relative;
  min-width: 115px;
  margin-left: 10px;
  padding: 8px;
  cursor: pointer;
  .label-select {
    cursor: pointer;
    color: #000;
    font-size: 14px;
    font-weight: 500;
  }
  &:hover {
    box-shadow: 0 10px 34px 0 rgba(7, 93, 108, 0.14);
  }
  &.active {
    .legend-select-icon {
      transform: rotate(90deg);
    }
    .open-select {
      display: none;
    }
    .close-select {
      display: block;
    }
  }
`;
