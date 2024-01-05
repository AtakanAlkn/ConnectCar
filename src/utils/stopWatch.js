import React, {useState, useRef, useEffect} from 'react';

const useStopwatch = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const startStopwatch = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = new Date().getTime() - elapsedTime;
      intervalRef.current = setInterval(() => {
        const currentTime = new Date().getTime();
        setElapsedTime(currentTime - startTime);
      }, 100);
    }

    setIsRunning(!isRunning);
  };

  const resetStopwatch = () => {
    clearInterval(intervalRef.current);
    setElapsedTime(0);
    setIsRunning(false);
  };

  const getElapsedTime = () => elapsedTime;

  return {
    isRunning,
    startStopwatch,
    resetStopwatch,
    getElapsedTime,
  };
};

export default useStopwatch;
