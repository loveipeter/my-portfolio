import { about } from '../content';
import Section from './Section';
import styles from './About.module.css';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Hello, I am Peter Lovei">
      <div className={styles.prose}>
        {about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
