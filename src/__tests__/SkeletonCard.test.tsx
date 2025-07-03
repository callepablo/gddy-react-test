import { render } from '@testing-library/react';
import SkeletonCard from '../components/Skeletons/Card/SkeletonCard';

describe('SkeletonCard', () => {
  it('renders skeleton elements', () => {
    const { container } = render(<SkeletonCard />);
    console.log(container)
    const skeletons = container.querySelectorAll('[class*="skeleton"]');
    console.log(skeletons)
    expect(skeletons.length).toBeGreaterThan(0);
  });
});