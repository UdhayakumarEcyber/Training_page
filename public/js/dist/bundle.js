/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/HandBook.tsx":
/*!**************************!*\
  !*** ./src/HandBook.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class HandBook extends React.Component {
    constructor(props) {
        super(props);
        this.onShowCick = () => {
            this.setState({
                isShownPopup: false
            });
        };
        //    this.state = {isToggleOn: true};  
        this.state = { isShownPopup: true };
        this.onShowCick = this.onShowCick.bind(this);
    }
    render() {
        const hand_list = [
            {
                heading: 'Introduction',
                sublistname1: "Add two numbers together",
                sublistname2: "Degree Conversion",
                sublistname3: "Exercise: miles to kilometers",
                mints: '05 minutes',
                paly_resume: "PLAY",
            },
            {
                heading: 'Calling web services',
                sublistname1: "Add two numbers together",
                mints: '12 minutes',
                paly_resume: "RESUME",
            },
            {
                heading: 'Connecting to BMS systems',
                sublistname1: "Example using Modbus",
                sublistname2: "Example using Another one?",
                mints: '23 minutes',
                paly_resume: "PLAY",
            },
            {
                heading: 'Debugging',
                sublistname1: "Using the debugger",
                sublistname2: "Undo/Redo",
                sublistname3: "Action List",
                mints: '05 minutes',
                paly_resume: "PLAY",
            },
            {
                heading: 'JSON manipulation',
                mints: '25 minutes',
                paly_resume: "PLAY",
            },
            {
                heading: 'Text Manipulation',
                mints: '23 minutes',
                paly_resume: "PLAY",
            },
            {
                heading: 'Loops and Repeater',
                mints: '34 minutes',
                paly_resume: "PLAY",
            },
        ];
        //  const nestedLists = [list, list, list, list];
        const HandbookList = () => (React.createElement("div", { className: "handbook_overall" }, hand_list.map(item => (React.createElement("ul", { key: item.heading, className: "handbook_list" },
            React.createElement("div", { className: "handbook_list_title" },
                React.createElement("h4", null, item.heading),
                React.createElement("div", { className: "handbook_list_title_rgt" },
                    React.createElement("em", { className: "mints-txt" }, item.mints),
                    React.createElement("a", { href: "#", className: "play_resume-btn", onClick: this.onShowCick }, item.paly_resume))),
            React.createElement("li", { className: "sub_list" }, item.sublistname1),
            React.createElement("li", { className: "sub_list" }, item.sublistname2),
            React.createElement("li", { className: "sub_list" }, item.sublistname3))))));
        return React.createElement("div", { className: 'handbook' },
            React.createElement("div", { className: "handbook-model" },
                React.createElement("div", { className: "handbook-title-bar" },
                    React.createElement("h3", null, "Lucy Handbook")),
                React.createElement(HandbookList, null)),
            React.createElement("div", { className: "training-box" },
                React.createElement("a", { className: "training-btn" }, "Training")));
    }
}
exports.HandBook = HandBook;


/***/ }),

