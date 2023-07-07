import Image from 'next/image';
import { Hero } from '@/components/sections/hero';
import { Services } from '@/components/sections/services';
import { Button } from '@/components/ui/buttons';

export default function Home() {
  const defaultBtn =
    'select-none inline-flex items-center justify-center rounded-md text-base font-medium leading-none ring-offset-background ring-orange-400/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

  const size = 'h-10 px-4 py-2';

  return (
    <main className="text-brown-50">
      <Hero />
      <Services />
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
      <p>text</p>
    </main>
  );
}
