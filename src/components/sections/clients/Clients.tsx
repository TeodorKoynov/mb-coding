import { Section } from '@/components/sections';

export type ClientsProps = { id?: string };

export const Clients: React.FC<ClientsProps> = ({ id }) => {
  return (
    <Section id={id}>
      <Section.Title>Our clients</Section.Title>
    </Section>
  );
};
