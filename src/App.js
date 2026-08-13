import Hero from './components/Hero';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import Approach from './components/Approach';
import Presentation from './components/Presentation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <ProjectCard />
        <Approach />
        <Presentation />
      </main>
      <Footer />
    </>
  );
}

export default App;
