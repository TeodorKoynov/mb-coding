import Image, { StaticImageData } from 'next/image';
import { Car, Compass, LucideIcon, Map, Navigation, Search, Settings } from 'lucide-react';
import { Section } from '@/components/sections/index';
import inspection from '.././../../public/services-badge/inspection.png';

export type BadgeCard = {
  title: string;
  description: string;
  imageSrc?: StaticImageData;
  icon?: React.ReactElement<LucideIcon>;
};

const BadgeCard: React.FC<BadgeCard> = ({ title, description, imageSrc, icon }) => {
  return (
    <div className="flex w-full max-w-xs flex-col">
      <div className="flex flex-row items-center gap-4">
        {icon && !imageSrc && icon}
        {imageSrc && !icon && <Image width={100} height={100} className="object-cover" src={imageSrc} alt={title} />}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-brown-50/70">{description}</p>
    </div>
  );
};

export type ServicesBadgeProps = { id?: string };

export const ServicesBadge: React.FC<ServicesBadgeProps> = ({ id }) => {
  return (
    <Section id={id} className="bg-brown-600 md:min-h-fit">
      {/*<div className="mb-6 flex flex-row flex-wrap gap-6 lg:flex-nowrap">*/}
      <div className="mb-6 grid w-full grid-cols-1 grid-rows-1 gap-12 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
        <BadgeCard
          icon={<Search className="min-w-[60px] max-w-[60px]" width={80} height={80} />}
          title={'Car Inspection'}
          description={'Inspection of cars and trucks before purchase'}
        />
        <BadgeCard
          icon={<Car className="min-w-[60px] max-w-[60px]" width={80} height={80} />}
          title={'Vehicle Diagnostics'}
          description={'Diagnostics of Mercedes-Benz cars and trucks'}
        />
        <BadgeCard
          icon={<Navigation className="min-w-[60px] max-w-[60px]" width={80} height={80} />}
          title={'Navigation Systems'}
          description={'Update of navigation systems. For cars with Command navigation systems'}
        />
        <BadgeCard
          icon={<Settings className="min-w-[60px] max-w-[60px]" width={80} height={80} />}
          title={'AMG Menu'}
          description={'For cars manufactured after 2002'}
        />
      </div>
    </Section>
  );
};
