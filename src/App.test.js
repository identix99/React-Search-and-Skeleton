import { render, screen } from '@testing-library/react';
import App from './App';

test('render testing app and skeleton', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search Card Title And Get Results/i);
  expect(linkElement).toBeInTheDocument();
});

 