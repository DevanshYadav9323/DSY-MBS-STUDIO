import React, { useEffect } from 'react';

function MobileAlert() {
  useEffect(() => {
    const delay = 2000; // Will detect after 2 seconds
    const timeoutId = setTimeout(() => {
      detectMobile();
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const detectMobile = () => {
    const isMobile = window.innerWidth <= 767;
    if (isMobile) {
      window.alert("For a better experience, open this site on a larger screen.");
    }
    console.log("Mobile detected: " + isMobile);
  };

  return null;
}

export default MobileAlert;
