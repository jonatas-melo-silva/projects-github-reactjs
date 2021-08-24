import { render, screen } from '@testing-library/react';
import Main from './index';

test('renderize um título Main', () => {
  render(<Main />);
  const titulo = screen.getByText(/Repositores/i);
  expect(titulo).toBeInTheDocument();
});
