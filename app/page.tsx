import { Suspense } from 'react'
import Google from './google';
import Apple from './apple';

export default async function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <Google />
      </Suspense>
      <Suspense fallback={null}>
        <Apple />
      </Suspense>
    </>
  );
}