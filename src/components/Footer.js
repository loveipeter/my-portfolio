import { profile, links } from '../content';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.pitch}>
          Interested in considering me for a position? Let's get in touch. 👋🏻
        </p>

        <nav className={styles.links} aria-label="Contact links">
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={links.scholar} target="_blank" rel="noreferrer">
            Google Scholar
          </a>
        </nav>

        <p className={styles.meta}>
          {profile.name}, {profile.credential} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
