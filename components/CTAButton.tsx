
import React from 'react';

interface CTAButtonProps {
  href: string;
  primary?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ href, primary = false, children, className = '' }) => {
  const baseClasses = "px-8 py-3 rounded-md font-bold text-lg transition-all duration-300 transform hover:scale-105 inline-block shadow-lg";
  const primaryClasses = "bg-gradient-to-r from-sky-400 to-violet-500 text-black hover:shadow-xl hover:shadow-violet-500/20";
  const secondaryClasses = "bg-gray-800 text-white hover:bg-gray-700";

  const finalClasses = `${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className}`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={finalClasses}>
      {children}
    </a>
  );
};
