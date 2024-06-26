'use client';
import React from 'react';
import Link from 'next/link';

import { Button } from './components/Button/Button';
import { Header } from './components/Header/Header';

import './globals.css';

export default function Home() {
  return (
    <>
      <Header
        imgSrc="/static/assets/nowatch-logo.svg"
        tooltipText="Welcome to Nowatch"
      />
      <Link href="/dogs">
        <div className="home-page-btn">
          <Button btnLabel="Click to view assignment" />
        </div>
      </Link>
    </>
  );
}
