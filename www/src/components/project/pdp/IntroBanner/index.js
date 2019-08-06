import React from 'react';
import { Intro, IntroTitle, IntroDescripcion } from './style';
function IntroBanner({ data }) {
  const project = data;
  return (
    <Intro>
      <IntroTitle>{project.title}</IntroTitle>
      <IntroDescripcion>{project.tagline}</IntroDescripcion>
    </Intro>
  );
}
export default IntroBanner;
