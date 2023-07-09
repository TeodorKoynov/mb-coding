import { Section } from '@/components/sections/index';
import { ImageSection } from '@/components/sections/services';
import conversion from '../../../public/services/conversion-2.jpg';
import dashboard from '../../../public/services/dashboard.jpg';
import navigation from '../../../public/services/navigation.jpg';

export type HistoryProps = { id?: string };

export const History: React.FC<HistoryProps> = ({ id }) => {
  return (
    <Section id={id}>
      <div className="flex flex-col gap-6 md:gap-16">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:w-1/3">
            <Section.Title>Our Story</Section.Title>
            <p className="mt-4 text-brown-50/70 sm:mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consequuntur earum laborum suscipit.
            </p>
          </div>

          <div className="mt-4 text-brown-50/70 sm:mt-4 md:w-2/5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi architecto debitis deserunt ea enim illo,
            itaque magni molestias nostrum obcaecati perspiciatis provident quidem recusandae saepe, tempore unde. Alias
            .
          </div>
        </div>
        <div className="flex flex-col gap-5 md:flex-row md:gap-8">
          <div className="flex flex-row gap-5 md:w-full">
            <ImageSection
              imageSrc={navigation}
              imageContainerStyles={'max-h-[10rem] sm:max-h-[12rem] max-w-1/2 md:max-h-[14rem] md:w-1/2'}
            />
            <ImageSection
              imageSrc={dashboard}
              imageContainerStyles={'max-h-[10rem] sm:max-h-[12rem] max-w-1/2 md:max-h-[14rem] md:w-1/2'}
            />
          </div>
          <ImageSection imageSrc={conversion} imageContainerStyles={'max-h-[14rem]'} />
        </div>
      </div>
    </Section>
  );
};
