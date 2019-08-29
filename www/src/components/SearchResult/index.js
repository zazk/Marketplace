import React from 'react';
import { Wrap, Figure, Title, Description } from './style';

function SearchResult({ description }) {
  return (
    <>
      <Wrap>
        <Figure>
          <img src="/static/assets/images/search.svg" alt="" />
        </Figure>
        <Title>You still haven’t taken part in any project.</Title>
        <button className="btn">
          <span>Explore projects</span>
        </button>
        {description && (
          <Description>
            <strong>…or</strong> {description}
          </Description>
        )}
      </Wrap>
    </>
  );
}
export default SearchResult;
