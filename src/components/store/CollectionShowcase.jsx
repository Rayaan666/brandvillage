import React from 'react';
import CollectionIntro from './CollectionIntro';
import CollectionBanner from './CollectionBanner';
import { collections } from '../../data/collections';

const CollectionShowcase = () => {
  return (
    <section className="w-full bg-brandWarm pb-12 md:pb-16 overflow-hidden">
      <CollectionIntro />
      
      {/* Spacer between intro and first banner */}
      <div className="h-6 md:h-8"></div>
      
      <div className="w-full flex flex-col items-center">
        {collections.map((collection) => (
          <CollectionBanner 
            key={collection.id}
            collection={collection}
          />
        ))}
      </div>
    </section>
  );
};

export default CollectionShowcase;
