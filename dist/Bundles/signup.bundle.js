/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./globals.js":
/*!********************!*\
  !*** ./globals.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   key: () => (/* binding */ key),
/* harmony export */   mcConsoleAccess: () => (/* binding */ mcConsoleAccess)
/* harmony export */ });
var key = "1837key";
var mcConsoleAccess = ["100000"]; //Nischay, ..



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
  !*** ./src/signup.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signupForm = document.getElementById("signup-form");
var emailInput = document.getElementById("email");
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var emailError = document.getElementById("email-error");
var usernameError = document.getElementById("username-error");
var passwordError = document.getElementById("password-error");
var container = document.getElementById("container");
var submitButton = document.getElementById("submit");
var header = document.getElementById("header");
var smallText = document.getElementById("small-text");
var verificationForm = document.getElementById("verification-form");
var signupGroup = document.querySelectorAll(".form-group");
var passwordToggle = document.getElementById("password-toggle");
signupForm.addEventListener("submit", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(event) {
    var encryptedEmail, encryptedUsername, encryptedPassword;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          event.preventDefault();
          // Validate inputs (you can add more validation as needed)
          if (emailInput.value.trim() === "") {
            emailError.textContent = "- Email is required";
          } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = "- Invalid email";
          } else {
            emailError.textContent = ""; // Clear the error message
          }
          if (usernameInput.value.trim() === "") {
            usernameError.textContent = "- Username is required";
          } else {
            usernameError.textContent = ""; // Clear the error message
          }
          if (passwordInput.value.trim() === "") {
            passwordError.textContent = "- Password is required";
          } else {
            passwordError.textContent = ""; // Clear the error message
          }

          // Check if any validation errors occurred
          if (emailError.textContent === "" && usernameError.textContent === "" && passwordError.textContent === "") {
            encryptedEmail = CryptoJS.AES.encrypt(emailInput.value, _globals__WEBPACK_IMPORTED_MODULE_0__.key).toString();
            encryptedUsername = CryptoJS.AES.encrypt(usernameInput.value, _globals__WEBPACK_IMPORTED_MODULE_0__.key).toString();
            encryptedPassword = CryptoJS.AES.encrypt(passwordInput.value, _globals__WEBPACK_IMPORTED_MODULE_0__.key).toString();
            fetch("/check-email", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                email: encryptedEmail
              })
            }).then(function (response) {
              if (response.status === 204) {
                console.log("email in use");
                emailError.textContent = "- Email already in use";
              } else {
                // send email here
                animateContainer(emailInput.value, encryptedEmail, encryptedUsername, encryptedPassword);
              }
            })["catch"](function (error) {
              console.error("Request failed:", error);
            });
          }
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

