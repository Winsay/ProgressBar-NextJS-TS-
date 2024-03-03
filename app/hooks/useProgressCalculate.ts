import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

export function calculateProgressPercent() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const updatePercent = () => {
      let actualPosition = window.scrollY;
      let scrollHeight = document.body.scrollHeight - window.innerHeight;
      let percentage = (actualPosition / scrollHeight) * 100;
      setPercent(Math.floor(percentage));
    };

    let debouncedUpdatePercent = debounce(updatePercent, 50);
    debouncedUpdatePercent();

    window.addEventListener('scroll', debouncedUpdatePercent);
    window.addEventListener('resize', debouncedUpdatePercent);

    return () => {
      window.removeEventListener('scroll', debouncedUpdatePercent);
      window.removeEventListener('resize', debouncedUpdatePercent);
    };
  }, []);

  return percent;
}
