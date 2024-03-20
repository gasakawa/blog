import Image from 'next/image';
import React from 'react';

export default function Avatar() {
  return (
    <div className="hidden flex-col items-center justify-center md:flex">
      <Image
        src="/gabrielasakawa.jpg"
        alt="Gabriel Asakawa"
        width={200}
        height={200}
        className="rounded-[50%]"
        priority
      />
    </div>
  );
}
