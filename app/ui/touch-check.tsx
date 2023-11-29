'use client';

import { useState } from 'react';
import AcmeLogo from './acme-logo';

export const TouchCheck = () => {
  const [touched, setTouched] = useState(false);
  return (
    <div
      onTouchStart={() => setTouched(true)}
      className={`${
        touched ? 'bg-black' : 'bg-blue-500'
      }  flex h-20 shrink-0 items-end rounded-lg  p-4 md:h-52`}
    >
      <AcmeLogo />
    </div>
  );
};
