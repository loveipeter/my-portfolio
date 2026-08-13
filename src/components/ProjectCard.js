import { project } from '../content';
import Section from './Section';
import styles from './ProjectCard.module.css';

export default function ProjectCard() {
  return (
    <Section id="work" eyebrow="Selected work" title={project.title}>
      <article className={styles.card}>
        {/* The banner is the project link — in the previous version the <img>
            carried href/target props, which do nothing on an image element. */}
        <a
          className={styles.bannerLink}
          href={project.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} — read the project story`}
        >
          <img
            className={styles.banner}
            src={project.banner}
            alt={project.bannerAlt}
          />
        </a>

        <div className={styles.body}>
          <p className={styles.meta}>
            <a
              className={styles.award}
              href={project.award.url}
              target="_blank"
              rel="noreferrer"
            >
              ✦ {project.award.label}
            </a>
          </p>

          <ul className={styles.collaborators}>
            {project.collaborators.map((c) => (
              <li key={c.name}>
                <a href={c.url} target="_blank" rel="noreferrer">
                  {c.name}
                </a>
              </li>
            ))}
          </ul>

          <p className={styles.description}>{project.description}</p>
        </div>
      </article>
    </Section>
  );
}
