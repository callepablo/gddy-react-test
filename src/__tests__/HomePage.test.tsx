import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import { vi } from 'vitest';

const mockRepos = [
  {
    id: 1,
    name: 'mock-repo-1',
    full_name: 'godaddy/mock-repo-1',
    description: 'First mock repo',
    html_url: 'https://github.com/godaddy/mock-repo-1',
    forks: 10,
    watchers: 5,
    open_issues: 2,
    languages_url: '',
  },
  {
    id: 2,
    name: 'mock-repo-2',
    full_name: 'godaddy/mock-repo-2',
    description: 'Second mock repo',
    html_url: 'https://github.com/godaddy/mock-repo-2',
    forks: 4,
    watchers: 2,
    open_issues: 1,
    languages_url: '',
  },
];

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockRepos),
    })
  ) as any);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe('Home', () => {
  it('shows loading skeletons initially', () => {
    const { container } = render(<Home />);
    const skeletons = container.querySelectorAll('[class*="skeleton"]');
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it('renders repo cards after fetch', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>);

    expect(await screen.findByText(/mock-repo-1/i)).toBeInTheDocument();
    expect(await screen.getByText(/mock-repo-2/i)).toBeInTheDocument();

    const skeletons = document.querySelectorAll('[class*="skeleton"]');
    expect(skeletons.length).toBe(0);
  });
});