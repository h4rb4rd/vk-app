import React from 'react';
import ReactDom from 'react-dom';
import SocialApp from './app';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDom.render(<SocialApp />, div);
  ReactDom.unmountComponentAtNode(div);
});
