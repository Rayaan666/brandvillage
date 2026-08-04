import React from 'react';

const AvailabilityBadge = ({ status, className = "" }) => {
  let badgeClasses = "px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.1em] uppercase border";

  switch (status) {
    case 'Available':
      badgeClasses += " bg-[#EBF8EE] text-[#1E713E] border-[#C3E8CC]"; // Soft green
      break;
    case 'Limited Availability':
      badgeClasses += " bg-[#FFF8E7] text-[#997300] border-[#F4E1A4]"; // Soft yellow
      break;
    case 'Enquire on WhatsApp':
      badgeClasses += " bg-[#F3F3F0] text-brandMuted border-brandBorder"; // Soft grey
      break;
    case 'Coming Soon':
      badgeClasses += " bg-brandPrimary text-white border-brandPrimary"; // Dark
      break;
    default:
      badgeClasses += " bg-white text-brandPrimary border-brandBorder";
  }

  return (
    <span className={`${badgeClasses} ${className}`}>
      {status}
    </span>
  );
};

export default AvailabilityBadge;
