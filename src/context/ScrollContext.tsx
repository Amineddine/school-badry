import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ScrollContextProps {
  scrollY: number;
  scrollPercentage: number;
}

const ScrollContext = createContext<ScrollContextProps>({
  scrollY: 0,
  scrollPercentage: 0,
});

export const useScrollContext = () => useContext(ScrollContext);

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentPercentage = totalHeight > 0 ? window.scrollY / totalHeight : 0;
      setScrollPercentage(currentPercentage);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollY, scrollPercentage }}>
      {children}
    </ScrollContext.Provider>
  );
};