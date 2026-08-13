import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders the name as the page heading', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { level: 1, name: /peter lovei/i })
  ).toBeInTheDocument();
});

test('renders every section heading', () => {
  render(<App />);
  const headings = ['Hello, I am Peter Lovei', 'Close to Heart', 'Specific activities and challenges', 'A summary of my process, and project highlights'];

  headings.forEach((name) => {
    expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument();
  });
});

test('exposes the profile links a recruiter needs', () => {
  render(<App />);

  const linkedin = screen.getAllByRole('link', { name: /linkedin/i });
  const scholar = screen.getAllByRole('link', { name: /google scholar/i });

  expect(linkedin.length).toBeGreaterThan(0);
  expect(scholar.length).toBeGreaterThan(0);
  expect(linkedin[0]).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/peterlovei/'
  );
  expect(scholar[0]).toHaveAttribute(
    'href',
    expect.stringContaining('scholar.google.com')
  );
});

test('links the project banner to the project story', () => {
  render(<App />);
  const bannerLink = screen.getByRole('link', {
    name: /close to heart — read the project story/i,
  });

  expect(bannerLink).toHaveAttribute(
    'href',
    expect.stringContaining('philips.nl')
  );
});

test('lists all six activities', () => {
  render(<App />);
  const approach = screen
    .getByRole('heading', { level: 2, name: 'Specific activities and challenges' })
    .closest('section');

  expect(within(approach).getAllByRole('listitem')).toHaveLength(6);
});
