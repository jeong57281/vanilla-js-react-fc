import { render } from './render.js';

export default class Component {
  constructor() {
    this.component = null;
    this.vnode = null;
    this.hooks = [];
  }

  render() {
    const { props } = this.vnode;

    return this.component(props);
  }

  setState() {
    render(this.vnode, this.vnode.dom.parentNode);
  }
}