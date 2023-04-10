import { useState, useEffect } from "react";

type UseDisplayTextReturnType = [string, () => void];

export function useDisplayText(duration = 250): UseDisplayTextReturnType {
  const [displayText, setDisplayText] = useState('');
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    if (showText) {
      const timeoutId = setTimeout(() => {
        setShowText(false);
        setDisplayText('Playing ... 🎸 ');
      }, duration);

      return () => clearTimeout(timeoutId);
    }
  }, [duration, showText]);

  return [displayText, () => setShowText(true)];
};