import styles from "./navigation.module.scss";

export default function Navigation() {
  return (
    <div className={styles.container}>
      <button className={styles.navButton}>Main</button>
      <button className={styles.navButton}>Catalog</button>
      <button className={styles.navButton}>Location</button>
      <button className={styles.navButton}>Leave Feedback</button>
    </div>
  );
}
