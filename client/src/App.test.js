import { render, screen } from '@testing-library/react';
import App from './App';

test('renders user text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Benutzer/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders password text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Passwort/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders logout text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
