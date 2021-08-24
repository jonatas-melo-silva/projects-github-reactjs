import { render } from '@testing-library/react';
import App from './App';

test('Deve conter um componente de rotas', () => {
  const routes = render(<App />);
  expect(routes).toBeTruthy();
});
