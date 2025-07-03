import { Link } from 'react-router-dom';
import { type Repo } from '../../types/github'
import styles from './RepoCard.module.css';

type Props = {
  repo: Repo
};

const RepoCard = ({ repo }: Props) => (
  <div className={styles.card}>
    <h2 className={styles.title}>{repo.name}</h2>
    <p className={styles.description}>{repo.description?.slice(0, 60) || 'No description'}</p>
    <Link className={styles.link} to={`/repo/${repo.name}`}>
      View Details
    </Link>
  </div>
);

export default RepoCard;