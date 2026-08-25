import React from 'react';
import CollectionIntro from './CollectionIntro';
import CollectionBanner from './CollectionBanner';

const CollectionShowcase = ({ content }) => {
  if (!content) return null;

  return (
    <section className="w-full bg-brandWarm pb-12 md:pb-16 overflow-hidden">
      <CollectionIntro intro={content.intro} />
      
      {/* Spacer between intro and first banner */}
      <div className="h-6 md:h-8"></div>
      
      <div className="w-full flex flex-col items-center">
        {content.collections?.map((collection, index) => (
          <CollectionBanner 
            key={index}
            collection={collection}
          />
        ))}
      </div>
    </section>
  );
};

export default CollectionShowcase;
