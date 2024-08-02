import Banner from '@/components/banner';
import Contact from '@/components/contact';
import Projects from '@/components/projects';
import Socials from '@/components/socials';
import Technologies from '@/components/technologies';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Home() {
  return (
    <main>
      <ScrollArea className="h-screen">
        <Banner />
        <Technologies />
        <Projects />
        <Contact />
        <Socials />
      </ScrollArea>
    </main>
  );
}
