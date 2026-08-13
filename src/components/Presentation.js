import { presentation } from '../content';
import Section from './Section';
import styles from './Presentation.module.css';

export default function Presentation() {
  return (
    <Section
      id="presentation"
      eyebrow={presentation.note}
      title={presentation.heading}
    >
      {/* Fixed 400px height cropped this badly on small screens; the wrapper
          gives the embed a 16:9 box that scales with the column instead. */}
      <div className={styles.frame}>
        <iframe
          title="Peter Lovei — PhD presentation"
          className={styles.embed}
          src={presentation.src}
          allowFullScreen
        >
          This is an embedded{' '}
          <a href="https://office.com" target="_blank" rel="noreferrer">
            Microsoft Office
          </a>{' '}
          presentation, powered by{' '}
          <a href="https://office.com/webapps" target="_blank" rel="noreferrer">
            Office
          </a>
          .
        </iframe>
      </div>
    </Section>
  );
}
