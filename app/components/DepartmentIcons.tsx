import React from 'react';

// INFOKOM Icon
export const InfokomIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M6.25 12.5C7.63071 12.5 8.75 11.3807 8.75 10C8.75 8.61929 7.63071 7.5 6.25 7.5C4.86929 7.5 3.75 8.61929 3.75 10C3.75 11.3807 4.86929 12.5 6.25 12.5Z" fill="#FBC02D"/>
    <path d="M10 6.25C12.5 6.25 14.375 7.8125 14.375 10C14.375 12.1875 12.5 13.75 10 13.75" strokeWidth="1.5625" strokeLinecap="round" stroke="#FBC02D"/>
    <path opacity="0.75" d="M11.25 3.125C15.3125 3.125 18.125 6.25 18.125 10C18.125 13.75 15.3125 16.875 11.25 16.875" strokeWidth="1.40625" strokeLinecap="round" stroke="#FBC02D"/>
    <path d="M2.5 8.125L5 10L2.5 11.875V8.125Z" fill="#FBC02D"/>
  </svg>
);

export const InfokomIconLarge = ({ className = "" }: { className?: string }) => (
  <svg width="160" height="138" viewBox="0 0 160 138" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 100C61.0457 100 70 91.0457 70 80C70 68.9543 61.0457 60 50 60C38.9543 60 30 68.9543 30 80C30 91.0457 38.9543 100 50 100Z" fill="#2F5470"/>
    <path d="M80 50C100 50 115 62.5 115 80C115 97.5 100 110 80 110" strokeWidth="12.5" strokeLinecap="round" stroke="#2F5470"/>
    <path opacity="0.75" d="M90 25C122.5 25 145 50 145 80C145 110 122.5 135 90 135" strokeWidth="11.25" strokeLinecap="round" stroke="#2F5470"/>
    <path d="M20 65L40 80L20 95V65Z" fill="#2F5470"/>
  </svg>
);

// ADVOKESMA Icon - Shield/Protection symbol for advocacy
export const AdvokesmaIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 2.5L4.375 4.6875C4.375 9.0625 6.5625 13.125 10 15.625C13.4375 13.125 15.625 9.0625 15.625 4.6875L10 2.5Z" fill="#FBC02D" fillOpacity="0.3" stroke="#FBC02D" strokeWidth="1.25" strokeLinejoin="round"/>
    <path d="M7.5 10L9.0625 11.5625L12.8125 7.8125" stroke="#FBC02D" strokeWidth="1.5625" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const AdvokesmaIconLarge = ({ className = "" }: { className?: string }) => (
  <svg width="160" height="138" viewBox="0 0 160 138" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M80 20L35 37.5C35 72.5 52 105 80 125C108 105 125 72.5 125 37.5L80 20Z" fill="#2F5470" fillOpacity="0.3" stroke="#2F5470" strokeWidth="10" strokeLinejoin="round"/>
    <path d="M60 80L72.5 92.5L102.5 62.5" stroke="#2F5470" strokeWidth="12.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// PSDM Icon
export const PsdmIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M6.25 10.7812C7.37183 10.7812 8.28125 9.87183 8.28125 8.75C8.28125 7.62817 7.37183 6.71875 6.25 6.71875C5.12817 6.71875 4.21875 7.62817 4.21875 8.75C4.21875 9.87183 5.12817 10.7812 6.25 10.7812Z" fill="#FBC02D"/>
    <path d="M13.75 13.2812C14.8718 13.2812 15.7812 12.3718 15.7812 11.25C15.7812 10.1282 14.8718 9.21875 13.75 9.21875C12.6282 9.21875 11.7188 10.1282 11.7188 11.25C11.7188 12.3718 12.6282 13.2812 13.75 13.2812Z" fill="#FBC02D"/>
    <path d="M2.5 8.74991C2.5 13.4374 10 13.4374 10 8.74991C10 4.06241 17.5 4.06241 17.5 11.2499" strokeWidth="1.875" strokeLinecap="round" stroke="#FBC02D"/>
  </svg>
);

export const PsdmIconLarge = ({ className = "" }: { className?: string }) => (
  <svg width="160" height="138" viewBox="0 0 160 138" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M50 86.25C58.9746 86.25 66.25 78.9746 66.25 70C66.25 61.0254 58.9746 53.75 50 53.75C41.0254 53.75 33.75 61.0254 33.75 70C33.75 78.9746 41.0254 86.25 50 86.25Z" fill="#2F5470"/>
    <path d="M110 106.25C118.975 106.25 126.25 98.9746 126.25 90C126.25 81.0254 118.975 73.75 110 73.75C101.025 73.75 93.75 81.0254 93.75 90C93.75 98.9746 101.025 106.25 110 106.25Z" fill="#2F5470"/>
    <path d="M20 70C20 107.5 80 107.5 80 70C80 32.5 140 32.5 140 90" strokeWidth="15" strokeLinecap="round" stroke="#2F5470"/>
  </svg>
);

