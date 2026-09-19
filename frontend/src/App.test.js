import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Waypoint header brand and generate button', () => {
  render(<App />);
  const brandElements = screen.getAllByText(/Waypoint/i);
  expect(brandElements.length).toBeGreaterThan(0);
  
  const generateBtn = screen.getByRole('button', { name: /Generate My Digital Starter Kit/i });
  expect(generateBtn).toBeInTheDocument();
});
