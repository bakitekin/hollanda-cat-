import React from 'react';

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
  title?: string;
};

const Logo: React.FC<LogoProps> = ({ className, width, height, title = 'BRK DAK Logo' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 789.73 162.81"
    width={width}
    height={height}
    className={className}
    role="img"
    aria-label={title}
  >
    <g>
      <polygon fill="#346B9E" points="161.26,0 125.06,26.43 88.87,0 0,64.9 0,114.26 21.84,114.26 21.84,76 88.87,27.04 106.54,39.96 72.39,64.9 72.39,114.26 94.23,114.26 94.23,76 161.26,27.04 198.25,27.02" />
      <text x="147" y="109" fill="#346B9E" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" fontSize="72" fontWeight="700" letterSpacing="-1">BRK DAK</text>
      <text x="157" y="139" fill="#346B9E" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" fontSize="26" fontWeight="600">İNSPECTIE & ADVIES</text>
    </g>
  </svg>
);

export default Logo;


