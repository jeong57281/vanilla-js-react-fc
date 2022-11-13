import App from './App.jsx';
import { render } from './core/render.js';
import { createElement as h } from './core/createElement.js';

/** @jsx h */

render(<App />, document.querySelector('#app'));