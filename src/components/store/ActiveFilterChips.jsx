import React from 'react';
import { X } from 'lucide-react';

const ActiveFilterChips = ({ activeFilters, onRemoveFilter }) => {
  // activeFilters is an object: { category: 'Women', brand: '', gender: 'All', availability: 'Available' }
  const chips = [];

  Object.entries(activeFilters).forEach(([key, value]) => {
    if (value && value !== 'All' && value !== 'All Categories' && value !== 'All Products') {
      chips.push({ key, value });
    }
  });

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      <span className="text-brandMuted text-xs font-bold uppercase tracking-wider mr-2">Active Filters:</span>
      {chips.map((chip) => (
        <button
          key={chip.key}
          onClick={() => onRemoveFilter(chip.key)}
          className="flex items-center gap-2 bg-[#FAF9F6] border border-brandBorder px-3 py-1.5 rounded-full text-xs font-medium text-brandPrimary hover:border-brandPrimary hover:bg-brandLight transition-colors group"
        >
          {chip.value}
          <X className="w-3 h-3 text-brandMuted group-hover:text-brandPrimary transition-colors" />
        </button>
      ))}
      <button 
        onClick={() => chips.forEach(c => onRemoveFilter(c.key))}
        className="text-xs font-bold text-brandPrimary underline hover:text-brandYellow transition-colors ml-2"
      >
        Clear All
      </button>
    </div>
  );
};

export default ActiveFilterChips;
