import { useEffect, useState } from 'react';
import { type Repo } from '../../types/github';
import styles from './Home.module.css';
import SkeletonCard from '../../components/Skeletons/Card/SkeletonCard';
import RepoCard from '../../components/RepoCard/RepoCard';

const Home = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/orgs/godaddy/repos')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);


  return (
    <div className={styles.container}>
      <h1>GoDaddy Repositories</h1>
      <div className={styles.grid}>
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          : repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
      </div>
    </div>
  );
};

export default Home;