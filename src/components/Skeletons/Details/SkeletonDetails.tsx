import styles from './SkeletonDetails.module.css';

const SkeletonDetails = () => (
  <div className={styles.container}>
    <div className={`${styles.skeleton} ${styles.title}`}></div>
    <div className={`${styles.skeleton} ${styles.description}`}></div>
    <div className={`${styles.skeleton} ${styles.button}`}></div>

    <div className={styles.stats}>
      <div className={`${styles.skeleton} ${styles.statItem}`}></div>
      <div className={`${styles.skeleton} ${styles.statItem}`}></div>
      <div className={`${styles.skeleton} ${styles.statItem}`}></div>
    </div>

    <h3>Languages:</h3>
    <div className={styles.languages}>
      <div className={`${styles.skeleton} ${styles.languageItem}`}></div>
      <div className={`${styles.skeleton} ${styles.languageItem}`}></div>
      <div className={`${styles.skeleton} ${styles.languageItem}`}></div>
    </div>
  </div>
);

export default SkeletonDetails;