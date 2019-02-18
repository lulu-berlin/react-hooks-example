import React, { useEffect, useState } from 'react';

export const Example2: React.FC = () => {
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  const [height, setHeight] = useState(document.documentElement.clientHeight);

  useEffect(() => {
    const onResize = () => {
      const w = document.documentElement.clientWidth;
      const h = document.documentElement.clientHeight;
      if (w !== width) {
        setWidth(w);
      }
      if (h !== height) {
        setHeight(h);
      }
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div>
      width = {width} <br/>
      height = {height} <br/>
    </div>
  );
}
