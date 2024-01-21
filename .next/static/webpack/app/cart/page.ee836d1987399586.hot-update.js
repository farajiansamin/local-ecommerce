"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/cart/page",{

/***/ "(app-pages-browser)/./app/cart/CartEntry.tsx":
/*!********************************!*\
  !*** ./app/cart/CartEntry.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CartEntry; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/format */ \"(app-pages-browser)/./app/lib/format.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nfunction CartEntry(param) {\n    let { cartItem: { product, quantity }, setProductQuantity } = param;\n    const quantityOptions = [];\n    for(let i = 1; i < 99; i++){\n        quantityOptions.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n            value: i,\n            children: i\n        }, i, false, {\n            fileName: \"/Users/saminfarajian/local-ecommerce/app/cart/CartEntry.tsx\",\n            lineNumber: 23,\n            columnNumber: 30\n        }, this));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap items-center gap-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"rounded-lg\",\n                        src: product.imgUrl,\n                        alt: product.name,\n                        width: 200,\n                        height: 200\n                    }, void 0, false, {\n                        fileName: \"/Users/saminfarajian/local-ecommerce/app/cart/CartEntry.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/products/\" + product.id,\n                                className: \"font-bold\",\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"/Users/saminfarajian/local-ecommerce/app/cart/CartEntry.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    \"Price:\",\n                                    (0,_lib_format__WEBPACK_IMPORTED_MODULE_4__.formatPrice)(product.price)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/saminfarajian/local-ecommerce/app/cart/CartEntry.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-1 flex items-center gap-2\",\n                                children: [\n                                    \"Quantity: \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        className: \" select select-boarder w-full max-w-[80]\",\n                                        defaultValue: quantity,\n                                        onChange: (e)=>{\n                                            const newQuantity = parseInt(e.currentTarget.value);\n                                        },\n                                        children: quantityOptions\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saminfarajian/local-ecommerce/app/cart/CartEntry.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 23\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/saminfarajian/local-ecommerce/app/cart/CartEntry.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-3\",\n                                children: [\n                                    \" Total: \",\n                                    product.price * quantity\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/saminfarajian/local-ecommerce/app/cart/CartEntry.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/saminfarajian/local-ecommerce/app/cart/CartEntry.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/saminfarajian/local-ecommerce/app/cart/CartEntry.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"divider\"\n            }, void 0, false, {\n                fileName: \"/Users/saminfarajian/local-ecommerce/app/cart/CartEntry.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/saminfarajian/local-ecommerce/app/cart/CartEntry.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_c = CartEntry;\nvar _c;\n$RefreshReg$(_c, \"CartEntry\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jYXJ0L0NhcnRFbnRyeS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUUwQjtBQUVLO0FBQ0Y7QUFDZTtBQU83QixTQUFTSSxVQUFVLEtBS2pCO1FBTGlCLEVBR2hDQyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFLEVBQy9CQyxrQkFBa0IsRUFDSCxHQUxpQjtJQU85QixNQUFNQyxrQkFBZ0MsRUFBRTtJQUN4QyxJQUFLLElBQUlDLElBQUUsR0FBR0EsSUFBRSxJQUFJQSxJQUFJO1FBQ3BCRCxnQkFBZ0JFLElBQUksZUFBQyw4REFBQ0M7WUFBT0MsT0FBT0g7c0JBQVlBO1dBQUpBOzs7OztJQUVoRDtJQUNGLHFCQUNFLDhEQUFDSTs7MEJBQ0MsOERBQUNBO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2QsbURBQUtBO3dCQUNKYyxXQUFVO3dCQUNWQyxLQUFLVixRQUFRVyxNQUFNO3dCQUNuQkMsS0FBS1osUUFBUWEsSUFBSTt3QkFDakJDLE9BQU87d0JBQ1BDLFFBQVE7Ozs7OztrQ0FFViw4REFBQ1A7OzBDQUNDLDhEQUFDWixrREFBSUE7Z0NBQUNvQixNQUFNLGVBQWVoQixRQUFRaUIsRUFBRTtnQ0FBRVIsV0FBVTswQ0FDOUNULFFBQVFhLElBQUk7Ozs7OzswQ0FFZiw4REFBQ0w7O29DQUFJO29DQUFPWCx3REFBV0EsQ0FBQ0csUUFBUWtCLEtBQUs7Ozs7Ozs7MENBQ3JDLDhEQUFDVjtnQ0FBSUMsV0FBVTs7b0NBQStCO2tEQUNsQyw4REFBQ1U7d0NBQU9WLFdBQVU7d0NBQTJDVyxjQUFjbkI7d0NBQVVvQixVQUFVQyxDQUFBQTs0Q0FBSSxNQUFNQyxjQUFZQyxTQUFTRixFQUFFRyxhQUFhLENBQUNsQixLQUFLO3dDQUFDO2tEQUFJSjs7Ozs7Ozs7Ozs7OzBDQUVwSyw4REFBQ0s7Z0NBQUlDLFdBQVU7O29DQUEwQjtvQ0FBU1QsUUFBUWtCLEtBQUssR0FBRWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtyRSw4REFBQ087Z0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7OztBQUdyQjtLQXRDd0JYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jYXJ0L0NhcnRFbnRyeS50c3g/MWIwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FydEl0ZW1XaXRoUHJvZHVjdCB9IGZyb20gXCIuLi9saWIvZGIvY2FydFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gXCIuLi9saWIvZm9ybWF0XCI7XG5cbmludGVyZmFjZSBDYXJ0RW50cnlQcm9wcyB7XG4gIGNhcnRJdGVtOiBDYXJ0SXRlbVdpdGhQcm9kdWN0O1xuICBzZXRQcm9kdWN0UXVhbnRpdHk6KHByb2R1Y3RJZDpzdHJpbmcsIHF1YW50aXR5Om51bWJlcikgPT5Qcm9taXNlPHZvaWQ+XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnRFbnRyeSh7XG5cbiAgIFxuICBjYXJ0SXRlbTogeyBwcm9kdWN0LCBxdWFudGl0eSB9LFxuICBzZXRQcm9kdWN0UXVhbnRpdHlcbn06IENhcnRFbnRyeVByb3BzKSB7XG5cbiAgICBjb25zdCBxdWFudGl0eU9wdGlvbnMgOiBKU1guRWxlbWVudFtdPVtdO1xuICAgIGZvciAobGV0IGk9MTsgaTw5OTsgaSsrKXtcbiAgICAgICAgcXVhbnRpdHlPcHRpb25zLnB1c2goPG9wdGlvbiB2YWx1ZT17aX0ga2V5PXtpfT57aX08L29wdGlvbj4pXG5cbiAgICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIlxuICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWdVcmx9XG4gICAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XG4gICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGluayBocmVmPXtcIi9wcm9kdWN0cy9cIiArIHByb2R1Y3QuaWR9IGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxuICAgICAgICAgICAge3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGRpdj5QcmljZTp7Zm9ybWF0UHJpY2UocHJvZHVjdC5wcmljZSl9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+XG4gICAgICAgICAgICBRdWFudGl0eTogPHNlbGVjdCBjbGFzc05hbWU9XCIgc2VsZWN0IHNlbGVjdC1ib2FyZGVyIHctZnVsbCBtYXgtdy1bODBdXCIgZGVmYXVsdFZhbHVlPXtxdWFudGl0eX0gb25DaGFuZ2U9e2U9Pntjb25zdCBuZXdRdWFudGl0eT1wYXJzZUludChlLmN1cnJlbnRUYXJnZXQudmFsdWUpfX0+e3F1YW50aXR5T3B0aW9uc308L3NlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+IFRvdGFsOiB7cHJvZHVjdC5wcmljZSAqcXVhbnRpdHl9PC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbWFnZSIsIkxpbmsiLCJmb3JtYXRQcmljZSIsIkNhcnRFbnRyeSIsImNhcnRJdGVtIiwicHJvZHVjdCIsInF1YW50aXR5Iiwic2V0UHJvZHVjdFF1YW50aXR5IiwicXVhbnRpdHlPcHRpb25zIiwiaSIsInB1c2giLCJvcHRpb24iLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImltZ1VybCIsImFsdCIsIm5hbWUiLCJ3aWR0aCIsImhlaWdodCIsImhyZWYiLCJpZCIsInByaWNlIiwic2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwib25DaGFuZ2UiLCJlIiwibmV3UXVhbnRpdHkiLCJwYXJzZUludCIsImN1cnJlbnRUYXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/cart/CartEntry.tsx\n"));

/***/ })

});