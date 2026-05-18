// src/utils/performance.js

// Detect low-end devices
export const isLowEndDevice = () => {
  if (typeof window === 'undefined') return false;
  
  // Check for mobile devices
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // Check memory (if available)
  const hasLowMemory = navigator.deviceMemory ? navigator.deviceMemory < 4 : false;
  
  // Check connection speed
  const isSlowConnection = navigator.connection ? 
    navigator.connection.effectiveType === '2g' || navigator.connection.effectiveType === '3g' : false;
  
  // Check for save-data header
  const wantsSaveData = navigator.connection ? navigator.connection.saveData : false;
  
  return isMobile && (hasLowMemory || isSlowConnection || wantsSaveData);
};

// Throttle function for scroll events
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Debounce function for resize events
export const debounce = (func, delay) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};