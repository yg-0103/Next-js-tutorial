import Link from 'next/link';
import React from 'react';
import Gnb from './Gnb';

function Header() {
  return (
    <div>
      <Link href="/">
        <a>
          <img src="/vercel.svg" alt="vercel" style={{ width: 150 }} />
        </a>
      </Link>
      <Gnb />
    </div>
  );
}

export default Header;
