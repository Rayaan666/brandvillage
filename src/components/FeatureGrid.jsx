import React from 'react';
import { features } from '../data/features';
import FeatureCard from './FeatureCard';

const FeatureGrid = ({ featuresList }) => {
  const activeFeatures = featuresList && featuresList.length > 0 ? featuresList : features;
  const rowOne = activeFeatures.slice(0, 3);
  const rowTwo = activeFeatures.slice(3, 6);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-col gap-6 lg:gap-8 relative z-10">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {rowOne.map((feature, index) => (
          <FeatureCard key={feature.id || index} feature={feature} index={index} />
        ))}
      </div>
      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {rowTwo.map((feature, index) => (
          <FeatureCard key={feature.id || index + 3} feature={feature} index={index + 3} />
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
