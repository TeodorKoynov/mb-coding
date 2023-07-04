import Image from 'next/image';
import { Button } from '@/components/ui/buttons';

export default function Home() {
  const defaultBtn =
    'select-none inline-flex items-center justify-center rounded-md text-base font-medium leading-none ring-offset-background ring-orange-400/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

  const size = 'h-10 px-4 py-2';

  return (
    <main className="flex max-h-0 min-h-screen flex-col items-center justify-between p-24">
      <Button variant={'highlight'} size={'lg'}>
        Open Fleet
      </Button>
      <Button variant={'link'} size={'lg'}>
        Open Fleet
      </Button>
      <Button variant={'ghost'} size={'lg'}>
        Open Fleet
      </Button>
      <Button size={'lg'}>Open Fleet</Button>
      <button
        className={`${defaultBtn} ${size} bg-brown-50 text-brown-700 shadow-sm shadow-brown-500/50 hover:bg-brown-100/95 active:bg-brown-200/90 active:text-brown-800`}
      >
        Default md
      </button>
    </main>
  );
}
