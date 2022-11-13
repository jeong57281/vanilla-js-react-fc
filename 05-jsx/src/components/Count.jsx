import { createElement as h } from '../core/createElement.js';
import { useState } from '../core/hook.js';

/** @jsx h */

export default function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      { `count: ${count}` }
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
