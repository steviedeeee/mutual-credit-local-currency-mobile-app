import {useRef} from 'react';

const useThrottle = () => {
  const throttleSeed = useRef<ReturnType<typeof setTimeout> | null>(null);

  const throttleFunction = useRef((func: () => void, delay = 200) => {
    if (!throttleSeed.current) {
      // Call the callback immediately for the first time
      func();
      throttleSeed.current = setTimeout(() => {
        throttleSeed.current = null;
      }, delay);
    }
  });

  return throttleFunction.current;
};

export default useThrottle;
