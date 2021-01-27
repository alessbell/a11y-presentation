exports.ids = [17];
exports.modules = {

/***/ "./next.config.js":
/*!************************!*\
  !*** ./next.config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const withMDX = __webpack_require__(/*! @next/mdx */ \"@next/mdx\")();\n\nmodule.exports = withMDX({\n  pageExtensions: ['js', 'jsx', 'mdx', 'md'],\n  webpack: (config, {\n    isServer\n  }) => {\n    // Fixes npm packages that depend on `fs` module\n    if (!isServer) {\n      config.node = {\n        fs: 'empty'\n      };\n    }\n\n    return config;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9uZXh0LmNvbmZpZy5qcz8xMzgzIl0sIm5hbWVzIjpbIndpdGhNRFgiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsInBhZ2VFeHRlbnNpb25zIiwid2VicGFjayIsImNvbmZpZyIsImlzU2VydmVyIiwibm9kZSIsImZzIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxPQUFPLEdBQUdDLG1CQUFPLENBQUMsNEJBQUQsQ0FBUCxFQUFoQjs7QUFDQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSCxPQUFPLENBQUM7QUFDdkJJLGdCQUFjLEVBQUUsQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLEtBQWQsRUFBcUIsSUFBckIsQ0FETztBQUV2QkMsU0FBTyxFQUFFLENBQUNDLE1BQUQsRUFBUztBQUFFQztBQUFGLEdBQVQsS0FBMEI7QUFDakM7QUFDQSxRQUFJLENBQUNBLFFBQUwsRUFBZTtBQUNiRCxZQUFNLENBQUNFLElBQVAsR0FBYztBQUNaQyxVQUFFLEVBQUU7QUFEUSxPQUFkO0FBR0Q7O0FBRUQsV0FBT0gsTUFBUDtBQUNEO0FBWHNCLENBQUQsQ0FBeEIiLCJmaWxlIjoiLi9uZXh0LmNvbmZpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHdpdGhNRFggPSByZXF1aXJlKFwiQG5leHQvbWR4XCIpKCk7XG5tb2R1bGUuZXhwb3J0cyA9IHdpdGhNRFgoe1xuICBwYWdlRXh0ZW5zaW9uczogWydqcycsICdqc3gnLCAnbWR4JywgJ21kJ10sXG4gIHdlYnBhY2s6IChjb25maWcsIHsgaXNTZXJ2ZXIgfSkgPT4ge1xuICAgIC8vIEZpeGVzIG5wbSBwYWNrYWdlcyB0aGF0IGRlcGVuZCBvbiBgZnNgIG1vZHVsZVxuICAgIGlmICghaXNTZXJ2ZXIpIHtcbiAgICAgIGNvbmZpZy5ub2RlID0ge1xuICAgICAgICBmczogJ2VtcHR5J1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./next.config.js\n");

/***/ })

};;