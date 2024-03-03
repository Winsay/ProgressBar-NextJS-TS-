'use client';

import React from 'react';
import Link from 'next/link';
import style from './header.module.css';
import { usePathname } from 'next/navigation';

export default function Header() {
  const path = usePathname();
  return (
    <header className={style.header}>
      <div className={style.left}>Your site</div>
      <div className={style.right}>
        <Link className={`${style.home} ${path === '/' ? style.active : ''}`} href="/">
          Home
        </Link>
        <Link className={`${style.about} ${path === '/about' ? style.active : ''}`} href="/about">
          About
        </Link>
      </div>
    </header>
  );
}
