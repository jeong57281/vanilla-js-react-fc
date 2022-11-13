import { createElement as h } from './createElement.js';
import { useState } from './hook.js';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    h(
      'div',
      null,
      h('button', { onclick: () => setCount(count - 1) }, '-'),
      `count: ${count}`,
      h('button', { onclick: () => setCount(count + 1) }, '+')
    )
  );
}
