import { createElement as h } from './createElement.js';

export default function App() {
  return (
    h(
      'div',
      null,
      h(
        'button',
        { onClick: () => alert('hello world') },
        'alert'
      )
    )
  );
}