// Function to validate email format (you can use a more robust validation)
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Send a request to the new route when needed
function sendVerificationCodeEmail(_x2) {
  return _sendVerificationCodeEmail.apply(this, arguments);
}
function _sendVerificationCodeEmail() {
  _sendVerificationCodeEmail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(email) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return fetch("/send-code", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: email
            })
          });
        case 3:
          response = _context3.sent;
          _context3.next = 6;
          return response.json();
        case 6:
          data = _context3.sent;
          return _context3.abrupt("return", data.code);
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.error("Request failed:", _context3.t0);
          throw _context3.t0;
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return _sendVerificationCodeEmail.apply(this, arguments);
}
passwordToggle.addEventListener("click", function (event) {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.innerHTML = "visibility";
  } else {
    passwordInput.type = "password";
    passwordToggle.innerHTML = "visibility_off";
  }
});
function animateContainer(email, encryptedEmail, username, password) {
  console.log("animating");
  var currentHeight = container.clientHeight;
  var transitionsEnded = 0;
  signupGroup.forEach(function (signupElement) {
    signupElement.classList.add("animate-out");
    signupElement.addEventListener("transitionend", function () {
      transitionsEnded++;
      if (transitionsEnded === signupGroup.length) {
        container.removeChild(signupForm);
        addVerificationForm(email, encryptedEmail, username, password);
      }
    });
  });
}
function addVerificationForm(email, encryptedEmail, username, password) {
  console.log("adding verification form");
  var verification = document.createElement("div");
  var instructions = document.createElement("p");
  instructions.textContent = "Enter the 6-digit verification code sent to ";
  var emailLabel = document.createElement("span");
  emailLabel.textContent = email; // Replace with the actual email
  emailLabel.style.color = "#39cc6f";
  instructions.appendChild(emailLabel);
  instructions.style.textAlign = "left";
  instructions.style.fontSize = "15px";
  var codeError = document.createElement("p");
  codeError.style.color = "#fa777c";
  codeError.style.textAlign = "left";
  codeError.style.margin = "0";
  codeError.style.fontSize = "15px";
  var verificationGroup = document.createElement("div");
  verificationGroup.classList.add("form-group");
  var verificationInput = document.createElement("input");
  verificationInput.setAttribute("type", "number");
  verificationInput.setAttribute("id", "verification-code");
  verificationInput.setAttribute("name", "verification-code");
  verificationInput.setAttribute("placeholder", "Enter your verification code");
  verificationInput.style.marginTop = "0";
  var verifyButton = document.createElement("button");
  verifyButton.setAttribute("type", "submit");
  verifyButton.setAttribute("id", "verify");
  verifyButton.setAttribute("id", "verify");
  verifyButton.textContent = "Verify";
  _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var code, registerClick;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          registerClick = function _registerClick() {
            if (Number(verificationInput.value) === code) {
              register(encryptedEmail, username, password, codeError);
            } else {
              codeError.textContent = "Incorrect code";
            }
          };
          _context2.next = 3;
          return sendVerificationCodeEmail(email);
        case 3:
          code = _context2.sent;
          console.log(code);
          verifyButton.onclick = registerClick;
          verificationInput.addEventListener("input", function (event) {
            if (codeError.textContent !== "") {
              codeError.textContent = "";
            }
          });
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }))();
  verificationGroup.appendChild(verificationInput);
  verificationGroup.appendChild(verifyButton);
  verification.appendChild(instructions);
  verification.appendChild(codeError);
  verification.appendChild(verificationGroup);
  verification.setAttribute("id", "verification");
  verification.setAttribute("class", "verification-group");

  // Add the verification group to the form
  verificationForm.insertBefore(verification, document.querySelector(".verification-group:last-child"));
  header.textContent = "Verification";
  smallText.textContent = "Back to sign up";
  smallText.removeAttribute("href");
  smallText.onclick = goBackPage;
}
function register(_x3, _x4, _x5, _x6) {
  return _register.apply(this, arguments);
}
function _register() {
  _register = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(email, username, password, codeError) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return fetch("/register-user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: email,
              username: username,
              password: password
            })
          });
        case 3:
          response = _context4.sent;
          _context4.next = 6;
          return response.json();
        case 6:
          data = _context4.sent;
          if (response.status === 200) {
            if (data.accessCode) {
              createCookie("mcCode", data.accessCode, 90);
            }
            console.log("Registration successful");
            window.location.href = "/home";
          } else {
            console.error("Registration failed. Status:", response.status);
            codeError.textContent = data.message;
          }
          _context4.next = 13;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          console.error("Request failed:", _context4.t0);
          // Handle other errors that may occur during the fetch
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 10]]);
  }));
  return _register.apply(this, arguments);
}
function goBackPage() {
  var verification = document.getElementById("verification");
  verification.classList.add("animate-out");
  verification.addEventListener("transitionend", function () {
    verification.remove();
    header.textContent = "Sign Up";
    smallText.textContent = "Already have an account?";
    smallText.href = "login";
    container.insertBefore(signupForm, smallText);
    signupGroup.forEach(function (element) {
      element.classList.remove("animate-out");
    });
  });
}
function createCookie(name, value, daysToExpire) {
  var expires = "";
  if (daysToExpire) {
    var date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  if (window.location.hostname.includes("classchats.net")) {
    document.cookie = name + "=" + value + expires + "; domain=.classchats.net; path=/";
  } else {
    document.cookie = name + "=" + value + expires + "; path=/";
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxHQUFHekUsS0FBSyxHQUFHOE4sT0FBTyxHQUFHLGtDQUFrQztFQUNyRSxDQUFDLE1BQU07SUFDTGpILFFBQVEsQ0FBQ3lILE1BQU0sR0FBRzdKLElBQUksR0FBRyxHQUFHLEdBQUd6RSxLQUFLLEdBQUc4TixPQUFPLEdBQUcsVUFBVTtFQUM3RDtBQUNGLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0c2VydmVybmV3Ly4vZ2xvYmFscy5qcyIsIndlYnBhY2s6Ly9jaGF0c2VydmVybmV3L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NoYXRzZXJ2ZXJuZXcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NoYXRzZXJ2ZXJuZXcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaGF0c2VydmVybmV3L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy8uL3NyYy9zaWdudXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qga2V5ID0gXCIxODM3a2V5XCI7XG5jb25zdCBtY0NvbnNvbGVBY2Nlc3MgPSBbXCIxMDAwMDBcIl07IC8vTmlzY2hheSwgLi5cblxuZXhwb3J0IHsga2V5LCBtY0NvbnNvbGVBY2Nlc3MgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsga2V5IH0gZnJvbSBcIi4uL2dsb2JhbHNcIjtcblxuY29uc3Qgc2lnbnVwRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lnbnVwLWZvcm1cIik7XG5jb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKTtcbmNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lXCIpO1xuY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIik7XG5jb25zdCBlbWFpbEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbC1lcnJvclwiKTtcbmNvbnN0IHVzZXJuYW1lRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJuYW1lLWVycm9yXCIpO1xuY29uc3QgcGFzc3dvcmRFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmQtZXJyb3JcIik7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XG5jb25zdCBzbWFsbFRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNtYWxsLXRleHRcIik7XG5jb25zdCB2ZXJpZmljYXRpb25Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXJpZmljYXRpb24tZm9ybVwiKTtcbmNvbnN0IHNpZ251cEdyb3VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtLWdyb3VwXCIpO1xuY29uc3QgcGFzc3dvcmRUb2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkLXRvZ2dsZVwiKTtcblxuc2lnbnVwRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyBWYWxpZGF0ZSBpbnB1dHMgKHlvdSBjYW4gYWRkIG1vcmUgdmFsaWRhdGlvbiBhcyBuZWVkZWQpXG4gIGlmIChlbWFpbElucHV0LnZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSBcIi0gRW1haWwgaXMgcmVxdWlyZWRcIjtcbiAgfSBlbHNlIGlmICghdmFsaWRhdGVFbWFpbChlbWFpbElucHV0LnZhbHVlKSkge1xuICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSBcIi0gSW52YWxpZCBlbWFpbFwiO1xuICB9IGVsc2Uge1xuICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiOyAvLyBDbGVhciB0aGUgZXJyb3IgbWVzc2FnZVxuICB9XG5cbiAgaWYgKHVzZXJuYW1lSW5wdXQudmFsdWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgdXNlcm5hbWVFcnJvci50ZXh0Q29udGVudCA9IFwiLSBVc2VybmFtZSBpcyByZXF1aXJlZFwiO1xuICB9IGVsc2Uge1xuICAgIHVzZXJuYW1lRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiOyAvLyBDbGVhciB0aGUgZXJyb3IgbWVzc2FnZVxuICB9XG5cbiAgaWYgKHBhc3N3b3JkSW5wdXQudmFsdWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgcGFzc3dvcmRFcnJvci50ZXh0Q29udGVudCA9IFwiLSBQYXNzd29yZCBpcyByZXF1aXJlZFwiO1xuICB9IGVsc2Uge1xuICAgIHBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSBcIlwiOyAvLyBDbGVhciB0aGUgZXJyb3IgbWVzc2FnZVxuICB9XG5cbiAgLy8gQ2hlY2sgaWYgYW55IHZhbGlkYXRpb24gZXJyb3JzIG9jY3VycmVkXG4gIGlmIChcbiAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID09PSBcIlwiICYmXG4gICAgdXNlcm5hbWVFcnJvci50ZXh0Q29udGVudCA9PT0gXCJcIiAmJlxuICAgIHBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPT09IFwiXCJcbiAgKSB7XG4gICAgY29uc3QgZW5jcnlwdGVkRW1haWwgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChcbiAgICAgIGVtYWlsSW5wdXQudmFsdWUsXG4gICAgICBrZXlcbiAgICApLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgZW5jcnlwdGVkVXNlcm5hbWUgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChcbiAgICAgIHVzZXJuYW1lSW5wdXQudmFsdWUsXG4gICAgICBrZXlcbiAgICApLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgZW5jcnlwdGVkUGFzc3dvcmQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChcbiAgICAgIHBhc3N3b3JkSW5wdXQudmFsdWUsXG4gICAgICBrZXlcbiAgICApLnRvU3RyaW5nKCk7XG4gICAgZmV0Y2goXCIvY2hlY2stZW1haWxcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBlbWFpbDogZW5jcnlwdGVkRW1haWwsXG4gICAgICB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZW1haWwgaW4gdXNlXCIpO1xuICAgICAgICAgIGVtYWlsRXJyb3IudGV4dENvbnRlbnQgPSBcIi0gRW1haWwgYWxyZWFkeSBpbiB1c2VcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBzZW5kIGVtYWlsIGhlcmVcbiAgICAgICAgICBhbmltYXRlQ29udGFpbmVyKFxuICAgICAgICAgICAgZW1haWxJbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIGVuY3J5cHRlZEVtYWlsLFxuICAgICAgICAgICAgZW5jcnlwdGVkVXNlcm5hbWUsXG4gICAgICAgICAgICBlbmNyeXB0ZWRQYXNzd29yZFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSZXF1ZXN0IGZhaWxlZDpcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH1cbn0pO1xuXG4vLyBGdW5jdGlvbiB0byB2YWxpZGF0ZSBlbWFpbCBmb3JtYXQgKHlvdSBjYW4gdXNlIGEgbW9yZSByb2J1c3QgdmFsaWRhdGlvbilcbmZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWwpIHtcbiAgY29uc3QgcmUgPSAvXFxTK0BcXFMrXFwuXFxTKy87XG4gIHJldHVybiByZS50ZXN0KGVtYWlsKTtcbn1cblxuLy8gU2VuZCBhIHJlcXVlc3QgdG8gdGhlIG5ldyByb3V0ZSB3aGVuIG5lZWRlZFxuYXN5bmMgZnVuY3Rpb24gc2VuZFZlcmlmaWNhdGlvbkNvZGVFbWFpbChlbWFpbCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvc2VuZC1jb2RlXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwgfSksXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YS5jb2RlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJSZXF1ZXN0IGZhaWxlZDpcIiwgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbnBhc3N3b3JkVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgaWYgKHBhc3N3b3JkSW5wdXQudHlwZSA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgcGFzc3dvcmRJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgcGFzc3dvcmRUb2dnbGUuaW5uZXJIVE1MID0gXCJ2aXNpYmlsaXR5XCI7XG4gIH0gZWxzZSB7XG4gICAgcGFzc3dvcmRJbnB1dC50eXBlID0gXCJwYXNzd29yZFwiO1xuICAgIHBhc3N3b3JkVG9nZ2xlLmlubmVySFRNTCA9IFwidmlzaWJpbGl0eV9vZmZcIjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGFuaW1hdGVDb250YWluZXIoZW1haWwsIGVuY3J5cHRlZEVtYWlsLCB1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgY29uc29sZS5sb2coXCJhbmltYXRpbmdcIik7XG4gIGNvbnN0IGN1cnJlbnRIZWlnaHQgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICBsZXQgdHJhbnNpdGlvbnNFbmRlZCA9IDA7XG4gIHNpZ251cEdyb3VwLmZvckVhY2goKHNpZ251cEVsZW1lbnQpID0+IHtcbiAgICBzaWdudXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlLW91dFwiKTtcbiAgICBzaWdudXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsICgpID0+IHtcbiAgICAgIHRyYW5zaXRpb25zRW5kZWQrKztcbiAgICAgIGlmICh0cmFuc2l0aW9uc0VuZGVkID09PSBzaWdudXBHcm91cC5sZW5ndGgpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKHNpZ251cEZvcm0pO1xuICAgICAgICBhZGRWZXJpZmljYXRpb25Gb3JtKGVtYWlsLCBlbmNyeXB0ZWRFbWFpbCwgdXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFZlcmlmaWNhdGlvbkZvcm0oZW1haWwsIGVuY3J5cHRlZEVtYWlsLCB1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgY29uc29sZS5sb2coXCJhZGRpbmcgdmVyaWZpY2F0aW9uIGZvcm1cIik7XG4gIGNvbnN0IHZlcmlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGluc3RydWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBpbnN0cnVjdGlvbnMudGV4dENvbnRlbnQgPSBgRW50ZXIgdGhlIDYtZGlnaXQgdmVyaWZpY2F0aW9uIGNvZGUgc2VudCB0byBgO1xuXG4gIGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZW1haWxMYWJlbC50ZXh0Q29udGVudCA9IGVtYWlsOyAvLyBSZXBsYWNlIHdpdGggdGhlIGFjdHVhbCBlbWFpbFxuICBlbWFpbExhYmVsLnN0eWxlLmNvbG9yID0gXCIjMzljYzZmXCI7XG4gIGluc3RydWN0aW9ucy5hcHBlbmRDaGlsZChlbWFpbExhYmVsKTtcblxuICBpbnN0cnVjdGlvbnMuc3R5bGUudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gIGluc3RydWN0aW9ucy5zdHlsZS5mb250U2l6ZSA9IFwiMTVweFwiO1xuXG4gIGNvbnN0IGNvZGVFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb2RlRXJyb3Iuc3R5bGUuY29sb3IgPSBcIiNmYTc3N2NcIjtcbiAgY29kZUVycm9yLnN0eWxlLnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICBjb2RlRXJyb3Iuc3R5bGUubWFyZ2luID0gXCIwXCI7XG4gIGNvZGVFcnJvci5zdHlsZS5mb250U2l6ZSA9IFwiMTVweFwiO1xuXG4gIGNvbnN0IHZlcmlmaWNhdGlvbkdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdmVyaWZpY2F0aW9uR3JvdXAuY2xhc3NMaXN0LmFkZChcImZvcm0tZ3JvdXBcIik7XG5cbiAgY29uc3QgdmVyaWZpY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHZlcmlmaWNhdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJudW1iZXJcIik7XG4gIHZlcmlmaWNhdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidmVyaWZpY2F0aW9uLWNvZGVcIik7XG4gIHZlcmlmaWNhdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ2ZXJpZmljYXRpb24tY29kZVwiKTtcbiAgdmVyaWZpY2F0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFbnRlciB5b3VyIHZlcmlmaWNhdGlvbiBjb2RlXCIpO1xuICB2ZXJpZmljYXRpb25JbnB1dC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjBcIjtcblxuICBjb25zdCB2ZXJpZnlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB2ZXJpZnlCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgdmVyaWZ5QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidmVyaWZ5XCIpO1xuICB2ZXJpZnlCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ2ZXJpZnlcIik7XG4gIHZlcmlmeUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiVmVyaWZ5XCI7XG5cbiAgKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjb2RlID0gYXdhaXQgc2VuZFZlcmlmaWNhdGlvbkNvZGVFbWFpbChlbWFpbCk7XG4gICAgY29uc29sZS5sb2coY29kZSk7XG4gICAgZnVuY3Rpb24gcmVnaXN0ZXJDbGljaygpIHtcbiAgICAgIGlmIChOdW1iZXIodmVyaWZpY2F0aW9uSW5wdXQudmFsdWUpID09PSBjb2RlKSB7XG4gICAgICAgIHJlZ2lzdGVyKGVuY3J5cHRlZEVtYWlsLCB1c2VybmFtZSwgcGFzc3dvcmQsIGNvZGVFcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2RlRXJyb3IudGV4dENvbnRlbnQgPSBcIkluY29ycmVjdCBjb2RlXCI7XG4gICAgICB9XG4gICAgfVxuICAgIHZlcmlmeUJ1dHRvbi5vbmNsaWNrID0gcmVnaXN0ZXJDbGljaztcbiAgICB2ZXJpZmljYXRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoY29kZUVycm9yLnRleHRDb250ZW50ICE9PSBcIlwiKSB7XG4gICAgICAgIGNvZGVFcnJvci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pKCk7XG5cbiAgdmVyaWZpY2F0aW9uR3JvdXAuYXBwZW5kQ2hpbGQodmVyaWZpY2F0aW9uSW5wdXQpO1xuICB2ZXJpZmljYXRpb25Hcm91cC5hcHBlbmRDaGlsZCh2ZXJpZnlCdXR0b24pO1xuXG4gIHZlcmlmaWNhdGlvbi5hcHBlbmRDaGlsZChpbnN0cnVjdGlvbnMpO1xuICB2ZXJpZmljYXRpb24uYXBwZW5kQ2hpbGQoY29kZUVycm9yKTtcbiAgdmVyaWZpY2F0aW9uLmFwcGVuZENoaWxkKHZlcmlmaWNhdGlvbkdyb3VwKTtcbiAgdmVyaWZpY2F0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidmVyaWZpY2F0aW9uXCIpO1xuICB2ZXJpZmljYXRpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ2ZXJpZmljYXRpb24tZ3JvdXBcIik7XG5cbiAgLy8gQWRkIHRoZSB2ZXJpZmljYXRpb24gZ3JvdXAgdG8gdGhlIGZvcm1cbiAgdmVyaWZpY2F0aW9uRm9ybS5pbnNlcnRCZWZvcmUoXG4gICAgdmVyaWZpY2F0aW9uLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmVyaWZpY2F0aW9uLWdyb3VwOmxhc3QtY2hpbGRcIilcbiAgKTtcblxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlZlcmlmaWNhdGlvblwiO1xuICBzbWFsbFRleHQudGV4dENvbnRlbnQgPSBcIkJhY2sgdG8gc2lnbiB1cFwiO1xuICBzbWFsbFRleHQucmVtb3ZlQXR0cmlidXRlKFwiaHJlZlwiKTtcblxuICBzbWFsbFRleHQub25jbGljayA9IGdvQmFja1BhZ2U7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyKGVtYWlsLCB1c2VybmFtZSwgcGFzc3dvcmQsIGNvZGVFcnJvcikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvcmVnaXN0ZXItdXNlclwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICB9KSxcbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBpZiAoZGF0YS5hY2Nlc3NDb2RlKSB7XG4gICAgICAgIGNyZWF0ZUNvb2tpZShcIm1jQ29kZVwiLCBkYXRhLmFjY2Vzc0NvZGUsIDkwKTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coXCJSZWdpc3RyYXRpb24gc3VjY2Vzc2Z1bFwiKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvaG9tZVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUmVnaXN0cmF0aW9uIGZhaWxlZC4gU3RhdHVzOlwiLCByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgY29kZUVycm9yLnRleHRDb250ZW50ID0gZGF0YS5tZXNzYWdlO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiUmVxdWVzdCBmYWlsZWQ6XCIsIGVycm9yKTtcbiAgICAvLyBIYW5kbGUgb3RoZXIgZXJyb3JzIHRoYXQgbWF5IG9jY3VyIGR1cmluZyB0aGUgZmV0Y2hcbiAgfVxufVxuXG5mdW5jdGlvbiBnb0JhY2tQYWdlKCkge1xuICBjb25zdCB2ZXJpZmljYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZlcmlmaWNhdGlvblwiKTtcbiAgdmVyaWZpY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlLW91dFwiKTtcbiAgdmVyaWZpY2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2ZXJpZmljYXRpb24ucmVtb3ZlKCk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJTaWduIFVwXCI7XG4gICAgc21hbGxUZXh0LnRleHRDb250ZW50ID0gXCJBbHJlYWR5IGhhdmUgYW4gYWNjb3VudD9cIjtcbiAgICBzbWFsbFRleHQuaHJlZiA9IFwibG9naW5cIjtcbiAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKHNpZ251cEZvcm0sIHNtYWxsVGV4dCk7XG4gICAgc2lnbnVwR3JvdXAuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZS1vdXRcIik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb29raWUobmFtZSwgdmFsdWUsIGRheXNUb0V4cGlyZSkge1xuICB2YXIgZXhwaXJlcyA9IFwiXCI7XG5cbiAgaWYgKGRheXNUb0V4cGlyZSkge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBkYXlzVG9FeHBpcmUgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICBleHBpcmVzID0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvVVRDU3RyaW5nKCk7XG4gIH1cbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmNsdWRlcyhcImNsYXNzY2hhdHMubmV0XCIpKSB7XG4gICAgZG9jdW1lbnQuY29va2llID1cbiAgICAgIG5hbWUgKyBcIj1cIiArIHZhbHVlICsgZXhwaXJlcyArIFwiOyBkb21haW49LmNsYXNzY2hhdHMubmV0OyBwYXRoPS9cIjtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJrZXkiLCJtY0NvbnNvbGVBY2Nlc3MiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJpbmZvIiwiZXJyb3IiLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsInNpZ251cEZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZW1haWxJbnB1dCIsInVzZXJuYW1lSW5wdXQiLCJwYXNzd29yZElucHV0IiwiZW1haWxFcnJvciIsInVzZXJuYW1lRXJyb3IiLCJwYXNzd29yZEVycm9yIiwiY29udGFpbmVyIiwic3VibWl0QnV0dG9uIiwiaGVhZGVyIiwic21hbGxUZXh0IiwidmVyaWZpY2F0aW9uRm9ybSIsInNpZ251cEdyb3VwIiwicXVlcnlTZWxlY3RvckFsbCIsInBhc3N3b3JkVG9nZ2xlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9yZWYiLCJfY2FsbGVlIiwiZXZlbnQiLCJlbmNyeXB0ZWRFbWFpbCIsImVuY3J5cHRlZFVzZXJuYW1lIiwiZW5jcnlwdGVkUGFzc3dvcmQiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwidGV4dENvbnRlbnQiLCJ2YWxpZGF0ZUVtYWlsIiwiQ3J5cHRvSlMiLCJBRVMiLCJlbmNyeXB0IiwidG9TdHJpbmciLCJmZXRjaCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImVtYWlsIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiYW5pbWF0ZUNvbnRhaW5lciIsIl94IiwicmUiLCJ0ZXN0Iiwic2VuZFZlcmlmaWNhdGlvbkNvZGVFbWFpbCIsIl94MiIsIl9zZW5kVmVyaWZpY2F0aW9uQ29kZUVtYWlsIiwiX2NhbGxlZTMiLCJkYXRhIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwianNvbiIsImNvZGUiLCJ0MCIsImlubmVySFRNTCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjdXJyZW50SGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwidHJhbnNpdGlvbnNFbmRlZCIsInNpZ251cEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmVDaGlsZCIsImFkZFZlcmlmaWNhdGlvbkZvcm0iLCJ2ZXJpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5zdHJ1Y3Rpb25zIiwiZW1haWxMYWJlbCIsInN0eWxlIiwiY29sb3IiLCJhcHBlbmRDaGlsZCIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiY29kZUVycm9yIiwibWFyZ2luIiwidmVyaWZpY2F0aW9uR3JvdXAiLCJ2ZXJpZmljYXRpb25JbnB1dCIsInNldEF0dHJpYnV0ZSIsIm1hcmdpblRvcCIsInZlcmlmeUJ1dHRvbiIsIl9jYWxsZWUyIiwicmVnaXN0ZXJDbGljayIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIl9yZWdpc3RlckNsaWNrIiwiTnVtYmVyIiwicmVnaXN0ZXIiLCJvbmNsaWNrIiwiaW5zZXJ0QmVmb3JlIiwicXVlcnlTZWxlY3RvciIsInJlbW92ZUF0dHJpYnV0ZSIsImdvQmFja1BhZ2UiLCJfeDMiLCJfeDQiLCJfeDUiLCJfeDYiLCJfcmVnaXN0ZXIiLCJfY2FsbGVlNCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImFjY2Vzc0NvZGUiLCJjcmVhdGVDb29raWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJtZXNzYWdlIiwicmVtb3ZlIiwiZWxlbWVudCIsImRheXNUb0V4cGlyZSIsImV4cGlyZXMiLCJkYXRlIiwiRGF0ZSIsInNldFRpbWUiLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJob3N0bmFtZSIsImluY2x1ZGVzIiwiY29va2llIl0sInNvdXJjZVJvb3QiOiIifQ==