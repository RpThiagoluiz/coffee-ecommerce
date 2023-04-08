import { useCallback, useEffect, useState } from 'react';

type Props = {
  mobileMenu: boolean;
};

export const useControlNavBar = ({ mobileMenu }: Props) => {
  const [showNavBar, setShowNavBar] = useState('translate-y-0');
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShowNavBar('-translate-y-[80px]');
      } else {
        setShowNavBar('shadow-sm');
      }
    } else {
      setShowNavBar('translate-y-0');
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    if (mobileMenu) return;

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [mobileMenu, controlNavbar]);

  return { showNavBar };
};
