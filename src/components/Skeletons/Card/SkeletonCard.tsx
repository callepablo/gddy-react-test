import styles from './SkeletonCard.module.css';

const SkeletonCard = () => (
  <div className={styles.card}>
    <div className={`${styles.skeleton} ${styles.title}`}></div>
    <div className={`${styles.skeleton} ${styles.text}`}></div>
    <div className={`${styles.skeleton} ${styles.text}`} style={{ width: '60%' }}></div>
  </div>
);

export default SkeletonCard;