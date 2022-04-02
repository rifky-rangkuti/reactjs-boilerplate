"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.page.tsx":
/*!*********************************!*\
  !*** ./src/pages/_app.page.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ^styles/global.scss */ \"./src/styles/global.scss\");\n/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ^redux/store */ \"./src/redux/store.ts\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-query */ \"./node_modules/react-query/es/index.js\");\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(function() {\n        return new react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient();\n    }), queryClient = ref[0];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isMobile = ref1[0], setIsMobile = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var body = document.querySelector('#__next');\n        var observer = new ResizeObserver(function(entries) {\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var entry = _step.value;\n                    if (entry.contentRect.width >= 768) {\n                        setIsMobile(false);\n                    } else {\n                        setIsMobile(true);\n                    }\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n        });\n        if (body) observer.observe(body);\n        return function() {\n            if (body) observer.unobserve(body);\n        };\n    }, []) // sidebar responsive condition\n    ;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_4__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {\n            client: queryClient,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_query__WEBPACK_IMPORTED_MODULE_5__.Hydrate, {\n                state: pageProps.dehydratedState,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                    fileName: \"/Users/rifky/Documents/Project/boilerplate/src/pages/_app.page.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/rifky/Documents/Project/boilerplate/src/pages/_app.page.tsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/rifky/Documents/Project/boilerplate/src/pages/_app.page.tsx\",\n            lineNumber: 28,\n            columnNumber: 3\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/rifky/Documents/Project/boilerplate/src/pages/_app.page.tsx\",\n        lineNumber: 27,\n        columnNumber: 10\n    }, this));\n}\n_s(MyApp, \"ClbBtz0dpYGomvxFtlqZOlIx534=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5wYWdlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0QjtBQUNhO0FBRUw7QUFDRjtBQUNtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRTVETyxLQUFLLENBQUMsS0FBZ0MsRUFBRSxDQUFDO1FBQWxDQyxTQUFTLEdBQVYsS0FBZ0MsQ0FBL0JBLFNBQVMsRUFBRUMsU0FBUyxHQUFyQixLQUFnQyxDQUFwQkEsU0FBUzs7SUFDbEMsR0FBSyxDQUFpQlQsR0FBaUMsR0FBakNBLCtDQUFRLENBQUMsUUFBUTtRQUFGLE1BQU0sQ0FBTixHQUFHLENBQUNJLG9EQUFXO1FBQTdDTSxXQUFXLEdBQUlWLEdBQWlDO0lBQ3ZELEdBQUssQ0FBMkJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXZDVyxRQUFRLEdBQWlCWCxJQUFlLEtBQTlCWSxXQUFXLEdBQUlaLElBQWU7SUFDL0NDLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsR0FBSyxDQUFDWSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQVM7UUFDN0MsR0FBSyxDQUFDQyxRQUFRLEdBQUcsR0FBRyxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFQQyxPQUFPLEVBQUssQ0FBQztnQkFDM0MseUJBQVcsU0FBWCxpQkFBVyxVQUFYLGNBQVc7O2dCQUFoQixHQUFHLEtBQUUsU0FBVyxHQUFJQSxPQUFPLHFCQUF0QixLQUFXLElBQVgseUJBQVcsSUFBWCxLQUFXLEdBQVgsU0FBVyxnQkFBWCx5QkFBVyxRQUFhLENBQUM7b0JBQXpCLEdBQUssQ0FBQ0MsS0FBSyxHQUFYLEtBQVc7b0JBQ2QsRUFBRSxFQUFFQSxLQUFLLENBQUNDLFdBQVcsQ0FBQ0MsS0FBSyxJQUFJLEdBQUcsRUFBRSxDQUFDO3dCQUNuQ1QsV0FBVyxDQUFDLEtBQUs7b0JBQ25CLENBQUMsTUFBTSxDQUFDO3dCQUNOQSxXQUFXLENBQUMsSUFBSTtvQkFDbEIsQ0FBQztnQkFDSCxDQUFDOztnQkFOSSxpQkFBVztnQkFBWCxjQUFXOzs7eUJBQVgseUJBQVcsSUFBWCxTQUFXO3dCQUFYLFNBQVc7Ozt3QkFBWCxpQkFBVzs4QkFBWCxjQUFXOzs7O1FBT2xCLENBQUM7UUFDRCxFQUFFLEVBQUVDLElBQUksRUFBRUcsUUFBUSxDQUFDTSxPQUFPLENBQUNULElBQUk7UUFDL0IsTUFBTSxDQUFDLFFBQ1gsR0FEaUIsQ0FBQztZQUNaLEVBQUUsRUFBRUEsSUFBSSxFQUFFRyxRQUFRLENBQUNPLFNBQVMsQ0FBQ1YsSUFBSTtRQUNuQyxDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFFLENBQStCOztJQUN0QyxNQUFNLDZFQUFFWCxpREFBUTtRQUFDQyxLQUFLLEVBQUVBLCtDQUFLOzhGQUM1QkUsNERBQW1CO1lBQUNtQixNQUFNLEVBQUVkLFdBQVc7a0dBQ3JDSixnREFBTztnQkFBQ21CLEtBQUssRUFBRWhCLFNBQVMsQ0FBQ2lCLGVBQWU7c0dBQ3RDbEIsU0FBUyxvQkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUIsQ0FBQztHQTFCUUYsS0FBSztLQUFMQSxLQUFLO0FBNEJkLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9fYXBwLnBhZ2UudHN4PzkzYjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdec3R5bGVzL2dsb2JhbC5zY3NzJ1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHtBcHBQcm9wc30gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7c3RvcmV9IGZyb20gJ15yZWR1eC9zdG9yZSdcbmltcG9ydCB7UXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIsIEh5ZHJhdGV9IGZyb20gJ3JlYWN0LXF1ZXJ5J1xuXG5mdW5jdGlvbiBNeUFwcCh7Q29tcG9uZW50LCBwYWdlUHJvcHN9OiBBcHBQcm9wcykge1xuICBjb25zdCBbcXVlcnlDbGllbnRdID0gdXNlU3RhdGUoKCkgPT4gbmV3IFF1ZXJ5Q2xpZW50KCkpXG4gIGNvbnN0IFtpc01vYmlsZSwgc2V0SXNNb2JpbGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHQnKVxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgaWYgKGVudHJ5LmNvbnRlbnRSZWN0LndpZHRoID49IDc2OCkge1xuICAgICAgICAgIHNldElzTW9iaWxlKGZhbHNlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldElzTW9iaWxlKHRydWUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIGlmIChib2R5KSBvYnNlcnZlci5vYnNlcnZlKGJvZHkpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChib2R5KSBvYnNlcnZlci51bm9ic2VydmUoYm9keSlcbiAgICB9XG4gIH0sIFtdKSAvLyBzaWRlYmFyIHJlc3BvbnNpdmUgY29uZGl0aW9uXG4gIHJldHVybiA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgPEh5ZHJhdGUgc3RhdGU9e3BhZ2VQcm9wcy5kZWh5ZHJhdGVkU3RhdGV9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvSHlkcmF0ZT5cbiAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuPC9Qcm92aWRlcj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByb3ZpZGVyIiwic3RvcmUiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJIeWRyYXRlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJxdWVyeUNsaWVudCIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib2JzZXJ2ZXIiLCJSZXNpemVPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNvbnRlbnRSZWN0Iiwid2lkdGgiLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwiY2xpZW50Iiwic3RhdGUiLCJkZWh5ZHJhdGVkU3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.page.tsx\n");

/***/ })

});