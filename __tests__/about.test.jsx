import { render, screen } from '@testing-library/react';
import About from '../pages/about';
import '@testing-library/jest-dom';

test('renders all elements on the About page', () => {
  render(<About />);

  const heading = screen.getByRole('heading', {
    name: 'About Page',
  });

  expect(heading).toBeVisible();
});
