"use client";

import * as React from "react";

/**
 * useMediaQuery
 * creates an event listener for the window resize event and returns a boolean value based on the query provided
 * @param query string
 * @returns boolean
 */

export default function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
}
