import styled from 'styled-components/macro';

export const ProjectListMain = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 1024px;
  width: 94%;
  margin: 0 auto;
  padding: 40px 0;
  justify-content: space-between;
  &.projects-user {
    padding: 0;
    width: 100%;
  }
`;
