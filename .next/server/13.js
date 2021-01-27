exports.ids = [13];
exports.modules = {

/***/ "./context/CurrentSlideContext.jsx":
/*!*****************************************!*\
  !*** ./context/CurrentSlideContext.jsx ***!
  \*****************************************/
/*! exports provided: CurrentSlideContext, CurrentSlideProvider, useCurrentSlide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CurrentSlideContext\", function() { return CurrentSlideContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CurrentSlideProvider\", function() { return CurrentSlideProvider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useCurrentSlide\", function() { return useCurrentSlide; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/abellisario/code/a11y-presentation/context/CurrentSlideContext.jsx\";\n\nconst CurrentSlideContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({\n  currentSlide: 0,\n  setSlide: () => {}\n});\nfunction CurrentSlideProvider({\n  children\n}) {\n  // Grab initial slide from hash (#) in URL\n  const initialSlide =  false ? undefined : 0;\n  const {\n    0: currentSlide,\n    1: setSlide\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(initialSlide);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CurrentSlideContext.Provider, {\n    value: {\n      currentSlide,\n      setSlide\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, this);\n}\nconst useCurrentSlide = () => Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(CurrentSlideContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L0N1cnJlbnRTbGlkZUNvbnRleHQuanN4PzkyYjEiXSwibmFtZXMiOlsiQ3VycmVudFNsaWRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjdXJyZW50U2xpZGUiLCJzZXRTbGlkZSIsIkN1cnJlbnRTbGlkZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpbml0aWFsU2xpZGUiLCJwYXJzZUludCIsInVzZVN0YXRlIiwidXNlQ3VycmVudFNsaWRlIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRU8sTUFBTUEsbUJBQW1CLGdCQUFHQywyREFBYSxDQUFDO0FBQy9DQyxjQUFZLEVBQUUsQ0FEaUM7QUFFL0NDLFVBQVEsRUFBRSxNQUFNLENBQUU7QUFGNkIsQ0FBRCxDQUF6QztBQUtBLFNBQVNDLG9CQUFULENBQThCO0FBQUVDO0FBQUYsQ0FBOUIsRUFBNEM7QUFDakQ7QUFDQSxRQUFNQyxZQUFZLEdBQ2hCLFNBQ0lDLFNBREosR0FFSSxDQUhOO0FBSUEsUUFBTTtBQUFBLE9BQUNMLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQTJCSyxzREFBUSxDQUFDRixZQUFELENBQXpDO0FBRUEsc0JBQ0UscUVBQUMsbUJBQUQsQ0FBcUIsUUFBckI7QUFBOEIsU0FBSyxFQUFFO0FBQUVKLGtCQUFGO0FBQWdCQztBQUFoQixLQUFyQztBQUFBLGNBQ0dFO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7QUFFTSxNQUFNSSxlQUFlLEdBQUcsTUFBTUMsd0RBQVUsQ0FBQ1YsbUJBQUQsQ0FBeEMiLCJmaWxlIjoiLi9jb250ZXh0L0N1cnJlbnRTbGlkZUNvbnRleHQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBDdXJyZW50U2xpZGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gIGN1cnJlbnRTbGlkZTogMCxcbiAgc2V0U2xpZGU6ICgpID0+IHt9LFxufSlcblxuZXhwb3J0IGZ1bmN0aW9uIEN1cnJlbnRTbGlkZVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICAvLyBHcmFiIGluaXRpYWwgc2xpZGUgZnJvbSBoYXNoICgjKSBpbiBVUkxcbiAgY29uc3QgaW5pdGlhbFNsaWRlID1cbiAgICBwcm9jZXNzLmJyb3dzZXIgJiYgd2luZG93LmxvY2F0aW9uLmhhc2hcbiAgICAgID8gcGFyc2VJbnQod2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKSlcbiAgICAgIDogMFxuICBjb25zdCBbY3VycmVudFNsaWRlLCBzZXRTbGlkZV0gPSB1c2VTdGF0ZShpbml0aWFsU2xpZGUpXG5cbiAgcmV0dXJuIChcbiAgICA8Q3VycmVudFNsaWRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjdXJyZW50U2xpZGUsIHNldFNsaWRlIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ3VycmVudFNsaWRlQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgdXNlQ3VycmVudFNsaWRlID0gKCkgPT4gdXNlQ29udGV4dChDdXJyZW50U2xpZGVDb250ZXh0KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/CurrentSlideContext.jsx\n");

/***/ })

};;