import { cn } from '@/lib/utils';

export type SectionTitleProps = React.HTMLProps<HTMLHeadingElement>;

const SectionTitle: React.FC<SectionTitleProps> = ({ className, ...props }) => {
  return <h2 className={cn('text-4xl font-semibold sm:text-5xl', className)} {...props} />;
};

export type SectionProps = React.HTMLProps<HTMLElement>;

type SectionComponent = React.FC<SectionProps> & {
  Title: typeof SectionTitle;
};

export const Section: SectionComponent = ({ className, ...props }) => {
  return (
    <section
      // remove md:min-h-[x]
      className={cn(
        'relative m-auto mt-2 flex max-w-screen-xl overflow-hidden rounded-3xl px-4 pb-10 pt-6 sm:px-16 sm:py-6 md:mb-16 md:mt-8 md:pt-12 xl:px-20',
        className
      )}
      {...props}
    />
  );
};

Section.Title = SectionTitle;
