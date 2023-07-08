import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';
import { Section } from '@/components/sections/index';
import { Button } from '@/components/ui/buttons';
import conversion from '../../../public/services/conversion.jpg';
import dashboard from '../../../public/services/dashboard.jpg';
import diagnostic from '../../../public/services/diagnostic.jpg';
import navigation from '../../../public/services/navigation.jpg';

export type ImageSectionProps = {
  imageContainerStyles?: string;
  imageSrc: StaticImageData;
  btnText?: string;
};

export const ImageSection: React.FC<ImageSectionProps> = ({ imageContainerStyles, imageSrc, btnText }) => {
  return (
    <div
      className={cn(
        'relative flex h-80 w-full items-end justify-start overflow-hidden rounded-2xl',
        imageContainerStyles
      )}
    >
      <div className="absolute left-0 top-0 h-full w-full">
        <Image className="h-full w-full object-cover saturate-50" src={imageSrc} alt={'Info'} />
      </div>
      {btnText && <Button className="z-10 mb-5 ml-5 font-semibold">{btnText}</Button>}
    </div>
  );
};
export type ServicesProps = { id?: string };

export const Services: React.FC<ServicesProps> = ({ id }) => {
  return (
    <Section id={id}>
      <div className="flex h-fit flex-col gap-8 md:flex-row">
        <div className="flex w-full flex-col justify-between md:w-3/5">
          <div className="mb-5 h-fit sm:mb-6">
            <Section.Title>Our Services</Section.Title>
            <p className="mt-4 text-brown-50/70">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque facere ipsam maxime nihil quaerat
              sunt temporibus unde voluptas voluptates?
            </p>
          </div>
          <ImageSection
            btnText={'Navigation systems'}
            imageSrc={navigation}
            imageContainerStyles={'max-h-[14rem] md:max-h-fit'}
          />
        </div>
        <div className="flex w-full flex-col gap-8 md:flex-col lg:flex-row">
          {/*//todo might remove max-h-[x]*/}
          <ImageSection
            btnText={'Diagnosis'}
            imageSrc={diagnostic}
            imageContainerStyles="max-h-[14rem] lg:max-h-fit lg:h-auto"
          />
          <div className="flex w-full flex-col gap-8 md:flex-row lg:flex-col">
            {/*//todo might remove max-h-[x]*/}
            <ImageSection
              btnText={'AMG menu'}
              imageSrc={dashboard}
              imageContainerStyles="max-h-[14rem] lg:max-h-fit lg:h-1/2"
            />
            <ImageSection
              btnText={'USA to EU'}
              imageSrc={conversion}
              imageContainerStyles="max-h-[14rem] lg:max-h-fit lg:h-1/2"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
