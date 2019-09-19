import React from 'react';
import FeatureCard from './Card';

import {
  FeaturesContent,
  FeaturesList,
} from './style';

function Features({ data }) {
  return (
    <FeaturesContent>
      <div className="content-main">
        <FeaturesList>
            <FeatureCard
              title="Additionality"
              status={data.badges.additionality}
              tooltip="The proposed project reduces greenhouse gas emissions that would not be reduced through other incentives"
              tooltipid="additionality"
            />
            <FeatureCard
              title="Leakage"
              status={data.badges.leakage}
              tooltip="An additional criteria is leakage. A reduction of greenhouse gas emissions through one project might simply shift, or leak, to another location or activity"
              tooltipid="leakage"
            />
            <FeatureCard
              title="Permanence"
              status={data.badges.permanence}
              tooltip="Tied into leakage prevention is the standard of permanence. Greenhouse gases prevented from entering the atmosphere should be stopped permanently. "
              tooltipid="permanence"
            />
            <FeatureCard
              title="Verifiability"
              status={data.badges.verifiability}
              tooltip="An objective third party must be able to look at project data and confirm that the carbon reductions are real and credible."
              tooltipid="verifiability"
            />
        </FeaturesList>
      </div>
    </FeaturesContent>
  );
}
export default Features;
