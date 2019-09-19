import React from 'react';
import IntroHero from './IntroHero';
import ItemListHero from './ItemListHero';
import FormRequestQuote from '../../FormRequestQuote';
import {
  Banner,
  Bgbanner,
  BannerMain,
  BannerIntro,
  FeatureDescription,
  Progressbar,
  ProgressbarItem,
  FeatureList,
  FeatureControls,
} from './style';

function Hero({ project, list }) {
  const DataFeatureList = () => list.map((item, i) => <ItemListHero key={i} title={item.title} />);
  // TODO: It will be good to use ProjectCard here
  // since it looks like the same use differente presentation
  return (
    <Banner>
      <Bgbanner style={{ backgroundImage: `url(${project.main_picture})` }} />
      <BannerMain>
        <BannerIntro>
          <IntroHero data={project} />
        </BannerIntro>
        <FeatureDescription>
          <Progressbar>
            <ProgressbarItem>
              <span>
                80<em>%</em>
              </span>
            </ProgressbarItem>
          </Progressbar>
          <FeatureList>
            <DataFeatureList />
          </FeatureList>
          <FeatureControls>
            <FormRequestQuote />
            <figure className="feature-logo">
              <img src={project.standard} width="96" alt="" />
            </figure>
          </FeatureControls>
        </FeatureDescription>
      </BannerMain>
    </Banner>
  );
}

export default Hero;