// BISNIS Icon
export const BisnisIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M2.5 3.75H10C10 6.875 7.5 9.375 5 10L2.5 3.75Z" fill="#FBC02D"/>
    <path d="M5.625 11.25C8.75 10 12.5 11.25 11.25 15L8.125 18.125L5.625 11.25Z" fill="#FBC02D"/>
    <path d="M6.875 10L14.375 4.375L13.4375 7.5L17.5 5L14.375 10L11.875 8.75L6.875 10Z" strokeWidth="1.09375" strokeLinejoin="round" stroke="#FBC02D"/>
  </svg>
);

export const BisnisIconLarge = ({ className = "" }: { className?: string }) => (
  <svg width="160" height="138" viewBox="0 0 160 138" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20 30H80C80 55 60 75 40 80L20 30Z" fill="#2F5470"/>
    <path d="M45 90C70 80 100 90 90 120L65 145L45 90Z" fill="#2F5470"/>
    <path d="M55 80L115 35L107.5 60L140 40L115 80L95 70L55 80Z" strokeWidth="8.75" strokeLinejoin="round" stroke="#2F5470"/>
  </svg>
);

// PIT Icon - Code/Tech symbol
export const PitIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M6.875 5.625L3.125 10L6.875 14.375" stroke="#FBC02D" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.125 5.625L16.875 10L13.125 14.375" stroke="#FBC02D" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.25 3.75L8.75 16.25" stroke="#FBC02D" strokeWidth="1.875" strokeLinecap="round"/>
  </svg>
);

export const PitIconLarge = ({ className = "" }: { className?: string }) => (
  <svg width="160" height="138" viewBox="0 0 160 138" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M55 45L25 80L55 115" stroke="#2F5470" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M105 45L135 80L105 115" stroke="#2F5470" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M90 30L70 130" stroke="#2F5470" strokeWidth="15" strokeLinecap="round"/>
  </svg>
);

// SENAT Icon
export const SenatIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12.1875 3.75C12.1875 4.95812 11.2081 5.9375 10 5.9375C8.79188 5.9375 7.8125 4.95812 7.8125 3.75C7.8125 2.54188 8.79188 1.5625 10 1.5625C11.2081 1.5625 12.1875 2.54188 12.1875 3.75Z" strokeWidth="1.25" stroke="#FBC02D"/>
    <path d="M1.875 5.625L9.0625 8.125V10L3.125 8.125C2.1875 7.8125 1.875 6.875 1.875 5.625Z" fill="#FBC02D"/>
    <path d="M18.125 5.625L10.9375 8.125V10L16.875 8.125C17.8125 7.8125 18.125 6.875 18.125 5.625Z" fill="#FBC02D"/>
    <path opacity="0.85" d="M3.75 9.0625L9.0625 10.9375V12.5L5 11.25C4.0625 10.9375 3.75 10 3.75 9.0625Z" fill="#FBC02D"/>
    <path opacity="0.85" d="M16.25 9.0625L10.9375 10.9375V12.5L15 11.25C15.9375 10.9375 16.25 10 16.25 9.0625Z" fill="#FBC02D"/>
    <path d="M6.5625 12.8125H9.375V17.5C7.8125 17.5 6.5625 16.25 6.5625 14.6875V12.8125Z" fill="#FBC02D"/>
    <path d="M10.625 12.8125H13.4375V14.6875C13.4375 16.25 12.1875 17.5 10.625 17.5V12.8125Z" fill="#FBC02D"/>
  </svg>
);

export const SenatIconLarge = ({ className = "" }: { className?: string }) => (
  <svg width="160" height="138" viewBox="0 0 160 138" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M97.5 30C97.5 39.665 89.665 47.5 80 47.5C70.335 47.5 62.5 39.665 62.5 30C62.5 20.335 70.335 12.5 80 12.5C89.665 12.5 97.5 20.335 97.5 30Z" strokeWidth="10" stroke="#2F5470"/>
    <path d="M15 45L72.5 65V80L25 65C17.5 62.5 15 55 15 45Z" fill="#2F5470"/>
    <path d="M145 45L87.5 65V80L135 65C142.5 62.5 145 55 145 45Z" fill="#2F5470"/>
    <path opacity="0.85" d="M30 72.5L72.5 87.5V100L40 90C32.5 87.5 30 80 30 72.5Z" fill="#2F5470"/>
    <path opacity="0.85" d="M130 72.5L87.5 87.5V100L120 90C127.5 87.5 130 80 130 72.5Z" fill="#2F5470"/>
    <path d="M52.5 102.5H75V140C62.5 140 52.5 130 52.5 117.5V102.5Z" fill="#2F5470"/>
    <path d="M85 102.5H107.5V117.5C107.5 130 97.5 140 85 140V102.5Z" fill="#2F5470"/>
  </svg>
);
