'use client';

import { ReactNode, useEffect, useState } from 'react';

function Hydrate({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return <>{isHydrated ? <>{children}</> : <div>Loading..2.</div>}</>;
}

export default Hydrate;
