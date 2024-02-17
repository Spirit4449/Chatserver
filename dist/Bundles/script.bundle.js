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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztFQUN0QyxJQUFNQyxLQUFLLEdBQUdQLFdBQVcsQ0FBQ1EsUUFBUSxDQUFDLENBQUM7RUFDcEMsSUFBTUMsT0FBTyxHQUFHVCxXQUFXLENBQUNVLFVBQVUsQ0FBQyxDQUFDO0VBQ3hDLElBQU1DLE1BQU0sR0FBR0osS0FBSyxJQUFJLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSTtFQUN4QyxJQUFNSyxjQUFjLEdBQUdMLEtBQUssR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7RUFDekMsSUFBTU0sZ0JBQWdCLEdBQUdKLE9BQU8sR0FBRyxFQUFFLE9BQUEzSyxNQUFBLENBQU8ySyxPQUFPLElBQUtBLE9BQU8sQ0FBQyxDQUFDOztFQUVqRSxVQUFBM0ssTUFBQSxDQUFVbUssS0FBSyxPQUFBbkssTUFBQSxDQUFJcUssR0FBRyxPQUFBckssTUFBQSxDQUFJdUssSUFBSSxVQUFBdkssTUFBQSxDQUFPOEssY0FBYyxPQUFBOUssTUFBQSxDQUFJK0ssZ0JBQWdCLEVBQUEvSyxNQUFBLENBQUc2SyxNQUFNO0FBQ2xGOzs7Ozs7O1VDM05BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy8uL2dsb2JhbHMuanMiLCJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL2NoYXRzZXJ2ZXJuZXcvLi9zcmMvc2NyaXB0LmpzIiwid2VicGFjazovL2NoYXRzZXJ2ZXJuZXcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NoYXRzZXJ2ZXJuZXcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaGF0c2VydmVybmV3L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qga2V5ID0gJzE4MzdrZXknO1xuY29uc3QgbWNDb25zb2xlQWNjZXNzID0gWycxMDAwMDAnXSAvL05pc2NoYXksIC4uXG5cbmV4cG9ydCB7IFxuICAgIGtleSwgXG4gICAgbWNDb25zb2xlQWNjZXNzLFxuICAgIFxufSIsImltcG9ydCB7IGtleSB9IGZyb20gXCIuLi9nbG9iYWxzXCI7XG5pbXBvcnQgeyBmb3JtYXRDaGF0RGF0ZSwgYXBwZW5kTWVzc2FnZSwgYXBwZW5kUmljaE1lc3NhZ2UsIGNsb3NlU2V0dXAgfSBmcm9tIFwiLi9zY3JpcHQuanNcIlxuXG52YXIgY2hhdERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXQtZGlzcGxheVwiKTtcbmNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZS1jb250YWluZXInKVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGZldGNoKFwiL3Byb2ZpbGVcIilcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHJldHJpZXZlIHByb2ZpbGUgZGF0YVwiKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5lbWFpbCAmJiBkYXRhLnVzZXJuYW1lKSB7XG4gICAgICAgIGNvbnN0IHVzZXJFbWFpbCA9IGRhdGEuZW1haWw7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gZGF0YS51c2VybmFtZTtcbiAgICAgICAgY29uc3QgcHJvZmlsZVBpY3R1cmUgPSBkYXRhLnByb2ZpbGVJY29uO1xuICAgICAgICBjb25zdCBwcm9maWxlUGljdHVyZUVsZW1lbnQgPVxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZS1waWN0dXJlXCIpO1xuICAgICAgICBwcm9maWxlUGljdHVyZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwic3JjXCIsIGAvYXNzZXRzL1Byb2ZpbGUgSWNvbnMveWVsbG93UHJvZmlsZUljb24ucG5nYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2xvZ2luXCI7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgbG9hZFJvb21zKCk7XG4gIHNldENoYXRCYWNrZ3JvdW5kKCk7XG5cbiAgY29uc3QgY3JlYXRlR3JvdXBEbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvdXBkbS1jcmVhdGVcIik7XG5cbiAgY3JlYXRlR3JvdXBEbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgY2hhdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXQtbmFtZVwiKS52YWx1ZTtcbiBcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBuYW1lOiBjaGF0TmFtZSxcbiAgICB9O1xuXG4gICAgZmV0Y2goXCIvY2hhdFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy90aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBjcmVhdGUgY2hhdC4gU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZURhdGEpID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBETSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncm91cC1kbScpXG4gICAgICAgIGNsb3NlU2V0dXAoZ3JvdXBETSlcbiAgICAgICAgLy9oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBgL2NoYXQvJHtyZXNwb25zZURhdGEuaWR9YCk7XG4gICAgICAgIGxvYWRSb29tcygpXG4gICAgICAgIGNvbnN0IGNyZWF0ZWRDaGF0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cmVzcG9uc2VEYXRhLmlkfWApXG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZWRDaGF0KVxuICAgICAgICByZWRpcmVjdChyZXNwb25zZURhdGEuaWQsIGNyZWF0ZWRDaGF0KVxuICAgICAgICBjaGF0RGlzcGxheS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIFxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNyZWF0aW5nIGNoYXQ6XCIsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBsb2FkUm9vbXMoKSB7XG4gIGZldGNoKFwiL2dldC1yb29tc1wiKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBjaGF0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LWNvbnRhaW5lclwiKTtcblxuICAgICAgdmFyIHVybElETnVtYmVyO1xuXG4gICAgICBpZiAoZGF0YS5yb29tcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY3JlYXRlQ2hhdChcIiMyQTJBMkFcIik7XG4gICAgICAgIGNyZWF0ZUNoYXQoXCIjMjkyOTI5XCIpO1xuICAgICAgICBjcmVhdGVDaGF0KFwiIzI4MjgyOFwiKTtcbiAgICAgICAgY3JlYXRlQ2hhdChcIiMyNzI3MjdcIik7XG4gICAgICAgIGNyZWF0ZUNoYXQoXCIjMjYyNjI2XCIpO1xuICAgICAgICBjcmVhdGVDaGF0KFwiIzI1MjUyNVwiKTtcbiAgICAgICAgY3JlYXRlQ2hhdChcIiMyNDI0MjRcIik7XG4gICAgICAgIGNyZWF0ZUNoYXQoXCIjMjMyMzIzXCIpO1xuICAgICAgICBjcmVhdGVDaGF0KFwiIzFkMWQxZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgIGNvbnN0IGVuY3J5cHRlZFVybElEID0gdXJsUGFyYW1zLmdldChcImNoYXRJRFwiKTtcbiAgICAgICAgaWYgKGVuY3J5cHRlZFVybElEKSB7XG4gICAgICAgICAgY29uc3QgdXJsSUQgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdChlbmNyeXB0ZWRVcmxJRCwga2V5KS50b1N0cmluZyhcbiAgICAgICAgICAgIENyeXB0b0pTLmVuYy5VdGY4XG4gICAgICAgICAgKTtcbiAgICAgICAgICB1cmxJRE51bWJlciA9IHVybElEID8gcGFyc2VJbnQodXJsSUQsIDEwKSA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5yb29tcy5mb3JFYWNoKChjaGF0LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoYXRJRCA9IGRhdGEuY2hhdHNbaW5kZXhdO1xuICAgICAgICAgIGNvbnN0IGNoYXRFbGVtZW50ID0gY3JlYXRlQ2hhdEVsZW1lbnQoY2hhdCwgY2hhdElEKTtcbiAgICAgICAgICBjaGF0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoYXRFbGVtZW50KTtcblxuICAgICAgICAgIGlmICh1cmxJRE51bWJlciA9PT0gY2hhdElEKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZENoYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtjaGF0SUR9YCk7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBjaGF0SUQgaXMgcHJlc2VudCBhbmQgY2FsbCB0aGUgcmVkaXJlY3QgZnVuY3Rpb25cbiAgICAgICAgICAgIGlmIChjaGF0SUQgJiYgc2VsZWN0ZWRDaGF0KSB7XG4gICAgICAgICAgICAgIHJlZGlyZWN0KGNoYXRJRCwgc2VsZWN0ZWRDaGF0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcyhcImNoYXRJRFwiKSkge1xuICAgICAgICAgIC8vIElmIHNvLCBjaGFuZ2UgdGhlIFVSTCB0byAvaG9tZVxuICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIFwiL2hvbWVcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIHJvb21zOlwiLCBlcnJvcikpO1xufVxuXG4vLyBDcmVhdGUgYSByb29tIGVsZW1lbnQgd2l0aCBuYW1lLCBtZW1iZXJzLCBhbmQgYnV0dG9uc1xuZnVuY3Rpb24gY3JlYXRlQ2hhdEVsZW1lbnQoY2hhdCwgY2hhdElEKSB7XG4gIGNvbnN0IGNoYXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaGF0RGl2LmNsYXNzTGlzdC5hZGQoXCJjaGF0XCIpO1xuICBjaGF0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2NoYXRJRH1gKTtcblxuICAvLyBTZXJ2ZXIgSWNvblxuICBjb25zdCBzZXJ2ZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgc2VydmVySWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYC9hc3NldHMvUHJvZmlsZSBJY29ucy9ncmVlblByb2ZpbGVJY29uLnBuZ2ApO1xuICBzZXJ2ZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJjaGF0LWljb25cIik7XG4gIGNoYXREaXYuYXBwZW5kQ2hpbGQoc2VydmVySWNvbik7XG5cbiAgY29uc3QgY2hhdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XG4gIGNoYXROYW1lLnRleHRDb250ZW50ID0gY2hhdDtcbiAgY2hhdERpdi5hcHBlbmRDaGlsZChjaGF0TmFtZSk7XG5cbiAgY2hhdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJlZGlyZWN0KGNoYXRJRCwgY2hhdERpdik7XG4gIH0pO1xuICByZXR1cm4gY2hhdERpdjtcbn1cblxuZnVuY3Rpb24gcmVkaXJlY3QoY2hhdElELCBjaGF0RGl2KSB7XG4gIGNvbnN0IHNlbGVjdGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGF0XCIpO1xuICBzZWxlY3Rpb25JdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gIH0pO1xuXG4gIC8vIFNlbGVjdCB0aGUgY2xpY2tlZCBpdGVtXG4gIGNoYXREaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuXG4gIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAvY2hhdC8ke2NoYXRJRH1gKTtcbiAgY2hhdERpc3BsYXkuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICBjb25zdCBpY29ucyA9IGNoYXREaXNwbGF5LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCIpO1xuICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgaWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gIH0pO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vLWNoYXQtc2VsZWN0ZWRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB3aGlsZSAobWVzc2FnZUNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgbWVzc2FnZUNvbnRhaW5lci5yZW1vdmVDaGlsZChtZXNzYWdlQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG4gIGdldENoYXQoY2hhdElEKTtcbn1cblxuLy8gQ3JlYXRlIGEgYnV0dG9uIGVsZW1lbnQgd2l0aCB0ZXh0IGFuZCBjbGljayBoYW5kbGVyXG5mdW5jdGlvbiBjcmVhdGVCdXR0b24odGV4dCwgY2xpY2tIYW5kbGVyKSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2hhdEJ1dHRvblwiKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICByZXR1cm4gYnV0dG9uO1xufVxuXG4vLyBDYWxsIHRoZSBmdW5jdGlvbiB0byBsb2FkIHJvb21zIHdoZW4gdGhlIHBhZ2UgbG9hZHNcbi8vd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBsb2FkUm9vbXMpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zdCBwYW5lbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhbmVsXCIpO1xuICBwYW5lbHMuZm9yRWFjaCgocGFuZWwpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gcGFuZWwucXVlcnlTZWxlY3RvcihcIi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWRcIikudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodGV4dCA9PT0gXCJob21lXCIpIHtcbiAgICAgIHBhbmVsLnF1ZXJ5U2VsZWN0b3IoXCIubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCIpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgIGNvbnN0IGxhYmVsID0gcGFuZWwucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpO1xuICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGJyYW5kaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJicmFuZGluZ1wiKTtcbiAgYnJhbmRpbmcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2hvbWVcIjtcbiAgfSk7XG4gIGNvbnN0IGxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFuZWwgbGFiZWxcIik7XG5cbiAgcGFuZWxzLmZvckVhY2goKHBhbmVsLCBpbmRleCkgPT4ge1xuICAgIHBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBSZW1vdmUgdGhlIFwic2VsZWN0ZWRcIiBjbGFzcyBmcm9tIGFsbCBpY29ucyBhbmQgbGFiZWxzXG4gICAgICBkb2N1bWVudFxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5wYW5lbCAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCIpXG4gICAgICAgIC5mb3JFYWNoKChpY29uKSA9PiBpY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSk7XG4gICAgICBsYWJlbHMuZm9yRWFjaCgobCkgPT4gbC5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikpO1xuXG4gICAgICAvLyBBZGQgdGhlIFwic2VsZWN0ZWRcIiBjbGFzcyB0byB0aGUgY2xpY2tlZCBpY29uIGFuZCBsYWJlbFxuICAgICAgcGFuZWxcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCIpXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgICBsYWJlbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2UtaW5wdXRcIik7XG5cbiAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxIZWlnaHQgPiB0aGlzLmNsaWVudEhlaWdodCkge1xuICAgICAgLy8gVGhlIHRleHRhcmVhIGlzIG92ZXJmbG93aW5nXG4gICAgICBjb25zdCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICAgIFwibWVzc2FnZS1pbnB1dC1jb250YWluZXJcIlxuICAgICAgKTtcbiAgICAgIGxldCBjdXJyZW50SGVpZ2h0ID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShtZXNzYWdlQ29udGFpbmVyKS5oZWlnaHQpO1xuICAgICAgaWYgKGN1cnJlbnRIZWlnaHQgPD0gMjApIHtcbiAgICAgICAgY3VycmVudEhlaWdodCArPSAzMDtcbiAgICAgICAgdGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gYCR7Y3VycmVudEhlaWdodH1weGA7XG4gICAgICAgIG1lc3NhZ2VDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYCR7Y3VycmVudEhlaWdodH1weGA7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRDaGF0KGVuZHBvaW50KSB7XG4gIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcImNoYXRcIikpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2dldGNoYXQvJHtlbmRwb2ludH1gKTtcblxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdC1uYW1lLWhlYWRlclwiKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgZGF0YS5jaGF0RGF0YS5DaGF0TmFtZTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlLWlucHV0XCIpXG4gICAgICAgICAgLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIGBNZXNzYWdlICR7ZGF0YS5jaGF0RGF0YS5DaGF0TmFtZX0uLi5gKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlc0RhdGEgPSBkYXRhLm1lc3NhZ2VzLm1hcCgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gbWVzc2FnZS5Vc2VybmFtZSB8fCBcIlVua25vd25cIjtcbiAgICAgICAgICBjb25zdCB1c2VySWNvbiA9XG4gICAgICAgICAgICBtZXNzYWdlLlByb2ZpbGVJY29uIHx8IFwiL2Fzc2V0cy9Qcm9maWxlIEljb25zL3Vua25vd25Qcm9maWxlSWNvbi5wbmdcIjtcbiAgICAgICAgICB2YXIgZGF0ZVNlbnQgPSBtZXNzYWdlLkRhdGVTZW50IHx8IFwiXCI7XG4gICAgICAgICAgZGF0ZVNlbnQgPSB1cGRhdGVUaW1lc3RhbXAoZGF0ZVNlbnQpO1xuICAgICAgICAgIHJldHVybiB7IHVzZXJuYW1lLCBjb250ZW50OiBtZXNzYWdlLkNvbnRlbnQsIHVzZXJJY29uLCBkYXRlU2VudCB9O1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBOb3cgdGhhdCBhbGwgbWVzc2FnZXMgYXJlIGxvYWRlZCwgbWFrZSB0aGUgY2hhdCBjb250YWluZXIgdmlzaWJsZVxuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcblxuICAgICAgICBmb3IgKGNvbnN0IG1lc3NhZ2VEYXRhIG9mIG1lc3NhZ2VzRGF0YSkge1xuICAgICAgICAgIGFwcGVuZFJpY2hNZXNzYWdlKFxuICAgICAgICAgICAgbWVzc2FnZURhdGEudXNlcm5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlRGF0YS5jb250ZW50LFxuICAgICAgICAgICAgbWVzc2FnZURhdGEudXNlckljb24sXG4gICAgICAgICAgICBtZXNzYWdlRGF0YS5kYXRlU2VudFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Igd2l0aCB0aGUgbWFpbiBjaGF0IGRhdGEgZmV0Y2gsIG1ha2UgdGhlIGNoYXQgY29udGFpbmVyIHZpc2libGVcbiAgICAgICAgbWVzc2FnZUNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjaGF0IGRhdGE6XCIsIGVycm9yKTtcbiAgICAgIC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Igd2l0aCB0aGUgbWFpbiBjaGF0IGRhdGEgZmV0Y2gsIG1ha2UgdGhlIGNoYXQgY29udGFpbmVyIHZpc2libGVcbiAgICAgIG1lc3NhZ2VDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVUaW1lc3RhbXAodGV4dCkge1xuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGZvcm1hdHRlZEN1cnJlbnREYXRlID0gZm9ybWF0Q2hhdERhdGUoY3VycmVudERhdGUpO1xuICBjb25zdCB5ZXN0ZXJkYXkgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSAtIDg2NDAwMDAwKTtcbiAgY29uc3QgZm9ybWF0dGVkWWVzdGVyZGF5ID0gZm9ybWF0Q2hhdERhdGUoeWVzdGVyZGF5KTtcblxuICBjb25zdCB0aW1lc3RhbXBEYXRlID0gbmV3IERhdGUodGV4dC5zcGxpdChcIiBcIilbMF0pO1xuXG4gIGNvbnN0IGZvcm1hdHRlZFRpbWVzdGFtcERhdGUgPSBmb3JtYXRDaGF0RGF0ZSh0aW1lc3RhbXBEYXRlKTtcblxuICBpZiAodGV4dC5zcGxpdChcIiBcIilbMF0gPT09IGZvcm1hdHRlZEN1cnJlbnREYXRlLnNwbGl0KFwiIFwiKVswXSkge1xuICAgIHJldHVybiBgVG9kYXkgYXQgJHt0ZXh0LnNwbGl0KFwiIFwiKVsyXX1gO1xuICB9IGVsc2UgaWYgKHRleHQuc3BsaXQoXCIgXCIpWzBdID09PSBmb3JtYXR0ZWRZZXN0ZXJkYXkuc3BsaXQoXCIgXCIpWzBdKSB7XG4gICAgcmV0dXJuIGBZZXN0ZXJkYXkgYXQgJHt0ZXh0LnNwbGl0KFwiIFwiKVsyXX1gO1xuICB9XG5cbiAgcmV0dXJuIHRleHQ7XG59XG5cbmRvY3VtZW50LmZvbnRzLnJlYWR5LnRoZW4oKCkgPT4ge1xuICBjb25zdCBpY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCIpO1xuICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiZm9udC1sb2FkZWRcIik7XG4gIH0pO1xuICBjb25zdCBvdXRsaW5lZGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpO1xuICBvdXRsaW5lZGljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICBpY29uLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gc2V0Q2hhdEJhY2tncm91bmQoKSB7XG5cbiAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgVVJMIGlzIFwiL2hvbWVcIlxuICBpZiAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9ob21lXCIpIHtcbiAgICAvLyBIaWRlIHRoZSBjaGF0IGhlYWRlclxuICAgIGNoYXREaXNwbGF5LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIGNvbnN0IGljb25zID0gY2hhdERpc3BsYXkucXVlcnlTZWxlY3RvckFsbChcIi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWRcIik7XG4gICAgaWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgaWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICB9KTtcbiAgfVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vLWNoYXQtc2VsZWN0ZWRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2hhdChjb2xvcikge1xuICB2YXIgY2hhdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaGF0RWxlbWVudC5jbGFzc05hbWUgPSBcImNoYXRcIjtcbiAgY2hhdEVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXG4gIHZhciBjaGF0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNoYXRJY29uLnNyYyA9IFwiL2Fzc2V0cy90cmFuc3BhcmVudGltYWdlLnBuZ1wiO1xuICBjaGF0SWNvbi5jbGFzc05hbWUgPSBcImNoYXQtaWNvblwiO1xuICBjaGF0SWNvbi5zdHlsZS53aWR0aCA9IFwiMzVweFwiO1xuICBjaGF0SWNvbi5zdHlsZS5oZWlnaHQgPSBcIjM1cHhcIjtcbiAgY2hhdEljb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG5cbiAgdmFyIGg2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNlwiKTtcbiAgaDZFbGVtZW50LnRleHRDb250ZW50ID0gXCJub25lXCI7XG4gIGg2RWxlbWVudC5zdHlsZS5jb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcbiAgaDZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICBoNkVsZW1lbnQuc3R5bGUudXNlclNlbGVjdCA9IFwibm9uZVwiO1xuICBoNkVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXG4gIGNoYXRFbGVtZW50LmFwcGVuZENoaWxkKGNoYXRJY29uKTtcbiAgY2hhdEVsZW1lbnQuYXBwZW5kQ2hpbGQoaDZFbGVtZW50KTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXQtY29udGFpbmVyXCIpLmFwcGVuZENoaWxkKGNoYXRFbGVtZW50KTtcbn1cblxuZXhwb3J0IHsgdXBkYXRlVGltZXN0YW1wIH0iLCJpbXBvcnQgeyB1cGRhdGVUaW1lc3RhbXAgfSBmcm9tIFwiLi9ob21lXCI7XG5cbmNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcbmNvbnN0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLWlucHV0Jyk7XG5jb25zdCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UtY29udGFpbmVyJylcblxuXG52YXIgdXNlcm5hbWVcbnZhciBwcm9maWxlSWNvblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyk7IFxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuXG4gIGlmIChuYXZiYXIgJiYgY29udGFpbmVyKSB7XG4gICAgY29uc3QgbmF2YmFySGVpZ2h0ID0gbmF2YmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAvL2NvbnRhaW5lci5zdHlsZS5tYXJnaW5Ub3AgPSBgJHtuYXZiYXJIZWlnaHR9cHhgO1xuICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgY2FsYyg5OXZoIC0gJHtuYXZiYXJIZWlnaHR9cHgpYDtcbiAgfVxuXG4gIG1lc3NhZ2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgJiYgbWVzc2FnZUlucHV0LnZhbHVlLnRyaW0oKSAhPT0gJycgJiYgIWV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICBzZW5kKCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBjcmVhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLW5ldycpO1xuICBjb25zdCBjcmVhdGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZScpO1xuXG4gIGNyZWF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICghKGNyZWF0ZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FuaW1hdGUtcm90YXRlJykpKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNyZWF0ZS5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlLXJvdGF0ZS1vdXQnKVxuICAgICAgLy8gQ2hlY2sgaWYgdGhlICdhbmltYXRlLWxlZnQnIGNsYXNzIGlzIHByZXNlbnRcbiAgICAgIGlmIChjcmVhdGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnYW5pbWF0ZS1sZWZ0JykpIHtcbiAgICAgICAgY3JlYXRlTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGNyZWF0ZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1sZWZ0Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgb2Zmc2V0TGVmdCA9IGNyZWF0ZS5vZmZzZXRMZWZ0ICsgY3JlYXRlLm9mZnNldFdpZHRoICsgODtcbiAgICAgICAgdmFyIGJ1dHRvbkJvdHRvbSA9IGNyZWF0ZS5vZmZzZXRUb3AgKyBjcmVhdGUub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBjcmVhdGVNZW51LnN0eWxlLmxlZnQgPSBvZmZzZXRMZWZ0ICsgXCJweFwiO1xuICAgICAgICBjcmVhdGVNZW51LnN0eWxlLmJvdHRvbSA9IDUwICsgXCJweFwiO1xuICAgICAgICBjcmVhdGVNZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGNyZWF0ZU1lbnUuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1sZWZ0Jyk7XG4gICAgICAgIGNyZWF0ZS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLXJvdGF0ZScpXG4gICAgICB9XG4gICAgfVxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB2YXIgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVwiKTtcbiAgICAgIGlmIChldmVudC50YXJnZXQgIT09IHBvcHVwICYmICFwb3B1cC5jb250YWlucyhldmVudC50YXJnZXQpICYmIHBvcHVwLnN0eWxlLmRpc3BsYXkgPT09ICdibG9jaycpIHtcbiAgICAgICAgY2xvc2VQb3B1cChwb3B1cCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG5cbiAgY29uc3QgY3JlYXRlR3JvdXBETUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtZ3JvdXAtZG0nKVxuICBjcmVhdGVHcm91cERNQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ2J1dHRvbiBjbGlja2VkJylcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBjcmVhdGVHcm91cERNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyb3VwLWRtJylcbiAgICBjcmVhdGVHcm91cERNLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgY29uc3QgZGFya092ZXJsYXlDaGVjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrLW92ZXJsYXknKVxuICAgIGlmICghZGFya092ZXJsYXlDaGVjaykge1xuICAgICAgY29uc3QgZGFya092ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgZGFya092ZXJsYXkuY2xhc3NMaXN0LmFkZCgnZGFyay1vdmVybGF5JylcbiAgICAgIGRhcmtPdmVybGF5LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGFyay1vdmVybGF5JylcbiAgICAgIGNyZWF0ZUdyb3VwRE0uc3R5bGUubGVmdCA9ICc1MCUnO1xuICAgICAgY3JlYXRlR3JvdXBETS5zdHlsZS50b3AgPSBcIjUwJVwiO1xuICAgICAgY3JlYXRlR3JvdXBETS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZSgtNTAlLCAtNTAlKVwiO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkYXJrT3ZlcmxheSlcbiAgICB9XG4gICAgY2xvc2VQb3B1cChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVwiKSk7XG4gICAgY29uc3QgY2xvc2VHcm91cERNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLWdyb3VwZG0nKVxuICAgIGNsb3NlR3JvdXBETS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgY2xvc2VTZXR1cChjcmVhdGVHcm91cERNKTtcbiAgICB9KVxuICAgIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSBjcmVhdGVHcm91cERNICYmICFjcmVhdGVHcm91cERNLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgY3JlYXRlR3JvdXBETS5zdHlsZS5kaXNwbGF5ID09PSAnYmxvY2snKSB7XG4gICAgICAgIGNsb3NlU2V0dXAoY3JlYXRlR3JvdXBETSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSlcblxuXG4gIGNvbnN0IHNlcnZlckRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlcnZlci1vcHRpb25zJylcbiAgc2VydmVyRHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH0pXG5cbn0pO1xuXG5mdW5jdGlvbiBjbG9zZVNldHVwKHBvcHVwKSB7XG4gIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ3pvb21vdXQnKVxuICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC5hbmltYXRpb25OYW1lID09PSAnem9vbU91dCcpIHtcbiAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ3pvb21vdXQnKVxuICAgICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgcG9wdXAuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUoNTAlLCA1MCUpXCI7XG4gICAgfVxufSk7XG4gIGNvbnN0IGRhcmtPdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rhcmstb3ZlcmxheScpXG4gIGlmIChkYXJrT3ZlcmxheSkge1xuICAgIGRhcmtPdmVybGF5LnJlbW92ZSgpXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvc2VQb3B1cChwb3B1cCkge1xuICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUtbGVmdCcpO1xuICB2YXIgY3JlYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1uZXcnKVxuICBjcmVhdGUuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS1yb3RhdGUnKTtcbiAgY3JlYXRlLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtcm90YXRlLW91dCcpO1xufVxuXG5mdW5jdGlvbiBzZW5kKCkge1xuICBmZXRjaCgnL3Byb2ZpbGUnKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBpZiAoZGF0YS5lbWFpbCAmJiBkYXRhLnVzZXJuYW1lKSB7XG4gICAgICAgIGxldCBpZCA9IGRhdGEuaWQ7XG4gICAgICAgIHVzZXJuYW1lID0gZGF0YS51c2VybmFtZTtcbiAgICAgICAgcHJvZmlsZUljb24gPSBkYXRhLnByb2ZpbGVJY29uO1xuICAgICAgICBpZiAobWVzc2FnZUlucHV0LnZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gbWVzc2FnZUlucHV0LnZhbHVlO1xuICAgICAgICAgIGNvbnN0IGNoYXRVUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICB2YXIgZW5kcG9pbnQgPSBjaGF0VVJMLnNwbGl0KFwiL1wiKS5wb3AoKTtcbiAgICAgICAgICB2YXIgdGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgdGltZXN0YW1wID0gZm9ybWF0Q2hhdERhdGUodGltZXN0YW1wKVxuICAgICAgICAgIGxldCBmb3JtYXR0ZWRUaW1lc3RhbXAgPSB1cGRhdGVUaW1lc3RhbXAodGltZXN0YW1wKVxuICAgICAgICAgIHNvY2tldC5lbWl0KCdzZW5kLWNoYXQtbWVzc2FnZScsIHsgaWQsIHVzZXJuYW1lLCBtZXNzYWdlLCBwcm9maWxlSWNvbiwgZW5kcG9pbnQsIHRpbWVzdGFtcCwgZm9ybWF0dGVkVGltZXN0YW1wIH0pO1xuICAgICAgICAgIG1lc3NhZ2VJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgIH0pO1xufVxuXG5zb2NrZXQub24oJ2NoYXQtbWVzc2FnZScsIGRhdGEgPT4ge1xuICBpZiAoZGF0YS5jaGF0ID09IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiL1wiKS5wb3AoKSkge1xuICAgIGFwcGVuZFJpY2hNZXNzYWdlKGRhdGEubmFtZSwgZGF0YS5tZXNzYWdlLCBkYXRhLmljb24sIGRhdGEudGltZXN0YW1wKTtcbiAgfVxufSk7XG5cbnNvY2tldC5vbigndXNlci1jb25uZWN0ZWQnLCBuYW1lID0+IHtcbiAgYXBwZW5kTWVzc2FnZShgJHtuYW1lfSBjb25uZWN0ZWRgKTtcbn0pO1xuXG5zb2NrZXQub24oJ3VzZXItZGlzY29ubmVjdGVkJywgbmFtZSA9PiB7XG4gIGFwcGVuZE1lc3NhZ2UoYCR7bmFtZX0gZGlzY29ubmVjdGVkYCk7XG59KTtcblxuZnVuY3Rpb24gYXBwZW5kTWVzc2FnZShtZXNzYWdlKSB7XG4gIGNvbnN0IG1lc3NhZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lc3NhZ2VFbGVtZW50LmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gIG1lc3NhZ2VDb250YWluZXIuYXBwZW5kKG1lc3NhZ2VFbGVtZW50KTtcbiAgbWVzc2FnZUNvbnRhaW5lci5zY3JvbGxUb3AgPSBtZXNzYWdlQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcbn1cblxuZnVuY3Rpb24gYXBwZW5kUmljaE1lc3NhZ2UobmFtZSwgbWVzc2FnZXRleHQsIGljb24sIHRpbWVzdGFtcCkge1xuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZScpO1xuXG4gIC8vIENyZWF0ZSBwcm9maWxlIGljb24gZWxlbWVudFxuICBjb25zdCB1c2VySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICB1c2VySWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAvYXNzZXRzL1Byb2ZpbGUgSWNvbnMvJHtpY29ufWApO1xuICB1c2VySWNvbi5hbHQgPSAnUHJvZmlsZSBJY29uJztcbiAgdXNlckljb24uY2xhc3NMaXN0LmFkZCgncHJvZmlsZS1pY29uJyk7XG4gIG1lc3NhZ2UuYXBwZW5kQ2hpbGQodXNlckljb24pO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UtY29udGVudHMnKVxuICAvLyBDcmVhdGUgbmFtZSBhbmQgZGF0ZSBlbGVtZW50XG4gIGNvbnN0IG5hbWVEYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYW1lRGF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbmFtZS1kYXRlJyk7XG5cbiAgLy8gTmFtZSBlbGVtZW50XG4gIGNvbnN0IG5hbWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBuYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IG5hbWU7XG4gIG5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lc3NhZ2UtbmFtZScpO1xuICBuYW1lRGF0ZUVsZW1lbnQuYXBwZW5kQ2hpbGQobmFtZUVsZW1lbnQpO1xuXG4gIGNvbnN0IGRhdGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBkYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IHRpbWVzdGFtcDtcbiAgZGF0ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZS1kYXRlJyk7XG4gIG5hbWVEYXRlRWxlbWVudC5hcHBlbmRDaGlsZChkYXRlRWxlbWVudCk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChuYW1lRGF0ZUVsZW1lbnQpO1xuXG4gIC8vIENyZWF0ZSBtZXNzYWdlIHRleHQgZWxlbWVudFxuICBjb25zdCBtZXNzYWdlVGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG1lc3NhZ2VUZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IG1lc3NhZ2V0ZXh0O1xuICBtZXNzYWdlVGV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWVzc2FnZS10ZXh0Jyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVzc2FnZVRleHRFbGVtZW50KTtcblxuICBtZXNzYWdlLmFwcGVuZChjb250ZW50KVxuICBtZXNzYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICBtZXNzYWdlQ29udGFpbmVyLnNjcm9sbFRvcCA9IG1lc3NhZ2VDb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRDaGF0RGF0ZSh0aW1lc3RhbXApIHtcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBtZXNzYWdlRGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XG5cbiAgY29uc3QgbW9udGggPSBtZXNzYWdlRGF0ZS5nZXRNb250aCgpICsgMTtcbiAgY29uc3QgZGF5ID0gbWVzc2FnZURhdGUuZ2V0RGF0ZSgpO1xuICBjb25zdCB5ZWFyID0gbWVzc2FnZURhdGUuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgaG91cnMgPSBtZXNzYWdlRGF0ZS5nZXRIb3VycygpO1xuICBjb25zdCBtaW51dGVzID0gbWVzc2FnZURhdGUuZ2V0TWludXRlcygpO1xuICBjb25zdCBwZXJpb2QgPSBob3VycyA+PSAxMiA/ICdwbScgOiAnYW0nO1xuICBjb25zdCBmb3JtYXR0ZWRIb3VycyA9IGhvdXJzICUgMTIgfHwgMTI7IC8vIENvbnZlcnQgdG8gMTItaG91ciBmb3JtYXRcbiAgY29uc3QgZm9ybWF0dGVkTWludXRlcyA9IG1pbnV0ZXMgPCAxMCA/IGAwJHttaW51dGVzfWAgOiBtaW51dGVzOyAvLyBQYWQgbWludXRlcyB3aXRoIHplcm8gaWYgbmVlZGVkXG5cbiAgcmV0dXJuIGAke21vbnRofS8ke2RheX0vJHt5ZWFyfSBhdCAke2Zvcm1hdHRlZEhvdXJzfToke2Zvcm1hdHRlZE1pbnV0ZXN9JHtwZXJpb2R9YDtcbn1cblxuZXhwb3J0IHsgZm9ybWF0Q2hhdERhdGUsIGFwcGVuZFJpY2hNZXNzYWdlLCBhcHBlbmRNZXNzYWdlLCBjbG9zZVNldHVwIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJrZXkiLCJtY0NvbnNvbGVBY2Nlc3MiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJhbGxvd0FycmF5TGlrZSIsIml0IiwiQXJyYXkiLCJpc0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiRiIsIl9lIiwibm9ybWFsQ29tcGxldGlvbiIsImRpZEVyciIsImVyciIsInN0ZXAiLCJfZTIiLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiZnJvbSIsInRlc3QiLCJhcnIiLCJsZW4iLCJhcnIyIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJpbmZvIiwiZXJyb3IiLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsInVuZGVmaW5lZCIsImZvcm1hdENoYXREYXRlIiwiYXBwZW5kTWVzc2FnZSIsImFwcGVuZFJpY2hNZXNzYWdlIiwiY2xvc2VTZXR1cCIsImNoYXREaXNwbGF5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1lc3NhZ2VDb250YWluZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZmV0Y2giLCJyZXNwb25zZSIsIm9rIiwianNvbiIsImRhdGEiLCJlbWFpbCIsInVzZXJuYW1lIiwidXNlckVtYWlsIiwicHJvZmlsZVBpY3R1cmUiLCJwcm9maWxlSWNvbiIsInByb2ZpbGVQaWN0dXJlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImxvYWRSb29tcyIsInNldENoYXRCYWNrZ3JvdW5kIiwiY3JlYXRlR3JvdXBEbSIsImV2ZW50IiwiY2hhdE5hbWUiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZURhdGEiLCJncm91cERNIiwiY3JlYXRlZENoYXQiLCJjb25jYXQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJyZWRpcmVjdCIsInN0eWxlIiwidmlzaWJpbGl0eSIsImNoYXRDb250YWluZXIiLCJ1cmxJRE51bWJlciIsInJvb21zIiwiY3JlYXRlQ2hhdCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsImVuY3J5cHRlZFVybElEIiwiZ2V0IiwidXJsSUQiLCJDcnlwdG9KUyIsIkFFUyIsImRlY3J5cHQiLCJlbmMiLCJVdGY4IiwicGFyc2VJbnQiLCJjaGF0IiwiaW5kZXgiLCJjaGF0SUQiLCJjaGF0cyIsImNoYXRFbGVtZW50IiwiY3JlYXRlQ2hhdEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInNlbGVjdGVkQ2hhdCIsImluY2x1ZGVzIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImNoYXREaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2VydmVySWNvbiIsInRleHRDb250ZW50Iiwic2VsZWN0aW9uSXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaXRlbSIsInJlbW92ZSIsImljb25zIiwiaWNvbiIsImRpc3BsYXkiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJnZXRDaGF0IiwiY3JlYXRlQnV0dG9uIiwidGV4dCIsImNsaWNrSGFuZGxlciIsImJ1dHRvbiIsInBhbmVscyIsInBhbmVsIiwicXVlcnlTZWxlY3RvciIsInRvTG93ZXJDYXNlIiwibGFiZWwiLCJicmFuZGluZyIsImxhYmVscyIsInRleHRhcmVhIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiY3VycmVudEhlaWdodCIsImdldENvbXB1dGVkU3R5bGUiLCJoZWlnaHQiLCJfeCIsIl9nZXRDaGF0IiwiX2NhbGxlZSIsImVuZHBvaW50IiwibWVzc2FnZXNEYXRhIiwiX2l0ZXJhdG9yIiwiX3N0ZXAiLCJtZXNzYWdlRGF0YSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJjaGF0RGF0YSIsIkNoYXROYW1lIiwibWVzc2FnZXMiLCJtYXAiLCJtZXNzYWdlIiwiVXNlcm5hbWUiLCJ1c2VySWNvbiIsIlByb2ZpbGVJY29uIiwiZGF0ZVNlbnQiLCJEYXRlU2VudCIsInVwZGF0ZVRpbWVzdGFtcCIsImNvbnRlbnQiLCJDb250ZW50IiwidDAiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJmb3JtYXR0ZWRDdXJyZW50RGF0ZSIsInllc3RlcmRheSIsImZvcm1hdHRlZFllc3RlcmRheSIsInRpbWVzdGFtcERhdGUiLCJzcGxpdCIsImZvcm1hdHRlZFRpbWVzdGFtcERhdGUiLCJmb250cyIsInJlYWR5Iiwib3V0bGluZWRpY29ucyIsInBhdGhuYW1lIiwiY29sb3IiLCJjbGFzc05hbWUiLCJwb2ludGVyRXZlbnRzIiwiY2hhdEljb24iLCJzcmMiLCJ3aWR0aCIsImJhY2tncm91bmRDb2xvciIsImg2RWxlbWVudCIsInVzZXJTZWxlY3QiLCJzb2NrZXQiLCJpbyIsIm1lc3NhZ2VJbnB1dCIsIm5hdmJhciIsImNvbnRhaW5lciIsIm5hdmJhckhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRyaW0iLCJzaGlmdEtleSIsInNlbmQiLCJjcmVhdGVNZW51IiwiY29udGFpbnMiLCJzdG9wUHJvcGFnYXRpb24iLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJidXR0b25Cb3R0b20iLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJsZWZ0IiwiYm90dG9tIiwib25jbGljayIsInBvcHVwIiwidGFyZ2V0IiwiY2xvc2VQb3B1cCIsImNyZWF0ZUdyb3VwRE1CdXR0b24iLCJjcmVhdGVHcm91cERNIiwiZGFya092ZXJsYXlDaGVjayIsImRhcmtPdmVybGF5IiwidG9wIiwidHJhbnNmb3JtIiwiY2xvc2VHcm91cERNIiwic2VydmVyRHJvcGRvd24iLCJwcmV2ZW50RGVmYXVsdCIsImFuaW1hdGlvbk5hbWUiLCJjaGF0VVJMIiwidGltZXN0YW1wIiwiZ2V0VGltZSIsImZvcm1hdHRlZFRpbWVzdGFtcCIsImVtaXQiLCJvbiIsIm1lc3NhZ2VFbGVtZW50IiwiaW5uZXJUZXh0IiwiYXBwZW5kIiwic2Nyb2xsVG9wIiwibWVzc2FnZXRleHQiLCJhbHQiLCJuYW1lRGF0ZUVsZW1lbnQiLCJuYW1lRWxlbWVudCIsImRhdGVFbGVtZW50IiwibWVzc2FnZVRleHRFbGVtZW50IiwibWVzc2FnZURhdGUiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInBlcmlvZCIsImZvcm1hdHRlZEhvdXJzIiwiZm9ybWF0dGVkTWludXRlcyJdLCJzb3VyY2VSb290IjoiIn0=