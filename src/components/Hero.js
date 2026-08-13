import { profile, links } from '../content';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.inner}>
        <img
          className={styles.portrait}
          src={profile.portrait}
          alt={profile.portraitAlt}
          width="200"
          height="200"
        />

        <div className={styles.identity}>
          <p className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            {profile.availability} · {profile.location}
          </p>

          <h1 className={styles.name}>
            {profile.name}
            <span className={styles.credential}>, {profile.credential}</span>
          </h1>

          <p className={styles.role}>{profile.role}</p>
          <p className={styles.tagline}>{profile.tagline}</p>

          <nav className={styles.actions} aria-label="Profile links">
            <a
              className={styles.primary}
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className={styles.secondary}
              href={links.scholar}
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
