import Component from './component.js';
import * as hookOptions from './hook.js';

export function render(vnode, parentDom) {
  const { type, props, children, component } = vnode;

  let c, oldDom;

  oldDom = vnode.dom;

  try {
    if (typeof type === 'function') {
      if (component) {
        c = component;
      } else {
        c = new Component();

        c.component = type;
        c.vnode = vnode;
      }

      vnode.component = c;

      hookOptions.init(vnode);

      const newVNode = c.render();

      vnode.dom = document.createElement('div');
      vnode.dom.setAttribute('data-type', 'component'); // component 임을 구분하기 위해 명시

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

    if(oldDom){
      parentDom.removeChild(oldDom);
    }

  } catch (e) {
    console.log(e);
  }
}
