import { useState, useEffect } from "react";

const useMedia = (query) => {
  const [matches, setMatches] = useState(false);

  const checkMediaQuery = () => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);
  };

  useEffect(() => {
    checkMediaQuery();
    const mediaQueryList = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);
    mediaQueryList.addListener(listener);
    return () => mediaQueryList.removeListener(listener);
  }, [query]);

  return matches;
};

export default useMedia;
