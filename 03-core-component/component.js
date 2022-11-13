export default class Component {
  constructor() {
    this.component = null;
    this.vnode = null;
  }

  render() {
    const { props } = this.vnode;

    return this.component(props);
  }
}