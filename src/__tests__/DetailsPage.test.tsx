import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import RepoDetailsPage from '../pages/Details/Details';
import { vi } from 'vitest';

const mockRepo = {
  id: 1,
  name: 'test-repo',
  full_name: 'godaddy/test-repo',
  description: 'A mock repo for testing',
  html_url: 'https://github.com/godaddy/test-repo',
  forks: 12,
  watchers: 34,
  open_issues: 5,
  languages_url: 'https://api.github.com/repos/godaddy/test-repo/languages',
};

const mockLanguages = {
  TypeScript: 12345,
  JavaScript: 67890,
};

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn((url: string) => {
    if (url.includes('/languages')) {
      return Promise.resolve({
        json: () => Promise.resolve(mockLanguages),
      });
    }

    return Promise.resolve({
      json: () => Promise.resolve(mockRepo),
    });
  }) as any);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('RepoDetailsPage', () => {
  it('fetches and displays repo details', async () => {
    render(
      <MemoryRouter initialEntries={['/repo/test-repo']}>
        <Routes>
          <Route path="/repo/:name" element={<RepoDetailsPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(await screen.findByText(/test-repo/i)).toBeInTheDocument();
    expect(screen.getByText(/A mock repo for testing/i)).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText(/⭐ 34/)).toBeInTheDocument();
    expect(screen.getByText(/🍴 12/)).toBeInTheDocument();
    expect(screen.getByText(/🐞 5/)).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /view on github/i });
    expect(link).toHaveAttribute('href', 'https://github.com/godaddy/test-repo');
  });
});
