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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/index.scss */ \"./src/index.scss\");\n/* harmony import */ var _src_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_src_index_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_styles_glassmorphism_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/styles/glassmorphism.css */ \"./src/styles/glassmorphism.css\");\n/* harmony import */ var _src_styles_glassmorphism_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_styles_glassmorphism_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // Import Bootstrap JS only on client side\n        __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min */ \"bootstrap/dist/js/bootstrap.bundle.min\");\n        // Performance monitoring\n        if (false) {}\n        // Scroll animation initialization\n        const initScrollAnimations = ()=>{\n            const scrollElements = document.querySelectorAll(\"[data-scroll], .scroll-section\");\n            if (scrollElements.length === 0) return;\n            const observer = new IntersectionObserver((entries)=>{\n                entries.forEach((entry)=>{\n                    if (entry.isIntersecting) {\n                        entry.target.classList.add(\"scroll-visible\");\n                        observer.unobserve(entry.target);\n                    }\n                });\n            }, {\n                threshold: 0.05,\n                rootMargin: \"0px 0px -20px 0px\"\n            });\n            scrollElements.forEach((el)=>observer.observe(el));\n            return ()=>{\n                scrollElements.forEach((el)=>observer.unobserve(el));\n            };\n        };\n        // Run after a small delay to ensure DOM is ready\n        const timeoutId = setTimeout(initScrollAnimations, 100);\n        return ()=>{\n            clearTimeout(timeoutId);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\S.K Tech\\\\OneDrive\\\\Desktop\\\\d\\\\carcheck\\\\pages\\\\_app.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.png\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\S.K Tech\\\\OneDrive\\\\Desktop\\\\d\\\\carcheck\\\\pages\\\\_app.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\S.K Tech\\\\OneDrive\\\\Desktop\\\\d\\\\carcheck\\\\pages\\\\_app.js\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossOrigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\S.K Tech\\\\OneDrive\\\\Desktop\\\\d\\\\carcheck\\\\pages\\\\_app.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\S.K Tech\\\\OneDrive\\\\Desktop\\\\d\\\\carcheck\\\\pages\\\\_app.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\S.K Tech\\\\OneDrive\\\\Desktop\\\\d\\\\carcheck\\\\pages\\\\_app.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: \"https://www.googletagmanager.com/gtag/js?id=G-0C0XXT0XX7\",\n                strategy: \"afterInteractive\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\S.K Tech\\\\OneDrive\\\\Desktop\\\\d\\\\carcheck\\\\pages\\\\_app.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {\n                id: \"google-analytics\",\n                strategy: \"afterInteractive\",\n                children: `\r\n          window.dataLayer = window.dataLayer || [];\r\n          function gtag(){dataLayer.push(arguments);}\r\n          gtag('js', new Date());\r\n          gtag('config', 'G-0C0XXT0XX7');\r\n        `\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\S.K Tech\\\\OneDrive\\\\Desktop\\\\d\\\\carcheck\\\\pages\\\\_app.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\S.K Tech\\\\OneDrive\\\\Desktop\\\\d\\\\carcheck\\\\pages\\\\_app.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0k7QUFDQztBQUNQO0FBQ2M7QUFFMUIsU0FBU0csSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsREgsZ0RBQVNBLENBQUM7UUFDUiwwQ0FBMEM7UUFDMUNJLG1CQUFPQSxDQUFDO1FBRVIseUJBQXlCO1FBQ3pCLElBQUksS0FBd0RDLEVBQUUsRUFnQjdEO1FBRUQsa0NBQWtDO1FBQ2xDLE1BQU1TLHVCQUF1QjtZQUMzQixNQUFNQyxpQkFBaUJDLFNBQVNDLGdCQUFnQixDQUFDO1lBRWpELElBQUlGLGVBQWVHLE1BQU0sS0FBSyxHQUFHO1lBRWpDLE1BQU1DLFdBQVcsSUFBSUMscUJBQXFCLENBQUNDO2dCQUN6Q0EsUUFBUUMsT0FBTyxDQUFDLENBQUNDO29CQUNmLElBQUlBLE1BQU1DLGNBQWMsRUFBRTt3QkFDeEJELE1BQU1FLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7d0JBQzNCUixTQUFTUyxTQUFTLENBQUNMLE1BQU1FLE1BQU07b0JBQ2pDO2dCQUNGO1lBQ0YsR0FBRztnQkFDREksV0FBVztnQkFDWEMsWUFBWTtZQUNkO1lBRUFmLGVBQWVPLE9BQU8sQ0FBQyxDQUFDUyxLQUFPWixTQUFTYSxPQUFPLENBQUNEO1lBRWhELE9BQU87Z0JBQ0xoQixlQUFlTyxPQUFPLENBQUMsQ0FBQ1MsS0FBT1osU0FBU1MsU0FBUyxDQUFDRztZQUNwRDtRQUNGO1FBRUEsaURBQWlEO1FBQ2pELE1BQU1FLFlBQVlDLFdBQVdwQixzQkFBc0I7UUFFbkQsT0FBTztZQUNMcUIsYUFBYUY7UUFDZjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ25DLGtEQUFJQTs7a0NBQ0gsOERBQUNzQzt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7OztrQ0FFdEIsOERBQUNGO3dCQUFLQyxLQUFJO3dCQUFhQyxNQUFLOzs7Ozs7a0NBQzVCLDhEQUFDRjt3QkFBS0MsS0FBSTt3QkFBYUMsTUFBSzt3QkFBNEJDLGFBQVk7Ozs7OztrQ0FDcEUsOERBQUNIO3dCQUFLRSxNQUFLO3dCQUFtSUQsS0FBSTs7Ozs7Ozs7Ozs7OzBCQUlwSiw4REFBQ3pDLG9EQUFNQTtnQkFDTDRDLEtBQUk7Z0JBQ0pDLFVBQVM7Ozs7OzswQkFFWCw4REFBQzdDLG9EQUFNQTtnQkFBQzhDLElBQUc7Z0JBQW1CRCxVQUFTOzBCQUNwQyxDQUFDOzs7OztRQUtGLENBQUM7Ozs7OzswQkFHSCw4REFBQzFDO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZml4dHVyYm8tbmV4dGpzLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi4vc3JjL2luZGV4LnNjc3MnO1xyXG5pbXBvcnQgJy4uL3NyYy9zdHlsZXMvZ2xhc3Ntb3JwaGlzbS5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBJbXBvcnQgQm9vdHN0cmFwIEpTIG9ubHkgb24gY2xpZW50IHNpZGVcclxuICAgIHJlcXVpcmUoJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUubWluJyk7XHJcbiAgICBcclxuICAgIC8vIFBlcmZvcm1hbmNlIG1vbml0b3JpbmdcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAncGVyZm9ybWFuY2UnIGluIHdpbmRvdykge1xyXG4gICAgICAvLyBMb2cgQ29yZSBXZWIgVml0YWxzXHJcbiAgICAgIGNvbnN0IHJlcG9ydFdlYlZpdGFscyA9IChtZXRyaWMpID0+IHtcclxuICAgICAgICAvLyBXZWIgdml0YWxzIGNhbiBiZSBzZW50IHRvIGFuYWx5dGljcyBoZXJlIGlmIG5lZWRlZFxyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgLy8gTW9uaXRvciBMQ1AsIEZJRCwgQ0xTXHJcbiAgICAgIGlmICgnd2ViLXZpdGFscycgaW4gd2luZG93KSB7XHJcbiAgICAgICAgaW1wb3J0KCd3ZWItdml0YWxzJykudGhlbigoeyBnZXRMQ1AsIGdldEZJRCwgZ2V0Q0xTLCBnZXRGQ1AsIGdldFRURkIgfSkgPT4ge1xyXG4gICAgICAgICAgZ2V0TENQKHJlcG9ydFdlYlZpdGFscyk7XHJcbiAgICAgICAgICBnZXRGSUQocmVwb3J0V2ViVml0YWxzKTtcclxuICAgICAgICAgIGdldENMUyhyZXBvcnRXZWJWaXRhbHMpO1xyXG4gICAgICAgICAgZ2V0RkNQKHJlcG9ydFdlYlZpdGFscyk7XHJcbiAgICAgICAgICBnZXRUVEZCKHJlcG9ydFdlYlZpdGFscyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gU2Nyb2xsIGFuaW1hdGlvbiBpbml0aWFsaXphdGlvblxyXG4gICAgY29uc3QgaW5pdFNjcm9sbEFuaW1hdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNjcm9sbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2Nyb2xsXSwgLnNjcm9sbC1zZWN0aW9uJyk7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoc2Nyb2xsRWxlbWVudHMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcclxuICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xyXG4gICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsLXZpc2libGUnKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0aHJlc2hvbGQ6IDAuMDUsXHJcbiAgICAgICAgcm9vdE1hcmdpbjogJzBweCAwcHggLTIwcHggMHB4J1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIHNjcm9sbEVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiBvYnNlcnZlci5vYnNlcnZlKGVsKSk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHNjcm9sbEVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZWwpKTtcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIFJ1biBhZnRlciBhIHNtYWxsIGRlbGF5IHRvIGVuc3VyZSBET00gaXMgcmVhZHlcclxuICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoaW5pdFNjcm9sbEFuaW1hdGlvbnMsIDEwMCk7XHJcbiAgICBcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cclxuICAgICAgICB7LyogR29vZ2xlIEZvbnRzIC0gSW50ZXIgJiBQb3BwaW5zICovfVxyXG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMDs4MDAmZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIFxyXG4gICAgICB7LyogR29vZ2xlIEFuYWx5dGljcyAqL31cclxuICAgICAgPFNjcmlwdFxyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9Ry0wQzBYWFQwWFg3XCJcclxuICAgICAgICBzdHJhdGVneT1cImFmdGVySW50ZXJhY3RpdmVcIlxyXG4gICAgICAvPlxyXG4gICAgICA8U2NyaXB0IGlkPVwiZ29vZ2xlLWFuYWx5dGljc1wiIHN0cmF0ZWd5PVwiYWZ0ZXJJbnRlcmFjdGl2ZVwiPlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcclxuICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cclxuICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICBndGFnKCdjb25maWcnLCAnRy0wQzBYWFQwWFg3Jyk7XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9TY3JpcHQ+XHJcbiAgICAgIFxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiU2NyaXB0IiwidXNlRWZmZWN0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicmVxdWlyZSIsIndpbmRvdyIsInJlcG9ydFdlYlZpdGFscyIsIm1ldHJpYyIsInRoZW4iLCJnZXRMQ1AiLCJnZXRGSUQiLCJnZXRDTFMiLCJnZXRGQ1AiLCJnZXRUVEZCIiwiaW5pdFNjcm9sbEFuaW1hdGlvbnMiLCJzY3JvbGxFbGVtZW50cyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ1bm9ic2VydmUiLCJ0aHJlc2hvbGQiLCJyb290TWFyZ2luIiwiZWwiLCJvYnNlcnZlIiwidGltZW91dElkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiY3Jvc3NPcmlnaW4iLCJzcmMiLCJzdHJhdGVneSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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