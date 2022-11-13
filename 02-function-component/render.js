export function render(vnode, parentDom) {
  const { type, props, children } = vnode;

  if (typeof type === 'function') {
    vnode.dom = document.createElement('div');
    vnode.dom.setAttribute('data-type', 'component'); // 함수 컴포넌트임을 명시

    const newVNode = type(props);

    render(newVNode, vnode.dom);
  } else {
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
  }

  parentDom.appendChild(vnode.dom);
}
