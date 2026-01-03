
import React from 'react';

export const NameOriginIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M45 10 L55 10 L55 90 L45 90 Z" stroke="currentColor" strokeWidth="2.5" />
    <path d="M20 35 Q10 45 20 55 L80 55 Q90 45 80 35 Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <path d="M50 10 L50 90" stroke="currentColor" strokeWidth="1.5" />
    <path d="M30 45 L70 45" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const FoundingIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 20 L70 20 L80 50 L50 90 L20 50 Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="50" cy="45" r="8" stroke="currentColor" strokeWidth="2.5" />
    <path d="M42 20 L42 10 Q50 5 58 10 L58 20" stroke="currentColor" strokeWidth="2.5" />
    <path d="M30 35 H70" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const EssenceIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 80 Q30 90 50 90 Q70 90 70 80 L75 30 Q75 10 50 10 Q25 10 25 30 Z" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <path d="M35 50 Q50 65 65 50" stroke="currentColor" strokeWidth="1.5" />
    <path d="M50 10 V40" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="50" cy="40" r="5" stroke="currentColor" strokeWidth="2.5" />
    <path d="M40 80 H60" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export const CurvedArrowLeft: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M90,5 Q50,45 10,45" />
    <path d="M10,45 L22,38" />
    <path d="M10,45 L22,52" />
  </svg>
);

export const CurvedArrowRight: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10,5 Q50,45 90,45" />
    <path d="M90,45 L78,38" />
    <path d="M90,45 L78,52" />
  </svg>
);
