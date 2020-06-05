import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Home from '../Home';

describe('Home Component', () => {
  const { asFragment, findByTestId } = render(<Home />);

  it('Matches snapshot', () => {
    expect(asFragment(<Home />)).toMatchSnapshot();
  });
});
