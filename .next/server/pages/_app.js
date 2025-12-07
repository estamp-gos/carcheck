/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/index.scss */ \"./src/index.scss\");\n/* harmony import */ var _src_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_index_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_styles_glassmorphism_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/styles/glassmorphism.css */ \"./src/styles/glassmorphism.css\");\n/* harmony import */ var _src_styles_glassmorphism_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_styles_glassmorphism_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // Import Bootstrap JS only on client side\n        __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min */ \"bootstrap/dist/js/bootstrap.bundle.min\");\n        // Performance monitoring\n        if (false) {}\n        // Scroll animation initialization\n        const initScrollAnimations = ()=>{\n            const scrollElements = document.querySelectorAll(\"[data-scroll], .scroll-section\");\n            if (scrollElements.length === 0) return;\n            const observer = new IntersectionObserver((entries)=>{\n                entries.forEach((entry)=>{\n                    if (entry.isIntersecting) {\n                        entry.target.classList.add(\"scroll-visible\");\n                        observer.unobserve(entry.target);\n                    }\n                });\n            }, {\n                threshold: 0.05,\n                rootMargin: \"0px 0px -20px 0px\"\n            });\n            scrollElements.forEach((el)=>observer.observe(el));\n            return ()=>{\n                scrollElements.forEach((el)=>observer.unobserve(el));\n            };\n        };\n        // Run after a small delay to ensure DOM is ready\n        const timeoutId = setTimeout(initScrollAnimations, 100);\n        return ()=>{\n            clearTimeout(timeoutId);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rmoto\\\\OneDrive\\\\Desktop\\\\carcheck-master\\\\carcheck-master\\\\pages\\\\_app.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.png\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rmoto\\\\OneDrive\\\\Desktop\\\\carcheck-master\\\\carcheck-master\\\\pages\\\\_app.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rmoto\\\\OneDrive\\\\Desktop\\\\carcheck-master\\\\carcheck-master\\\\pages\\\\_app.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossOrigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rmoto\\\\OneDrive\\\\Desktop\\\\carcheck-master\\\\carcheck-master\\\\pages\\\\_app.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\rmoto\\\\OneDrive\\\\Desktop\\\\carcheck-master\\\\carcheck-master\\\\pages\\\\_app.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\rmoto\\\\OneDrive\\\\Desktop\\\\carcheck-master\\\\carcheck-master\\\\pages\\\\_app.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"https://www.googletagmanager.com/gtag/js?id=G-0C0XXT0XX7\",\n                strategy: \"afterInteractive\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rmoto\\\\OneDrive\\\\Desktop\\\\carcheck-master\\\\carcheck-master\\\\pages\\\\_app.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"google-analytics\",\n                strategy: \"afterInteractive\",\n                children: `\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', 'G-0C0XXT0XX7');\n        `\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rmoto\\\\OneDrive\\\\Desktop\\\\carcheck-master\\\\carcheck-master\\\\pages\\\\_app.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\rmoto\\\\OneDrive\\\\Desktop\\\\carcheck-master\\\\carcheck-master\\\\pages\\\\_app.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0k7QUFDQztBQUNQO0FBQ2M7QUFFMUIsU0FBU0csSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsREgsZ0RBQVNBLENBQUM7UUFDUiwwQ0FBMEM7UUFDMUNJLG1CQUFPQSxDQUFDO1FBRVIseUJBQXlCO1FBQ3pCLElBQUksS0FBd0RDLEVBQUUsRUFnQjdEO1FBRUQsa0NBQWtDO1FBQ2xDLE1BQU1TLHVCQUF1QjtZQUMzQixNQUFNQyxpQkFBaUJDLFNBQVNDLGdCQUFnQixDQUFDO1lBRWpELElBQUlGLGVBQWVHLE1BQU0sS0FBSyxHQUFHO1lBRWpDLE1BQU1DLFdBQVcsSUFBSUMscUJBQXFCLENBQUNDO2dCQUN6Q0EsUUFBUUMsT0FBTyxDQUFDLENBQUNDO29CQUNmLElBQUlBLE1BQU1DLGNBQWMsRUFBRTt3QkFDeEJELE1BQU1FLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7d0JBQzNCUixTQUFTUyxTQUFTLENBQUNMLE1BQU1FLE1BQU07b0JBQ2pDO2dCQUNGO1lBQ0YsR0FBRztnQkFDREksV0FBVztnQkFDWEMsWUFBWTtZQUNkO1lBRUFmLGVBQWVPLE9BQU8sQ0FBQyxDQUFDUyxLQUFPWixTQUFTYSxPQUFPLENBQUNEO1lBRWhELE9BQU87Z0JBQ0xoQixlQUFlTyxPQUFPLENBQUMsQ0FBQ1MsS0FBT1osU0FBU1MsU0FBUyxDQUFDRztZQUNwRDtRQUNGO1FBRUEsaURBQWlEO1FBQ2pELE1BQU1FLFlBQVlDLFdBQVdwQixzQkFBc0I7UUFFbkQsT0FBTztZQUNMcUIsYUFBYUY7UUFDZjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ25DLGtEQUFJQTs7a0NBQ0gsOERBQUNzQzt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7OztrQ0FFdEIsOERBQUNGO3dCQUFLQyxLQUFJO3dCQUFhQyxNQUFLOzs7Ozs7a0NBQzVCLDhEQUFDRjt3QkFBS0MsS0FBSTt3QkFBYUMsTUFBSzt3QkFBNEJDLGFBQVk7Ozs7OztrQ0FDcEUsOERBQUNIO3dCQUFLRSxNQUFLO3dCQUFtSUQsS0FBSTs7Ozs7Ozs7Ozs7OzBCQUlwSiw4REFBQ3pDLG9EQUFNQTtnQkFDTDRDLEtBQUk7Z0JBQ0pDLFVBQVM7Ozs7OzswQkFFWCw4REFBQzdDLG9EQUFNQTtnQkFBQzhDLElBQUc7Z0JBQW1CRCxVQUFTOzBCQUNwQyxDQUFDOzs7OztRQUtGLENBQUM7Ozs7OzswQkFHSCw4REFBQzFDO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZml4dHVyYm8tbmV4dGpzLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgU2NyaXB0IGZyb20gJ25leHQvc2NyaXB0JztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vc3JjL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuLi9zcmMvc3R5bGVzL2dsYXNzbW9ycGhpc20uY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEltcG9ydCBCb290c3RyYXAgSlMgb25seSBvbiBjbGllbnQgc2lkZVxuICAgIHJlcXVpcmUoJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluJyk7XG4gICAgXG4gICAgLy8gUGVyZm9ybWFuY2UgbW9uaXRvcmluZ1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAncGVyZm9ybWFuY2UnIGluIHdpbmRvdykge1xuICAgICAgLy8gTG9nIENvcmUgV2ViIFZpdGFsc1xuICAgICAgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gKG1ldHJpYykgPT4ge1xuICAgICAgICAvLyBXZWIgdml0YWxzIGNhbiBiZSBzZW50IHRvIGFuYWx5dGljcyBoZXJlIGlmIG5lZWRlZFxuICAgICAgfTtcbiAgICAgIFxuICAgICAgLy8gTW9uaXRvciBMQ1AsIEZJRCwgQ0xTXG4gICAgICBpZiAoJ3dlYi12aXRhbHMnIGluIHdpbmRvdykge1xuICAgICAgICBpbXBvcnQoJ3dlYi12aXRhbHMnKS50aGVuKCh7IGdldExDUCwgZ2V0RklELCBnZXRDTFMsIGdldEZDUCwgZ2V0VFRGQiB9KSA9PiB7XG4gICAgICAgICAgZ2V0TENQKHJlcG9ydFdlYlZpdGFscyk7XG4gICAgICAgICAgZ2V0RklEKHJlcG9ydFdlYlZpdGFscyk7XG4gICAgICAgICAgZ2V0Q0xTKHJlcG9ydFdlYlZpdGFscyk7XG4gICAgICAgICAgZ2V0RkNQKHJlcG9ydFdlYlZpdGFscyk7XG4gICAgICAgICAgZ2V0VFRGQihyZXBvcnRXZWJWaXRhbHMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gU2Nyb2xsIGFuaW1hdGlvbiBpbml0aWFsaXphdGlvblxuICAgIGNvbnN0IGluaXRTY3JvbGxBbmltYXRpb25zID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zY3JvbGxdLCAuc2Nyb2xsLXNlY3Rpb24nKTtcbiAgICAgIFxuICAgICAgaWYgKHNjcm9sbEVsZW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLXZpc2libGUnKTtcbiAgICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LCB7XG4gICAgICAgIHRocmVzaG9sZDogMC4wNSxcbiAgICAgICAgcm9vdE1hcmdpbjogJzBweCAwcHggLTIwcHggMHB4J1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHNjcm9sbEVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiBvYnNlcnZlci5vYnNlcnZlKGVsKSk7XG4gICAgICBcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIHNjcm9sbEVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZWwpKTtcbiAgICAgIH07XG4gICAgfTtcbiAgICBcbiAgICAvLyBSdW4gYWZ0ZXIgYSBzbWFsbCBkZWxheSB0byBlbnN1cmUgRE9NIGlzIHJlYWR5XG4gICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dChpbml0U2Nyb2xsQW5pbWF0aW9ucywgMTAwKTtcbiAgICBcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLnBuZ1wiIC8+XG4gICAgICAgIHsvKiBHb29nbGUgRm9udHMgLSBJbnRlciAmIFBvcHBpbnMgKi99XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEAzMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZmYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NjAwOzcwMDs4MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICBcbiAgICAgIHsvKiBHb29nbGUgQW5hbHl0aWNzICovfVxuICAgICAgPFNjcmlwdFxuICAgICAgICBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctMEMwWFhUMFhYN1wiXG4gICAgICAgIHN0cmF0ZWd5PVwiYWZ0ZXJJbnRlcmFjdGl2ZVwiXG4gICAgICAvPlxuICAgICAgPFNjcmlwdCBpZD1cImdvb2dsZS1hbmFseXRpY3NcIiBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIj5cbiAgICAgICAge2BcbiAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICBndGFnKCdjb25maWcnLCAnRy0wQzBYWFQwWFg3Jyk7XG4gICAgICAgIGB9XG4gICAgICA8L1NjcmlwdD5cbiAgICAgIFxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJTY3JpcHQiLCJ1c2VFZmZlY3QiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyZXF1aXJlIiwid2luZG93IiwicmVwb3J0V2ViVml0YWxzIiwibWV0cmljIiwidGhlbiIsImdldExDUCIsImdldEZJRCIsImdldENMUyIsImdldEZDUCIsImdldFRURkIiLCJpbml0U2Nyb2xsQW5pbWF0aW9ucyIsInNjcm9sbEVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInRhcmdldCIsImNsYXNzTGlzdCIsImFkZCIsInVub2JzZXJ2ZSIsInRocmVzaG9sZCIsInJvb3RNYXJnaW4iLCJlbCIsIm9ic2VydmUiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJjcm9zc09yaWdpbiIsInNyYyIsInN0cmF0ZWd5IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/glassmorphism.css":
/*!**************************************!*\
  !*** ./src/styles/glassmorphism.css ***!
  \**************************************/
/***/ (() => {



/***/ }),

/***/ "bootstrap/dist/js/bootstrap.bundle.min":
/*!*********************************************************!*\
  !*** external "bootstrap/dist/js/bootstrap.bundle.min" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("bootstrap/dist/js/bootstrap.bundle.min");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();