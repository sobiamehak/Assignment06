import React from 'react';
import Image from 'next/image';

const Top = () => {
  return (
    <div className="hidden sm:flex content-center text-center
     h-[54px] bg-gray-50 mb-[12px]">

      <Image
        src="/Content.svg"
        alt="content"
        height={30}
        width={386}
        className=""
      />

      <Image
        src="/socialinks.svg"
        alt="content"
        height={24}
        width={132}
        className="ml-auto"
      />

    </div>
  );
};

export default Top

