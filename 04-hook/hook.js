let currentComponent;

let currentIndex;

export function init(vnode) {
  currentComponent = vnode.component;
  currentIndex = 0;
}

function getHookState(index) {
  if (!currentComponent.hooks[index]) {
    currentComponent.hooks.push({});
  }

  return currentComponent.hooks[index];
}

export function useState(initalState) {
  const hookState = getHookState(currentIndex++);

  if (!hookState.value) {
    hookState.value = [
      initalState,

      (newState) => {
        if (hookState.value[0] !== newState) {
          hookState.value[0] = newState;
          hookState.component.setState();
        }
      },
    ];

    hookState.component = currentComponent;
  }

  return hookState.value;
}
