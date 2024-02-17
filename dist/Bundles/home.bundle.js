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



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateTimestamp: () => (/* binding */ updateTimestamp)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ "./globals.js");
/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.js */ "./src/script.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var chatDisplay = document.getElementById("chat-display");
var messageContainer = document.getElementById('message-container');
document.addEventListener("DOMContentLoaded", function () {
  fetch("/profile").then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to retrieve profile data");
    }
  }).then(function (data) {
    if (data.email && data.username) {
      var userEmail = data.email;
      var username = data.username;
      var profilePicture = data.profileIcon;
      var profilePictureElement = document.getElementById("profile-picture");
      profilePictureElement.setAttribute("src", "/assets/Profile Icons/yellowProfileIcon.png");
    } else {
      window.location.href = "/login";
    }
  });
  loadRooms();
  setChatBackground();
  var createGroupDm = document.getElementById("groupdm-create");
  createGroupDm.addEventListener("click", function (event) {
    var chatName = document.getElementById("chat-name").value;
    var data = {
      name: chatName
    };
    fetch("/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        //throw new Error(`Failed to create chat. Status: ${response.status}`);
      }
    }).then(function (responseData) {
      var groupDM = document.getElementById('group-dm');
      (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.closeSetup)(groupDM);
      //history.pushState(null, null, `/chat/${responseData.id}`);
      loadRooms();
      var createdChat = document.getElementById("".concat(responseData.id));
      console.log(createdChat);
      redirect(responseData.id, createdChat);
      chatDisplay.style.visibility = "visible";
    })["catch"](function (error) {
      console.error("Error creating chat:", error);
    });
  });
});
function loadRooms() {
  fetch("/get-rooms").then(function (response) {
    return response.json();
  }).then(function (data) {
    var chatContainer = document.getElementById("chat-container");
    var urlIDNumber;
    if (data.rooms.length === 0) {
      createChat("#2A2A2A");
      createChat("#292929");
      createChat("#282828");
      createChat("#272727");
      createChat("#262626");
      createChat("#252525");
      createChat("#242424");
      createChat("#232323");
      createChat("#1d1d1d");
    } else {
      var urlParams = new URLSearchParams(window.location.search);
      var encryptedUrlID = urlParams.get("chatID");
      if (encryptedUrlID) {
        var urlID = CryptoJS.AES.decrypt(encryptedUrlID, _globals__WEBPACK_IMPORTED_MODULE_0__.key).toString(CryptoJS.enc.Utf8);
        urlIDNumber = urlID ? parseInt(urlID, 10) : null;
      }
      data.rooms.forEach(function (chat, index) {
        var chatID = data.chats[index];
        var chatElement = createChatElement(chat, chatID);
        chatContainer.appendChild(chatElement);
        if (urlIDNumber === chatID) {
          var selectedChat = document.getElementById("".concat(chatID));
          // Check if chatID is present and call the redirect function
          if (chatID && selectedChat) {
            redirect(chatID, selectedChat);
          }
        }
      });
      if (window.location.search.includes("chatID")) {
        // If so, change the URL to /home
        history.pushState(null, null, "/home");
      }
    }
  })["catch"](function (error) {
    return console.error("Error loading rooms:", error);
  });
}

// Create a room element with name, members, and buttons
function createChatElement(chat, chatID) {
  var chatDiv = document.createElement("div");
  chatDiv.classList.add("chat");
  chatDiv.setAttribute("id", "".concat(chatID));

  // Server Icon
  var serverIcon = document.createElement("img");
  serverIcon.setAttribute("src", "/assets/Profile Icons/greenProfileIcon.png");
  serverIcon.classList.add("chat-icon");
  chatDiv.appendChild(serverIcon);
  var chatName = document.createElement("h6");
  chatName.textContent = chat;
  chatDiv.appendChild(chatName);
  chatDiv.addEventListener("click", function () {
    redirect(chatID, chatDiv);
  });
  return chatDiv;
}
function redirect(chatID, chatDiv) {
  var selectionItems = document.querySelectorAll(".chat");
  selectionItems.forEach(function (item) {
    item.classList.remove("selected");
  });

  // Select the clicked item
  chatDiv.classList.add("selected");
  history.pushState(null, null, "/chat/".concat(chatID));
  chatDisplay.style.visibility = "visible";
  var icons = chatDisplay.querySelectorAll(".material-symbols-rounded");
  icons.forEach(function (icon) {
    icon.style.visibility = "visible";
  });
  document.getElementById("no-chat-selected").style.display = "none";
  while (messageContainer.firstChild) {
    messageContainer.removeChild(messageContainer.firstChild);
  }
  getChat(chatID);
}

// Create a button element with text and click handler
function createButton(text, clickHandler) {
  var button = document.createElement("button");
  button.textContent = text;
  button.classList.add("chatButton");
  button.addEventListener("click", clickHandler);
  return button;
}

