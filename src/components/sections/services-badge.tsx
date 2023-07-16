import Image, { StaticImageData } from 'next/image';
import { BadgePercent, Car, Check, LucideIcon, Search } from 'lucide-react';
import { Section } from '@/components/sections/index';

export type BadgeCard = {
  title: string;
  description: string;
  imageSrc?: StaticImageData;
  icon?: React.ReactElement<LucideIcon>;
};

const BadgeCard: React.FC<BadgeCard> = ({ title, description, imageSrc, icon }) => {
  return (
    <div className="flex w-full flex-col md:max-w-xs">
      <div className="flex flex-row items-center gap-4 md:mb-4">
        {icon && !imageSrc && icon}
        {imageSrc && !icon && <Image width={100} height={100} className="object-cover" src={imageSrc} alt={title} />}
        <h3 className="text-lg font-semibold md:text-xl">{title}</h3>
      </div>
      <p className="text-sm text-brown-50/70 md:text-base">{description}</p>
    </div>
  );
};

export type ServicesBadgeProps = { id?: string };

export const ServicesBadge: React.FC<ServicesBadgeProps> = ({ id }) => {
  return (
    <Section id={id} className="bg-brown-600 md:min-h-fit">
      {/*<div className="mb-6 flex flex-row flex-wrap gap-6 lg:flex-nowrap">*/}
      <div className="grid w-full grid-cols-1 grid-rows-1 gap-12 px-2 md:mb-6 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
        {/*<div className="mb-6 grid w-full grid-cols-2 grid-rows-2 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">*/}
        <BadgeCard
          icon={<Search className="min-w-[40px] max-w-[40px] md:min-w-[60px] md:max-w-[60px]" width={60} height={60} />}
          title={'From A to Z'}
          description={
            'We will assist you in the selection, delivery, documentation and repair of the most suitable vehicle for you.'
          }
        />
        <BadgeCard
          icon={<Car className="min-w-[40px] max-w-[40px] md:min-w-[60px] md:max-w-[60px]" width={60} height={60} />}
          title={'Inspection and quality'}
          description={
            'All offered cars are carefully checked by our specialists. This way we guarantee that you will get the best according to your requirements and budget. No surprises!'
          }
        />
        <BadgeCard
          icon={<Check className="min-w-[40px] max-w-[40px] md:min-w-[60px] md:max-w-[60px]" width={60} height={60} />}
          title={'Correctness'}
          description={
            'Our goal is that every customer receives the fastest and highest quality service, with which we can help him in every direction.'
          }
        />
        <BadgeCard
          icon={
            <BadgePercent
              className="min-w-[40px] max-w-[40px] md:min-w-[60px] md:max-w-[60px]"
              width={60}
              height={60}
            />
          }
          title={'Bargain price'}
          description={
            'We will offer you extremely good prices and conditions for purchase, delivery and documentation processing.'
          }
        />
      </div>
    </Section>
  );
};
