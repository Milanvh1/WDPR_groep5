import { render, screen } from '@testing-library/react';
import App from './MainPageScreen/App';
import DonorScreen from './DonorScreen/DonorScreen';

test('renders learn react link', () => {
  render(<DonorScreen />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
