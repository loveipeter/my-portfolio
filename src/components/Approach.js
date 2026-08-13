import { approach } from '../content';
import Section from './Section';
import styles from './Approach.module.css';

export default function Approach() {
  return (
    <Section
      id="approach"
      eyebrow="How I worked"
      title="Specific activities and challenges"
    >
      <ol className={styles.list}>
        {approach.map((item, i) => (
          <li className={styles.item} key={i}>
            <span className={styles.index} aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className={styles.text}>{item}</span>
          </li>
        ))}
      </ol>
    </Section>
  );
}
