import { createElement as h } from './core/createElement.js';
import { useState } from './core/hook.js';
import Count from './components/Count.jsx';

/** @jsx h */

export default function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        { visible ? 'hidden' : 'show' }
      </button>
      { visible && <Count /> }
    </div>
  );
}
