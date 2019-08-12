import styled from 'styled-components/macro';

export const FileName = styled.div`
  flex: 1;
  color: #4a4a4a;
  h3 {
    font-size: 16px;
    line-height: 18px;
    margin: 0;
    color: #030922;
    font-weight: 400;
  }
  p {
    font-size: 12px;
    line-height: 28px;
    margin: 0;
    color: rgba(0, 0, 0, 0.5);
    text-transform: uppercase;
  }
  @media screen and (max-width: 768px) {
    h3 {
      font-size: 14px;
    }
  }
`;

export const SidebarItem = styled.div`
  display: flex;
  text-decoration: none;
  margin-bottom: 10px;
  &.more {
    padding-left: 20px;
    figure {
      display: none;
    }
    .file-name {
      h3 {
        font-style: italic;
        color: #17b363;
      }
    }
  }
  &:hover {
    h3 {
      text-decoration: underline;
    }
  }
  figure {
    margin-right: 10px;
    padding-top: 5px;
  }
`;
