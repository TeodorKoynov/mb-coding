import { Section } from '@/components/sections/index';

export type WorkflowProps = { id?: string };

const STEPS: { title: string; description: string }[] = [
  {
    title: 'Choice',
    description:
      'Our specialists will help you choose the most suitable vehicle that meets your budget and requirements.Request a free consultation so we can send you 5 cars for your budget and requirements',
  },
  {
    title: 'Calculation',
    description:
      'Before we proceed with the purchase, we will calculate all the costs - how much the repair parts will cost, the cost of the purchase, transport and delivery to your place of residence.',
  },
  {
    title: 'Auction',
    description:
      'We have a US registered company and all necessary licenses to participate in Copart and IAAI online auctions.',
  },
  {
    title: 'Payment',
    description:
      'Payment is made within 24 hours via SWIFT bank transfer to a Copart or IAAI account in the US, which ensures the security of the transaction.',
  },
  {
    title: 'Delivery',
    description:
      'Delivery takes between 30 and 60 days and includes transport from a Copart or IAAI car park to the most suitable port where the vehicle will be loaded onto a ship to Europe.',
  },
  {
    title: 'Documentation',
    description:
      'We completely handle the documentation related to customs, transport companies and other institutions.',
  },
  {
    title: 'Repair',
    description: 'We can offer trusted repair shops to carry out comprehensive servicing of your car.',
  },
  {
    title: 'Finalize',
    description:
      'With our professional approach, you can save 25% to 35% from the market value. You get a dream car with real mileage and a full service history.',
  },
];

export const Workflow: React.FC<WorkflowProps> = ({ id }) => {
  return (
    <Section id={id}>
      <div>
        <Section.Title>How to buy a car from the USA</Section.Title>
        <ul className="mt-8 flex flex-col gap-7 px-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-10 sm:px-5 md:mt-14">
          {STEPS.map((step, index) => (
            <li className="flex w-fit flex-row justify-center gap-5 sm:max-w-[45%] xl:max-w-[22%]" key={index}>
              <div className="min-w-[40px] text-6xl font-semibold text-highlight-400/90">{index + 1}</div>
              <div className="flex w-full flex-col gap-2 sm:w-fit">
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="text-sm text-brown-50/80">{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
