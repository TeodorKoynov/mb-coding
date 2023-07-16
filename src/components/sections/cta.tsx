import Image from 'next/image';
import { ContactForm } from '@/components/contact-form/ContactForm';
import { Section } from '@/components/sections/index';
import { Button } from '@/components/ui/buttons';
import car from '../../../public/car.png';

export type CtaProps = { id?: string };

export const Cta: React.FC<CtaProps> = ({ id }) => {
  return (
    <Section id={id} className="relative bg-gradient-to-br from-[#6a554a] to-[#372a23] to-70% lg:min-h-[60lvh]">
      <div className="flex flex-col gap-6 md:items-start md:gap-12">
        <div className="md:w-1/2 lg:w-2/3">
          <Section.Title>Your Next Diagnostic With Us</Section.Title>
          <p className="z-10 mt-4 text-lg text-brown-50/70">Use our online form to contact us with your questions</p>
        </div>

        <div className="flex w-full flex-col items-center justify-end md:flex-row-reverse md:items-end md:gap-8">
          <div className={'mb-0 flex w-full justify-center object-contain brightness-75 md:h-full lg:mb-[-30px]'}>
            <Image
              src={car}
              height={1600}
              width={900}
              className={'rotate-img z-0 h-full w-full object-contain'}
              alt={'car'}
            />
          </div>

          <ContactForm />
        </div>

        <Button className="z-10" variant="highlight" size="xl">
          Calculate Now
        </Button>
      </div>
    </Section>
  );
};
