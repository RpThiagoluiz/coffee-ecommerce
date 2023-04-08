import { Dispatch, SetStateAction, useState } from 'react';
import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';
import { menu } from '@/helpers/NavMenu/menu';

type Props = {
  handlerMobileMenu: () => void;
};

export function MobileNavigation({ handlerMobileMenu }: Props) {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const onClickSubMenu = () => {
    setShowSubMenu(false);
    handlerMobileMenu();
  };

  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {menu.map((el) =>
        !!el.subMenu ? (
          <li
            key={el.id}
            className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
            onClick={() => setShowSubMenu(!showSubMenu)}
          >
            <div className="flex justify-between items-center">
              {el.name}
              <BsChevronDown size={14} />
            </div>

            {showSubMenu && (
              <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                {el.subMenu.map((sub) => {
                  return (
                    <Link key={sub.id} href={`/`} onClick={onClickSubMenu}>
                      <li className="py-4 px-8 border-t flex justify-between">
                        {sub.name}
                        <span className="opacity-50 text-sm">
                          {sub.doc_count}
                        </span>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            )}
          </li>
        ) : (
          <li className="py-4 px-5 border-b" key={el.id}>
            <Link href={el.url} onClick={handlerMobileMenu}>
              {el.name}
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
