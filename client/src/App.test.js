import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PITBAUjOURNAL Text', () => {
  render(<App />);
  const linkElement = screen.getByText(/PITBAUjOURNAL/i);
  expect(linkElement).toBeInTheDocument();
});

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

test('renders Login text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Baujournal text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Baujournal/i);
  expect(linkElement).toBeInTheDocument();
});
