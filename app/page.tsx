import Banner from '@/components/banner';
import Contact from '@/components/contact';
import Projects from '@/components/projects';
import Technologies from '@/components/technologies';

export default function Home() {
  return (
    <main>
      <Banner />
      <Technologies />
      <Projects />
      <Contact />
    </main>
  );
}
