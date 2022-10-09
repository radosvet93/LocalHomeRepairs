import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

test('renders all elements on the Home page', () => {
  render(<Home />);

  const heading = screen.getByRole('heading', {
    name: 'Hello world!',
  });

  expect(heading).toBeVisible();
});
