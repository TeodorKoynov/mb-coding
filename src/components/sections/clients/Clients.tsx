import { Section } from '@/components/sections';
import { Carousel } from '@/components/sections/clients/Carousel';

export type ClientsProps = { id?: string };

export const Clients: React.FC<ClientsProps> = ({ id }) => {
  return (
    <Section id={id}>
      <Section.Title>Our clients</Section.Title>
      <div className="mt-8 md:mt-14">
        <Carousel
          images={[
            { src: '/clients/1.webp', alt: '', width: 500, height: 600 },
            { src: '/clients/2.webp', alt: '', width: 500, height: 600 },
            { src: '/clients/3.webp', alt: '', width: 500, height: 600 },
            { src: '/clients/4.webp', alt: '', width: 500, height: 600 },
            { src: '/clients/1.webp', alt: '', width: 500, height: 600 },
            { src: '/clients/2.webp', alt: '', width: 500, height: 600 },
            { src: '/clients/3.webp', alt: '', width: 500, height: 600 },
            { src: '/clients/4.webp', alt: '', width: 500, height: 600 },
          ]}
          dots
          loop
        />
      </div>
    </Section>
  );
};
