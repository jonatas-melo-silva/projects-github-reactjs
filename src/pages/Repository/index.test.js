import { render, screen } from '@testing-library/react';
import Repository from './index';

test('renderize um título Repository', () => {
  render(<Repository />);
  const titulo = screen.getByText(/Repository/i);
  expect(titulo).toBeInTheDocument();
});
