import styles from './Section.module.css';

/**
 * Shared section shell: constrains the reading column, renders an eyebrow
 * label and an <h2>, and wires aria-labelledby so the heading names the region.
 */
export default function Section({ id, eyebrow, title, children }) {
  const headingId = `${id}-heading`;

  return (
    <section className={styles.section} id={id} aria-labelledby={headingId}>
      <div className={styles.inner}>
        <header className={styles.head}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 className={styles.title} id={headingId}>
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}
