import * as React from 'react';
import { shallow } from 'enzyme';
import Latex from './Latex';

describe('Latex', () => {
  it('renders text that has multiple LaTeX formulas with $ delimiter', () => {
    const latex = 'three processes $e^+e^-$, gluon-gluon and $\\gamma\\gamma \\to W t\\bar b$.';
    const wrapper = shallow(<Latex>{latex}</Latex>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders text that has multiple LaTeX formulas with $$ delimiter', () => {
    const latex = 'three processes $$e^+e^-$$, gluon-gluon and $$\\gamma\\gamma \\to W t\\bar b$$.';
    const wrapper = shallow(<Latex>{latex}</Latex>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders text that has a LaTeX formula with custom delimiter', () => {
    const latex = 'three processes <math e^+e^- math>';
    const delimiters = [
      { left: '<math ', right: ' math>', display: true },
    ]
    const wrapper = shallow(<Latex delimiters={delimiters}>{latex}</Latex>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders raw LaTeX incase of error by default', () => {
    const latex = 'Broken formulate: $\to W t\bar b$.';
    const wrapper = shallow(<Latex>{latex}</Latex>);
    expect(wrapper).toMatchSnapshot();
  });

  it('throws error incase of error', () => {
    const latex = 'Broken formulate: $\to W t\bar b$.';
    const brokenRender = () => shallow(<Latex strict>{latex}</Latex>);
    expect(brokenRender).toThrowError();
  });
});