// Call the function to load rooms when the page loads
//window.addEventListener('load', loadRooms);
document.addEventListener("DOMContentLoaded", function () {
  var panels = document.querySelectorAll(".panel");
  panels.forEach(function (panel) {
    var text = panel.querySelector(".material-symbols-rounded").textContent.toLowerCase();
    if (text === "home") {
      panel.querySelector(".material-symbols-rounded").classList.add("selected");
      var label = panel.querySelector("label");
      if (label) {
        label.classList.add("selected");
      }
    }
  });
  var branding = document.getElementById("branding");
  branding.addEventListener("click", function () {
    window.location.href = "/home";
  });
  var labels = document.querySelectorAll(".panel label");
  panels.forEach(function (panel, index) {
    panel.addEventListener("click", function () {
      // Remove the "selected" class from all icons and labels
      document.querySelectorAll(".panel .material-symbols-rounded").forEach(function (icon) {
        return icon.classList.remove("selected");
      });
      labels.forEach(function (l) {
        return l.classList.remove("selected");
      });

      // Add the "selected" class to the clicked icon and label
      panel.querySelector(".material-symbols-rounded").classList.add("selected");
      labels[index].classList.add("selected");
    });
  });
  var textarea = document.getElementById("message-input");
  textarea.addEventListener("scroll", function (event) {
    if (this.scrollHeight > this.clientHeight) {
      // The textarea is overflowing
      var _messageContainer = document.getElementById("message-input-container");
      var currentHeight = parseInt(getComputedStyle(_messageContainer).height);
      if (currentHeight <= 20) {
        currentHeight += 30;
        textarea.style.height = "".concat(currentHeight, "px");
        _messageContainer.style.height = "".concat(currentHeight, "px");
      }
    }
  });
});
function getChat(_x) {
  return _getChat.apply(this, arguments);
}
function _getChat() {
  _getChat = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(endpoint) {
    var response, data, messagesData, _iterator, _step, messageData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!window.location.href.includes("chat")) {
            _context.next = 24;
            break;
          }
          _context.prev = 1;
          _context.next = 4;
          return fetch("/getchat/".concat(endpoint));
        case 4:
          response = _context.sent;
          if (!response.ok) {
            _context.next = 17;
            break;
          }
          _context.next = 8;
          return response.json();
        case 8:
          data = _context.sent;
          document.getElementById("chat-name-header").textContent = data.chatData.ChatName;
          document.getElementById("message-input").setAttribute("placeholder", "Message ".concat(data.chatData.ChatName, "..."));
          messagesData = data.messages.map(function (message) {
            var username = message.Username || "Unknown";
            var userIcon = message.ProfileIcon || "/assets/Profile Icons/unknownProfileIcon.png";
            var dateSent = message.DateSent || "";
            dateSent = updateTimestamp(dateSent);
            return {
              username: username,
              content: message.Content,
              userIcon: userIcon,
              dateSent: dateSent
            };
          }); // Now that all messages are loaded, make the chat container visible
          messageContainer.style.visibility = "visible";
          _iterator = _createForOfIteratorHelper(messagesData);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              messageData = _step.value;
              (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.appendRichMessage)(messageData.username, messageData.content, messageData.userIcon, messageData.dateSent);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          _context.next = 18;
          break;
        case 17:
          // If there's an error with the main chat data fetch, make the chat container visible
          messageContainer.style.visibility = "visible";
        case 18:
          _context.next = 24;
          break;
        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](1);
          console.error("Error fetching chat data:", _context.t0);
          // If there's an error with the main chat data fetch, make the chat container visible
          messageContainer.style.visibility = "visible";
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 20]]);
  }));
  return _getChat.apply(this, arguments);
}
function updateTimestamp(text) {
  var currentDate = new Date();
  var formattedCurrentDate = (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.formatChatDate)(currentDate);
  var yesterday = new Date(currentDate - 86400000);
  var formattedYesterday = (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.formatChatDate)(yesterday);
  var timestampDate = new Date(text.split(" ")[0]);
  var formattedTimestampDate = (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.formatChatDate)(timestampDate);
  if (text.split(" ")[0] === formattedCurrentDate.split(" ")[0]) {
    return "Today at ".concat(text.split(" ")[2]);
  } else if (text.split(" ")[0] === formattedYesterday.split(" ")[0]) {
    return "Yesterday at ".concat(text.split(" ")[2]);
  }
  return text;
}
document.fonts.ready.then(function () {
  var icons = document.querySelectorAll(".material-symbols-rounded");
  icons.forEach(function (icon) {
    icon.classList.add("font-loaded");
  });
  var outlinedicons = document.querySelectorAll(".material-symbols-outlined");
  outlinedicons.forEach(function (icon) {
    icon.style.visibility = "visible";
  });
});
function setChatBackground() {
  // Check if the current URL is "/home"
  if (window.location.pathname === "/home") {
    // Hide the chat header
    chatDisplay.style.visibility = "hidden";
    var icons = chatDisplay.querySelectorAll(".material-symbols-rounded");
    icons.forEach(function (icon) {
      icon.style.visibility = "hidden";
    });
  }
  document.getElementById("no-chat-selected").style.display = "block";
}
function createChat(color) {
  var chatElement = document.createElement("div");
  chatElement.className = "chat";
  chatElement.style.pointerEvents = "none";
  var chatIcon = document.createElement("img");
  chatIcon.src = "/assets/transparentimage.png";
  chatIcon.className = "chat-icon";
  chatIcon.style.width = "35px";
  chatIcon.style.height = "35px";
  chatIcon.style.backgroundColor = color;
  var h6Element = document.createElement("h6");
  h6Element.textContent = "none";
  h6Element.style.color = "transparent";
  h6Element.style.backgroundColor = color;
  h6Element.style.userSelect = "none";
  h6Element.style.pointerEvents = "none";
  chatElement.appendChild(chatIcon);
  chatElement.appendChild(h6Element);
  document.getElementById("chat-container").appendChild(chatElement);
}


/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendMessage: () => (/* binding */ appendMessage),
/* harmony export */   appendRichMessage: () => (/* binding */ appendRichMessage),
/* harmony export */   closeSetup: () => (/* binding */ closeSetup),
/* harmony export */   formatChatDate: () => (/* binding */ formatChatDate)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");

