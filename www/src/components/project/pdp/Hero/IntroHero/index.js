import React from 'react';
import { Intro, IntroTitle, IntroDescripcion } from './style';
function IntroHero({ data }) {
  return (
    <Intro>
      <IntroTitle>{data.title}</IntroTitle>
      <IntroDescripcion>{data.tagline}</IntroDescripcion>
    </Intro>
  );
}
export default IntroHero;
