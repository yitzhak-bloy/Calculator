(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Desktop_ProjectsInGithub_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),C_Users_Desktop_ProjectsInGithub_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),C_Users_Desktop_ProjectsInGithub_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(8),C_Users_Desktop_ProjectsInGithub_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),C_Users_Desktop_ProjectsInGithub_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_display__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7),_calculator_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(18),_calculator_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_calculator_css__WEBPACK_IMPORTED_MODULE_7__),Calculator=function(_Component){function Calculator(props){var _this;return Object(C_Users_Desktop_ProjectsInGithub_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),_this=Object(C_Users_Desktop_ProjectsInGithub_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(C_Users_Desktop_ProjectsInGithub_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator).call(this,props)),_this.handleClickOfNumber=function(e){_this.state.count+e.target.value==="0"?_this.setState({count:""}):"0"===e.target.value&&_this.state.sum?_this.setState({count:"",sum:""}):_this.state.sum?_this.setState({count:e.target.value,sum:""}):_this.setState({count:_this.state.count+e.target.value})},_this.handleClickOfDecimal=function(e){/[.]/.test(_this.state.count)&&!/[*]+|[+]+|[-]+|[/]+/.test(_this.state.count)?console.log("Invalid character"):/[.]$/.test(_this.state.count)?console.log("Invalid character"):_this.setState({count:_this.state.count+e.target.value})},_this.handleClickOfOperations=function(e){/[*]$|[+]$|[-]$|[/]$/.test(_this.state.count)&&/[*]$|[+]$|[/]$/.test(e.target.value)?_this.setState({count:_this.state.count.replace(/[*]$|[+]$|[-]$|[/]$/,e.target.value)}):""===_this.state.count&&("*"===e.target.value||"/"===e.target.value)||/[-]$/.test(_this.state.count)&&"-"===e.target.value?console.log("Invalid character"):_this.state.sum?_this.setState({count:_this.state.sum+e.target.value,sum:""}):_this.setState({count:_this.state.count+e.target.value})},_this.handleClickOfSum=function(){/[*]$|[+]$|[-]$|[/]$/.test(_this.state.count)||/^[*]|^[/]/.test(_this.state.count)?console.log("Invalid character"):_this.setState({sum:eval(_this.state.count)})},_this.handleClickOfClear=function(){_this.setState({count:"",sum:""})},_this.state={count:"",sum:""},_this}return Object(C_Users_Desktop_ProjectsInGithub_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator,_Component),Object(C_Users_Desktop_ProjectsInGithub_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"Calculator"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calculatorBody"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_display__WEBPACK_IMPORTED_MODULE_6__.a,{count:this.state.count,sum:this.state.sum}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"clear",className:"operation",value:"0",onClick:this.handleClickOfClear},"clear"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"zero",value:"0",onClick:this.handleClickOfNumber},"0"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"divide",className:"operation",value:"/",onClick:this.handleClickOfOperations},"/"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"multiply",className:"operation",value:"*",onClick:this.handleClickOfOperations},"\u2715"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"one",value:"1",onClick:this.handleClickOfNumber},"1"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"two",value:"2",onClick:this.handleClickOfNumber},"2"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"three",value:"3",onClick:this.handleClickOfNumber},"3"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"add",className:"operation",value:"+",onClick:this.handleClickOfOperations},"+"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"four",value:"4",onClick:this.handleClickOfNumber},"4"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"five",value:"5",onClick:this.handleClickOfNumber},"5"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"six",value:"6",onClick:this.handleClickOfNumber},"6"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"subtract",className:"operation",value:"-",onClick:this.handleClickOfOperations},"-"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"seven",value:"7",onClick:this.handleClickOfNumber},"7"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"eight",value:"8",onClick:this.handleClickOfNumber},"8"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"nine",value:"9",onClick:this.handleClickOfNumber},"9"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"equals",className:"operation",value:"=",onClick:this.handleClickOfSum},"="),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{id:"decimal",value:".",onClick:this.handleClickOfDecimal},".")))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=Calculator},,,,function(e,_,t){"use strict";var a=t(0),l=t.n(a);t(17);_.a=function(e){var _=e.count,t=e.sum;return l.a.createElement("div",{id:"display"},l.a.createElement("div",{id:"displayCount"},_||"0"),l.a.createElement("div",{id:"displaySum"},t))}},,,function(e,_,t){e.exports=t(19)},,,,,function(e,_,t){},function(e,_,t){},function(e,_,t){},function(e,_,t){},function(e,_,t){"use strict";t.r(_);var a=t(0),l=t.n(a),s=t(2),c=t.n(s),n=(t(15),t(16),t(3));var r=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(n.a,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(r,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.ed60cac2.chunk.js.map