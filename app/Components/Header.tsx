import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <>
      <div className="bg-teal-400 py-5 ">
        <div className="max-w-[1320px] m-auto">
          <div className="flex justify-evenly items-center">
            <div className="">
              <Link href="/">
                <Image
                  src="/next.svg"
                  alt="Apple Logo"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
            <div className="">
              <ul className="flex justify-between     gap-x-3 text-black">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>{' '}
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <Button >Button</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
