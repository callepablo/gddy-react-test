import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { type Repo } from '../../types/github';
import SkeletonDetails from '../../components/Skeletons/Details/SkeletonDetails';
import styles from './Details.module.css';


type LanguageMap = Record<string, number>;

const RepoDetailsPage = () => {
  const { name } = useParams<{ name: string }>();
  const [repo, setRepo] = useState<Repo | null>(null);
  const [languages, setLanguages] = useState<LanguageMap>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.github.com/repos/godaddy/${name}`);
        const repoData = await res.json();
        setRepo(repoData);
  
        const langRes = await fetch(repoData.languages_url);
        const langData = await langRes.json();
        setLanguages(langData);
      } catch (err) {
        console.error('Error fetching repo data:', err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [name]);

  if (loading || !repo) return <SkeletonDetails />;

  return (
    <>
    <h1>Details</h1>
    <div className={styles.container}>
      <h1 className={styles.title}>{repo.name}</h1>
      <p className={styles.description}>{repo.description || 'No description provided.'}</p>

      <a
        className={styles.linkButton}
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>

      <div className={styles.stats}>
        <span>⭐ {repo.watchers}</span>
        <span>🍴 {repo.forks}</span>
        <span>🐞 {repo.open_issues}</span>
      </div>

      <h3 className={styles.textLang}>Languages</h3>
      <ul className={styles.languages}>
        {Object.keys(languages).map((lang) => (
          <li key={lang} className={styles.languageItem}>
            {lang}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default RepoDetailsPage;