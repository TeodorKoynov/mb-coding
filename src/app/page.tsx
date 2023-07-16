import { Clients } from '@/components/sections/clients';
import { Cta } from '@/components/sections/cta';
import { Hero } from '@/components/sections/hero';
import { History } from '@/components/sections/history';
import { Services } from '@/components/sections/services';
import { ServicesBadge } from '@/components/sections/services-badge';
import { Workflow } from '@/components/sections/workflow';

export default function Home() {
  return (
    <main className="text-brown-50">
      <Hero />
      <Workflow />
      <Services />
      <ServicesBadge />
      <History />
      <Clients />
      <Cta />
    </main>
  );
}
