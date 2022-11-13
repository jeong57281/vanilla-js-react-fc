/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _core_createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/createElement.js */ "./src/core/createElement.js");
/* harmony import */ var _core_hook_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/hook.js */ "./src/core/hook.js");
/* harmony import */ var _components_Count_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Count.jsx */ "./src/components/Count.jsx");




/** @jsx h */

function App() {
  const [visible, setVisible] = (0,_core_hook_js__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  return (0,_core_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_core_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => setVisible(!visible)
  }, visible ? 'hidden' : 'show'), visible && (0,_core_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Count_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/***/ }),

/***/ "./src/components/Count.jsx":
/*!**********************************!*\
  !*** ./src/components/Count.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Count)
/* harmony export */ });
/* harmony import */ var _core_createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/createElement.js */ "./src/core/createElement.js");
/* harmony import */ var _core_hook_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/hook.js */ "./src/core/hook.js");



/** @jsx h */

function Count() {
  const [count, setCount] = (0,_core_hook_js__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  return (0,_core_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_core_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => setCount(count - 1)
  }, "-"), `count: ${count}`, (0,_core_createElement_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => setCount(count + 1)
  }, "+"));
}

/***/ }),

/***/ "./src/core/component.js":
/*!*******************************!*\
  !*** ./src/core/component.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/core/render.js");

class Component {
  constructor() {
    this.component = null;
    this.vnode = null;
    this.hooks = [];
  }
  render() {
    const {
      props
    } = this.vnode;
    return this.component(props);
  }
  setState() {
    (0,_render_js__WEBPACK_IMPORTED_MODULE_0__.render)(this.vnode, this.vnode.dom.parentNode);
  }
}

/***/ }),

/***/ "./src/core/createElement.js":
/*!***********************************!*\
  !*** ./src/core/createElement.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
function createElement(type, props, children) {
  children = Array.prototype.slice.call(arguments, 2);
  const vnode = {
    type,
    props,
    children,
    dom: null,
    component: null
  };
  return vnode;
}

/***/ }),

/***/ "./src/core/hook.js":
/*!**************************!*\
  !*** ./src/core/hook.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "useState": () => (/* binding */ useState)
/* harmony export */ });
let currentComponent;
let currentIndex;
function init(vnode) {
  currentComponent = vnode.component;
  currentIndex = 0;
}
function getHookState(index) {
  if (!currentComponent.hooks[index]) {
    currentComponent.hooks.push({});
  }
  return currentComponent.hooks[index];
}
function useState(initalState) {
  const hookState = getHookState(currentIndex++);
  if (!hookState.value) {
    hookState.value = [initalState, newState => {
      if (hookState.value[0] !== newState) {
        hookState.value[0] = newState;
        hookState.component.setState();
      }
    }];
    hookState.component = currentComponent;
  }
  return hookState.value;
}

/***/ }),

/***/ "./src/core/render.js":
/*!****************************!*\
  !*** ./src/core/render.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.js */ "./src/core/component.js");
/* harmony import */ var _hook_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hook.js */ "./src/core/hook.js");


function render(vnode, parentDom) {
  const {
    type,
    props,
    children,
    component
  } = vnode;
  let c, oldDom;
  oldDom = vnode.dom;
  try {
    if (typeof type === 'function') {
      if (component) {
        c = component;
      } else {
        c = new _component_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        c.component = type;
        c.vnode = vnode;
      }
      vnode.component = c;
      _hook_js__WEBPACK_IMPORTED_MODULE_1__.init(vnode);
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
      children.forEach(child => {
        if (typeof child === 'string') {
          vnode.dom.appendChild(document.createTextNode(child));
        } else {
          render(child, vnode.dom);
        }
      });
    }
    parentDom.appendChild(vnode.dom);
    if (oldDom) {
      parentDom.removeChild(oldDom);
    }
  } catch (e) {
    console.log(e);
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.jsx */ "./src/App.jsx");
/* harmony import */ var _core_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/render.js */ "./src/core/render.js");
/* harmony import */ var _core_createElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/createElement.js */ "./src/core/createElement.js");




/** @jsx h */

