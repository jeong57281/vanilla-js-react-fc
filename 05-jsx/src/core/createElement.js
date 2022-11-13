export function createElement(type, props, children) {
  children = Array.prototype.slice.call(arguments, 2);

  const vnode = {
    type,
    props,
    children,
    dom: null,
    component: null,
  };

  return vnode;
}
