import { useEffect, useRef, useState } from "react";
export default function useSticky() {
  const stickyRef = useRef(null);
  const headerRef = useRef(null);
  const [sticky, setSticky] = useState(false);

  useEffect(function () {
    function stickyNav(entries) {
      const [entry] = entries;
      !entry.isIntersecting ? setSticky(true) : setSticky(false);
    }
    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${stickyRef.current?.offsetHeight}px`,
    });
    headerObserver.observe(headerRef.current);
  }, []);
  return { stickyRef, sticky, headerRef };
}