(0,_core_render_js__WEBPACK_IMPORTED_MODULE_1__.render)((0,_core_createElement_js__WEBPACK_IMPORTED_MODULE_2__.createElement)(_App_jsx__WEBPACK_IMPORTED_MODULE_0__["default"], null), document.querySelector('#app'));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONEI7QUFDYztBQUNtQjs7QUFFN0Q7O0FBRUEzQyx1REFBTSxDQUFDLHNFQUFDLGdEQUFHLE9BQUcsRUFBRWdDLFFBQVEsQ0FBQ2MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8wMy1qc3gvLi9zcmMvQXBwLmpzeCIsIndlYnBhY2s6Ly8wMy1qc3gvLi9zcmMvY29tcG9uZW50cy9Db3VudC5qc3giLCJ3ZWJwYWNrOi8vMDMtanN4Ly4vc3JjL2NvcmUvY29tcG9uZW50LmpzIiwid2VicGFjazovLzAzLWpzeC8uL3NyYy9jb3JlL2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vMDMtanN4Ly4vc3JjL2NvcmUvaG9vay5qcyIsIndlYnBhY2s6Ly8wMy1qc3gvLi9zcmMvY29yZS9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vMDMtanN4L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzAzLWpzeC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vMDMtanN4L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vMDMtanN4L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vMDMtanN4Ly4vc3JjL2luZGV4LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IGFzIGggfSBmcm9tICcuL2NvcmUvY3JlYXRlRWxlbWVudC5qcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJy4vY29yZS9ob29rLmpzJztcbmltcG9ydCBDb3VudCBmcm9tICcuL2NvbXBvbmVudHMvQ291bnQuanN4JztcblxuLyoqIEBqc3ggaCAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSghdmlzaWJsZSl9PlxuICAgICAgICB7IHZpc2libGUgPyAnaGlkZGVuJyA6ICdzaG93JyB9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHsgdmlzaWJsZSAmJiA8Q291bnQgLz4gfVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCBhcyBoIH0gZnJvbSAnLi4vY29yZS9jcmVhdGVFbGVtZW50LmpzJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAnLi4vY29yZS9ob29rLmpzJztcblxuLyoqIEBqc3ggaCAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3VudCgpIHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50KGNvdW50IC0gMSl9Pi08L2J1dHRvbj5cbiAgICAgIHsgYGNvdW50OiAke2NvdW50fWAgfVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudChjb3VudCArIDEpfT4rPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tICcuL3JlbmRlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcbiAgICB0aGlzLnZub2RlID0gbnVsbDtcbiAgICB0aGlzLmhvb2tzID0gW107XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcy52bm9kZTtcblxuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudChwcm9wcyk7XG4gIH1cblxuICBzZXRTdGF0ZSgpIHtcbiAgICByZW5kZXIodGhpcy52bm9kZSwgdGhpcy52bm9kZS5kb20ucGFyZW50Tm9kZSk7XG4gIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgY2hpbGRyZW4gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuXG4gIGNvbnN0IHZub2RlID0ge1xuICAgIHR5cGUsXG4gICAgcHJvcHMsXG4gICAgY2hpbGRyZW4sXG4gICAgZG9tOiBudWxsLFxuICAgIGNvbXBvbmVudDogbnVsbCxcbiAgfTtcblxuICByZXR1cm4gdm5vZGU7XG59XG4iLCJsZXQgY3VycmVudENvbXBvbmVudDtcblxubGV0IGN1cnJlbnRJbmRleDtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQodm5vZGUpIHtcbiAgY3VycmVudENvbXBvbmVudCA9IHZub2RlLmNvbXBvbmVudDtcbiAgY3VycmVudEluZGV4ID0gMDtcbn1cblxuZnVuY3Rpb24gZ2V0SG9va1N0YXRlKGluZGV4KSB7XG4gIGlmICghY3VycmVudENvbXBvbmVudC5ob29rc1tpbmRleF0pIHtcbiAgICBjdXJyZW50Q29tcG9uZW50Lmhvb2tzLnB1c2goe30pO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnRDb21wb25lbnQuaG9va3NbaW5kZXhdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGFsU3RhdGUpIHtcbiAgY29uc3QgaG9va1N0YXRlID0gZ2V0SG9va1N0YXRlKGN1cnJlbnRJbmRleCsrKTtcblxuICBpZiAoIWhvb2tTdGF0ZS52YWx1ZSkge1xuICAgIGhvb2tTdGF0ZS52YWx1ZSA9IFtcbiAgICAgIGluaXRhbFN0YXRlLFxuXG4gICAgICAobmV3U3RhdGUpID0+IHtcbiAgICAgICAgaWYgKGhvb2tTdGF0ZS52YWx1ZVswXSAhPT0gbmV3U3RhdGUpIHtcbiAgICAgICAgICBob29rU3RhdGUudmFsdWVbMF0gPSBuZXdTdGF0ZTtcbiAgICAgICAgICBob29rU3RhdGUuY29tcG9uZW50LnNldFN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgXTtcblxuICAgIGhvb2tTdGF0ZS5jb21wb25lbnQgPSBjdXJyZW50Q29tcG9uZW50O1xuICB9XG5cbiAgcmV0dXJuIGhvb2tTdGF0ZS52YWx1ZTtcbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQuanMnO1xuaW1wb3J0ICogYXMgaG9va09wdGlvbnMgZnJvbSAnLi9ob29rLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcih2bm9kZSwgcGFyZW50RG9tKSB7XG4gIGNvbnN0IHsgdHlwZSwgcHJvcHMsIGNoaWxkcmVuLCBjb21wb25lbnQgfSA9IHZub2RlO1xuXG4gIGxldCBjLCBvbGREb207XG5cbiAgb2xkRG9tID0gdm5vZGUuZG9tO1xuXG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgIGMgPSBjb21wb25lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjID0gbmV3IENvbXBvbmVudCgpO1xuXG4gICAgICAgIGMuY29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgYy52bm9kZSA9IHZub2RlO1xuICAgICAgfVxuXG4gICAgICB2bm9kZS5jb21wb25lbnQgPSBjO1xuXG4gICAgICBob29rT3B0aW9ucy5pbml0KHZub2RlKTtcblxuICAgICAgY29uc3QgbmV3Vk5vZGUgPSBjLnJlbmRlcigpO1xuXG4gICAgICB2bm9kZS5kb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHZub2RlLmRvbS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdHlwZScsICdjb21wb25lbnQnKTsgLy8gY29tcG9uZW50IOyehOydhCDqtazrtoTtlZjquLAg7JyE7ZW0IOuqheyLnFxuXG4gICAgICByZW5kZXIobmV3Vk5vZGUsIHZub2RlLmRvbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZub2RlLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG5cbiAgICAgIGlmIChwcm9wcyAhPSBudWxsKSB7XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHByb3BzKS5mb3JFYWNoKChbYXR0ciwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgdm5vZGUuZG9tW2F0dHIudG9Mb3dlckNhc2UoKV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdm5vZGUuZG9tLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVuZGVyKGNoaWxkLCB2bm9kZS5kb20pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwYXJlbnREb20uYXBwZW5kQ2hpbGQodm5vZGUuZG9tKTtcblxuICAgIGlmKG9sZERvbSl7XG4gICAgICBwYXJlbnREb20ucmVtb3ZlQ2hpbGQob2xkRG9tKTtcbiAgICB9XG5cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBBcHAgZnJvbSAnLi9BcHAuanN4JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJy4vY29yZS9yZW5kZXIuanMnO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCBhcyBoIH0gZnJvbSAnLi9jb3JlL2NyZWF0ZUVsZW1lbnQuanMnO1xuXG4vKiogQGpzeCBoICovXG5cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwJykpOyJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwiaCIsInVzZVN0YXRlIiwiQ291bnQiLCJBcHAiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImNvdW50Iiwic2V0Q291bnQiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImNvbXBvbmVudCIsInZub2RlIiwiaG9va3MiLCJwcm9wcyIsInNldFN0YXRlIiwiZG9tIiwicGFyZW50Tm9kZSIsInR5cGUiLCJjaGlsZHJlbiIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwiY3VycmVudENvbXBvbmVudCIsImN1cnJlbnRJbmRleCIsImluaXQiLCJnZXRIb29rU3RhdGUiLCJpbmRleCIsInB1c2giLCJpbml0YWxTdGF0ZSIsImhvb2tTdGF0ZSIsInZhbHVlIiwibmV3U3RhdGUiLCJob29rT3B0aW9ucyIsInBhcmVudERvbSIsImMiLCJvbGREb20iLCJuZXdWTm9kZSIsImRvY3VtZW50Iiwic2V0QXR0cmlidXRlIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJhdHRyIiwidG9Mb3dlckNhc2UiLCJjaGlsZCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJyZW1vdmVDaGlsZCIsImUiLCJjb25zb2xlIiwibG9nIiwicXVlcnlTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=