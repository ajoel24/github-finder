import React from 'react';
import { render, cleanup } from '@testing-library/react';
import About from '../About';

afterEach(cleanup);

describe('About component', () => {
  const { asFragment, findByTestId } = render(<About />);
  it('Matches snapshot', () => {
    expect(asFragment(<About />)).toMatchSnapshot();
  });
  it('Contains the components', () => {
    expect(findByTestId('container')).toBeTruthy();
    expect(findByTestId('heading')).toBeTruthy();
    expect(findByTestId('desc')).toBeTruthy();
  });
});
