import Banner from '@/components/banner';
import Contact from '@/components/contact';
import Projects from '@/components/projects';
import Socials from '@/components/socials';
import Technologies from '@/components/technologies';

export default function Home() {
  return (
    <main>
      <Banner />
      <Technologies />
      <Projects />
      <Contact />
      <Socials />
    </main>
  );
}
