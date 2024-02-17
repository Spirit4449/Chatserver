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
var key = '1837key';
var mcConsoleAccess = ['100000']; //Nischay, ..



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
var passwordToggle = document.getElementById('password-toggle');
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
            encryptedPassword = CryptoJS.AES.encrypt(passwordInput.value, _globals__WEBPACK_IMPORTED_MODULE_0__.key).toString(); // url = '/check-email?email=' + encodeURIComponent(encryptedEmail) + '&username=' + encodeURIComponent(encryptedUsername) + '&password=' + encodeURIComponent(encryptedPassword);
            // window.location.href = url
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
                //animateContainer(emailInput.value, usernameInput.value, passwordInput.value);
                // check if the verification code matches here
                register(encryptedEmail, encryptedUsername, encryptedPassword);
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
function sendVerificationCodeEmail(email) {
  fetch("/send-code", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email
    })
  }).then(function () {
    console.log("code sent");
  })["catch"](function (error) {
    console.error("Request failed:", error);
  });
}
passwordToggle.addEventListener('click', function (event) {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.innerHTML = "visibility";
  } else {
    passwordInput.type = "password";
    passwordToggle.innerHTML = "visibility_off";
  }
});
function animateContainer(email, username, password) {
  console.log("animating");
  var currentHeight = container.clientHeight;
  var transitionsEnded = 0;
  signupGroup.forEach(function (signupElement) {
    signupElement.classList.add("animate-out");
    signupElement.addEventListener("transitionend", function () {
      transitionsEnded++;
      if (transitionsEnded === signupGroup.length) {
        container.removeChild(signupForm);
        addVerificationForm(email, username, password);
      }
    });
  });
}
function addVerificationForm(email, username, password) {
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
  var verificationGroup = document.createElement("div");
  verificationGroup.classList.add("form-group");
  var verificationInput = document.createElement("input");
  verificationInput.setAttribute("type", "number");
  verificationInput.setAttribute("id", "verification-code");
  verificationInput.setAttribute("name", "verification-code");
  verificationInput.setAttribute("placeholder", "Enter your verification code");
  var verifyButton = document.createElement("button");
  verifyButton.setAttribute("type", "submit");
  verifyButton.setAttribute("id", "verify");
  verifyButton.setAttribute("id", "verify");
  verifyButton.textContent = "Verify";
  function registerClick() {
    register(email, username, password, verificationInput.value);
  }
  verifyButton.onclick = registerClick;
  verificationGroup.appendChild(verificationInput);
  verificationGroup.appendChild(verifyButton);
  verification.appendChild(instructions);
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
function register(_x2, _x3, _x4) {
  return _register.apply(this, arguments);
}
function _register() {
  _register = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(email, username, password) {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
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
          response = _context2.sent;
          if (!(response.status === 200)) {
            _context2.next = 13;
            break;
          }
          _context2.next = 7;
          return response.json();
        case 7:
          data = _context2.sent;
          if (data.accessCode) {
            createCookie("mcCode", data.accessCode, 90);
          }
          console.log("Registration successful");
          window.location.href = "/home";
          _context2.next = 14;
          break;
        case 13:
          console.error("Registration failed. Status:", response.status);
          // You might want to handle other HTTP status codes here
        case 14:
          _context2.next = 19;
          break;
        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](0);
          console.error("Request failed:", _context2.t0);
          // Handle other errors that may occur during the fetch
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 16]]);
  }));
  return _register.apply(this, arguments);
}
function goBackPage() {
  verification = document.getElementById("verification");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUlaLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDWSxRQUFRLENBQUNDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0lBQ3ZEeEcsUUFBUSxDQUFDeUcsTUFBTSxHQUNiN0ksSUFBSSxHQUFHLEdBQUcsR0FBR3pFLEtBQUssR0FBRzhNLE9BQU8sR0FBRyxrQ0FBa0M7RUFDckUsQ0FBQyxNQUFNO0lBQ0xqRyxRQUFRLENBQUN5RyxNQUFNLEdBQUc3SSxJQUFJLEdBQUcsR0FBRyxHQUFHekUsS0FBSyxHQUFHOE0sT0FBTyxHQUFHLFVBQVU7RUFDN0Q7QUFDRixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy8uL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaGF0c2VydmVybmV3L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaGF0c2VydmVybmV3L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NoYXRzZXJ2ZXJuZXcvLi9zcmMvc2lnbnVwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGtleSA9ICcxODM3a2V5JztcbmNvbnN0IG1jQ29uc29sZUFjY2VzcyA9IFsnMTAwMDAwJ10gLy9OaXNjaGF5LCAuLlxuXG5leHBvcnQgeyBcbiAgICBrZXksIFxuICAgIG1jQ29uc29sZUFjY2VzcyxcbiAgICBcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGtleSB9IGZyb20gXCIuLi9nbG9iYWxzXCI7XG5cbmNvbnN0IHNpZ251cEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZ251cC1mb3JtXCIpO1xuY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIik7XG5jb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZVwiKTtcbmNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkXCIpO1xuY29uc3QgZW1haWxFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWwtZXJyb3JcIik7XG5jb25zdCB1c2VybmFtZUVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VybmFtZS1lcnJvclwiKTtcbmNvbnN0IHBhc3N3b3JkRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkLWVycm9yXCIpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuY29uc3Qgc21hbGxUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbWFsbC10ZXh0XCIpO1xuY29uc3QgdmVyaWZpY2F0aW9uRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVyaWZpY2F0aW9uLWZvcm1cIik7XG5jb25zdCBzaWdudXBHcm91cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9ybS1ncm91cFwiKTtcbmNvbnN0IHBhc3N3b3JkVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLXRvZ2dsZScpXG5cbnNpZ251cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc3luYyBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgLy8gVmFsaWRhdGUgaW5wdXRzICh5b3UgY2FuIGFkZCBtb3JlIHZhbGlkYXRpb24gYXMgbmVlZGVkKVxuICBpZiAoZW1haWxJbnB1dC52YWx1ZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gXCItIEVtYWlsIGlzIHJlcXVpcmVkXCI7XG4gIH0gZWxzZSBpZiAoIXZhbGlkYXRlRW1haWwoZW1haWxJbnB1dC52YWx1ZSkpIHtcbiAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gXCItIEludmFsaWQgZW1haWxcIjtcbiAgfSBlbHNlIHtcbiAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gXCJcIjsgLy8gQ2xlYXIgdGhlIGVycm9yIG1lc3NhZ2VcbiAgfVxuXG4gIGlmICh1c2VybmFtZUlucHV0LnZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHVzZXJuYW1lRXJyb3IudGV4dENvbnRlbnQgPSBcIi0gVXNlcm5hbWUgaXMgcmVxdWlyZWRcIjtcbiAgfSBlbHNlIHtcbiAgICB1c2VybmFtZUVycm9yLnRleHRDb250ZW50ID0gXCJcIjsgLy8gQ2xlYXIgdGhlIGVycm9yIG1lc3NhZ2VcbiAgfVxuXG4gIGlmIChwYXNzd29yZElucHV0LnZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xuICAgIHBhc3N3b3JkRXJyb3IudGV4dENvbnRlbnQgPSBcIi0gUGFzc3dvcmQgaXMgcmVxdWlyZWRcIjtcbiAgfSBlbHNlIHtcbiAgICBwYXNzd29yZEVycm9yLnRleHRDb250ZW50ID0gXCJcIjsgLy8gQ2xlYXIgdGhlIGVycm9yIG1lc3NhZ2VcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGFueSB2YWxpZGF0aW9uIGVycm9ycyBvY2N1cnJlZFxuICBpZiAoXG4gICAgZW1haWxFcnJvci50ZXh0Q29udGVudCA9PT0gXCJcIiAmJlxuICAgIHVzZXJuYW1lRXJyb3IudGV4dENvbnRlbnQgPT09IFwiXCIgJiZcbiAgICBwYXNzd29yZEVycm9yLnRleHRDb250ZW50ID09PSBcIlwiXG4gICkge1xuICAgIGNvbnN0IGVuY3J5cHRlZEVtYWlsID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoXG4gICAgICBlbWFpbElucHV0LnZhbHVlLFxuICAgICAga2V5XG4gICAgKS50b1N0cmluZygpO1xuICAgIGNvbnN0IGVuY3J5cHRlZFVzZXJuYW1lID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoXG4gICAgICB1c2VybmFtZUlucHV0LnZhbHVlLFxuICAgICAga2V5XG4gICAgKS50b1N0cmluZygpO1xuICAgIGNvbnN0IGVuY3J5cHRlZFBhc3N3b3JkID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoXG4gICAgICBwYXNzd29yZElucHV0LnZhbHVlLFxuICAgICAga2V5XG4gICAgKS50b1N0cmluZygpO1xuICAgIC8vIHVybCA9ICcvY2hlY2stZW1haWw/ZW1haWw9JyArIGVuY29kZVVSSUNvbXBvbmVudChlbmNyeXB0ZWRFbWFpbCkgKyAnJnVzZXJuYW1lPScgKyBlbmNvZGVVUklDb21wb25lbnQoZW5jcnlwdGVkVXNlcm5hbWUpICsgJyZwYXNzd29yZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGVuY3J5cHRlZFBhc3N3b3JkKTtcbiAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgIGZldGNoKFwiL2NoZWNrLWVtYWlsXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZW1haWw6IGVuY3J5cHRlZEVtYWlsLFxuICAgICAgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImVtYWlsIGluIHVzZVwiKTtcbiAgICAgICAgICBlbWFpbEVycm9yLnRleHRDb250ZW50ID0gXCItIEVtYWlsIGFscmVhZHkgaW4gdXNlXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gc2VuZCBlbWFpbCBoZXJlXG4gICAgICAgICAgLy9hbmltYXRlQ29udGFpbmVyKGVtYWlsSW5wdXQudmFsdWUsIHVzZXJuYW1lSW5wdXQudmFsdWUsIHBhc3N3b3JkSW5wdXQudmFsdWUpO1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSB2ZXJpZmljYXRpb24gY29kZSBtYXRjaGVzIGhlcmVcbiAgICAgICAgICByZWdpc3RlcihlbmNyeXB0ZWRFbWFpbCwgZW5jcnlwdGVkVXNlcm5hbWUsIGVuY3J5cHRlZFBhc3N3b3JkKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlJlcXVlc3QgZmFpbGVkOlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfVxufSk7XG5cbi8vIEZ1bmN0aW9uIHRvIHZhbGlkYXRlIGVtYWlsIGZvcm1hdCAoeW91IGNhbiB1c2UgYSBtb3JlIHJvYnVzdCB2YWxpZGF0aW9uKVxuZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xuICBjb25zdCByZSA9IC9cXFMrQFxcUytcXC5cXFMrLztcbiAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xufVxuXG4vLyBTZW5kIGEgcmVxdWVzdCB0byB0aGUgbmV3IHJvdXRlIHdoZW4gbmVlZGVkXG5mdW5jdGlvbiBzZW5kVmVyaWZpY2F0aW9uQ29kZUVtYWlsKGVtYWlsKSB7XG4gIGZldGNoKFwiL3NlbmQtY29kZVwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwgfSksXG4gIH0pXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJjb2RlIHNlbnRcIik7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiUmVxdWVzdCBmYWlsZWQ6XCIsIGVycm9yKTtcbiAgICB9KTtcbn1cblxucGFzc3dvcmRUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgaWYgKHBhc3N3b3JkSW5wdXQudHlwZSA9PT0gXCJwYXNzd29yZFwiKSB7XG4gICAgcGFzc3dvcmRJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgcGFzc3dvcmRUb2dnbGUuaW5uZXJIVE1MID0gXCJ2aXNpYmlsaXR5XCI7XG4gIH0gZWxzZSB7XG4gICAgcGFzc3dvcmRJbnB1dC50eXBlID0gXCJwYXNzd29yZFwiO1xuICAgIHBhc3N3b3JkVG9nZ2xlLmlubmVySFRNTCA9IFwidmlzaWJpbGl0eV9vZmZcIjtcbiAgfVxufSk7XG5cblxuZnVuY3Rpb24gYW5pbWF0ZUNvbnRhaW5lcihlbWFpbCwgdXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gIGNvbnNvbGUubG9nKFwiYW5pbWF0aW5nXCIpO1xuICBjb25zdCBjdXJyZW50SGVpZ2h0ID0gY29udGFpbmVyLmNsaWVudEhlaWdodDtcbiAgbGV0IHRyYW5zaXRpb25zRW5kZWQgPSAwO1xuICBzaWdudXBHcm91cC5mb3JFYWNoKChzaWdudXBFbGVtZW50KSA9PiB7XG4gICAgc2lnbnVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZS1vdXRcIik7XG4gICAgc2lnbnVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidHJhbnNpdGlvbmVuZFwiLCAoKSA9PiB7XG4gICAgICB0cmFuc2l0aW9uc0VuZGVkKys7XG4gICAgICBpZiAodHJhbnNpdGlvbnNFbmRlZCA9PT0gc2lnbnVwR3JvdXAubGVuZ3RoKSB7XG4gICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChzaWdudXBGb3JtKTtcbiAgICAgICAgYWRkVmVyaWZpY2F0aW9uRm9ybShlbWFpbCwgdXNlcm5hbWUsIHBhc3N3b3JkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFkZFZlcmlmaWNhdGlvbkZvcm0oZW1haWwsIHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICBjb25zb2xlLmxvZyhcImFkZGluZyB2ZXJpZmljYXRpb24gZm9ybVwiKTtcbiAgY29uc3QgdmVyaWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGluc3RydWN0aW9ucy50ZXh0Q29udGVudCA9IGBFbnRlciB0aGUgNi1kaWdpdCB2ZXJpZmljYXRpb24gY29kZSBzZW50IHRvIGA7XG5cbiAgY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBlbWFpbExhYmVsLnRleHRDb250ZW50ID0gZW1haWw7IC8vIFJlcGxhY2Ugd2l0aCB0aGUgYWN0dWFsIGVtYWlsXG4gIGVtYWlsTGFiZWwuc3R5bGUuY29sb3IgPSBcIiMzOWNjNmZcIjtcbiAgaW5zdHJ1Y3Rpb25zLmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xuXG4gIGluc3RydWN0aW9ucy5zdHlsZS50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgaW5zdHJ1Y3Rpb25zLnN0eWxlLmZvbnRTaXplID0gXCIxNXB4XCI7XG5cbiAgY29uc3QgdmVyaWZpY2F0aW9uR3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB2ZXJpZmljYXRpb25Hcm91cC5jbGFzc0xpc3QuYWRkKFwiZm9ybS1ncm91cFwiKTtcblxuICBjb25zdCB2ZXJpZmljYXRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgdmVyaWZpY2F0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcIm51bWJlclwiKTtcbiAgdmVyaWZpY2F0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ2ZXJpZmljYXRpb24tY29kZVwiKTtcbiAgdmVyaWZpY2F0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInZlcmlmaWNhdGlvbi1jb2RlXCIpO1xuICB2ZXJpZmljYXRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIHlvdXIgdmVyaWZpY2F0aW9uIGNvZGVcIik7XG5cbiAgY29uc3QgdmVyaWZ5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdmVyaWZ5QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gIHZlcmlmeUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInZlcmlmeVwiKTtcbiAgdmVyaWZ5QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidmVyaWZ5XCIpO1xuICB2ZXJpZnlCdXR0b24udGV4dENvbnRlbnQgPSBcIlZlcmlmeVwiO1xuXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyQ2xpY2soKSB7XG4gICAgcmVnaXN0ZXIoZW1haWwsIHVzZXJuYW1lLCBwYXNzd29yZCwgdmVyaWZpY2F0aW9uSW5wdXQudmFsdWUpO1xuICB9XG4gIHZlcmlmeUJ1dHRvbi5vbmNsaWNrID0gcmVnaXN0ZXJDbGljaztcblxuICB2ZXJpZmljYXRpb25Hcm91cC5hcHBlbmRDaGlsZCh2ZXJpZmljYXRpb25JbnB1dCk7XG4gIHZlcmlmaWNhdGlvbkdyb3VwLmFwcGVuZENoaWxkKHZlcmlmeUJ1dHRvbik7XG5cbiAgdmVyaWZpY2F0aW9uLmFwcGVuZENoaWxkKGluc3RydWN0aW9ucyk7XG4gIHZlcmlmaWNhdGlvbi5hcHBlbmRDaGlsZCh2ZXJpZmljYXRpb25Hcm91cCk7XG4gIHZlcmlmaWNhdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInZlcmlmaWNhdGlvblwiKTtcbiAgdmVyaWZpY2F0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidmVyaWZpY2F0aW9uLWdyb3VwXCIpO1xuXG4gIC8vIEFkZCB0aGUgdmVyaWZpY2F0aW9uIGdyb3VwIHRvIHRoZSBmb3JtXG4gIHZlcmlmaWNhdGlvbkZvcm0uaW5zZXJ0QmVmb3JlKFxuICAgIHZlcmlmaWNhdGlvbixcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZlcmlmaWNhdGlvbi1ncm91cDpsYXN0LWNoaWxkXCIpXG4gICk7XG5cbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJWZXJpZmljYXRpb25cIjtcbiAgc21hbGxUZXh0LnRleHRDb250ZW50ID0gXCJCYWNrIHRvIHNpZ24gdXBcIjtcbiAgc21hbGxUZXh0LnJlbW92ZUF0dHJpYnV0ZShcImhyZWZcIik7XG5cbiAgc21hbGxUZXh0Lm9uY2xpY2sgPSBnb0JhY2tQYWdlO1xufVxuXG5hc3luYyBmdW5jdGlvbiByZWdpc3RlcihlbWFpbCwgdXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9yZWdpc3Rlci11c2VyXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcbiAgICAgIH0pLFxuICAgIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgaWYgKGRhdGEuYWNjZXNzQ29kZSkge1xuICAgICAgICBjcmVhdGVDb29raWUoXCJtY0NvZGVcIiwgZGF0YS5hY2Nlc3NDb2RlLCA5MCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiUmVnaXN0cmF0aW9uIHN1Y2Nlc3NmdWxcIik7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2hvbWVcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihcIlJlZ2lzdHJhdGlvbiBmYWlsZWQuIFN0YXR1czpcIiwgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgIC8vIFlvdSBtaWdodCB3YW50IHRvIGhhbmRsZSBvdGhlciBIVFRQIHN0YXR1cyBjb2RlcyBoZXJlXG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJSZXF1ZXN0IGZhaWxlZDpcIiwgZXJyb3IpO1xuICAgIC8vIEhhbmRsZSBvdGhlciBlcnJvcnMgdGhhdCBtYXkgb2NjdXIgZHVyaW5nIHRoZSBmZXRjaFxuICB9XG59XG5cbmZ1bmN0aW9uIGdvQmFja1BhZ2UoKSB7XG4gIHZlcmlmaWNhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmVyaWZpY2F0aW9uXCIpO1xuICB2ZXJpZmljYXRpb24uY2xhc3NMaXN0LmFkZChcImFuaW1hdGUtb3V0XCIpO1xuICB2ZXJpZmljYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZlcmlmaWNhdGlvbi5yZW1vdmUoKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlNpZ24gVXBcIjtcbiAgICBzbWFsbFRleHQudGV4dENvbnRlbnQgPSBcIkFscmVhZHkgaGF2ZSBhbiBhY2NvdW50P1wiO1xuICAgIHNtYWxsVGV4dC5ocmVmID0gXCJsb2dpblwiO1xuICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUoc2lnbnVwRm9ybSwgc21hbGxUZXh0KTtcbiAgICBzaWdudXBHcm91cC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlLW91dFwiKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvb2tpZShuYW1lLCB2YWx1ZSwgZGF5c1RvRXhwaXJlKSB7XG4gIHZhciBleHBpcmVzID0gXCJcIjtcblxuICBpZiAoZGF5c1RvRXhwaXJlKSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIGRheXNUb0V4cGlyZSAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIiArIGRhdGUudG9VVENTdHJpbmcoKTtcbiAgfVxuICBpZiAod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLmluY2x1ZGVzKFwiY2xhc3NjaGF0cy5uZXRcIikpIHtcbiAgICBkb2N1bWVudC5jb29raWUgPVxuICAgICAgbmFtZSArIFwiPVwiICsgdmFsdWUgKyBleHBpcmVzICsgXCI7IGRvbWFpbj0uY2xhc3NjaGF0cy5uZXQ7IHBhdGg9L1wiO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IG5hbWUgKyBcIj1cIiArIHZhbHVlICsgZXhwaXJlcyArIFwiOyBwYXRoPS9cIjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImtleSIsIm1jQ29uc29sZUFjY2VzcyIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImluZm8iLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwic2lnbnVwRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJlbWFpbElucHV0IiwidXNlcm5hbWVJbnB1dCIsInBhc3N3b3JkSW5wdXQiLCJlbWFpbEVycm9yIiwidXNlcm5hbWVFcnJvciIsInBhc3N3b3JkRXJyb3IiLCJjb250YWluZXIiLCJzdWJtaXRCdXR0b24iLCJoZWFkZXIiLCJzbWFsbFRleHQiLCJ2ZXJpZmljYXRpb25Gb3JtIiwic2lnbnVwR3JvdXAiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFzc3dvcmRUb2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiX3JlZiIsIl9jYWxsZWUiLCJldmVudCIsImVuY3J5cHRlZEVtYWlsIiwiZW5jcnlwdGVkVXNlcm5hbWUiLCJlbmNyeXB0ZWRQYXNzd29yZCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJ0ZXh0Q29udGVudCIsInZhbGlkYXRlRW1haWwiLCJDcnlwdG9KUyIsIkFFUyIsImVuY3J5cHQiLCJ0b1N0cmluZyIsImZldGNoIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiLCJyZXNwb25zZSIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlciIsIl94IiwicmUiLCJ0ZXN0Iiwic2VuZFZlcmlmaWNhdGlvbkNvZGVFbWFpbCIsImlubmVySFRNTCIsImFuaW1hdGVDb250YWluZXIiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY3VycmVudEhlaWdodCIsImNsaWVudEhlaWdodCIsInRyYW5zaXRpb25zRW5kZWQiLCJzaWdudXBFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlQ2hpbGQiLCJhZGRWZXJpZmljYXRpb25Gb3JtIiwidmVyaWZpY2F0aW9uIiwiY3JlYXRlRWxlbWVudCIsImluc3RydWN0aW9ucyIsImVtYWlsTGFiZWwiLCJzdHlsZSIsImNvbG9yIiwiYXBwZW5kQ2hpbGQiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsInZlcmlmaWNhdGlvbkdyb3VwIiwidmVyaWZpY2F0aW9uSW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJ2ZXJpZnlCdXR0b24iLCJyZWdpc3RlckNsaWNrIiwib25jbGljayIsImluc2VydEJlZm9yZSIsInF1ZXJ5U2VsZWN0b3IiLCJyZW1vdmVBdHRyaWJ1dGUiLCJnb0JhY2tQYWdlIiwiX3gyIiwiX3gzIiwiX3g0IiwiX3JlZ2lzdGVyIiwiX2NhbGxlZTIiLCJkYXRhIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwianNvbiIsImFjY2Vzc0NvZGUiLCJjcmVhdGVDb29raWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ0MCIsInJlbW92ZSIsImVsZW1lbnQiLCJkYXlzVG9FeHBpcmUiLCJleHBpcmVzIiwiZGF0ZSIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInRvVVRDU3RyaW5nIiwiaG9zdG5hbWUiLCJpbmNsdWRlcyIsImNvb2tpZSJdLCJzb3VyY2VSb290IjoiIn0=