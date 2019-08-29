import React from 'react';
import IntroCalculated from '../components/ProjectInfo/IntroCalculated';
import SearchResult from '../components/SearchResult';
function ProjectCalculatedEmpty() {
  return (
    <>
      <IntroCalculated
        customClass="end-position"
        percentage="0"
        title="Google"
        description="So far in 2019, you’ve offset your emmisions through 3 different projects"
      />
      <SearchResult></SearchResult>
    </>
  );
}

export default ProjectCalculatedEmpty;
