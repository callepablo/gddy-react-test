import { render } from '@testing-library/react';
import SkeletonCard from '../components/Skeletons/Card/SkeletonCard';

describe('SkeletonCard', () => {
  it('renders skeleton elements', () => {
    const { container } = render(<SkeletonCard />);
    const skeletons = container.querySelectorAll('[class*="skeleton"]');
    expect(skeletons.length).toBeGreaterThan(0);
  });
});