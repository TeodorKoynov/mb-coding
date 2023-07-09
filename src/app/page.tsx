import { Cta } from '@/components/sections/cta';
import { Hero } from '@/components/sections/hero';
import { History } from '@/components/sections/history';
import { Services } from '@/components/sections/services';
import { ServicesBadge } from '@/components/sections/services-badge';

export default function Home() {
  return (
    <main className="text-brown-50">
      <Hero />
      <Services />
      <ServicesBadge />
      <History />
      <Cta />
    </main>
  );
}
