import { useState } from 'react';
import Image from 'next/image';
import { Wrapper } from '@/layout/Wrapper';
import logoImg from '@/assets/images/logo.svg';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import Link from 'next/link';
import { Navigation } from './components/Navigation';
import { MobileNavigation } from './components/MobileNavigation';
import { useControlNavBar } from './hook/useControlNavBar';

export function AppHeader() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const { showNavBar } = useControlNavBar({ mobileMenu });

  const cartItems = [1, 2, 3, 5, 6, 7, 8];

  const handlerMobileMenu = () => {
    setMobileMenu((prevState) => !prevState);
  };

  return (
    <nav
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${showNavBar}`}
    >
      <Wrapper className="h-[60px] flex items-center justify-between">
        <Link href="/">
          <Image
            src={logoImg}
            alt="Illustration of two people drinking coffee at a table "
            className="w-[20px] md:w-[40px] bg-slate-900 rounded-full"
          />
        </Link>
        <Navigation />
        {mobileMenu && (
          <MobileNavigation handlerMobileMenu={handlerMobileMenu} />
        )}

        <div className="flex items-center gap-2 text-black">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              51
            </div>
          </div>

          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[15px] md:text-[20px]" />
              {cartItems.length > 0 && (
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  {cartItems.length}
                </div>
              )}
            </div>
          </Link>

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </nav>
  );
}