/***/ "./src/connect-model.tsx":
/*!*******************************!*\
  !*** ./src/connect-model.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class ConnectModel extends React.Component {
    render() {
        const list = [
            {
                mints: '5 minutes',
                Name: "Connect a Lucy model",
                NameSpan: "to Slack channel under five minutes"
            },
            {
                mints: '5 minutes',
                Name: "Connect a Lucy model",
                NameSpan: "to Slack channel under five minutes"
            },
            {
                mints: '5 minutes',
                Name: "Connect a Lucy model",
                NameSpan: "to Slack channel under five minutes"
            },
            {
                mints: '5 minutes',
                Name: "Connect a Lucy model",
                NameSpan: "to Slack channel under five minutes"
            },
        ];
        const ComplexList = () => (React.createElement("ul", null, list.map(item => (React.createElement("li", { key: item.mints },
            React.createElement("div", { className: "model-box" },
                React.createElement("em", { className: "box-mints" }, item.mints),
                React.createElement("h4", null,
                    item.Name,
                    React.createElement("span", null, item.NameSpan)),
                React.createElement("a", { href: "#", className: "save-later-btn" }, "Save For Later"),
                React.createElement("a", { href: "#", className: "play-btn" }, "Play")))))));
        return React.createElement("div", { className: "connect-model" },
            React.createElement("h3", { className: "learn-bar" },
                "Learn how to",
                React.createElement("span", null)),
            React.createElement(ComplexList, null));
    }
}
exports.ConnectModel = ConnectModel;


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
const connect_model_1 = __webpack_require__(/*! ./connect-model */ "./src/connect-model.tsx");
const HandBook_1 = __webpack_require__(/*! ./HandBook */ "./src/HandBook.tsx");
const now_watching_1 = __webpack_require__(/*! ./now_watching */ "./src/now_watching.tsx");
class TrainingMain extends React.Component {
    constructor(props) {
        super(props);
        //    this.state = {isToggleOn: true};        
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(function (prevState) {
            return { isToggleOn: !prevState.isToggleOn };
        });
    }
    render() {
        return React.createElement("div", { className: "training-section" },
            React.createElement("div", { className: this.props.isShownPopup ? 'Hide_HandBook' : 'Show_HandBook' },
                React.createElement(now_watching_1.WatchModel, null)),
            React.createElement("div", { className: "container" },
                React.createElement("header", { className: "training-section-header" },
                    React.createElement("div", { className: "menu-nav" },
                        React.createElement("a", { href: "#", onClick: this.handleClick }, "Menu")),
                    React.createElement("div", { className: "exp-content" },
                        React.createElement("h2", null,
                            "We\u2019ve made sure you\u2019re setup experience,",
                            React.createElement("span", null, "is simple and easy just like our products.")))),
                React.createElement("section", { className: "content" },
                    React.createElement(connect_model_1.ConnectModel, null),
                    React.createElement("div", { className: this.state.isToggleOn ? 'Hide_HandBook' : 'Show_HandBook' },
                        React.createElement(HandBook_1.HandBook, null))),
                React.createElement("div", { className: "copy_right" },
                    React.createElement("p", null, "COPYRIGHTS 2020 \u00A9 ALL RIGHTS RESERVED."))));
    }
}
exports.TrainingMain = TrainingMain;
ReactDOM.render(React.createElement(TrainingMain, null), document.getElementById("container"));


/***/ }),

/***/ "./src/now_watching.tsx":
/*!******************************!*\
  !*** ./src/now_watching.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
class WatchModel extends React.Component {
    constructor(props) {
        super(props);
        this.onHideCick = () => {
            this.setState({
                isClosepopup: false
            });
        };
        this.state = { isClosepopup: true };
        this.onHideCick = this.onHideCick.bind(this);
    }
    render() {
        // const videoplay ={
        //   <video width="400" controls>
        //   <source src="mov_bbb.mp4" type="video/mp4">
        //   <source src="mov_bbb.ogg" type="video/ogg">
        //   Your browser does not support HTML5 video.
        //   </video>
        // }
        const watch_list = [
            {
                heading: 'This video covers',
                sublistname1: "Using connectors",
                sublistname2: "Webhook and API run through",
                sublistname3: "In depth explaination on authentication and OAUTH usage",
                mints: '05 minutes',
            },
        ];
        const WatchList = () => (React.createElement("div", { className: "watching_overall" }, watch_list.map(item => (React.createElement("div", { className: "watching-section", key: item.heading },
            React.createElement("div", { className: "watching-section-lft" },
                React.createElement("div", { className: "watching_video" },
                    React.createElement("img", { src: "../images/video-bg.svg", alt: "Log in with Google", style: { marginRight: '10px' } }))),
            React.createElement("div", { className: "watching-section-rgt" },
                React.createElement("em", { className: "mints-txt" }, item.mints),
                React.createElement("h4", null, item.heading),
                React.createElement("ul", { className: "watching-section-list" },
                    React.createElement("li", { className: "sub_list" }, item.sublistname1),
                    React.createElement("li", { className: "sub_list" }, item.sublistname2),
                    React.createElement("li", { className: "sub_list" }, item.sublistname3)),
                React.createElement("a", { href: "#", className: "save-later-btn" }, "Save For Later")))))));
        return React.createElement("div", { className: this.state.isClosepopup ? 'popup_overall' : 'Hide_HandBook' },
            React.createElement("div", { className: "PopUp" },
                React.createElement("div", { className: "PopUp-title" },
                    React.createElement("span", { className: "close", onClick: this.onHideCick }),
                    React.createElement("h3", null,
                        "Now watching ",
                        React.createElement("span", null, "Connect a Lucy model to Slack channel under five minutes"))),
                React.createElement(WatchList, null)));
    }
}
exports.WatchModel = WatchModel;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map