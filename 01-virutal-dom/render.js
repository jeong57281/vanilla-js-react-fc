export function render(vnode, parentDom) {
  const { type, props, children } = vnode;

  vnode.dom = document.createElement(type);

  if (props != null) {
    Object.entries(props).forEach(([attr, value]) => {
      vnode.dom[attr.toLowerCase()] = value;
    });
  }

  children.forEach((child) => {
    if (typeof child === 'string') {
      vnode.dom.appendChild(document.createTextNode(child));
    } else {
      render(child, vnode.dom);
    }
  });

  parentDom.appendChild(vnode.dom);
}
