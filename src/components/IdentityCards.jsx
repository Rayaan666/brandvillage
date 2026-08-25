import React from 'react';
import { identityCards } from '../data/identityCards';
import IdentityCard from './IdentityCard';

const IdentityCards = ({ cards }) => {
  const activeCards = cards && cards.length > 0 ? cards : identityCards;
  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 pb-24 lg:pb-32 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {activeCards.map((card, index) => (
          <div key={card.id || index} className={index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}>
            <IdentityCard card={card} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IdentityCards;
