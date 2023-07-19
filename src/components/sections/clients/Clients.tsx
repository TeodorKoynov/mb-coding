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
            { src: '/clients/car1.webp', alt: '', width: 500, height: 600 },
            { src: '/clients/car2.webp', alt: '', width: 500, height: 600 },
            { src: '/clients/car3.webp', alt: '', width: 500, height: 600 },
            { src: '/clients/car4.webp', alt: '', width: 500, height: 600 },
            { src: '/clients/car1.webp', alt: '', width: 500, height: 600 },
            { src: '/clients/car2.webp', alt: '', width: 500, height: 600 },
            { src: '/clients/car3.webp', alt: '', width: 500, height: 600 },
            { src: '/clients/car4.webp', alt: '', width: 500, height: 600 },
          ]}
          dots
          loop
        />
      </div>
    </Section>
  );
};