var socket = io("/");
var messageInput = document.getElementById('message-input');
var messageContainer = document.getElementById('message-container');
var username;
var profileIcon;
document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.querySelector('.navbar');
  var container = document.querySelector('.content');
  if (navbar && container) {
    var navbarHeight = navbar.getBoundingClientRect().height;
    //container.style.marginTop = `${navbarHeight}px`;
    container.style.height = "calc(99vh - ".concat(navbarHeight, "px)");
  }
  messageInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter' && messageInput.value.trim() !== '' && !event.shiftKey) {
      send();
    }
  });
  var create = document.getElementById('create-new');
  var createMenu = document.getElementById('create');
  create.addEventListener('click', function (event) {
    if (!create.classList.contains('animate-rotate')) {
      event.stopPropagation();
      create.classList.remove('animate-rotate-out');
      // Check if the 'animate-left' class is present
      if (createMenu.classList.contains('animate-left')) {
        createMenu.style.display = "none";
        createMenu.classList.remove('animate-left');
      } else {
        var offsetLeft = create.offsetLeft + create.offsetWidth + 8;
        var buttonBottom = create.offsetTop + create.offsetHeight;
        createMenu.style.left = offsetLeft + "px";
        createMenu.style.bottom = 50 + "px";
        createMenu.style.display = "block";
        createMenu.classList.add('animate-left');
        create.classList.add('animate-rotate');
      }
    }
    window.onclick = function (event) {
      var popup = document.getElementById("create");
      if (event.target !== popup && !popup.contains(event.target) && popup.style.display === 'block') {
        closePopup(popup);
      }
    };
  });
  var createGroupDMButton = document.getElementById('create-group-dm');
  createGroupDMButton.addEventListener('click', function (event) {
    console.log('button clicked');
    event.stopPropagation();
    var createGroupDM = document.getElementById('group-dm');
    createGroupDM.style.display = 'block';
    var darkOverlayCheck = document.getElementById('dark-overlay');
    if (!darkOverlayCheck) {
      var darkOverlay = document.createElement('div');
      darkOverlay.classList.add('dark-overlay');
      darkOverlay.setAttribute('id', 'dark-overlay');
      createGroupDM.style.left = '50%';
      createGroupDM.style.top = "50%";
      createGroupDM.style.transform = "translate(-50%, -50%)";
      document.body.appendChild(darkOverlay);
    }
    closePopup(document.getElementById("create"));
    var closeGroupDM = document.getElementById('close-groupdm');
    closeGroupDM.addEventListener('click', function (event) {
      closeSetup(createGroupDM);
    });
    window.onclick = function (event) {
      if (event.target !== createGroupDM && !createGroupDM.contains(event.target) && createGroupDM.style.display === 'block') {
        closeSetup(createGroupDM);
      }
    };
  });
  var serverDropdown = document.getElementById('server-options');
  serverDropdown.addEventListener('click', function (event) {
    event.preventDefault();
  });
});
function closeSetup(popup) {
  popup.classList.add('zoomout');
  popup.addEventListener('animationend', function (event) {
    if (event.animationName === 'zoomOut') {
      popup.classList.remove('zoomout');
      popup.style.display = 'none';
      popup.style.transform = "translate(50%, 50%)";
    }
  });
  var darkOverlay = document.getElementById('dark-overlay');
  if (darkOverlay) {
    darkOverlay.remove();
  }
}
function closePopup(popup) {
  popup.style.display = "none";
  popup.classList.remove('animate-left');
  var create = document.getElementById('create-new');
  create.classList.remove('animate-rotate');
  create.classList.add('animate-rotate-out');
}
function send() {
  fetch('/profile').then(function (response) {
    if (response.ok) {
      return response.json();
    }
  }).then(function (data) {
    if (data.email && data.username) {
      var id = data.id;
      username = data.username;
      profileIcon = data.profileIcon;
      if (messageInput.value != "") {
        var message = messageInput.value;
        var chatURL = window.location.href;
        var endpoint = chatURL.split("/").pop();
        var timestamp = new Date().getTime();
        timestamp = formatChatDate(timestamp);
        var formattedTimestamp = (0,_home__WEBPACK_IMPORTED_MODULE_0__.updateTimestamp)(timestamp);
        socket.emit('send-chat-message', {
          id: id,
          username: username,
          message: message,
          profileIcon: profileIcon,
          endpoint: endpoint,
          timestamp: timestamp,
          formattedTimestamp: formattedTimestamp
        });
        messageInput.value = '';
      }
    }
  })["catch"](function (error) {
    console.error('Error:', error);
  });
}
socket.on('chat-message', function (data) {
  if (data.chat == window.location.href.split("/").pop()) {
    appendRichMessage(data.name, data.message, data.icon, data.timestamp);
  }
});
socket.on('user-connected', function (name) {
  appendMessage("".concat(name, " connected"));
});
socket.on('user-disconnected', function (name) {
  appendMessage("".concat(name, " disconnected"));
});
function appendMessage(message) {
  var messageElement = document.createElement('div');
  messageElement.innerText = message;
  messageContainer.append(messageElement);
  messageContainer.scrollTop = messageContainer.scrollHeight;
}
function appendRichMessage(name, messagetext, icon, timestamp) {
  var message = document.createElement('div');
  message.classList.add('message');

  // Create profile icon element
  var userIcon = document.createElement('img');
  userIcon.setAttribute('src', "/assets/Profile Icons/".concat(icon));
  userIcon.alt = 'Profile Icon';
  userIcon.classList.add('profile-icon');
  message.appendChild(userIcon);
  var content = document.createElement('div');
  content.classList.add('message-contents');
  // Create name and date element
  var nameDateElement = document.createElement('div');
  nameDateElement.classList.add('name-date');

  // Name element
  var nameElement = document.createElement('span');
  nameElement.textContent = name;
  nameElement.classList.add('message-name');
  nameDateElement.appendChild(nameElement);
  var dateElement = document.createElement('span');
  dateElement.textContent = timestamp;
  dateElement.classList.add('message-date');
  nameDateElement.appendChild(dateElement);
  content.appendChild(nameDateElement);

  // Create message text element
  var messageTextElement = document.createElement('p');
  messageTextElement.textContent = messagetext;
  messageTextElement.classList.add('message-text');
  content.appendChild(messageTextElement);
  message.append(content);
  messageContainer.appendChild(message);
  messageContainer.scrollTop = messageContainer.scrollHeight;
}
function formatChatDate(timestamp) {
  var currentDate = new Date();
  var messageDate = new Date(timestamp);
  var month = messageDate.getMonth() + 1;
  var day = messageDate.getDate();
  var year = messageDate.getFullYear();
  var hours = messageDate.getHours();
  var minutes = messageDate.getMinutes();
  var period = hours >= 12 ? 'pm' : 'am';
  var formattedHours = hours % 12 || 12; // Convert to 12-hour format
  var formattedMinutes = minutes < 10 ? "0".concat(minutes) : minutes; // Pad minutes with zero if needed

  return "".concat(month, "/").concat(day, "/").concat(year, " at ").concat(formattedHours, ":").concat(formattedMinutes).concat(period);
}


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/home.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFDdEMsSUFBTUMsS0FBSyxHQUFHUCxXQUFXLENBQUNRLFFBQVEsQ0FBQyxDQUFDO0VBQ3BDLElBQU1DLE9BQU8sR0FBR1QsV0FBVyxDQUFDVSxVQUFVLENBQUMsQ0FBQztFQUN4QyxJQUFNQyxNQUFNLEdBQUdKLEtBQUssSUFBSSxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUk7RUFDeEMsSUFBTUssY0FBYyxHQUFHTCxLQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0VBQ3pDLElBQU1NLGdCQUFnQixHQUFHSixPQUFPLEdBQUcsRUFBRSxPQUFBM0ssTUFBQSxDQUFPMkssT0FBTyxJQUFLQSxPQUFPLENBQUMsQ0FBQzs7RUFFakUsVUFBQTNLLE1BQUEsQ0FBVW1LLEtBQUssT0FBQW5LLE1BQUEsQ0FBSXFLLEdBQUcsT0FBQXJLLE1BQUEsQ0FBSXVLLElBQUksVUFBQXZLLE1BQUEsQ0FBTzhLLGNBQWMsT0FBQTlLLE1BQUEsQ0FBSStLLGdCQUFnQixFQUFBL0ssTUFBQSxDQUFHNkssTUFBTTtBQUNsRjs7Ozs7OztVQzNOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NoYXRzZXJ2ZXJuZXcvLi9nbG9iYWxzLmpzIiwid2VicGFjazovL2NoYXRzZXJ2ZXJuZXcvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9jaGF0c2VydmVybmV3Ly4vc3JjL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9jaGF0c2VydmVybmV3L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NoYXRzZXJ2ZXJuZXcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NoYXRzZXJ2ZXJuZXcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaGF0c2VydmVybmV3L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NoYXRzZXJ2ZXJuZXcvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NoYXRzZXJ2ZXJuZXcvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGtleSA9ICcxODM3a2V5JztcbmNvbnN0IG1jQ29uc29sZUFjY2VzcyA9IFsnMTAwMDAwJ10gLy9OaXNjaGF5LCAuLlxuXG5leHBvcnQgeyBcbiAgICBrZXksIFxuICAgIG1jQ29uc29sZUFjY2VzcyxcbiAgICBcbn0iLCJpbXBvcnQgeyBrZXkgfSBmcm9tIFwiLi4vZ2xvYmFsc1wiO1xuaW1wb3J0IHsgZm9ybWF0Q2hhdERhdGUsIGFwcGVuZE1lc3NhZ2UsIGFwcGVuZFJpY2hNZXNzYWdlLCBjbG9zZVNldHVwIH0gZnJvbSBcIi4vc2NyaXB0LmpzXCJcblxudmFyIGNoYXREaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LWRpc3BsYXlcIik7XG5jb25zdCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UtY29udGFpbmVyJylcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBmZXRjaChcIi9wcm9maWxlXCIpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byByZXRyaWV2ZSBwcm9maWxlIGRhdGFcIik7XG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGRhdGEuZW1haWwgJiYgZGF0YS51c2VybmFtZSkge1xuICAgICAgICBjb25zdCB1c2VyRW1haWwgPSBkYXRhLmVtYWlsO1xuICAgICAgICBjb25zdCB1c2VybmFtZSA9IGRhdGEudXNlcm5hbWU7XG4gICAgICAgIGNvbnN0IHByb2ZpbGVQaWN0dXJlID0gZGF0YS5wcm9maWxlSWNvbjtcbiAgICAgICAgY29uc3QgcHJvZmlsZVBpY3R1cmVFbGVtZW50ID1cbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2ZpbGUtcGljdHVyZVwiKTtcbiAgICAgICAgcHJvZmlsZVBpY3R1cmVFbGVtZW50LnNldEF0dHJpYnV0ZShcInNyY1wiLCBgL2Fzc2V0cy9Qcm9maWxlIEljb25zL3llbGxvd1Byb2ZpbGVJY29uLnBuZ2ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9sb2dpblwiO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIGxvYWRSb29tcygpO1xuICBzZXRDaGF0QmFja2dyb3VuZCgpO1xuXG4gIGNvbnN0IGNyZWF0ZUdyb3VwRG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwZG0tY3JlYXRlXCIpO1xuXG4gIGNyZWF0ZUdyb3VwRG0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IGNoYXROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LW5hbWVcIikudmFsdWU7XG4gXG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgbmFtZTogY2hhdE5hbWUsXG4gICAgfTtcblxuICAgIGZldGNoKFwiL2NoYXRcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gY3JlYXRlIGNoYXQuIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwRE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JvdXAtZG0nKVxuICAgICAgICBjbG9zZVNldHVwKGdyb3VwRE0pXG4gICAgICAgIC8vaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYC9jaGF0LyR7cmVzcG9uc2VEYXRhLmlkfWApO1xuICAgICAgICBsb2FkUm9vbXMoKVxuICAgICAgICBjb25zdCBjcmVhdGVkQ2hhdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3Jlc3BvbnNlRGF0YS5pZH1gKVxuICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVkQ2hhdClcbiAgICAgICAgcmVkaXJlY3QocmVzcG9uc2VEYXRhLmlkLCBjcmVhdGVkQ2hhdClcbiAgICAgICAgY2hhdERpc3BsYXkuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICBcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBjaGF0OlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gbG9hZFJvb21zKCkge1xuICBmZXRjaChcIi9nZXQtcm9vbXNcIilcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgY2hhdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdC1jb250YWluZXJcIik7XG5cbiAgICAgIHZhciB1cmxJRE51bWJlcjtcblxuICAgICAgaWYgKGRhdGEucm9vbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNyZWF0ZUNoYXQoXCIjMkEyQTJBXCIpO1xuICAgICAgICBjcmVhdGVDaGF0KFwiIzI5MjkyOVwiKTtcbiAgICAgICAgY3JlYXRlQ2hhdChcIiMyODI4MjhcIik7XG4gICAgICAgIGNyZWF0ZUNoYXQoXCIjMjcyNzI3XCIpO1xuICAgICAgICBjcmVhdGVDaGF0KFwiIzI2MjYyNlwiKTtcbiAgICAgICAgY3JlYXRlQ2hhdChcIiMyNTI1MjVcIik7XG4gICAgICAgIGNyZWF0ZUNoYXQoXCIjMjQyNDI0XCIpO1xuICAgICAgICBjcmVhdGVDaGF0KFwiIzIzMjMyM1wiKTtcbiAgICAgICAgY3JlYXRlQ2hhdChcIiMxZDFkMWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICBjb25zdCBlbmNyeXB0ZWRVcmxJRCA9IHVybFBhcmFtcy5nZXQoXCJjaGF0SURcIik7XG4gICAgICAgIGlmIChlbmNyeXB0ZWRVcmxJRCkge1xuICAgICAgICAgIGNvbnN0IHVybElEID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoZW5jcnlwdGVkVXJsSUQsIGtleSkudG9TdHJpbmcoXG4gICAgICAgICAgICBDcnlwdG9KUy5lbmMuVXRmOFxuICAgICAgICAgICk7XG4gICAgICAgICAgdXJsSUROdW1iZXIgPSB1cmxJRCA/IHBhcnNlSW50KHVybElELCAxMCkgOiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEucm9vbXMuZm9yRWFjaCgoY2hhdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGF0SUQgPSBkYXRhLmNoYXRzW2luZGV4XTtcbiAgICAgICAgICBjb25zdCBjaGF0RWxlbWVudCA9IGNyZWF0ZUNoYXRFbGVtZW50KGNoYXQsIGNoYXRJRCk7XG4gICAgICAgICAgY2hhdENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGF0RWxlbWVudCk7XG5cbiAgICAgICAgICBpZiAodXJsSUROdW1iZXIgPT09IGNoYXRJRCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDaGF0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7Y2hhdElEfWApO1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY2hhdElEIGlzIHByZXNlbnQgYW5kIGNhbGwgdGhlIHJlZGlyZWN0IGZ1bmN0aW9uXG4gICAgICAgICAgICBpZiAoY2hhdElEICYmIHNlbGVjdGVkQ2hhdCkge1xuICAgICAgICAgICAgICByZWRpcmVjdChjaGF0SUQsIHNlbGVjdGVkQ2hhdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoXCJjaGF0SURcIikpIHtcbiAgICAgICAgICAvLyBJZiBzbywgY2hhbmdlIHRoZSBVUkwgdG8gL2hvbWVcbiAgICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBcIi9ob21lXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9hZGluZyByb29tczpcIiwgZXJyb3IpKTtcbn1cblxuLy8gQ3JlYXRlIGEgcm9vbSBlbGVtZW50IHdpdGggbmFtZSwgbWVtYmVycywgYW5kIGJ1dHRvbnNcbmZ1bmN0aW9uIGNyZWF0ZUNoYXRFbGVtZW50KGNoYXQsIGNoYXRJRCkge1xuICBjb25zdCBjaGF0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2hhdERpdi5jbGFzc0xpc3QuYWRkKFwiY2hhdFwiKTtcbiAgY2hhdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtjaGF0SUR9YCk7XG5cbiAgLy8gU2VydmVyIEljb25cbiAgY29uc3Qgc2VydmVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHNlcnZlckljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGAvYXNzZXRzL1Byb2ZpbGUgSWNvbnMvZ3JlZW5Qcm9maWxlSWNvbi5wbmdgKTtcbiAgc2VydmVySWNvbi5jbGFzc0xpc3QuYWRkKFwiY2hhdC1pY29uXCIpO1xuICBjaGF0RGl2LmFwcGVuZENoaWxkKHNlcnZlckljb24pO1xuXG4gIGNvbnN0IGNoYXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg2XCIpO1xuICBjaGF0TmFtZS50ZXh0Q29udGVudCA9IGNoYXQ7XG4gIGNoYXREaXYuYXBwZW5kQ2hpbGQoY2hhdE5hbWUpO1xuXG4gIGNoYXREaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZWRpcmVjdChjaGF0SUQsIGNoYXREaXYpO1xuICB9KTtcbiAgcmV0dXJuIGNoYXREaXY7XG59XG5cbmZ1bmN0aW9uIHJlZGlyZWN0KGNoYXRJRCwgY2hhdERpdikge1xuICBjb25zdCBzZWxlY3Rpb25JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hhdFwiKTtcbiAgc2VsZWN0aW9uSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xuICB9KTtcblxuICAvLyBTZWxlY3QgdGhlIGNsaWNrZWQgaXRlbVxuICBjaGF0RGl2LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcblxuICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBgL2NoYXQvJHtjaGF0SUR9YCk7XG4gIGNoYXREaXNwbGF5LnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgY29uc3QgaWNvbnMgPSBjaGF0RGlzcGxheS5xdWVyeVNlbGVjdG9yQWxsKFwiLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZFwiKTtcbiAgaWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgIGljb24uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICB9KTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuby1jaGF0LXNlbGVjdGVkXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgd2hpbGUgKG1lc3NhZ2VDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIG1lc3NhZ2VDb250YWluZXIucmVtb3ZlQ2hpbGQobWVzc2FnZUNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxuICBnZXRDaGF0KGNoYXRJRCk7XG59XG5cbi8vIENyZWF0ZSBhIGJ1dHRvbiBlbGVtZW50IHdpdGggdGV4dCBhbmQgY2xpY2sgaGFuZGxlclxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHRleHQsIGNsaWNrSGFuZGxlcikge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBidXR0b24uY2xhc3NMaXN0LmFkZChcImNoYXRCdXR0b25cIik7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuLy8gQ2FsbCB0aGUgZnVuY3Rpb24gdG8gbG9hZCByb29tcyB3aGVuIHRoZSBwYWdlIGxvYWRzXG4vL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgbG9hZFJvb21zKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc3QgcGFuZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYW5lbFwiKTtcbiAgcGFuZWxzLmZvckVhY2goKHBhbmVsKSA9PiB7XG4gICAgY29uc3QgdGV4dCA9IHBhbmVsLnF1ZXJ5U2VsZWN0b3IoXCIubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCIpLnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHRleHQgPT09IFwiaG9tZVwiKSB7XG4gICAgICBwYW5lbC5xdWVyeVNlbGVjdG9yKFwiLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZFwiKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICBjb25zdCBsYWJlbCA9IHBhbmVsLnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFwiKTtcbiAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBicmFuZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnJhbmRpbmdcIik7XG4gIGJyYW5kaW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9ob21lXCI7XG4gIH0pO1xuICBjb25zdCBsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhbmVsIGxhYmVsXCIpO1xuXG4gIHBhbmVscy5mb3JFYWNoKChwYW5lbCwgaW5kZXgpID0+IHtcbiAgICBwYW5lbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gUmVtb3ZlIHRoZSBcInNlbGVjdGVkXCIgY2xhc3MgZnJvbSBhbGwgaWNvbnMgYW5kIGxhYmVsc1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFuZWwgLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZFwiKVxuICAgICAgICAuZm9yRWFjaCgoaWNvbikgPT4gaWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikpO1xuICAgICAgbGFiZWxzLmZvckVhY2goKGwpID0+IGwuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpKTtcblxuICAgICAgLy8gQWRkIHRoZSBcInNlbGVjdGVkXCIgY2xhc3MgdG8gdGhlIGNsaWNrZWQgaWNvbiBhbmQgbGFiZWxcbiAgICAgIHBhbmVsXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZFwiKVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgbGFiZWxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlLWlucHV0XCIpO1xuXG4gIHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsSGVpZ2h0ID4gdGhpcy5jbGllbnRIZWlnaHQpIHtcbiAgICAgIC8vIFRoZSB0ZXh0YXJlYSBpcyBvdmVyZmxvd2luZ1xuICAgICAgY29uc3QgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICBcIm1lc3NhZ2UtaW5wdXQtY29udGFpbmVyXCJcbiAgICAgICk7XG4gICAgICBsZXQgY3VycmVudEhlaWdodCA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUobWVzc2FnZUNvbnRhaW5lcikuaGVpZ2h0KTtcbiAgICAgIGlmIChjdXJyZW50SGVpZ2h0IDw9IDIwKSB7XG4gICAgICAgIGN1cnJlbnRIZWlnaHQgKz0gMzA7XG4gICAgICAgIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9IGAke2N1cnJlbnRIZWlnaHR9cHhgO1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke2N1cnJlbnRIZWlnaHR9cHhgO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q2hhdChlbmRwb2ludCkge1xuICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoXCJjaGF0XCIpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9nZXRjaGF0LyR7ZW5kcG9pbnR9YCk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXQtbmFtZS1oZWFkZXJcIikudGV4dENvbnRlbnQgPVxuICAgICAgICAgIGRhdGEuY2hhdERhdGEuQ2hhdE5hbWU7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZS1pbnB1dFwiKVxuICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBgTWVzc2FnZSAke2RhdGEuY2hhdERhdGEuQ2hhdE5hbWV9Li4uYCk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZXNEYXRhID0gZGF0YS5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICBjb25zdCB1c2VybmFtZSA9IG1lc3NhZ2UuVXNlcm5hbWUgfHwgXCJVbmtub3duXCI7XG4gICAgICAgICAgY29uc3QgdXNlckljb24gPVxuICAgICAgICAgICAgbWVzc2FnZS5Qcm9maWxlSWNvbiB8fCBcIi9hc3NldHMvUHJvZmlsZSBJY29ucy91bmtub3duUHJvZmlsZUljb24ucG5nXCI7XG4gICAgICAgICAgdmFyIGRhdGVTZW50ID0gbWVzc2FnZS5EYXRlU2VudCB8fCBcIlwiO1xuICAgICAgICAgIGRhdGVTZW50ID0gdXBkYXRlVGltZXN0YW1wKGRhdGVTZW50KTtcbiAgICAgICAgICByZXR1cm4geyB1c2VybmFtZSwgY29udGVudDogbWVzc2FnZS5Db250ZW50LCB1c2VySWNvbiwgZGF0ZVNlbnQgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTm93IHRoYXQgYWxsIG1lc3NhZ2VzIGFyZSBsb2FkZWQsIG1ha2UgdGhlIGNoYXQgY29udGFpbmVyIHZpc2libGVcbiAgICAgICAgbWVzc2FnZUNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG5cbiAgICAgICAgZm9yIChjb25zdCBtZXNzYWdlRGF0YSBvZiBtZXNzYWdlc0RhdGEpIHtcbiAgICAgICAgICBhcHBlbmRSaWNoTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VEYXRhLnVzZXJuYW1lLFxuICAgICAgICAgICAgbWVzc2FnZURhdGEuY29udGVudCxcbiAgICAgICAgICAgIG1lc3NhZ2VEYXRhLnVzZXJJY29uLFxuICAgICAgICAgICAgbWVzc2FnZURhdGEuZGF0ZVNlbnRcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGVyZSdzIGFuIGVycm9yIHdpdGggdGhlIG1haW4gY2hhdCBkYXRhIGZldGNoLCBtYWtlIHRoZSBjaGF0IGNvbnRhaW5lciB2aXNpYmxlXG4gICAgICAgIG1lc3NhZ2VDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2hhdCBkYXRhOlwiLCBlcnJvcik7XG4gICAgICAvLyBJZiB0aGVyZSdzIGFuIGVycm9yIHdpdGggdGhlIG1haW4gY2hhdCBkYXRhIGZldGNoLCBtYWtlIHRoZSBjaGF0IGNvbnRhaW5lciB2aXNpYmxlXG4gICAgICBtZXNzYWdlQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlVGltZXN0YW1wKHRleHQpIHtcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBmb3JtYXR0ZWRDdXJyZW50RGF0ZSA9IGZvcm1hdENoYXREYXRlKGN1cnJlbnREYXRlKTtcbiAgY29uc3QgeWVzdGVyZGF5ID0gbmV3IERhdGUoY3VycmVudERhdGUgLSA4NjQwMDAwMCk7XG4gIGNvbnN0IGZvcm1hdHRlZFllc3RlcmRheSA9IGZvcm1hdENoYXREYXRlKHllc3RlcmRheSk7XG5cbiAgY29uc3QgdGltZXN0YW1wRGF0ZSA9IG5ldyBEYXRlKHRleHQuc3BsaXQoXCIgXCIpWzBdKTtcblxuICBjb25zdCBmb3JtYXR0ZWRUaW1lc3RhbXBEYXRlID0gZm9ybWF0Q2hhdERhdGUodGltZXN0YW1wRGF0ZSk7XG5cbiAgaWYgKHRleHQuc3BsaXQoXCIgXCIpWzBdID09PSBmb3JtYXR0ZWRDdXJyZW50RGF0ZS5zcGxpdChcIiBcIilbMF0pIHtcbiAgICByZXR1cm4gYFRvZGF5IGF0ICR7dGV4dC5zcGxpdChcIiBcIilbMl19YDtcbiAgfSBlbHNlIGlmICh0ZXh0LnNwbGl0KFwiIFwiKVswXSA9PT0gZm9ybWF0dGVkWWVzdGVyZGF5LnNwbGl0KFwiIFwiKVswXSkge1xuICAgIHJldHVybiBgWWVzdGVyZGF5IGF0ICR7dGV4dC5zcGxpdChcIiBcIilbMl19YDtcbiAgfVxuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5kb2N1bWVudC5mb250cy5yZWFkeS50aGVuKCgpID0+IHtcbiAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZFwiKTtcbiAgaWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgIGljb24uY2xhc3NMaXN0LmFkZChcImZvbnQtbG9hZGVkXCIpO1xuICB9KTtcbiAgY29uc3Qgb3V0bGluZWRpY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiKTtcbiAgb3V0bGluZWRpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgaWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIHNldENoYXRCYWNrZ3JvdW5kKCkge1xuXG4gIC8vIENoZWNrIGlmIHRoZSBjdXJyZW50IFVSTCBpcyBcIi9ob21lXCJcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvaG9tZVwiKSB7XG4gICAgLy8gSGlkZSB0aGUgY2hhdCBoZWFkZXJcbiAgICBjaGF0RGlzcGxheS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBjb25zdCBpY29ucyA9IGNoYXREaXNwbGF5LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCIpO1xuICAgIGljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgIGljb24uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgfSk7XG4gIH1cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuby1jaGF0LXNlbGVjdGVkXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNoYXQoY29sb3IpIHtcbiAgdmFyIGNoYXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2hhdEVsZW1lbnQuY2xhc3NOYW1lID0gXCJjaGF0XCI7XG4gIGNoYXRFbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcblxuICB2YXIgY2hhdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBjaGF0SWNvbi5zcmMgPSBcIi9hc3NldHMvdHJhbnNwYXJlbnRpbWFnZS5wbmdcIjtcbiAgY2hhdEljb24uY2xhc3NOYW1lID0gXCJjaGF0LWljb25cIjtcbiAgY2hhdEljb24uc3R5bGUud2lkdGggPSBcIjM1cHhcIjtcbiAgY2hhdEljb24uc3R5bGUuaGVpZ2h0ID0gXCIzNXB4XCI7XG4gIGNoYXRJY29uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuXG4gIHZhciBoNkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XG4gIGg2RWxlbWVudC50ZXh0Q29udGVudCA9IFwibm9uZVwiO1xuICBoNkVsZW1lbnQuc3R5bGUuY29sb3IgPSBcInRyYW5zcGFyZW50XCI7XG4gIGg2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgaDZFbGVtZW50LnN0eWxlLnVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcbiAgaDZFbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcblxuICBjaGF0RWxlbWVudC5hcHBlbmRDaGlsZChjaGF0SWNvbik7XG4gIGNoYXRFbGVtZW50LmFwcGVuZENoaWxkKGg2RWxlbWVudCk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LWNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChjaGF0RWxlbWVudCk7XG59XG5cbmV4cG9ydCB7IHVwZGF0ZVRpbWVzdGFtcCB9IiwiaW1wb3J0IHsgdXBkYXRlVGltZXN0YW1wIH0gZnJvbSBcIi4vaG9tZVwiO1xuXG5jb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XG5jb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZS1pbnB1dCcpO1xuY29uc3QgbWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLWNvbnRhaW5lcicpXG5cblxudmFyIHVzZXJuYW1lXG52YXIgcHJvZmlsZUljb25cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmJhcicpOyBcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcblxuICBpZiAobmF2YmFyICYmIGNvbnRhaW5lcikge1xuICAgIGNvbnN0IG5hdmJhckhlaWdodCA9IG5hdmJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgLy9jb250YWluZXIuc3R5bGUubWFyZ2luVG9wID0gYCR7bmF2YmFySGVpZ2h0fXB4YDtcbiAgICBjb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYGNhbGMoOTl2aCAtICR7bmF2YmFySGVpZ2h0fXB4KWA7XG4gIH1cblxuICBtZXNzYWdlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInICYmIG1lc3NhZ2VJbnB1dC52YWx1ZS50cmltKCkgIT09ICcnICYmICFldmVudC5zaGlmdEtleSkge1xuICAgICAgc2VuZCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgY3JlYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1uZXcnKTtcbiAgY29uc3QgY3JlYXRlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUnKTtcblxuICBjcmVhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoIShjcmVhdGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbmltYXRlLXJvdGF0ZScpKSkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBjcmVhdGUuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1yb3RhdGUtb3V0JylcbiAgICAgIC8vIENoZWNrIGlmIHRoZSAnYW5pbWF0ZS1sZWZ0JyBjbGFzcyBpcyBwcmVzZW50XG4gICAgICBpZiAoY3JlYXRlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ2FuaW1hdGUtbGVmdCcpKSB7XG4gICAgICAgIGNyZWF0ZU1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBjcmVhdGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtbGVmdCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG9mZnNldExlZnQgPSBjcmVhdGUub2Zmc2V0TGVmdCArIGNyZWF0ZS5vZmZzZXRXaWR0aCArIDg7XG4gICAgICAgIHZhciBidXR0b25Cb3R0b20gPSBjcmVhdGUub2Zmc2V0VG9wICsgY3JlYXRlLm9mZnNldEhlaWdodDtcbiAgICAgICAgY3JlYXRlTWVudS5zdHlsZS5sZWZ0ID0gb2Zmc2V0TGVmdCArIFwicHhcIjtcbiAgICAgICAgY3JlYXRlTWVudS5zdHlsZS5ib3R0b20gPSA1MCArIFwicHhcIjtcbiAgICAgICAgY3JlYXRlTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBjcmVhdGVNZW51LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtbGVmdCcpO1xuICAgICAgICBjcmVhdGUuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1yb3RhdGUnKVxuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdmFyIHBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVcIik7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBwb3B1cCAmJiAhcG9wdXAuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiBwb3B1cC5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICAgIGNsb3NlUG9wdXAocG9wdXApO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuXG4gIGNvbnN0IGNyZWF0ZUdyb3VwRE1CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWdyb3VwLWRtJylcbiAgY3JlYXRlR3JvdXBETUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdidXR0b24gY2xpY2tlZCcpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgY3JlYXRlR3JvdXBETSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncm91cC1kbScpXG4gICAgY3JlYXRlR3JvdXBETS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIGNvbnN0IGRhcmtPdmVybGF5Q2hlY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFyay1vdmVybGF5JylcbiAgICBpZiAoIWRhcmtPdmVybGF5Q2hlY2spIHtcbiAgICAgIGNvbnN0IGRhcmtPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgIGRhcmtPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2Rhcmstb3ZlcmxheScpXG4gICAgICBkYXJrT3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rhcmstb3ZlcmxheScpXG4gICAgICBjcmVhdGVHcm91cERNLnN0eWxlLmxlZnQgPSAnNTAlJztcbiAgICAgIGNyZWF0ZUdyb3VwRE0uc3R5bGUudG9wID0gXCI1MCVcIjtcbiAgICAgIGNyZWF0ZUdyb3VwRE0uc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIjtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGFya092ZXJsYXkpXG4gICAgfVxuICAgIGNsb3NlUG9wdXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVcIikpO1xuICAgIGNvbnN0IGNsb3NlR3JvdXBETSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1ncm91cGRtJylcbiAgICBjbG9zZUdyb3VwRE0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGNsb3NlU2V0dXAoY3JlYXRlR3JvdXBETSk7XG4gICAgfSlcbiAgICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gY3JlYXRlR3JvdXBETSAmJiAhY3JlYXRlR3JvdXBETS5jb250YWlucyhldmVudC50YXJnZXQpICYmIGNyZWF0ZUdyb3VwRE0uc3R5bGUuZGlzcGxheSA9PT0gJ2Jsb2NrJykge1xuICAgICAgICBjbG9zZVNldHVwKGNyZWF0ZUdyb3VwRE0pO1xuICAgICAgfVxuICAgIH07XG4gIH0pXG5cblxuICBjb25zdCBzZXJ2ZXJEcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZXJ2ZXItb3B0aW9ucycpXG4gIHNlcnZlckRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICB9KVxuXG59KTtcblxuZnVuY3Rpb24gY2xvc2VTZXR1cChwb3B1cCkge1xuICBwb3B1cC5jbGFzc0xpc3QuYWRkKCd6b29tb3V0JylcbiAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gJ3pvb21PdXQnKSB7XG4gICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCd6b29tb3V0JylcbiAgICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgIHBvcHVwLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKDUwJSwgNTAlKVwiO1xuICAgIH1cbn0pO1xuICBjb25zdCBkYXJrT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrLW92ZXJsYXknKVxuICBpZiAoZGFya092ZXJsYXkpIHtcbiAgICBkYXJrT3ZlcmxheS5yZW1vdmUoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsb3NlUG9wdXAocG9wdXApIHtcbiAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLWxlZnQnKTtcbiAgdmFyIGNyZWF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtbmV3JylcbiAgY3JlYXRlLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtcm90YXRlJyk7XG4gIGNyZWF0ZS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLXJvdGF0ZS1vdXQnKTtcbn1cblxuZnVuY3Rpb24gc2VuZCgpIHtcbiAgZmV0Y2goJy9wcm9maWxlJylcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgaWYgKGRhdGEuZW1haWwgJiYgZGF0YS51c2VybmFtZSkge1xuICAgICAgICBsZXQgaWQgPSBkYXRhLmlkO1xuICAgICAgICB1c2VybmFtZSA9IGRhdGEudXNlcm5hbWU7XG4gICAgICAgIHByb2ZpbGVJY29uID0gZGF0YS5wcm9maWxlSWNvbjtcbiAgICAgICAgaWYgKG1lc3NhZ2VJbnB1dC52YWx1ZSAhPSBcIlwiKSB7XG4gICAgICAgICAgY29uc3QgbWVzc2FnZSA9IG1lc3NhZ2VJbnB1dC52YWx1ZTtcbiAgICAgICAgICBjb25zdCBjaGF0VVJMID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgdmFyIGVuZHBvaW50ID0gY2hhdFVSTC5zcGxpdChcIi9cIikucG9wKCk7XG4gICAgICAgICAgdmFyIHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgIHRpbWVzdGFtcCA9IGZvcm1hdENoYXREYXRlKHRpbWVzdGFtcClcbiAgICAgICAgICBsZXQgZm9ybWF0dGVkVGltZXN0YW1wID0gdXBkYXRlVGltZXN0YW1wKHRpbWVzdGFtcClcbiAgICAgICAgICBzb2NrZXQuZW1pdCgnc2VuZC1jaGF0LW1lc3NhZ2UnLCB7IGlkLCB1c2VybmFtZSwgbWVzc2FnZSwgcHJvZmlsZUljb24sIGVuZHBvaW50LCB0aW1lc3RhbXAsIGZvcm1hdHRlZFRpbWVzdGFtcCB9KTtcbiAgICAgICAgICBtZXNzYWdlSW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICB9KTtcbn1cblxuc29ja2V0Lm9uKCdjaGF0LW1lc3NhZ2UnLCBkYXRhID0+IHtcbiAgaWYgKGRhdGEuY2hhdCA9PSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIi9cIikucG9wKCkpIHtcbiAgICBhcHBlbmRSaWNoTWVzc2FnZShkYXRhLm5hbWUsIGRhdGEubWVzc2FnZSwgZGF0YS5pY29uLCBkYXRhLnRpbWVzdGFtcCk7XG4gIH1cbn0pO1xuXG5zb2NrZXQub24oJ3VzZXItY29ubmVjdGVkJywgbmFtZSA9PiB7XG4gIGFwcGVuZE1lc3NhZ2UoYCR7bmFtZX0gY29ubmVjdGVkYCk7XG59KTtcblxuc29ja2V0Lm9uKCd1c2VyLWRpc2Nvbm5lY3RlZCcsIG5hbWUgPT4ge1xuICBhcHBlbmRNZXNzYWdlKGAke25hbWV9IGRpc2Nvbm5lY3RlZGApO1xufSk7XG5cbmZ1bmN0aW9uIGFwcGVuZE1lc3NhZ2UobWVzc2FnZSkge1xuICBjb25zdCBtZXNzYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZXNzYWdlRWxlbWVudC5pbm5lclRleHQgPSBtZXNzYWdlO1xuICBtZXNzYWdlQ29udGFpbmVyLmFwcGVuZChtZXNzYWdlRWxlbWVudCk7XG4gIG1lc3NhZ2VDb250YWluZXIuc2Nyb2xsVG9wID0gbWVzc2FnZUNvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZFJpY2hNZXNzYWdlKG5hbWUsIG1lc3NhZ2V0ZXh0LCBpY29uLCB0aW1lc3RhbXApIHtcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UnKTtcblxuICAvLyBDcmVhdGUgcHJvZmlsZSBpY29uIGVsZW1lbnRcbiAgY29uc3QgdXNlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgdXNlckljb24uc2V0QXR0cmlidXRlKCdzcmMnLCBgL2Fzc2V0cy9Qcm9maWxlIEljb25zLyR7aWNvbn1gKTtcbiAgdXNlckljb24uYWx0ID0gJ1Byb2ZpbGUgSWNvbic7XG4gIHVzZXJJY29uLmNsYXNzTGlzdC5hZGQoJ3Byb2ZpbGUtaWNvbicpO1xuICBtZXNzYWdlLmFwcGVuZENoaWxkKHVzZXJJY29uKTtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlLWNvbnRlbnRzJylcbiAgLy8gQ3JlYXRlIG5hbWUgYW5kIGRhdGUgZWxlbWVudFxuICBjb25zdCBuYW1lRGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmFtZURhdGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25hbWUtZGF0ZScpO1xuXG4gIC8vIE5hbWUgZWxlbWVudFxuICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgbmFtZUVsZW1lbnQudGV4dENvbnRlbnQgPSBuYW1lO1xuICBuYW1lRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZXNzYWdlLW5hbWUnKTtcbiAgbmFtZURhdGVFbGVtZW50LmFwcGVuZENoaWxkKG5hbWVFbGVtZW50KTtcblxuICBjb25zdCBkYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aW1lc3RhbXA7XG4gIGRhdGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UtZGF0ZScpO1xuICBuYW1lRGF0ZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGF0ZUVsZW1lbnQpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZURhdGVFbGVtZW50KTtcblxuICAvLyBDcmVhdGUgbWVzc2FnZSB0ZXh0IGVsZW1lbnRcbiAgY29uc3QgbWVzc2FnZVRleHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBtZXNzYWdlVGV4dEVsZW1lbnQudGV4dENvbnRlbnQgPSBtZXNzYWdldGV4dDtcbiAgbWVzc2FnZVRleHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UtdGV4dCcpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1lc3NhZ2VUZXh0RWxlbWVudCk7XG5cbiAgbWVzc2FnZS5hcHBlbmQoY29udGVudClcbiAgbWVzc2FnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZXNzYWdlKTtcbiAgbWVzc2FnZUNvbnRhaW5lci5zY3JvbGxUb3AgPSBtZXNzYWdlQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0Q2hhdERhdGUodGltZXN0YW1wKSB7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgbWVzc2FnZURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xuXG4gIGNvbnN0IG1vbnRoID0gbWVzc2FnZURhdGUuZ2V0TW9udGgoKSArIDE7XG4gIGNvbnN0IGRheSA9IG1lc3NhZ2VEYXRlLmdldERhdGUoKTtcbiAgY29uc3QgeWVhciA9IG1lc3NhZ2VEYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IGhvdXJzID0gbWVzc2FnZURhdGUuZ2V0SG91cnMoKTtcbiAgY29uc3QgbWludXRlcyA9IG1lc3NhZ2VEYXRlLmdldE1pbnV0ZXMoKTtcbiAgY29uc3QgcGVyaW9kID0gaG91cnMgPj0gMTIgPyAncG0nIDogJ2FtJztcbiAgY29uc3QgZm9ybWF0dGVkSG91cnMgPSBob3VycyAlIDEyIHx8IDEyOyAvLyBDb252ZXJ0IHRvIDEyLWhvdXIgZm9ybWF0XG4gIGNvbnN0IGZvcm1hdHRlZE1pbnV0ZXMgPSBtaW51dGVzIDwgMTAgPyBgMCR7bWludXRlc31gIDogbWludXRlczsgLy8gUGFkIG1pbnV0ZXMgd2l0aCB6ZXJvIGlmIG5lZWRlZFxuXG4gIHJldHVybiBgJHttb250aH0vJHtkYXl9LyR7eWVhcn0gYXQgJHtmb3JtYXR0ZWRIb3Vyc306JHtmb3JtYXR0ZWRNaW51dGVzfSR7cGVyaW9kfWA7XG59XG5cbmV4cG9ydCB7IGZvcm1hdENoYXREYXRlLCBhcHBlbmRSaWNoTWVzc2FnZSwgYXBwZW5kTWVzc2FnZSwgY2xvc2VTZXR1cCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9ob21lLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbImtleSIsIm1jQ29uc29sZUFjY2VzcyIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsImFsbG93QXJyYXlMaWtlIiwiaXQiLCJBcnJheSIsImlzQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJGIiwiX2UiLCJub3JtYWxDb21wbGV0aW9uIiwiZGlkRXJyIiwiZXJyIiwic3RlcCIsIl9lMiIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJmcm9tIiwidGVzdCIsImFyciIsImxlbiIsImFycjIiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImluZm8iLCJlcnJvciIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwidW5kZWZpbmVkIiwiZm9ybWF0Q2hhdERhdGUiLCJhcHBlbmRNZXNzYWdlIiwiYXBwZW5kUmljaE1lc3NhZ2UiLCJjbG9zZVNldHVwIiwiY2hhdERpc3BsYXkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibWVzc2FnZUNvbnRhaW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJmZXRjaCIsInJlc3BvbnNlIiwib2siLCJqc29uIiwiZGF0YSIsImVtYWlsIiwidXNlcm5hbWUiLCJ1c2VyRW1haWwiLCJwcm9maWxlUGljdHVyZSIsInByb2ZpbGVJY29uIiwicHJvZmlsZVBpY3R1cmVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwibG9hZFJvb21zIiwic2V0Q2hhdEJhY2tncm91bmQiLCJjcmVhdGVHcm91cERtIiwiZXZlbnQiLCJjaGF0TmFtZSIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlRGF0YSIsImdyb3VwRE0iLCJjcmVhdGVkQ2hhdCIsImNvbmNhdCIsImlkIiwiY29uc29sZSIsImxvZyIsInJlZGlyZWN0Iiwic3R5bGUiLCJ2aXNpYmlsaXR5IiwiY2hhdENvbnRhaW5lciIsInVybElETnVtYmVyIiwicm9vbXMiLCJjcmVhdGVDaGF0IiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwiZW5jcnlwdGVkVXJsSUQiLCJnZXQiLCJ1cmxJRCIsIkNyeXB0b0pTIiwiQUVTIiwiZGVjcnlwdCIsImVuYyIsIlV0ZjgiLCJwYXJzZUludCIsImNoYXQiLCJpbmRleCIsImNoYXRJRCIsImNoYXRzIiwiY2hhdEVsZW1lbnQiLCJjcmVhdGVDaGF0RWxlbWVudCIsImFwcGVuZENoaWxkIiwic2VsZWN0ZWRDaGF0IiwiaW5jbHVkZXMiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiY2hhdERpdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXJ2ZXJJY29uIiwidGV4dENvbnRlbnQiLCJzZWxlY3Rpb25JdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpdGVtIiwicmVtb3ZlIiwiaWNvbnMiLCJpY29uIiwiZGlzcGxheSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImdldENoYXQiLCJjcmVhdGVCdXR0b24iLCJ0ZXh0IiwiY2xpY2tIYW5kbGVyIiwiYnV0dG9uIiwicGFuZWxzIiwicGFuZWwiLCJxdWVyeVNlbGVjdG9yIiwidG9Mb3dlckNhc2UiLCJsYWJlbCIsImJyYW5kaW5nIiwibGFiZWxzIiwidGV4dGFyZWEiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJjdXJyZW50SGVpZ2h0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImhlaWdodCIsIl94IiwiX2dldENoYXQiLCJfY2FsbGVlIiwiZW5kcG9pbnQiLCJtZXNzYWdlc0RhdGEiLCJfaXRlcmF0b3IiLCJfc3RlcCIsIm1lc3NhZ2VEYXRhIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImNoYXREYXRhIiwiQ2hhdE5hbWUiLCJtZXNzYWdlcyIsIm1hcCIsIm1lc3NhZ2UiLCJVc2VybmFtZSIsInVzZXJJY29uIiwiUHJvZmlsZUljb24iLCJkYXRlU2VudCIsIkRhdGVTZW50IiwidXBkYXRlVGltZXN0YW1wIiwiY29udGVudCIsIkNvbnRlbnQiLCJ0MCIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImZvcm1hdHRlZEN1cnJlbnREYXRlIiwieWVzdGVyZGF5IiwiZm9ybWF0dGVkWWVzdGVyZGF5IiwidGltZXN0YW1wRGF0ZSIsInNwbGl0IiwiZm9ybWF0dGVkVGltZXN0YW1wRGF0ZSIsImZvbnRzIiwicmVhZHkiLCJvdXRsaW5lZGljb25zIiwicGF0aG5hbWUiLCJjb2xvciIsImNsYXNzTmFtZSIsInBvaW50ZXJFdmVudHMiLCJjaGF0SWNvbiIsInNyYyIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiaDZFbGVtZW50IiwidXNlclNlbGVjdCIsInNvY2tldCIsImlvIiwibWVzc2FnZUlucHV0IiwibmF2YmFyIiwiY29udGFpbmVyIiwibmF2YmFySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidHJpbSIsInNoaWZ0S2V5Iiwic2VuZCIsImNyZWF0ZU1lbnUiLCJjb250YWlucyIsInN0b3BQcm9wYWdhdGlvbiIsIm9mZnNldExlZnQiLCJvZmZzZXRXaWR0aCIsImJ1dHRvbkJvdHRvbSIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsImxlZnQiLCJib3R0b20iLCJvbmNsaWNrIiwicG9wdXAiLCJ0YXJnZXQiLCJjbG9zZVBvcHVwIiwiY3JlYXRlR3JvdXBETUJ1dHRvbiIsImNyZWF0ZUdyb3VwRE0iLCJkYXJrT3ZlcmxheUNoZWNrIiwiZGFya092ZXJsYXkiLCJ0b3AiLCJ0cmFuc2Zvcm0iLCJjbG9zZUdyb3VwRE0iLCJzZXJ2ZXJEcm9wZG93biIsInByZXZlbnREZWZhdWx0IiwiYW5pbWF0aW9uTmFtZSIsImNoYXRVUkwiLCJ0aW1lc3RhbXAiLCJnZXRUaW1lIiwiZm9ybWF0dGVkVGltZXN0YW1wIiwiZW1pdCIsIm9uIiwibWVzc2FnZUVsZW1lbnQiLCJpbm5lclRleHQiLCJhcHBlbmQiLCJzY3JvbGxUb3AiLCJtZXNzYWdldGV4dCIsImFsdCIsIm5hbWVEYXRlRWxlbWVudCIsIm5hbWVFbGVtZW50IiwiZGF0ZUVsZW1lbnQiLCJtZXNzYWdlVGV4dEVsZW1lbnQiLCJtZXNzYWdlRGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwicGVyaW9kIiwiZm9ybWF0dGVkSG91cnMiLCJmb3JtYXR0ZWRNaW51dGVzIl0sInNvdXJjZVJvb3QiOiIifQ==