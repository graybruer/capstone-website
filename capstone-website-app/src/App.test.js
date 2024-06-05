import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import App from './App';

//  ** Note to self: the reason this didn't work for ages is because it was inside BrowserRouter. Damn BrowserRouter. **
test('Is anything working', () => {
  render(<App />)
  document.getElementById('root');
  const Container = screen.getByTestId("Container");
  expect(Container).toBeInTheDocument();
});
