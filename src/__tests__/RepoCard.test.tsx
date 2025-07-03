import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import RepoCard from '../components/RepoCard/RepoCard';
import { type Repo } from '../types/github';

const mockRepo: Repo = {
  id: 1,
  name: 'test-repo',
  full_name: 'godaddy/test-repo',
  description: 'This is a test repo',
  html_url: 'https://github.com/godaddy/test-repo',
  forks: 10,
  watchers: 5,
  open_issues: 2,
  languages_url: '',
};

describe('RepoCard', () => {
  it('renders repo name and description', () => {
    render(
      <BrowserRouter>
        <RepoCard repo={mockRepo} />
      </BrowserRouter>
    );

    expect(screen.getByText('test-repo')).toBeInTheDocument();
    expect(screen.getByText(/This is a test repo/i)).toBeInTheDocument();
    expect(screen.getByText(/Details/i)).toBeInTheDocument();
  });
});