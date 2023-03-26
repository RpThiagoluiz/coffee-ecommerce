import { useState } from 'react';
import Image from 'next/image';
import { Wrapper } from '@/layout/Wrapper';
import logoImg from '@/assets/images/logo.svg';

export function AppHeader() {
  const [show, setShow] = useState('translate-y-0');

  return (
    <div
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 stick top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper>
        <Image
          src={logoImg}
          alt="Illustration of two people drinking coffee at a table "
          className="w-[20px] md:w-[40px] bg-slate-900 rounded-full"
        />
      </Wrapper>
    </div>
  );
}
