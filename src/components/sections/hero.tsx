import Image from 'next/image';
import { Book } from 'lucide-react';
import { Button } from '@/components/ui/buttons';
import car from '../../../public/car-3.png';

export type HeroProps = { id?: string };

export const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="relative m-auto mt-2 flex max-w-screen-xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#6a554a] to-[#372a23] to-70% px-4 py-1 pb-10 pt-6 sm:px-16 sm:py-6 md:min-h-[90lvh] md:pt-12 xl:px-20"
    >
      <div className="absolute bottom-0 left-0 z-0 h-[38%] w-full rounded-3xl bg-gradient-to-b from-[#6a554a] from-0% to-brown-500 to-90%" />

      <div className="relative z-10 flex flex-col items-center justify-between">
        <div>
          <div className="z-10 flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-start sm:gap-0">
            <h1 className="text-6xl font-semibold sm:w-1/2">
              Car Delivery <span className="text-highlight-500">Sofia</span>
            </h1>

            <div className="z-20 flex flex-col items-start gap-4 sm:w-1/2 md:w-1/3">
              <p className="inline-block">
                We will help you in the selection, purchase and delivery of your dream car. Save up to 35% off the
                market price in Europe!
              </p>
              <Button variant={'highlight'}>Learn more</Button>
            </div>
          </div>
        </div>

        <div className={'center bottom-0 left-0 z-0 object-contain brightness-75 md:absolute md:h-5/6'}>
          <Image src={car} height={1600} width={900} className={'h-full object-contain'} alt={'car'} />
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-2 rounded-xl border-2 border-brown-50/20 bg-white/20 py-2 pl-2 pr-2 shadow-xl backdrop-blur-lg sm:flex-row sm:items-stretch sm:gap-8 sm:pl-2 md:pl-4 lg:pl-8">
          <div className="flex w-full justify-around gap-2 text-center md:text-start">
            <div className="flex flex-col justify-center leading-tight">
              <h3 className="text-sm text-brown-50/70 sm:text-base">Choose Car</h3>
              <p className={'balanced line-clamp-2 hidden text-sm lg:inline-block'}>Make and Model</p>
            </div>

            <div className="flex min-w-min items-center">
              <div className="h-[60%] w-[1.5px] rounded-xl bg-brown-50/70" />
            </div>

            <div className="flex flex-col justify-center leading-tight">
              <h3 className="text-sm text-brown-50/70 sm:text-base">Select a Budget</h3>
              <p className={'balanced line-clamp-2 hidden text-sm lg:inline-block'}>Money for Action</p>
            </div>

            <div className="flex items-center">
              <div className="h-[60%] w-[1.5px] rounded-xl bg-brown-50/70" />
            </div>

            <div className="flex flex-col justify-center leading-tight">
              <h3 className="text-sm text-brown-50/70 sm:text-base">Win the action</h3>
              <p className={'balanced line-clamp-2 hidden text-sm lg:inline-block'}>Inspect the car</p>
            </div>

            <div className="flex items-center">
              <div className="h-[60%] w-[1.5px] rounded-xl bg-brown-50/70" />
            </div>

            <div className="flex flex-col justify-center leading-tight">
              <h3 className="text-sm text-brown-50/70 sm:text-base">Pick Up your Car</h3>
              <p className={'balanced line-clamp-2 hidden text-sm lg:inline-block'}>With all documents</p>
            </div>
          </div>

          <div>
            <Button variant={'highlight'} className={'flex h-20 flex-col gap-1'} size={'xl'}>
              <Book /> Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
