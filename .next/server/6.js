exports.ids = [6];
exports.modules = {

/***/ "./constants/modes.js":
/*!****************************!*\
  !*** ./constants/modes.js ***!
  \****************************/
/*! exports provided: MODES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MODES\", function() { return MODES; });\nconst MODES = {\n  SLIDESHOW: 'slideshow',\n  SPEAKER: 'speaker'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (MODES);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvbW9kZXMuanM/NmRhMCJdLCJuYW1lcyI6WyJNT0RFUyIsIlNMSURFU0hPVyIsIlNQRUFLRVIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxNQUFNQSxLQUFLLEdBQUc7QUFDbkJDLFdBQVMsRUFBRSxXQURRO0FBRW5CQyxTQUFPLEVBQUU7QUFGVSxDQUFkO0FBS1FGLG9FQUFmIiwiZmlsZSI6Ii4vY29uc3RhbnRzL21vZGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IE1PREVTID0ge1xuICBTTElERVNIT1c6ICdzbGlkZXNob3cnLFxuICBTUEVBS0VSOiAnc3BlYWtlcicsXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1PREVTXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/modes.js\n");

/***/ }),

/***/ "./context/ModeContext.jsx":
/*!*********************************!*\
  !*** ./context/ModeContext.jsx ***!
  \*********************************/
/*! exports provided: ModeContext, ModeProvider, useMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModeContext\", function() { return ModeContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModeProvider\", function() { return ModeProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useMode\", function() { return useMode; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants_modes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/modes */ \"./constants/modes.js\");\n\nvar _jsxFileName = \"/Users/abellisario/code/a11y-presentation/context/ModeContext.jsx\";\n\n\n\nconst ModeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction ModeProvider({\n  children\n}) {\n  const {\n    0: mode,\n    1: setMode\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(_constants_modes__WEBPACK_IMPORTED_MODULE_3__[\"MODES\"].SLIDESHOW);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const newMode = router.query.mode;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (newMode) setMode(newMode);\n  }, [newMode]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ModeContext.Provider, {\n    value: {\n      mode,\n      setMode\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 7\n  }, this);\n}\nconst useMode = () => Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(ModeContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L01vZGVDb250ZXh0LmpzeD83MDhmIl0sIm5hbWVzIjpbIk1vZGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIk1vZGVQcm92aWRlciIsImNoaWxkcmVuIiwibW9kZSIsInNldE1vZGUiLCJ1c2VTdGF0ZSIsIk1PREVTIiwiU0xJREVTSE9XIiwicm91dGVyIiwidXNlUm91dGVyIiwibmV3TW9kZSIsInF1ZXJ5IiwidXNlRWZmZWN0IiwidXNlTW9kZSIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHTyxNQUFNQSxXQUFXLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBakM7QUFFQSxTQUFTQyxZQUFULENBQXNCO0FBQUVDO0FBQUYsQ0FBdEIsRUFBb0M7QUFDdkMsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDQyxzREFBSyxDQUFDQyxTQUFQLENBQWhDO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU1DLE9BQU8sR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFSLElBQTdCO0FBRUFTLHlEQUFTLENBQUMsTUFBTTtBQUNaLFFBQUlGLE9BQUosRUFBYU4sT0FBTyxDQUFDTSxPQUFELENBQVA7QUFDaEIsR0FGUSxFQUVOLENBQUNBLE9BQUQsQ0FGTSxDQUFUO0FBS0Esc0JBQ0UscUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQUVQLFVBQUY7QUFBUUM7QUFBUixLQUE3QjtBQUFBLGNBQ0dGO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0g7QUFFTSxNQUFNVyxPQUFPLEdBQUcsTUFBTUMsd0RBQVUsQ0FBQ2YsV0FBRCxDQUFoQyIsImZpbGUiOiIuL2NvbnRleHQvTW9kZUNvbnRleHQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBNT0RFUyB9IGZyb20gJy4uL2NvbnN0YW50cy9tb2RlcydcblxuXG5leHBvcnQgY29uc3QgTW9kZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxuXG5leHBvcnQgZnVuY3Rpb24gTW9kZVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICAgIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IHVzZVN0YXRlKE1PREVTLlNMSURFU0hPVylcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IG5ld01vZGUgPSByb3V0ZXIucXVlcnkubW9kZVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKG5ld01vZGUpIHNldE1vZGUobmV3TW9kZSlcbiAgICB9LCBbbmV3TW9kZV0pXG5cblxuICAgIHJldHVybiAoXG4gICAgICA8TW9kZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbW9kZSwgc2V0TW9kZSB9fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Nb2RlQ29udGV4dC5Qcm92aWRlcj5cbiAgICApXG59XG5cbmV4cG9ydCBjb25zdCB1c2VNb2RlID0gKCkgPT4gdXNlQ29udGV4dChNb2RlQ29udGV4dClcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/ModeContext.jsx\n");

/***/ })

};;