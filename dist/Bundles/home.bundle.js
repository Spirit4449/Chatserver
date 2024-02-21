/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   centerElement: () => (/* binding */ centerElement),
/* harmony export */   closeSetup: () => (/* binding */ closeSetup),
/* harmony export */   formatChatDate: () => (/* binding */ formatChatDate),
/* harmony export */   updateTimestamp: () => (/* binding */ updateTimestamp)
/* harmony export */ });
/* harmony import */ var _onload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onload */ "./src/onload.js");

var chatDisplay = document.getElementById("chat-display");
var messageContainer = document.getElementById("message-container");
var chatContainer = document.getElementById("chat-container");
var membersList = document.getElementById("members-list");
var membersContainer = document.getElementById("members");
var welcomeMessage = document.getElementById("welcome-message");
var messageInput = document.getElementById('message-input');
var rateLimit = document.getElementById("rate-limit");
var rateLimitMessage = document.getElementById("rate-limit-message");
var chatNameLabel = document.getElementById('chat-name-label');
var darkOverlay = document.getElementById("dark-overlay");
var navbar = document.querySelector(".navbar");
var container = document.querySelector(".content");
var sidebar = document.getElementById("sidebar");
if (navbar && container && sidebar) {
  var navbarHeight = navbar.getBoundingClientRect().height;
  var sidebarWidth = sidebar.getBoundingClientRect().width;
  container.style.height = "calc(99vh - ".concat(navbarHeight, "px)");
  container.style.width = "calc(99vw - ".concat(sidebarWidth, "px)");
}
var create = document.getElementById("create-new");
var createMenu = document.getElementById("create");
create.addEventListener("click", function (event) {
  if (!create.classList.contains("animate-rotate")) {
    event.stopPropagation();
    create.classList.remove("animate-rotate-out");
    // Check if the 'animate-left' class is present
    if (createMenu.classList.contains("animate-left")) {
      createMenu.style.display = "none";
      createMenu.classList.remove("animate-left");
    } else {
      var offsetLeft = create.offsetLeft + create.offsetWidth + 8;
      var buttonBottom = create.offsetTop + create.offsetHeight;
      createMenu.style.left = offsetLeft + "px";
      createMenu.style.bottom = 50 + "px";
      createMenu.style.display = "block";
      createMenu.classList.add("animate-left");
      create.classList.add("animate-rotate");
    }
  }
  window.onclick = function (event) {
    var popup = document.getElementById("create");
    if (event.target !== popup && !popup.contains(event.target) && popup.style.display === "block") {
      closePopup(popup);
    }
  };
});
var createGroupDMButton = document.getElementById("create-group-dm");
createGroupDMButton.addEventListener("click", function (event) {
  event.stopPropagation();
  var createGroupDM = document.getElementById("group-dm");
  createGroupDM.style.display = "block";
  darkOverlay.style.display = "block";
  var chatName = document.getElementById('chat-name');
  chatName.focus();
  closePopup(document.getElementById("create"));
  chatNameLabel.style.color = "#cdcdcd";
  chatNameLabel.textContent = "Chat Name";
  var closeGroupDM = document.getElementById("close-groupdm");
  closeGroupDM.addEventListener("click", function (event) {
    closeSetup(createGroupDM);
    chatNameLabel.style.color = "#cdcdcd";
    chatNameLabel.textContent = "Chat Name";
  });
  window.addEventListener("mousedown", function (event) {
    var groupDMStyles = window.getComputedStyle(createGroupDM);
    var rateLimitStyles = window.getComputedStyle(rateLimit);
    if (event.target !== createGroupDM && !createGroupDM.contains(event.target) && groupDMStyles.display === "block" && rateLimitStyles.display === "none") {
      closeSetup(createGroupDM);
    }
  });
});
var createGroupDm = document.getElementById("groupdm-create");
createGroupDm.addEventListener("click", function (event) {
  var chatNameElement = document.getElementById("chat-name");
  var chatName = chatNameElement.value;
  console.log(chatName);
  if (chatName !== "") {
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
      } else if (response.status === 429) {
        rateLimitMessage.textContent = "You are creating too many servers. Try again in a few minutes";
        rateLimit.style.display = "block";
        darkOverlay.style.zIndex = "4";
        throw new Error("Too many requests");
      } else {
        throw new Error("Network response was not ok.");
      }
    }).then(function (responseData) {
      var groupDM = document.getElementById("group-dm");
      closeSetup(groupDM);
      chatNameLabel.style.color = "#cdcdcd";
      chatNameLabel.textContent = "Chat Name";
      chatName.value = "";
      var createdChat = createChatElement(chatName, responseData.id);
      chatContainer.insertBefore(createdChat, chatContainer.firstChild);
      console.log(createdChat);
      (0,_onload__WEBPACK_IMPORTED_MODULE_0__.redirect)(responseData.id, createdChat);
      createdChat.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    })["catch"](function (error) {
      console.error("Error creating chat:", error);
    });
  } else {
    chatNameLabel.style.color = "#fa777c";
    chatNameLabel.textContent = "Chat Name - please provide a name";
  }
});
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
var person = document.getElementById("person");
person.addEventListener("click", function (event) {
  console.log(membersContainer.style.width);
  if (membersContainer.style.width === "0px") {
    membersContainer.style.width = "18%";
    membersContainer.style.borderLeft = "1px solid #414043";
    person.classList.add("toggled");
  } else {
    membersContainer.style.width = "0";
    membersContainer.style.borderLeft = "none";
    person.classList.remove("toggled");
  }
});
var rateLimitButton = document.getElementById("rate-limit-button");
rateLimitButton.addEventListener("click", function (event) {
  rateLimit.classList.add("zoomout");
  rateLimit.addEventListener("animationend", function (event) {
    if (event.animationName === "zoomOut") {
      rateLimit.classList.remove("zoomout");
      rateLimit.style.display = "none";
      if (document.getElementById("group-dm").style.display === "block") {
        darkOverlay.style.zIndex = "3";
      } else {
        event.stopPropagation();
        messageInput.focus();
        darkOverlay.style.display = "none";
      }
    }
  });
});
var serverDropdown = document.getElementById("server-options");
serverDropdown.addEventListener("click", function (event) {
  event.preventDefault();
});
var textarea = document.getElementById("message-input");
var messageInputContainer = document.getElementById("message-input-container");
var messages = document.getElementById("messages");
messageInputContainer.style.height = "".concat(textarea.scrollHeight, "px");
textarea.addEventListener("input", function (event) {
  textarea.style.height = "auto"; // Reset height to allow it to shrink
  messageInputContainer.style.height = "auto"; // Reset container height
  var newHeight = "".concat(textarea.scrollHeight, "px"); // Get the new height
  var newHeightPercent = parseInt(newHeight) * 100 / messages.clientHeight;
  if (newHeightPercent <= 50) {
    // Assuming MAX_HEIGHT is the maximum height for messageInputContainer
    textarea.style.height = newHeight; // Set textarea height
    messageInputContainer.style.height = newHeight; // Set container height
  } else {
    textarea.style.height = "".concat(100, "%"); // Set textarea to max height
    messageInputContainer.style.height = "".concat(50, "%"); // Set container to max height
  }
});
function closeSetup(popup) {
  popup.classList.add("zoomout");
  popup.addEventListener("animationend", function (event) {
    if (event.animationName === "zoomOut") {
      popup.classList.remove("zoomout");
      popup.style.display = "none";
    }
  });
  darkOverlay.style.display = "none";
}
function closePopup(popup) {
  document.getElementById("chat-name").value = "";
  popup.style.display = "none";
  popup.classList.remove("animate-left");
  var create = document.getElementById("create-new");
  create.classList.remove("animate-rotate");
  create.classList.add("animate-rotate-out");
}
function updateTimestamp(text) {
  var currentDate = new Date();
  var formattedCurrentDate = formatChatDate(currentDate);
  var yesterday = new Date(currentDate - 86400000);
  var formattedYesterday = formatChatDate(yesterday);
  var timestampDate = new Date(text.split(" ")[0]);
  var formattedTimestampDate = formatChatDate(timestampDate);
  if (text.split(" ")[0] === formattedCurrentDate.split(" ")[0]) {
    return "Today at ".concat(text.split(" ")[2]);
  } else if (text.split(" ")[0] === formattedYesterday.split(" ")[0]) {
    return "Yesterday at ".concat(text.split(" ")[2]);
  }
  return text;
}
function formatChatDate(timestamp) {
  var currentDate = new Date();
  var messageDate = new Date(timestamp);
  var month = messageDate.getMonth() + 1;
  var day = messageDate.getDate();
  var year = messageDate.getFullYear();
  var hours = messageDate.getHours();
  var minutes = messageDate.getMinutes();
  var period = hours >= 12 ? "pm" : "am";
  var formattedHours = hours % 12 || 12; // Convert to 12-hour format
  var formattedMinutes = minutes < 10 ? "0".concat(minutes) : minutes; // Pad minutes with zero if needed

  return "".concat(month, "/").concat(day, "/").concat(year, " at ").concat(formattedHours, ":").concat(formattedMinutes).concat(period);
}
function centerElement(element, container) {
  var boundingClient = container.getBoundingClientRect();
  var centerX = boundingClient.left + boundingClient.width / 2;
  var centerY = boundingClient.top + boundingClient.height / 2;
  element.style.left = centerX - element.offsetWidth / 2 + "px";
  element.style.top = centerY - element.offsetHeight / 2 + "px";
}

// Make fonts visible once the document loads to prevent span text showing on reload
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


/***/ }),

/***/ "./src/onload.js":
/*!***********************!*\
  !*** ./src/onload.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   redirect: () => (/* binding */ redirect)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


// Get profile data
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
    profilePictureElement.setAttribute("src", "/assets/Profile Icons/".concat(profilePicture));
  } else {
    window.location.href = "/login";
  }
});
loadRooms();
setChatBackground();

// Onload functions
function loadRooms() {
  fetch("/get-rooms").then(function (response) {
    return response.json();
  }).then(function (data) {
    var urlIDNumber;
    if (data.rooms.length === 0) {
      // Create enough blank chats to fill up most of the chat element
      // To do - create a function that can calculate how many blank chats to create
      createBlankChat("#2A2A2A");
      createBlankChat("#292929");
      createBlankChat("#282828");
      createBlankChat("#272727");
      createBlankChat("#262626");
      createBlankChat("#252525");
      createBlankChat("#242424");
      createBlankChat("#232323");
      createBlankChat("#1d1d1d");
    } else {
      var urlParams = new URLSearchParams(window.location.search);
      var encryptedUrlID = urlParams.get("chatID");
      if (encryptedUrlID) {
        var urlID = CryptoJS.AES.decrypt(encryptedUrlID, key).toString(CryptoJS.enc.Utf8);
        urlIDNumber = urlID ? parseInt(urlID, 10) : null;
      }
      data.rooms.forEach(function (chat, index) {
        var chatID = data.chats[index];
        var chatElement = createBlankChatElement(chat, chatID);
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
function createBlankChatElement(chat, chatID) {
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
  chatName.style.overflow = "hidden";
  chatDiv.appendChild(chatName);
  chatDiv.addEventListener("click", function () {
    redirect(chatID, chatDiv);
  });
  var hoverTimeout;
  chatDiv.addEventListener("mouseenter", function () {
    function showHoverDiv() {
      var hoverDiv = document.createElement("div");
      hoverDiv.textContent = chat;
      hoverDiv.style.position = "absolute";
      hoverDiv.style.background = "#2E2E2E";
      hoverDiv.style.color = "#D4D4D4";
      hoverDiv.style.padding = "3px 8px";
      hoverDiv.style.borderRadius = "10px";
      hoverDiv.style.maxWidth = "200px";
      hoverDiv.style.overflowWrap = "anywhere";
      var rect = chatDiv.getBoundingClientRect();
      var centerX = rect.left + rect.width / 2;
      var top = rect.top;
      document.body.appendChild(hoverDiv);
      hoverDiv.style.left = centerX - hoverDiv.clientWidth / 2 + "px";
      hoverDiv.style.top = top - hoverDiv.clientHeight - 5 + "px";
      chatDiv.hoverDiv = hoverDiv;
    }
    if (chatName.scrollWidth > chatName.clientWidth) {
      hoverTimeout = setTimeout(showHoverDiv, 1000);
    }
  });
  chatDiv.addEventListener("mouseleave", function () {
    clearTimeout(hoverTimeout);
    if (chatDiv.hoverDiv) {
      chatDiv.hoverDiv.remove();
      chatDiv.hoverDiv = null; // Remove the reference
    }
  });
  chatContainer.addEventListener("scroll", function () {
    if (chatDiv.hoverDiv) {
      chatDiv.hoverDiv.remove();
      chatDiv.hoverDiv = null;
    }
  });
  return chatDiv;
}
function createBlankChat(color) {
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
  h6Element.style.borderRadius = "10px";
  chatElement.appendChild(chatIcon);
  chatElement.appendChild(h6Element);
  document.getElementById("chat-container").appendChild(chatElement);
}

// Dynamic javasciprt when choosing chats
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
  if (membersContainer.style.visibility === "hidden") {
    membersContainer.style.visibility = "visible";
  }
  welcomeMessage.style.visibility = "hidden";
  document.getElementById("no-chat-selected").style.display = "none";

  // Remove all children from chats
  var child = messageContainer.firstElementChild;
  while (child) {
    var nextSibling = child.nextElementSibling;
    if (child.id !== "welcome-message") {
      messageContainer.removeChild(child);
    }
    child = nextSibling;
  }

  // Remove all children from members
  while (membersList.firstChild) {
    membersList.removeChild(membersList.firstChild);
  }
  getChat(chatID);
  getUsers(chatID);
}
function getChat(_x) {
  return _getChat.apply(this, arguments);
}
function _getChat() {
  _getChat = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(endpoint) {
    var loadingTimer, loading, addLoadingSpinner, response, data, messagesData, _iterator, _step, messageData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          addLoadingSpinner = function _addLoadingSpinner() {
            loading = document.getElementById("loading");
            loading.style.display = "block";
            (0,_home__WEBPACK_IMPORTED_MODULE_0__.centerElement)(loading, messageContainer);
            window.addEventListener("resize", function (event) {
              (0,_home__WEBPACK_IMPORTED_MODULE_0__.centerElement)(loading, messageContainer);
            });
          }; // Function to add loading spinner after a delay
          // Start a timer to add loading spinner after 500 milliseconds
          loadingTimer = setTimeout(addLoadingSpinner, 700);
          if (!window.location.href.includes("chat")) {
            _context.next = 30;
            break;
          }
          _context.prev = 3;
          _context.next = 6;
          return fetch("/getchat/".concat(endpoint));
        case 6:
          response = _context.sent;
          if (!response.ok) {
            _context.next = 22;
            break;
          }
          clearTimeout(loadingTimer);
          _context.next = 11;
          return response.json();
        case 11:
          data = _context.sent;
          document.getElementById("chat-name-header").textContent = data.chatData.ChatName;
          document.getElementById("welcome-name").textContent = data.chatData.ChatName;
          document.getElementById("message-input").setAttribute("placeholder", "Message ".concat(data.chatData.ChatName, "..."));
          messagesData = data.messages.map(function (message) {
            var username = message.Username || "Unknown";
            var userIcon = message.ProfileIcon || "/assets/Profile Icons/unknownProfileIcon.png";
            var dateSent = message.DateSent || "";
            dateSent = (0,_home__WEBPACK_IMPORTED_MODULE_0__.updateTimestamp)(dateSent);
            return {
              username: username,
              content: message.Content,
              userIcon: userIcon,
              dateSent: dateSent
            };
          }); // Now that all messages are loaded, make the chat container visible
          if (loading) {
            messageContainer.removeChild(loading);
          }
          welcomeMessage.style.visibility = "visible";
          _iterator = _createForOfIteratorHelper(messagesData);
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              messageData = _step.value;
              appendRichMessage(messageData.username, messageData.content, messageData.userIcon, messageData.dateSent, false);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          _context.next = 23;
          break;
        case 22:
          // If there's an error with the main chat data fetch, make the chat container visible
          if (loading) {}
        case 23:
          _context.next = 29;
          break;
        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](3);
          console.error("Error fetching chat data:", _context.t0);
          // If there's an error with the main chat data fetch, make the chat container visible
          if (loading) {
            messageContainer.removeChild(loading);
          }
        case 29:
          textarea.focus();
        case 30:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 25]]);
  }));
  return _getChat.apply(this, arguments);
}
function getUsers(_x2) {
  return _getUsers.apply(this, arguments);
}
function _getUsers() {
  _getUsers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(endpoint) {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          fetch("/get-users/".concat(endpoint), {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            }
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            var members = data.users;
            members.forEach(function (member) {
              var username = member["Username"];
              var profileIcon = member["ProfileIcon"];
              var div = document.createElement("div");
              div.classList.add("member");
              var profileIconImage = document.createElement("img");
              profileIconImage.setAttribute("src", "/assets/Profile Icons/".concat(profileIcon));
              profileIconImage.classList.add("profile-icon");
              var usernameElement = document.createElement("h6");
              usernameElement.textContent = username;
              div.appendChild(profileIconImage);
              div.appendChild(usernameElement);
              membersList.appendChild(div);
            });
          })["catch"](function (error) {
            console.error("Error:", error);
          });
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _getUsers.apply(this, arguments);
}
function setChatBackground() {
  // Check if the current URL is "/home"
  if (window.location.pathname === "/home") {
    // Hide the chat header
    chatDisplay.style.visibility = "hidden";
    membersContainer.style.visibility = "hidden";
    var icons = chatDisplay.querySelectorAll(".material-symbols-rounded");
    icons.forEach(function (icon) {
      icon.style.visibility = "hidden";
    });
  }
  document.getElementById("no-chat-selected").style.display = "block";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBRXBDLElBQUlDLFdBQVcsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsY0FBYyxDQUFDO0FBQ3pELElBQU1DLGdCQUFnQixHQUFHRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztBQUNyRSxJQUFNRSxhQUFhLEdBQUdILFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGdCQUFnQixDQUFDO0FBQy9ELElBQU1HLFdBQVcsR0FBR0osUUFBUSxDQUFDQyxjQUFjLENBQUMsY0FBYyxDQUFDO0FBQzNELElBQU1JLGdCQUFnQixHQUFHTCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUM7QUFDM0QsSUFBTUssY0FBYyxHQUFHTixRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztBQUNqRSxJQUFNTSxZQUFZLEdBQUdQLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGVBQWUsQ0FBQztBQUU3RCxJQUFNTyxTQUFTLEdBQUdSLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQztBQUN2RCxJQUFNUSxnQkFBZ0IsR0FBR1QsUUFBUSxDQUFDQyxjQUFjLENBQUMsb0JBQW9CLENBQUM7QUFFdEUsSUFBTVMsYUFBYSxHQUFHVixRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztBQUVoRSxJQUFNVSxXQUFXLEdBQUdYLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGNBQWMsQ0FBQztBQUUzRCxJQUFNVyxNQUFNLEdBQUdaLFFBQVEsQ0FBQ2EsYUFBYSxDQUFDLFNBQVMsQ0FBQztBQUNoRCxJQUFNQyxTQUFTLEdBQUdkLFFBQVEsQ0FBQ2EsYUFBYSxDQUFDLFVBQVUsQ0FBQztBQUNwRCxJQUFNRSxPQUFPLEdBQUdmLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFNBQVMsQ0FBQztBQUVsRCxJQUFJVyxNQUFNLElBQUlFLFNBQVMsSUFBSUMsT0FBTyxFQUFFO0VBQ2xDLElBQU1DLFlBQVksR0FBR0osTUFBTSxDQUFDSyxxQkFBcUIsQ0FBQyxDQUFDLENBQUNDLE1BQU07RUFDMUQsSUFBTUMsWUFBWSxHQUFHSixPQUFPLENBQUNFLHFCQUFxQixDQUFDLENBQUMsQ0FBQ0csS0FBSztFQUMxRE4sU0FBUyxDQUFDTyxLQUFLLENBQUNILE1BQU0sa0JBQUFJLE1BQUEsQ0FBa0JOLFlBQVksUUFBSztFQUN6REYsU0FBUyxDQUFDTyxLQUFLLENBQUNELEtBQUssa0JBQUFFLE1BQUEsQ0FBa0JILFlBQVksUUFBSztBQUMxRDtBQUVBLElBQU1JLE1BQU0sR0FBR3ZCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFlBQVksQ0FBQztBQUNwRCxJQUFNdUIsVUFBVSxHQUFHeEIsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDO0FBRXBEc0IsTUFBTSxDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVUMsS0FBSyxFQUFFO0VBQ2hELElBQUksQ0FBQ0gsTUFBTSxDQUFDSSxTQUFTLENBQUNDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO0lBQ2hERixLQUFLLENBQUNHLGVBQWUsQ0FBQyxDQUFDO0lBQ3ZCTixNQUFNLENBQUNJLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLG9CQUFvQixDQUFDO0lBQzdDO0lBQ0EsSUFBSU4sVUFBVSxDQUFDRyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtNQUNqREosVUFBVSxDQUFDSCxLQUFLLENBQUNVLE9BQU8sR0FBRyxNQUFNO01BQ2pDUCxVQUFVLENBQUNHLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUM3QyxDQUFDLE1BQU07TUFDTCxJQUFJRSxVQUFVLEdBQUdULE1BQU0sQ0FBQ1MsVUFBVSxHQUFHVCxNQUFNLENBQUNVLFdBQVcsR0FBRyxDQUFDO01BQzNELElBQUlDLFlBQVksR0FBR1gsTUFBTSxDQUFDWSxTQUFTLEdBQUdaLE1BQU0sQ0FBQ2EsWUFBWTtNQUN6RFosVUFBVSxDQUFDSCxLQUFLLENBQUNnQixJQUFJLEdBQUdMLFVBQVUsR0FBRyxJQUFJO01BQ3pDUixVQUFVLENBQUNILEtBQUssQ0FBQ2lCLE1BQU0sR0FBRyxFQUFFLEdBQUcsSUFBSTtNQUNuQ2QsVUFBVSxDQUFDSCxLQUFLLENBQUNVLE9BQU8sR0FBRyxPQUFPO01BQ2xDUCxVQUFVLENBQUNHLFNBQVMsQ0FBQ1ksR0FBRyxDQUFDLGNBQWMsQ0FBQztNQUN4Q2hCLE1BQU0sQ0FBQ0ksU0FBUyxDQUFDWSxHQUFHLENBQUMsZ0JBQWdCLENBQUM7SUFDeEM7RUFDRjtFQUNBQyxNQUFNLENBQUNDLE9BQU8sR0FBRyxVQUFVZixLQUFLLEVBQUU7SUFDaEMsSUFBSWdCLEtBQUssR0FBRzFDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQztJQUM3QyxJQUNFeUIsS0FBSyxDQUFDaUIsTUFBTSxLQUFLRCxLQUFLLElBQ3RCLENBQUNBLEtBQUssQ0FBQ2QsUUFBUSxDQUFDRixLQUFLLENBQUNpQixNQUFNLENBQUMsSUFDN0JELEtBQUssQ0FBQ3JCLEtBQUssQ0FBQ1UsT0FBTyxLQUFLLE9BQU8sRUFDL0I7TUFDQWEsVUFBVSxDQUFDRixLQUFLLENBQUM7SUFDbkI7RUFDRixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsSUFBTUcsbUJBQW1CLEdBQUc3QyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztBQUN0RTRDLG1CQUFtQixDQUFDcEIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVDLEtBQUssRUFBRTtFQUM3REEsS0FBSyxDQUFDRyxlQUFlLENBQUMsQ0FBQztFQUN2QixJQUFNaUIsYUFBYSxHQUFHOUMsUUFBUSxDQUFDQyxjQUFjLENBQUMsVUFBVSxDQUFDO0VBQ3pENkMsYUFBYSxDQUFDekIsS0FBSyxDQUFDVSxPQUFPLEdBQUcsT0FBTztFQUNyQ3BCLFdBQVcsQ0FBQ1UsS0FBSyxDQUFDVSxPQUFPLEdBQUcsT0FBTztFQUNuQyxJQUFNZ0IsUUFBUSxHQUFHL0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDO0VBQ3JEOEMsUUFBUSxDQUFDQyxLQUFLLENBQUMsQ0FBQztFQUNoQkosVUFBVSxDQUFDNUMsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7RUFDN0NTLGFBQWEsQ0FBQ1csS0FBSyxDQUFDNEIsS0FBSyxHQUFHLFNBQVM7RUFDckN2QyxhQUFhLENBQUN3QyxXQUFXLEdBQUcsV0FBVztFQUN2QyxJQUFNQyxZQUFZLEdBQUduRCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxlQUFlLENBQUM7RUFDN0RrRCxZQUFZLENBQUMxQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVUMsS0FBSyxFQUFFO0lBQ3REMEIsVUFBVSxDQUFDTixhQUFhLENBQUM7SUFDekJwQyxhQUFhLENBQUNXLEtBQUssQ0FBQzRCLEtBQUssR0FBRyxTQUFTO0lBQ3JDdkMsYUFBYSxDQUFDd0MsV0FBVyxHQUFHLFdBQVc7RUFDekMsQ0FBQyxDQUFDO0VBQ0ZWLE1BQU0sQ0FBQ2YsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQVVDLEtBQUssRUFBRTtJQUNwRCxJQUFNMkIsYUFBYSxHQUFHYixNQUFNLENBQUNjLGdCQUFnQixDQUFDUixhQUFhLENBQUM7SUFDNUQsSUFBTVMsZUFBZSxHQUFHZixNQUFNLENBQUNjLGdCQUFnQixDQUFDOUMsU0FBUyxDQUFDO0lBQzFELElBQ0VrQixLQUFLLENBQUNpQixNQUFNLEtBQUtHLGFBQWEsSUFDOUIsQ0FBQ0EsYUFBYSxDQUFDbEIsUUFBUSxDQUFDRixLQUFLLENBQUNpQixNQUFNLENBQUMsSUFDckNVLGFBQWEsQ0FBQ3RCLE9BQU8sS0FBSyxPQUFPLElBQ2pDd0IsZUFBZSxDQUFDeEIsT0FBTyxLQUFLLE1BQU0sRUFDbEM7TUFDQXFCLFVBQVUsQ0FBQ04sYUFBYSxDQUFDO0lBQzNCO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsSUFBTVUsYUFBYSxHQUFHeEQsUUFBUSxDQUFDQyxjQUFjLENBQUMsZ0JBQWdCLENBQUM7QUFFL0R1RCxhQUFhLENBQUMvQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO0VBQ2pELElBQU0rQixlQUFlLEdBQUd6RCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUM7RUFDNUQsSUFBTThDLFFBQVEsR0FBR1UsZUFBZSxDQUFDQyxLQUFLO0VBQ3RDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2IsUUFBUSxDQUFDO0VBQ3JCLElBQUlBLFFBQVEsS0FBSyxFQUFFLEVBQUU7SUFDbkIsSUFBTWMsSUFBSSxHQUFHO01BQ1hDLElBQUksRUFBRWY7SUFDUixDQUFDO0lBRURnQixLQUFLLENBQUMsT0FBTyxFQUFFO01BQ2JDLE1BQU0sRUFBRSxNQUFNO01BQ2RDLE9BQU8sRUFBRTtRQUNQLGNBQWMsRUFBRTtNQUNsQixDQUFDO01BQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNQLElBQUk7SUFDM0IsQ0FBQyxDQUFDLENBQ0NRLElBQUksQ0FBQyxVQUFDQyxRQUFRLEVBQUs7TUFDbEIsSUFBSUEsUUFBUSxDQUFDQyxFQUFFLEVBQUU7UUFDZixPQUFPRCxRQUFRLENBQUNFLElBQUksQ0FBQyxDQUFDO01BQ3hCLENBQUMsTUFBTSxJQUFJRixRQUFRLENBQUNHLE1BQU0sS0FBSyxHQUFHLEVBQUU7UUFDbENoRSxnQkFBZ0IsQ0FBQ3lDLFdBQVcsR0FDMUIsK0RBQStEO1FBQ2pFMUMsU0FBUyxDQUFDYSxLQUFLLENBQUNVLE9BQU8sR0FBRyxPQUFPO1FBQ2pDcEIsV0FBVyxDQUFDVSxLQUFLLENBQUNxRCxNQUFNLEdBQUcsR0FBRztRQUM5QixNQUFNLElBQUlDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztNQUN0QyxDQUFDLE1BQU07UUFDTCxNQUFNLElBQUlBLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQztNQUNqRDtJQUNGLENBQUMsQ0FBQyxDQUNETixJQUFJLENBQUMsVUFBQ08sWUFBWSxFQUFLO01BQ3RCLElBQU1DLE9BQU8sR0FBRzdFLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQztNQUNuRG1ELFVBQVUsQ0FBQ3lCLE9BQU8sQ0FBQztNQUNuQm5FLGFBQWEsQ0FBQ1csS0FBSyxDQUFDNEIsS0FBSyxHQUFHLFNBQVM7TUFDckN2QyxhQUFhLENBQUN3QyxXQUFXLEdBQUcsV0FBVztNQUN2Q0gsUUFBUSxDQUFDVyxLQUFLLEdBQUcsRUFBRTtNQUNuQixJQUFNb0IsV0FBVyxHQUFHQyxpQkFBaUIsQ0FBQ2hDLFFBQVEsRUFBRTZCLFlBQVksQ0FBQ0ksRUFBRSxDQUFDO01BQ2hFN0UsYUFBYSxDQUFDOEUsWUFBWSxDQUFDSCxXQUFXLEVBQUUzRSxhQUFhLENBQUMrRSxVQUFVLENBQUM7TUFDakV2QixPQUFPLENBQUNDLEdBQUcsQ0FBQ2tCLFdBQVcsQ0FBQztNQUN4QmhGLGlEQUFRLENBQUM4RSxZQUFZLENBQUNJLEVBQUUsRUFBRUYsV0FBVyxDQUFDO01BQ3RDQSxXQUFXLENBQUNLLGNBQWMsQ0FBQztRQUFFQyxRQUFRLEVBQUUsUUFBUTtRQUFFQyxLQUFLLEVBQUU7TUFBUyxDQUFDLENBQUM7SUFDckUsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFDQyxLQUFLLEVBQUs7TUFDaEIzQixPQUFPLENBQUMyQixLQUFLLENBQUMsc0JBQXNCLEVBQUVBLEtBQUssQ0FBQztJQUM5QyxDQUFDLENBQUM7RUFDTixDQUFDLE1BQU07SUFDTDVFLGFBQWEsQ0FBQ1csS0FBSyxDQUFDNEIsS0FBSyxHQUFHLFNBQVM7SUFDckN2QyxhQUFhLENBQUN3QyxXQUFXLEdBQUcsbUNBQW1DO0VBQ2pFO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsSUFBTXFDLE1BQU0sR0FBR3ZGLFFBQVEsQ0FBQ3dGLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztBQUNsREQsTUFBTSxDQUFDRSxPQUFPLENBQUMsVUFBQ0MsS0FBSyxFQUFLO0VBQ3hCLElBQU1DLElBQUksR0FBR0QsS0FBSyxDQUNmN0UsYUFBYSxDQUFDLDJCQUEyQixDQUFDLENBQzFDcUMsV0FBVyxDQUFDMEMsV0FBVyxDQUFDLENBQUM7RUFDNUIsSUFBSUQsSUFBSSxLQUFLLE1BQU0sRUFBRTtJQUNuQkQsS0FBSyxDQUFDN0UsYUFBYSxDQUFDLDJCQUEyQixDQUFDLENBQUNjLFNBQVMsQ0FBQ1ksR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUMxRSxJQUFNc0QsS0FBSyxHQUFHSCxLQUFLLENBQUM3RSxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQzFDLElBQUlnRixLQUFLLEVBQUU7TUFDVEEsS0FBSyxDQUFDbEUsU0FBUyxDQUFDWSxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQ2pDO0VBQ0Y7QUFDRixDQUFDLENBQUM7QUFFRixJQUFNdUQsUUFBUSxHQUFHOUYsUUFBUSxDQUFDQyxjQUFjLENBQUMsVUFBVSxDQUFDO0FBQ3BENkYsUUFBUSxDQUFDckUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDdkNlLE1BQU0sQ0FBQ3VELFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLE9BQU87QUFDaEMsQ0FBQyxDQUFDO0FBQ0YsSUFBTUMsTUFBTSxHQUFHakcsUUFBUSxDQUFDd0YsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO0FBRXhERCxNQUFNLENBQUNFLE9BQU8sQ0FBQyxVQUFDQyxLQUFLLEVBQUVRLEtBQUssRUFBSztFQUMvQlIsS0FBSyxDQUFDakUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7SUFDMUM7SUFDQXpCLFFBQVEsQ0FDTHdGLGdCQUFnQixDQUFDLGtDQUFrQyxDQUFDLENBQ3BEQyxPQUFPLENBQUMsVUFBQ1UsSUFBSTtNQUFBLE9BQUtBLElBQUksQ0FBQ3hFLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLFVBQVUsQ0FBQztJQUFBLEVBQUM7SUFDdkRtRSxNQUFNLENBQUNSLE9BQU8sQ0FBQyxVQUFDVyxDQUFDO01BQUEsT0FBS0EsQ0FBQyxDQUFDekUsU0FBUyxDQUFDRyxNQUFNLENBQUMsVUFBVSxDQUFDO0lBQUEsRUFBQzs7SUFFckQ7SUFDQTRELEtBQUssQ0FBQzdFLGFBQWEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDYyxTQUFTLENBQUNZLEdBQUcsQ0FBQyxVQUFVLENBQUM7SUFDMUUwRCxNQUFNLENBQUNDLEtBQUssQ0FBQyxDQUFDdkUsU0FBUyxDQUFDWSxHQUFHLENBQUMsVUFBVSxDQUFDO0VBQ3pDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLElBQU04RCxNQUFNLEdBQUdyRyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxRQUFRLENBQUM7QUFDaERvRyxNQUFNLENBQUM1RSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO0VBQzFDaUMsT0FBTyxDQUFDQyxHQUFHLENBQUN2RCxnQkFBZ0IsQ0FBQ2dCLEtBQUssQ0FBQ0QsS0FBSyxDQUFDO0VBQ3pDLElBQUlmLGdCQUFnQixDQUFDZ0IsS0FBSyxDQUFDRCxLQUFLLEtBQUssS0FBSyxFQUFFO0lBQzFDZixnQkFBZ0IsQ0FBQ2dCLEtBQUssQ0FBQ0QsS0FBSyxHQUFHLEtBQUs7SUFDcENmLGdCQUFnQixDQUFDZ0IsS0FBSyxDQUFDaUYsVUFBVSxHQUFHLG1CQUFtQjtJQUN2REQsTUFBTSxDQUFDMUUsU0FBUyxDQUFDWSxHQUFHLENBQUMsU0FBUyxDQUFDO0VBQ2pDLENBQUMsTUFBTTtJQUNMbEMsZ0JBQWdCLENBQUNnQixLQUFLLENBQUNELEtBQUssR0FBRyxHQUFHO0lBQ2xDZixnQkFBZ0IsQ0FBQ2dCLEtBQUssQ0FBQ2lGLFVBQVUsR0FBRyxNQUFNO0lBQzFDRCxNQUFNLENBQUMxRSxTQUFTLENBQUNHLE1BQU0sQ0FBQyxTQUFTLENBQUM7RUFDcEM7QUFDRixDQUFDLENBQUM7QUFFRixJQUFNeUUsZUFBZSxHQUFHdkcsUUFBUSxDQUFDQyxjQUFjLENBQUMsbUJBQW1CLENBQUM7QUFDcEVzRyxlQUFlLENBQUM5RSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO0VBQ25EbEIsU0FBUyxDQUFDbUIsU0FBUyxDQUFDWSxHQUFHLENBQUMsU0FBUyxDQUFDO0VBQ2xDL0IsU0FBUyxDQUFDaUIsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLFVBQVVDLEtBQUssRUFBRTtJQUMxRCxJQUFJQSxLQUFLLENBQUM4RSxhQUFhLEtBQUssU0FBUyxFQUFFO01BQ3JDaEcsU0FBUyxDQUFDbUIsU0FBUyxDQUFDRyxNQUFNLENBQUMsU0FBUyxDQUFDO01BQ3JDdEIsU0FBUyxDQUFDYSxLQUFLLENBQUNVLE9BQU8sR0FBRyxNQUFNO01BQ2hDLElBQUkvQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQ29CLEtBQUssQ0FBQ1UsT0FBTyxLQUFLLE9BQU8sRUFBRTtRQUNqRXBCLFdBQVcsQ0FBQ1UsS0FBSyxDQUFDcUQsTUFBTSxHQUFHLEdBQUc7TUFDaEMsQ0FBQyxNQUFNO1FBQ0xoRCxLQUFLLENBQUNHLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZCdEIsWUFBWSxDQUFDeUMsS0FBSyxDQUFDLENBQUM7UUFDcEJyQyxXQUFXLENBQUNVLEtBQUssQ0FBQ1UsT0FBTyxHQUFHLE1BQU07TUFDcEM7SUFDRjtFQUNGLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLElBQU0wRSxjQUFjLEdBQUd6RyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQztBQUNoRXdHLGNBQWMsQ0FBQ2hGLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVQyxLQUFLLEVBQUU7RUFDeERBLEtBQUssQ0FBQ2dGLGNBQWMsQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQUVGLElBQU1DLFFBQVEsR0FBRzNHLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGVBQWUsQ0FBQztBQUN6RCxJQUFNMkcscUJBQXFCLEdBQUc1RyxRQUFRLENBQUNDLGNBQWMsQ0FDbkQseUJBQ0YsQ0FBQztBQUNELElBQU00RyxRQUFRLEdBQUc3RyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxVQUFVLENBQUM7QUFFcEQyRyxxQkFBcUIsQ0FBQ3ZGLEtBQUssQ0FBQ0gsTUFBTSxNQUFBSSxNQUFBLENBQU1xRixRQUFRLENBQUNHLFlBQVksT0FBSTtBQUVqRUgsUUFBUSxDQUFDbEYsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVDLEtBQUssRUFBRTtFQUNsRGlGLFFBQVEsQ0FBQ3RGLEtBQUssQ0FBQ0gsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0VBQ2hDMEYscUJBQXFCLENBQUN2RixLQUFLLENBQUNILE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQztFQUM3QyxJQUFNNkYsU0FBUyxNQUFBekYsTUFBQSxDQUFNcUYsUUFBUSxDQUFDRyxZQUFZLE9BQUksQ0FBQyxDQUFDO0VBQ2hELElBQU1FLGdCQUFnQixHQUFJQyxRQUFRLENBQUNGLFNBQVMsQ0FBQyxHQUFHLEdBQUcsR0FBSUYsUUFBUSxDQUFDSyxZQUFZO0VBRTVFLElBQUlGLGdCQUFnQixJQUFJLEVBQUUsRUFBRTtJQUMxQjtJQUNBTCxRQUFRLENBQUN0RixLQUFLLENBQUNILE1BQU0sR0FBRzZGLFNBQVMsQ0FBQyxDQUFDO0lBQ25DSCxxQkFBcUIsQ0FBQ3ZGLEtBQUssQ0FBQ0gsTUFBTSxHQUFHNkYsU0FBUyxDQUFDLENBQUM7RUFDbEQsQ0FBQyxNQUFNO0lBQ0xKLFFBQVEsQ0FBQ3RGLEtBQUssQ0FBQ0gsTUFBTSxNQUFBSSxNQUFBLENBQU0sR0FBRyxNQUFHLENBQUMsQ0FBQztJQUNuQ3NGLHFCQUFxQixDQUFDdkYsS0FBSyxDQUFDSCxNQUFNLE1BQUFJLE1BQUEsQ0FBTSxFQUFFLE1BQUcsQ0FBQyxDQUFDO0VBQ2pEO0FBQ0YsQ0FBQyxDQUFDO0FBRUYsU0FBUzhCLFVBQVVBLENBQUNWLEtBQUssRUFBRTtFQUN6QkEsS0FBSyxDQUFDZixTQUFTLENBQUNZLEdBQUcsQ0FBQyxTQUFTLENBQUM7RUFDOUJHLEtBQUssQ0FBQ2pCLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxVQUFVQyxLQUFLLEVBQUU7SUFDdEQsSUFBSUEsS0FBSyxDQUFDOEUsYUFBYSxLQUFLLFNBQVMsRUFBRTtNQUNyQzlELEtBQUssQ0FBQ2YsU0FBUyxDQUFDRyxNQUFNLENBQUMsU0FBUyxDQUFDO01BQ2pDWSxLQUFLLENBQUNyQixLQUFLLENBQUNVLE9BQU8sR0FBRyxNQUFNO0lBQzlCO0VBQ0YsQ0FBQyxDQUFDO0VBQ0ZwQixXQUFXLENBQUNVLEtBQUssQ0FBQ1UsT0FBTyxHQUFHLE1BQU07QUFDcEM7QUFFQSxTQUFTYSxVQUFVQSxDQUFDRixLQUFLLEVBQUU7RUFDekIxQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQ3lELEtBQUssR0FBRyxFQUFFO0VBQy9DaEIsS0FBSyxDQUFDckIsS0FBSyxDQUFDVSxPQUFPLEdBQUcsTUFBTTtFQUM1QlcsS0FBSyxDQUFDZixTQUFTLENBQUNHLE1BQU0sQ0FBQyxjQUFjLENBQUM7RUFDdEMsSUFBSVAsTUFBTSxHQUFHdkIsUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDO0VBQ2xEc0IsTUFBTSxDQUFDSSxTQUFTLENBQUNHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztFQUN6Q1AsTUFBTSxDQUFDSSxTQUFTLENBQUNZLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztBQUM1QztBQUVBLFNBQVM0RSxlQUFlQSxDQUFDeEIsSUFBSSxFQUFFO0VBQzdCLElBQU15QixXQUFXLEdBQUcsSUFBSUMsSUFBSSxDQUFDLENBQUM7RUFDOUIsSUFBTUMsb0JBQW9CLEdBQUdDLGNBQWMsQ0FBQ0gsV0FBVyxDQUFDO0VBQ3hELElBQU1JLFNBQVMsR0FBRyxJQUFJSCxJQUFJLENBQUNELFdBQVcsR0FBRyxRQUFRLENBQUM7RUFDbEQsSUFBTUssa0JBQWtCLEdBQUdGLGNBQWMsQ0FBQ0MsU0FBUyxDQUFDO0VBRXBELElBQU1FLGFBQWEsR0FBRyxJQUFJTCxJQUFJLENBQUMxQixJQUFJLENBQUNnQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFFbEQsSUFBTUMsc0JBQXNCLEdBQUdMLGNBQWMsQ0FBQ0csYUFBYSxDQUFDO0VBRTVELElBQUkvQixJQUFJLENBQUNnQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUtMLG9CQUFvQixDQUFDSyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDN0QsbUJBQUFyRyxNQUFBLENBQW1CcUUsSUFBSSxDQUFDZ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUN2QyxDQUFDLE1BQU0sSUFBSWhDLElBQUksQ0FBQ2dDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBS0Ysa0JBQWtCLENBQUNFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNsRSx1QkFBQXJHLE1BQUEsQ0FBdUJxRSxJQUFJLENBQUNnQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQzNDO0VBRUEsT0FBT2hDLElBQUk7QUFDYjtBQUVBLFNBQVM0QixjQUFjQSxDQUFDTSxTQUFTLEVBQUU7RUFDakMsSUFBTVQsV0FBVyxHQUFHLElBQUlDLElBQUksQ0FBQyxDQUFDO0VBQzlCLElBQU1TLFdBQVcsR0FBRyxJQUFJVCxJQUFJLENBQUNRLFNBQVMsQ0FBQztFQUV2QyxJQUFNRSxLQUFLLEdBQUdELFdBQVcsQ0FBQ0UsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDO0VBQ3hDLElBQU1DLEdBQUcsR0FBR0gsV0FBVyxDQUFDSSxPQUFPLENBQUMsQ0FBQztFQUNqQyxJQUFNQyxJQUFJLEdBQUdMLFdBQVcsQ0FBQ00sV0FBVyxDQUFDLENBQUM7RUFDdEMsSUFBTUMsS0FBSyxHQUFHUCxXQUFXLENBQUNRLFFBQVEsQ0FBQyxDQUFDO0VBQ3BDLElBQU1DLE9BQU8sR0FBR1QsV0FBVyxDQUFDVSxVQUFVLENBQUMsQ0FBQztFQUN4QyxJQUFNQyxNQUFNLEdBQUdKLEtBQUssSUFBSSxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUk7RUFDeEMsSUFBTUssY0FBYyxHQUFHTCxLQUFLLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0VBQ3pDLElBQU1NLGdCQUFnQixHQUFHSixPQUFPLEdBQUcsRUFBRSxPQUFBakgsTUFBQSxDQUFPaUgsT0FBTyxJQUFLQSxPQUFPLENBQUMsQ0FBQzs7RUFFakUsVUFBQWpILE1BQUEsQ0FBVXlHLEtBQUssT0FBQXpHLE1BQUEsQ0FBSTJHLEdBQUcsT0FBQTNHLE1BQUEsQ0FBSTZHLElBQUksVUFBQTdHLE1BQUEsQ0FBT29ILGNBQWMsT0FBQXBILE1BQUEsQ0FBSXFILGdCQUFnQixFQUFBckgsTUFBQSxDQUFHbUgsTUFBTTtBQUNsRjtBQUVBLFNBQVNHLGFBQWFBLENBQUNDLE9BQU8sRUFBRS9ILFNBQVMsRUFBRTtFQUN6QyxJQUFJZ0ksY0FBYyxHQUFHaEksU0FBUyxDQUFDRyxxQkFBcUIsQ0FBQyxDQUFDO0VBQ3RELElBQUk4SCxPQUFPLEdBQUdELGNBQWMsQ0FBQ3pHLElBQUksR0FBR3lHLGNBQWMsQ0FBQzFILEtBQUssR0FBRyxDQUFDO0VBQzVELElBQUk0SCxPQUFPLEdBQUdGLGNBQWMsQ0FBQ0csR0FBRyxHQUFHSCxjQUFjLENBQUM1SCxNQUFNLEdBQUcsQ0FBQztFQUU1RDJILE9BQU8sQ0FBQ3hILEtBQUssQ0FBQ2dCLElBQUksR0FBRzBHLE9BQU8sR0FBR0YsT0FBTyxDQUFDNUcsV0FBVyxHQUFHLENBQUMsR0FBRyxJQUFJO0VBQzdENEcsT0FBTyxDQUFDeEgsS0FBSyxDQUFDNEgsR0FBRyxHQUFHRCxPQUFPLEdBQUdILE9BQU8sQ0FBQ3pHLFlBQVksR0FBRyxDQUFDLEdBQUcsSUFBSTtBQUMvRDs7QUFFQTtBQUNBcEMsUUFBUSxDQUFDa0osS0FBSyxDQUFDQyxLQUFLLENBQUM5RSxJQUFJLENBQUMsWUFBTTtFQUM5QixJQUFNK0UsS0FBSyxHQUFHcEosUUFBUSxDQUFDd0YsZ0JBQWdCLENBQUMsMkJBQTJCLENBQUM7RUFDcEU0RCxLQUFLLENBQUMzRCxPQUFPLENBQUMsVUFBQ1UsSUFBSSxFQUFLO0lBQ3RCQSxJQUFJLENBQUN4RSxTQUFTLENBQUNZLEdBQUcsQ0FBQyxhQUFhLENBQUM7RUFDbkMsQ0FBQyxDQUFDO0VBQ0YsSUFBTThHLGFBQWEsR0FBR3JKLFFBQVEsQ0FBQ3dGLGdCQUFnQixDQUFDLDRCQUE0QixDQUFDO0VBQzdFNkQsYUFBYSxDQUFDNUQsT0FBTyxDQUFDLFVBQUNVLElBQUksRUFBSztJQUM5QkEsSUFBSSxDQUFDOUUsS0FBSyxDQUFDaUksVUFBVSxHQUFHLFNBQVM7RUFDbkMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OzsrQ0N4VEYscUpBQUFDLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFoRyxLQUFBLEtBQUF1RyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxhQUFBLHVCQUFBQyxDQUFBLEdBQUFOLENBQUEsQ0FBQU8sV0FBQSw4QkFBQUMsT0FBQWhCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFDLE1BQUEsQ0FBQUssY0FBQSxDQUFBUCxDQUFBLEVBQUFELENBQUEsSUFBQTlGLEtBQUEsRUFBQWdHLENBQUEsRUFBQWdCLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFuQixDQUFBLENBQUFELENBQUEsV0FBQWlCLE1BQUEsbUJBQUFoQixDQUFBLElBQUFnQixNQUFBLFlBQUFBLE9BQUFoQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxnQkFBQW1CLEtBQUFwQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFJLENBQUEsR0FBQVQsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFNBQUEsWUFBQWtCLFNBQUEsR0FBQXRCLENBQUEsR0FBQXNCLFNBQUEsRUFBQVgsQ0FBQSxHQUFBUixNQUFBLENBQUFwSSxNQUFBLENBQUEwSSxDQUFBLENBQUFMLFNBQUEsR0FBQVMsQ0FBQSxPQUFBVSxPQUFBLENBQUFsQixDQUFBLGdCQUFBRSxDQUFBLENBQUFJLENBQUEsZUFBQXpHLEtBQUEsRUFBQXNILGdCQUFBLENBQUF2QixDQUFBLEVBQUFDLENBQUEsRUFBQVcsQ0FBQSxNQUFBRixDQUFBLGFBQUFjLFNBQUF4QixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxtQkFBQXdCLElBQUEsWUFBQUMsR0FBQSxFQUFBMUIsQ0FBQSxDQUFBMkIsSUFBQSxDQUFBNUIsQ0FBQSxFQUFBRSxDQUFBLGNBQUFELENBQUEsYUFBQXlCLElBQUEsV0FBQUMsR0FBQSxFQUFBMUIsQ0FBQSxRQUFBRCxDQUFBLENBQUFxQixJQUFBLEdBQUFBLElBQUEsTUFBQVEsQ0FBQSxxQkFBQWpGLENBQUEscUJBQUFrRixDQUFBLGdCQUFBQyxDQUFBLGdCQUFBQyxDQUFBLGdCQUFBVixVQUFBLGNBQUFXLGtCQUFBLGNBQUFDLDJCQUFBLFNBQUFDLENBQUEsT0FBQWxCLE1BQUEsQ0FBQWtCLENBQUEsRUFBQXhCLENBQUEscUNBQUF5QixDQUFBLEdBQUFqQyxNQUFBLENBQUFrQyxjQUFBLEVBQUFDLENBQUEsR0FBQUYsQ0FBQSxJQUFBQSxDQUFBLENBQUFBLENBQUEsQ0FBQUcsTUFBQSxRQUFBRCxDQUFBLElBQUFBLENBQUEsS0FBQXBDLENBQUEsSUFBQUcsQ0FBQSxDQUFBdUIsSUFBQSxDQUFBVSxDQUFBLEVBQUEzQixDQUFBLE1BQUF3QixDQUFBLEdBQUFHLENBQUEsT0FBQUUsQ0FBQSxHQUFBTiwwQkFBQSxDQUFBOUIsU0FBQSxHQUFBa0IsU0FBQSxDQUFBbEIsU0FBQSxHQUFBRCxNQUFBLENBQUFwSSxNQUFBLENBQUFvSyxDQUFBLFlBQUFNLHNCQUFBeEMsQ0FBQSxnQ0FBQWhFLE9BQUEsV0FBQStELENBQUEsSUFBQWlCLE1BQUEsQ0FBQWhCLENBQUEsRUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGdCQUFBeUMsT0FBQSxDQUFBMUMsQ0FBQSxFQUFBQyxDQUFBLHNCQUFBMEMsY0FBQTFDLENBQUEsRUFBQUQsQ0FBQSxhQUFBNEMsT0FBQTFDLENBQUEsRUFBQUssQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxHQUFBWSxRQUFBLENBQUF4QixDQUFBLENBQUFDLENBQUEsR0FBQUQsQ0FBQSxFQUFBTSxDQUFBLG1CQUFBTSxDQUFBLENBQUFhLElBQUEsUUFBQVgsQ0FBQSxHQUFBRixDQUFBLENBQUFjLEdBQUEsRUFBQUUsQ0FBQSxHQUFBZCxDQUFBLENBQUE3RyxLQUFBLFNBQUEySCxDQUFBLGdCQUFBZ0IsT0FBQSxDQUFBaEIsQ0FBQSxLQUFBeEIsQ0FBQSxDQUFBdUIsSUFBQSxDQUFBQyxDQUFBLGVBQUE3QixDQUFBLENBQUE4QyxPQUFBLENBQUFqQixDQUFBLENBQUFrQixPQUFBLEVBQUFsSSxJQUFBLFdBQUFvRixDQUFBLElBQUEyQyxNQUFBLFNBQUEzQyxDQUFBLEVBQUFRLENBQUEsRUFBQUUsQ0FBQSxnQkFBQVYsQ0FBQSxJQUFBMkMsTUFBQSxVQUFBM0MsQ0FBQSxFQUFBUSxDQUFBLEVBQUFFLENBQUEsUUFBQVgsQ0FBQSxDQUFBOEMsT0FBQSxDQUFBakIsQ0FBQSxFQUFBaEgsSUFBQSxXQUFBb0YsQ0FBQSxJQUFBYyxDQUFBLENBQUE3RyxLQUFBLEdBQUErRixDQUFBLEVBQUFRLENBQUEsQ0FBQU0sQ0FBQSxnQkFBQWQsQ0FBQSxXQUFBMkMsTUFBQSxVQUFBM0MsQ0FBQSxFQUFBUSxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxDQUFBRSxDQUFBLENBQUFjLEdBQUEsU0FBQXpCLENBQUEsRUFBQUssQ0FBQSxvQkFBQXJHLEtBQUEsV0FBQUEsTUFBQStGLENBQUEsRUFBQUksQ0FBQSxhQUFBMkMsMkJBQUEsZUFBQWhELENBQUEsV0FBQUEsQ0FBQSxFQUFBRSxDQUFBLElBQUEwQyxNQUFBLENBQUEzQyxDQUFBLEVBQUFJLENBQUEsRUFBQUwsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBQSxDQUFBLEdBQUFBLENBQUEsR0FBQUEsQ0FBQSxDQUFBckYsSUFBQSxDQUFBbUksMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUF4QixpQkFBQXhCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFFLENBQUEsR0FBQXNCLENBQUEsbUJBQUFwQixDQUFBLEVBQUFFLENBQUEsUUFBQUosQ0FBQSxLQUFBdUIsQ0FBQSxZQUFBM0csS0FBQSxzQ0FBQW9GLENBQUEsS0FBQXdCLENBQUEsb0JBQUF0QixDQUFBLFFBQUFFLENBQUEsV0FBQXpHLEtBQUEsRUFBQStGLENBQUEsRUFBQWdELElBQUEsZUFBQTVDLENBQUEsQ0FBQTdGLE1BQUEsR0FBQWlHLENBQUEsRUFBQUosQ0FBQSxDQUFBc0IsR0FBQSxHQUFBaEIsQ0FBQSxVQUFBRSxDQUFBLEdBQUFSLENBQUEsQ0FBQTZDLFFBQUEsTUFBQXJDLENBQUEsUUFBQUUsQ0FBQSxHQUFBb0MsbUJBQUEsQ0FBQXRDLENBQUEsRUFBQVIsQ0FBQSxPQUFBVSxDQUFBLFFBQUFBLENBQUEsS0FBQWlCLENBQUEsbUJBQUFqQixDQUFBLHFCQUFBVixDQUFBLENBQUE3RixNQUFBLEVBQUE2RixDQUFBLENBQUErQyxJQUFBLEdBQUEvQyxDQUFBLENBQUFnRCxLQUFBLEdBQUFoRCxDQUFBLENBQUFzQixHQUFBLHNCQUFBdEIsQ0FBQSxDQUFBN0YsTUFBQSxRQUFBK0YsQ0FBQSxLQUFBc0IsQ0FBQSxRQUFBdEIsQ0FBQSxHQUFBd0IsQ0FBQSxFQUFBMUIsQ0FBQSxDQUFBc0IsR0FBQSxFQUFBdEIsQ0FBQSxDQUFBaUQsaUJBQUEsQ0FBQWpELENBQUEsQ0FBQXNCLEdBQUEsdUJBQUF0QixDQUFBLENBQUE3RixNQUFBLElBQUE2RixDQUFBLENBQUFrRCxNQUFBLFdBQUFsRCxDQUFBLENBQUFzQixHQUFBLEdBQUFwQixDQUFBLEdBQUF1QixDQUFBLE1BQUFLLENBQUEsR0FBQVYsUUFBQSxDQUFBekIsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsb0JBQUE4QixDQUFBLENBQUFULElBQUEsUUFBQW5CLENBQUEsR0FBQUYsQ0FBQSxDQUFBNEMsSUFBQSxHQUFBbEIsQ0FBQSxHQUFBbkYsQ0FBQSxFQUFBdUYsQ0FBQSxDQUFBUixHQUFBLEtBQUFLLENBQUEscUJBQUE5SCxLQUFBLEVBQUFpSSxDQUFBLENBQUFSLEdBQUEsRUFBQXNCLElBQUEsRUFBQTVDLENBQUEsQ0FBQTRDLElBQUEsa0JBQUFkLENBQUEsQ0FBQVQsSUFBQSxLQUFBbkIsQ0FBQSxHQUFBd0IsQ0FBQSxFQUFBMUIsQ0FBQSxDQUFBN0YsTUFBQSxZQUFBNkYsQ0FBQSxDQUFBc0IsR0FBQSxHQUFBUSxDQUFBLENBQUFSLEdBQUEsbUJBQUF3QixvQkFBQW5ELENBQUEsRUFBQUUsQ0FBQSxRQUFBRyxDQUFBLEdBQUFILENBQUEsQ0FBQTFGLE1BQUEsRUFBQStGLENBQUEsR0FBQVAsQ0FBQSxDQUFBWSxRQUFBLENBQUFQLENBQUEsT0FBQUUsQ0FBQSxLQUFBTixDQUFBLFNBQUFDLENBQUEsQ0FBQWdELFFBQUEscUJBQUE3QyxDQUFBLElBQUFMLENBQUEsQ0FBQVksUUFBQSxlQUFBVixDQUFBLENBQUExRixNQUFBLGFBQUEwRixDQUFBLENBQUF5QixHQUFBLEdBQUExQixDQUFBLEVBQUFrRCxtQkFBQSxDQUFBbkQsQ0FBQSxFQUFBRSxDQUFBLGVBQUFBLENBQUEsQ0FBQTFGLE1BQUEsa0JBQUE2RixDQUFBLEtBQUFILENBQUEsQ0FBQTFGLE1BQUEsWUFBQTBGLENBQUEsQ0FBQXlCLEdBQUEsT0FBQTZCLFNBQUEsdUNBQUFuRCxDQUFBLGlCQUFBMkIsQ0FBQSxNQUFBdkIsQ0FBQSxHQUFBZ0IsUUFBQSxDQUFBbEIsQ0FBQSxFQUFBUCxDQUFBLENBQUFZLFFBQUEsRUFBQVYsQ0FBQSxDQUFBeUIsR0FBQSxtQkFBQWxCLENBQUEsQ0FBQWlCLElBQUEsU0FBQXhCLENBQUEsQ0FBQTFGLE1BQUEsWUFBQTBGLENBQUEsQ0FBQXlCLEdBQUEsR0FBQWxCLENBQUEsQ0FBQWtCLEdBQUEsRUFBQXpCLENBQUEsQ0FBQWdELFFBQUEsU0FBQWxCLENBQUEsTUFBQXJCLENBQUEsR0FBQUYsQ0FBQSxDQUFBa0IsR0FBQSxTQUFBaEIsQ0FBQSxHQUFBQSxDQUFBLENBQUFzQyxJQUFBLElBQUEvQyxDQUFBLENBQUFGLENBQUEsQ0FBQXlELFVBQUEsSUFBQTlDLENBQUEsQ0FBQXpHLEtBQUEsRUFBQWdHLENBQUEsQ0FBQXdELElBQUEsR0FBQTFELENBQUEsQ0FBQTJELE9BQUEsZUFBQXpELENBQUEsQ0FBQTFGLE1BQUEsS0FBQTBGLENBQUEsQ0FBQTFGLE1BQUEsV0FBQTBGLENBQUEsQ0FBQXlCLEdBQUEsR0FBQTFCLENBQUEsR0FBQUMsQ0FBQSxDQUFBZ0QsUUFBQSxTQUFBbEIsQ0FBQSxJQUFBckIsQ0FBQSxJQUFBVCxDQUFBLENBQUExRixNQUFBLFlBQUEwRixDQUFBLENBQUF5QixHQUFBLE9BQUE2QixTQUFBLHNDQUFBdEQsQ0FBQSxDQUFBZ0QsUUFBQSxTQUFBbEIsQ0FBQSxjQUFBNEIsYUFBQTNELENBQUEsUUFBQUQsQ0FBQSxLQUFBNkQsTUFBQSxFQUFBNUQsQ0FBQSxZQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQThELFFBQUEsR0FBQTdELENBQUEsV0FBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUErRCxVQUFBLEdBQUE5RCxDQUFBLEtBQUFELENBQUEsQ0FBQWdFLFFBQUEsR0FBQS9ELENBQUEsV0FBQWdFLFVBQUEsQ0FBQUMsSUFBQSxDQUFBbEUsQ0FBQSxjQUFBbUUsY0FBQWxFLENBQUEsUUFBQUQsQ0FBQSxHQUFBQyxDQUFBLENBQUFtRSxVQUFBLFFBQUFwRSxDQUFBLENBQUEwQixJQUFBLG9CQUFBMUIsQ0FBQSxDQUFBMkIsR0FBQSxFQUFBMUIsQ0FBQSxDQUFBbUUsVUFBQSxHQUFBcEUsQ0FBQSxhQUFBdUIsUUFBQXRCLENBQUEsU0FBQWdFLFVBQUEsTUFBQUosTUFBQSxhQUFBNUQsQ0FBQSxDQUFBaEUsT0FBQSxDQUFBMkgsWUFBQSxjQUFBUyxLQUFBLGlCQUFBOUIsT0FBQXZDLENBQUEsUUFBQUEsQ0FBQSxXQUFBQSxDQUFBLFFBQUFFLENBQUEsR0FBQUYsQ0FBQSxDQUFBVyxDQUFBLE9BQUFULENBQUEsU0FBQUEsQ0FBQSxDQUFBMEIsSUFBQSxDQUFBNUIsQ0FBQSw0QkFBQUEsQ0FBQSxDQUFBMEQsSUFBQSxTQUFBMUQsQ0FBQSxPQUFBc0UsS0FBQSxDQUFBdEUsQ0FBQSxDQUFBdUUsTUFBQSxTQUFBaEUsQ0FBQSxPQUFBRSxDQUFBLFlBQUFpRCxLQUFBLGFBQUFuRCxDQUFBLEdBQUFQLENBQUEsQ0FBQXVFLE1BQUEsT0FBQWxFLENBQUEsQ0FBQXVCLElBQUEsQ0FBQTVCLENBQUEsRUFBQU8sQ0FBQSxVQUFBbUQsSUFBQSxDQUFBeEosS0FBQSxHQUFBOEYsQ0FBQSxDQUFBTyxDQUFBLEdBQUFtRCxJQUFBLENBQUFULElBQUEsT0FBQVMsSUFBQSxTQUFBQSxJQUFBLENBQUF4SixLQUFBLEdBQUErRixDQUFBLEVBQUF5RCxJQUFBLENBQUFULElBQUEsT0FBQVMsSUFBQSxZQUFBakQsQ0FBQSxDQUFBaUQsSUFBQSxHQUFBakQsQ0FBQSxnQkFBQStDLFNBQUEsQ0FBQVgsT0FBQSxDQUFBN0MsQ0FBQSxrQ0FBQWlDLGlCQUFBLENBQUE3QixTQUFBLEdBQUE4QiwwQkFBQSxFQUFBM0IsQ0FBQSxDQUFBaUMsQ0FBQSxtQkFBQXRJLEtBQUEsRUFBQWdJLDBCQUFBLEVBQUFmLFlBQUEsU0FBQVosQ0FBQSxDQUFBMkIsMEJBQUEsbUJBQUFoSSxLQUFBLEVBQUErSCxpQkFBQSxFQUFBZCxZQUFBLFNBQUFjLGlCQUFBLENBQUF1QyxXQUFBLEdBQUF2RCxNQUFBLENBQUFpQiwwQkFBQSxFQUFBbkIsQ0FBQSx3QkFBQWYsQ0FBQSxDQUFBeUUsbUJBQUEsYUFBQXhFLENBQUEsUUFBQUQsQ0FBQSx3QkFBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUF5RSxXQUFBLFdBQUExRSxDQUFBLEtBQUFBLENBQUEsS0FBQWlDLGlCQUFBLDZCQUFBakMsQ0FBQSxDQUFBd0UsV0FBQSxJQUFBeEUsQ0FBQSxDQUFBMUYsSUFBQSxPQUFBMEYsQ0FBQSxDQUFBMkUsSUFBQSxhQUFBMUUsQ0FBQSxXQUFBRSxNQUFBLENBQUF5RSxjQUFBLEdBQUF6RSxNQUFBLENBQUF5RSxjQUFBLENBQUEzRSxDQUFBLEVBQUFpQywwQkFBQSxLQUFBakMsQ0FBQSxDQUFBNEUsU0FBQSxHQUFBM0MsMEJBQUEsRUFBQWpCLE1BQUEsQ0FBQWhCLENBQUEsRUFBQWMsQ0FBQSx5QkFBQWQsQ0FBQSxDQUFBRyxTQUFBLEdBQUFELE1BQUEsQ0FBQXBJLE1BQUEsQ0FBQXlLLENBQUEsR0FBQXZDLENBQUEsS0FBQUQsQ0FBQSxDQUFBOEUsS0FBQSxhQUFBN0UsQ0FBQSxhQUFBOEMsT0FBQSxFQUFBOUMsQ0FBQSxPQUFBd0MscUJBQUEsQ0FBQUUsYUFBQSxDQUFBdkMsU0FBQSxHQUFBYSxNQUFBLENBQUEwQixhQUFBLENBQUF2QyxTQUFBLEVBQUFTLENBQUEsaUNBQUFiLENBQUEsQ0FBQTJDLGFBQUEsR0FBQUEsYUFBQSxFQUFBM0MsQ0FBQSxDQUFBK0UsS0FBQSxhQUFBOUUsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLGVBQUFBLENBQUEsS0FBQUEsQ0FBQSxHQUFBdUUsT0FBQSxPQUFBckUsQ0FBQSxPQUFBZ0MsYUFBQSxDQUFBdEIsSUFBQSxDQUFBcEIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxHQUFBRSxDQUFBLFVBQUFULENBQUEsQ0FBQXlFLG1CQUFBLENBQUF2RSxDQUFBLElBQUFTLENBQUEsR0FBQUEsQ0FBQSxDQUFBK0MsSUFBQSxHQUFBN0ksSUFBQSxXQUFBb0YsQ0FBQSxXQUFBQSxDQUFBLENBQUFnRCxJQUFBLEdBQUFoRCxDQUFBLENBQUEvRixLQUFBLEdBQUF5RyxDQUFBLENBQUErQyxJQUFBLFdBQUFqQixxQkFBQSxDQUFBRCxDQUFBLEdBQUF2QixNQUFBLENBQUF1QixDQUFBLEVBQUF6QixDQUFBLGdCQUFBRSxNQUFBLENBQUF1QixDQUFBLEVBQUE3QixDQUFBLGlDQUFBTSxNQUFBLENBQUF1QixDQUFBLDZEQUFBeEMsQ0FBQSxDQUFBaUYsSUFBQSxhQUFBaEYsQ0FBQSxRQUFBRCxDQUFBLEdBQUFHLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBQyxDQUFBLGdCQUFBRyxDQUFBLElBQUFMLENBQUEsRUFBQUUsQ0FBQSxDQUFBZ0UsSUFBQSxDQUFBN0QsQ0FBQSxVQUFBSCxDQUFBLENBQUFnRixPQUFBLGFBQUF4QixLQUFBLFdBQUF4RCxDQUFBLENBQUFxRSxNQUFBLFNBQUF0RSxDQUFBLEdBQUFDLENBQUEsQ0FBQWlGLEdBQUEsUUFBQWxGLENBQUEsSUFBQUQsQ0FBQSxTQUFBMEQsSUFBQSxDQUFBeEosS0FBQSxHQUFBK0YsQ0FBQSxFQUFBeUQsSUFBQSxDQUFBVCxJQUFBLE9BQUFTLElBQUEsV0FBQUEsSUFBQSxDQUFBVCxJQUFBLE9BQUFTLElBQUEsUUFBQTFELENBQUEsQ0FBQXVDLE1BQUEsR0FBQUEsTUFBQSxFQUFBaEIsT0FBQSxDQUFBbkIsU0FBQSxLQUFBc0UsV0FBQSxFQUFBbkQsT0FBQSxFQUFBOEMsS0FBQSxXQUFBQSxNQUFBckUsQ0FBQSxhQUFBb0YsSUFBQSxXQUFBMUIsSUFBQSxXQUFBTixJQUFBLFFBQUFDLEtBQUEsR0FBQXBELENBQUEsT0FBQWdELElBQUEsWUFBQUMsUUFBQSxjQUFBMUksTUFBQSxnQkFBQW1ILEdBQUEsR0FBQTFCLENBQUEsT0FBQWdFLFVBQUEsQ0FBQWhJLE9BQUEsQ0FBQWtJLGFBQUEsSUFBQW5FLENBQUEsV0FBQUUsQ0FBQSxrQkFBQUEsQ0FBQSxDQUFBbUYsTUFBQSxPQUFBaEYsQ0FBQSxDQUFBdUIsSUFBQSxPQUFBMUIsQ0FBQSxNQUFBb0UsS0FBQSxFQUFBcEUsQ0FBQSxDQUFBb0YsS0FBQSxjQUFBcEYsQ0FBQSxJQUFBRCxDQUFBLE1BQUFzRixJQUFBLFdBQUFBLEtBQUEsU0FBQXRDLElBQUEsV0FBQWhELENBQUEsUUFBQWdFLFVBQUEsSUFBQUcsVUFBQSxrQkFBQW5FLENBQUEsQ0FBQXlCLElBQUEsUUFBQXpCLENBQUEsQ0FBQTBCLEdBQUEsY0FBQTZELElBQUEsS0FBQWxDLGlCQUFBLFdBQUFBLGtCQUFBdEQsQ0FBQSxhQUFBaUQsSUFBQSxRQUFBakQsQ0FBQSxNQUFBRSxDQUFBLGtCQUFBdUYsT0FBQXBGLENBQUEsRUFBQUUsQ0FBQSxXQUFBSSxDQUFBLENBQUFlLElBQUEsWUFBQWYsQ0FBQSxDQUFBZ0IsR0FBQSxHQUFBM0IsQ0FBQSxFQUFBRSxDQUFBLENBQUF3RCxJQUFBLEdBQUFyRCxDQUFBLEVBQUFFLENBQUEsS0FBQUwsQ0FBQSxDQUFBMUYsTUFBQSxXQUFBMEYsQ0FBQSxDQUFBeUIsR0FBQSxHQUFBMUIsQ0FBQSxLQUFBTSxDQUFBLGFBQUFBLENBQUEsUUFBQTBELFVBQUEsQ0FBQU0sTUFBQSxNQUFBaEUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXdELFVBQUEsQ0FBQTFELENBQUEsR0FBQUksQ0FBQSxHQUFBRixDQUFBLENBQUEyRCxVQUFBLGlCQUFBM0QsQ0FBQSxDQUFBb0QsTUFBQSxTQUFBNEIsTUFBQSxhQUFBaEYsQ0FBQSxDQUFBb0QsTUFBQSxTQUFBdUIsSUFBQSxRQUFBdkUsQ0FBQSxHQUFBUixDQUFBLENBQUF1QixJQUFBLENBQUFuQixDQUFBLGVBQUFNLENBQUEsR0FBQVYsQ0FBQSxDQUFBdUIsSUFBQSxDQUFBbkIsQ0FBQSxxQkFBQUksQ0FBQSxJQUFBRSxDQUFBLGFBQUFxRSxJQUFBLEdBQUEzRSxDQUFBLENBQUFxRCxRQUFBLFNBQUEyQixNQUFBLENBQUFoRixDQUFBLENBQUFxRCxRQUFBLGdCQUFBc0IsSUFBQSxHQUFBM0UsQ0FBQSxDQUFBc0QsVUFBQSxTQUFBMEIsTUFBQSxDQUFBaEYsQ0FBQSxDQUFBc0QsVUFBQSxjQUFBbEQsQ0FBQSxhQUFBdUUsSUFBQSxHQUFBM0UsQ0FBQSxDQUFBcUQsUUFBQSxTQUFBMkIsTUFBQSxDQUFBaEYsQ0FBQSxDQUFBcUQsUUFBQSxxQkFBQS9DLENBQUEsWUFBQTVGLEtBQUEscURBQUFpSyxJQUFBLEdBQUEzRSxDQUFBLENBQUFzRCxVQUFBLFNBQUEwQixNQUFBLENBQUFoRixDQUFBLENBQUFzRCxVQUFBLFlBQUFSLE1BQUEsV0FBQUEsT0FBQXRELENBQUEsRUFBQUQsQ0FBQSxhQUFBRSxDQUFBLFFBQUErRCxVQUFBLENBQUFNLE1BQUEsTUFBQXJFLENBQUEsU0FBQUEsQ0FBQSxRQUFBSyxDQUFBLFFBQUEwRCxVQUFBLENBQUEvRCxDQUFBLE9BQUFLLENBQUEsQ0FBQXNELE1BQUEsU0FBQXVCLElBQUEsSUFBQS9FLENBQUEsQ0FBQXVCLElBQUEsQ0FBQXJCLENBQUEsd0JBQUE2RSxJQUFBLEdBQUE3RSxDQUFBLENBQUF3RCxVQUFBLFFBQUF0RCxDQUFBLEdBQUFGLENBQUEsYUFBQUUsQ0FBQSxpQkFBQVIsQ0FBQSxtQkFBQUEsQ0FBQSxLQUFBUSxDQUFBLENBQUFvRCxNQUFBLElBQUE3RCxDQUFBLElBQUFBLENBQUEsSUFBQVMsQ0FBQSxDQUFBc0QsVUFBQSxLQUFBdEQsQ0FBQSxjQUFBRSxDQUFBLEdBQUFGLENBQUEsR0FBQUEsQ0FBQSxDQUFBMkQsVUFBQSxjQUFBekQsQ0FBQSxDQUFBZSxJQUFBLEdBQUF6QixDQUFBLEVBQUFVLENBQUEsQ0FBQWdCLEdBQUEsR0FBQTNCLENBQUEsRUFBQVMsQ0FBQSxTQUFBakcsTUFBQSxnQkFBQWtKLElBQUEsR0FBQWpELENBQUEsQ0FBQXNELFVBQUEsRUFBQS9CLENBQUEsU0FBQTBELFFBQUEsQ0FBQS9FLENBQUEsTUFBQStFLFFBQUEsV0FBQUEsU0FBQXpGLENBQUEsRUFBQUQsQ0FBQSxvQkFBQUMsQ0FBQSxDQUFBeUIsSUFBQSxRQUFBekIsQ0FBQSxDQUFBMEIsR0FBQSxxQkFBQTFCLENBQUEsQ0FBQXlCLElBQUEsbUJBQUF6QixDQUFBLENBQUF5QixJQUFBLFFBQUFnQyxJQUFBLEdBQUF6RCxDQUFBLENBQUEwQixHQUFBLGdCQUFBMUIsQ0FBQSxDQUFBeUIsSUFBQSxTQUFBOEQsSUFBQSxRQUFBN0QsR0FBQSxHQUFBMUIsQ0FBQSxDQUFBMEIsR0FBQSxPQUFBbkgsTUFBQSxrQkFBQWtKLElBQUEseUJBQUF6RCxDQUFBLENBQUF5QixJQUFBLElBQUExQixDQUFBLFVBQUEwRCxJQUFBLEdBQUExRCxDQUFBLEdBQUFnQyxDQUFBLEtBQUEyRCxNQUFBLFdBQUFBLE9BQUExRixDQUFBLGFBQUFELENBQUEsUUFBQWlFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBdkUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQStELFVBQUEsQ0FBQWpFLENBQUEsT0FBQUUsQ0FBQSxDQUFBNkQsVUFBQSxLQUFBOUQsQ0FBQSxjQUFBeUYsUUFBQSxDQUFBeEYsQ0FBQSxDQUFBa0UsVUFBQSxFQUFBbEUsQ0FBQSxDQUFBOEQsUUFBQSxHQUFBRyxhQUFBLENBQUFqRSxDQUFBLEdBQUE4QixDQUFBLHlCQUFBNEQsT0FBQTNGLENBQUEsYUFBQUQsQ0FBQSxRQUFBaUUsVUFBQSxDQUFBTSxNQUFBLE1BQUF2RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBK0QsVUFBQSxDQUFBakUsQ0FBQSxPQUFBRSxDQUFBLENBQUEyRCxNQUFBLEtBQUE1RCxDQUFBLFFBQUFJLENBQUEsR0FBQUgsQ0FBQSxDQUFBa0UsVUFBQSxrQkFBQS9ELENBQUEsQ0FBQXFCLElBQUEsUUFBQW5CLENBQUEsR0FBQUYsQ0FBQSxDQUFBc0IsR0FBQSxFQUFBd0MsYUFBQSxDQUFBakUsQ0FBQSxZQUFBSyxDQUFBLGdCQUFBcEYsS0FBQSw4QkFBQTBLLGFBQUEsV0FBQUEsY0FBQTdGLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGdCQUFBNkMsUUFBQSxLQUFBdEMsUUFBQSxFQUFBMkIsTUFBQSxDQUFBdkMsQ0FBQSxHQUFBeUQsVUFBQSxFQUFBdkQsQ0FBQSxFQUFBeUQsT0FBQSxFQUFBdEQsQ0FBQSxvQkFBQTdGLE1BQUEsVUFBQW1ILEdBQUEsR0FBQTFCLENBQUEsR0FBQStCLENBQUEsT0FBQWhDLENBQUE7QUFBQSxTQUFBOEYsMkJBQUF2RixDQUFBLEVBQUF3RixjQUFBLFFBQUFDLEVBQUEsVUFBQXRGLE1BQUEsb0JBQUFILENBQUEsQ0FBQUcsTUFBQSxDQUFBRSxRQUFBLEtBQUFMLENBQUEscUJBQUF5RixFQUFBLFFBQUFDLEtBQUEsQ0FBQUMsT0FBQSxDQUFBM0YsQ0FBQSxNQUFBeUYsRUFBQSxHQUFBRywyQkFBQSxDQUFBNUYsQ0FBQSxNQUFBd0YsY0FBQSxJQUFBeEYsQ0FBQSxXQUFBQSxDQUFBLENBQUFnRSxNQUFBLHFCQUFBeUIsRUFBQSxFQUFBekYsQ0FBQSxHQUFBeUYsRUFBQSxNQUFBdkYsQ0FBQSxVQUFBMkYsQ0FBQSxZQUFBQSxFQUFBLGVBQUFyRSxDQUFBLEVBQUFxRSxDQUFBLEVBQUEvRixDQUFBLFdBQUFBLEVBQUEsUUFBQUksQ0FBQSxJQUFBRixDQUFBLENBQUFnRSxNQUFBLFdBQUF0QixJQUFBLG1CQUFBQSxJQUFBLFNBQUEvSSxLQUFBLEVBQUFxRyxDQUFBLENBQUFFLENBQUEsVUFBQVQsQ0FBQSxXQUFBQSxFQUFBcUcsRUFBQSxVQUFBQSxFQUFBLEtBQUF2RSxDQUFBLEVBQUFzRSxDQUFBLGdCQUFBNUMsU0FBQSxpSkFBQThDLGdCQUFBLFNBQUFDLE1BQUEsVUFBQUMsR0FBQSxXQUFBekUsQ0FBQSxXQUFBQSxFQUFBLElBQUFpRSxFQUFBLEdBQUFBLEVBQUEsQ0FBQXBFLElBQUEsQ0FBQXJCLENBQUEsTUFBQUYsQ0FBQSxXQUFBQSxFQUFBLFFBQUFvRyxJQUFBLEdBQUFULEVBQUEsQ0FBQXRDLElBQUEsSUFBQTRDLGdCQUFBLEdBQUFHLElBQUEsQ0FBQXhELElBQUEsU0FBQXdELElBQUEsS0FBQXpHLENBQUEsV0FBQUEsRUFBQTBHLEdBQUEsSUFBQUgsTUFBQSxTQUFBQyxHQUFBLEdBQUFFLEdBQUEsS0FBQTVFLENBQUEsV0FBQUEsRUFBQSxlQUFBd0UsZ0JBQUEsSUFBQU4sRUFBQSxvQkFBQUEsRUFBQSw4QkFBQU8sTUFBQSxRQUFBQyxHQUFBO0FBQUEsU0FBQUwsNEJBQUE1RixDQUFBLEVBQUFvRyxNQUFBLFNBQUFwRyxDQUFBLHFCQUFBQSxDQUFBLHNCQUFBcUcsaUJBQUEsQ0FBQXJHLENBQUEsRUFBQW9HLE1BQUEsT0FBQXRHLENBQUEsR0FBQUYsTUFBQSxDQUFBQyxTQUFBLENBQUF5RyxRQUFBLENBQUFqRixJQUFBLENBQUFyQixDQUFBLEVBQUErRSxLQUFBLGFBQUFqRixDQUFBLGlCQUFBRSxDQUFBLENBQUFtRSxXQUFBLEVBQUFyRSxDQUFBLEdBQUFFLENBQUEsQ0FBQW1FLFdBQUEsQ0FBQXBLLElBQUEsTUFBQStGLENBQUEsY0FBQUEsQ0FBQSxtQkFBQTRGLEtBQUEsQ0FBQWEsSUFBQSxDQUFBdkcsQ0FBQSxPQUFBRixDQUFBLCtEQUFBMEcsSUFBQSxDQUFBMUcsQ0FBQSxVQUFBdUcsaUJBQUEsQ0FBQXJHLENBQUEsRUFBQW9HLE1BQUE7QUFBQSxTQUFBQyxrQkFBQUksR0FBQSxFQUFBQyxHQUFBLFFBQUFBLEdBQUEsWUFBQUEsR0FBQSxHQUFBRCxHQUFBLENBQUF6QyxNQUFBLEVBQUEwQyxHQUFBLEdBQUFELEdBQUEsQ0FBQXpDLE1BQUEsV0FBQTlELENBQUEsTUFBQXlHLElBQUEsT0FBQWpCLEtBQUEsQ0FBQWdCLEdBQUEsR0FBQXhHLENBQUEsR0FBQXdHLEdBQUEsRUFBQXhHLENBQUEsSUFBQXlHLElBQUEsQ0FBQXpHLENBQUEsSUFBQXVHLEdBQUEsQ0FBQXZHLENBQUEsVUFBQXlHLElBQUE7QUFBQSxTQUFBQyxtQkFBQUMsR0FBQSxFQUFBdEUsT0FBQSxFQUFBdUUsTUFBQSxFQUFBQyxLQUFBLEVBQUFDLE1BQUEsRUFBQUMsR0FBQSxFQUFBN0YsR0FBQSxjQUFBOEYsSUFBQSxHQUFBTCxHQUFBLENBQUFJLEdBQUEsRUFBQTdGLEdBQUEsT0FBQXpILEtBQUEsR0FBQXVOLElBQUEsQ0FBQXZOLEtBQUEsV0FBQTRCLEtBQUEsSUFBQXVMLE1BQUEsQ0FBQXZMLEtBQUEsaUJBQUEyTCxJQUFBLENBQUF4RSxJQUFBLElBQUFILE9BQUEsQ0FBQTVJLEtBQUEsWUFBQThLLE9BQUEsQ0FBQWxDLE9BQUEsQ0FBQTVJLEtBQUEsRUFBQVcsSUFBQSxDQUFBeU0sS0FBQSxFQUFBQyxNQUFBO0FBQUEsU0FBQUcsa0JBQUFDLEVBQUEsNkJBQUFDLElBQUEsU0FBQUMsSUFBQSxHQUFBQyxTQUFBLGFBQUE5QyxPQUFBLFdBQUFsQyxPQUFBLEVBQUF1RSxNQUFBLFFBQUFELEdBQUEsR0FBQU8sRUFBQSxDQUFBSSxLQUFBLENBQUFILElBQUEsRUFBQUMsSUFBQSxZQUFBUCxNQUFBcE4sS0FBQSxJQUFBaU4sa0JBQUEsQ0FBQUMsR0FBQSxFQUFBdEUsT0FBQSxFQUFBdUUsTUFBQSxFQUFBQyxLQUFBLEVBQUFDLE1BQUEsVUFBQXJOLEtBQUEsY0FBQXFOLE9BQUFmLEdBQUEsSUFBQVcsa0JBQUEsQ0FBQUMsR0FBQSxFQUFBdEUsT0FBQSxFQUFBdUUsTUFBQSxFQUFBQyxLQUFBLEVBQUFDLE1BQUEsV0FBQWYsR0FBQSxLQUFBYyxLQUFBLENBQUFVLFNBQUE7QUFEd0Q7O0FBRXhEO0FBQ0F6TixLQUFLLENBQUMsVUFBVSxDQUFDLENBQ2RNLElBQUksQ0FBQyxVQUFDQyxRQUFRLEVBQUs7RUFDbEIsSUFBSUEsUUFBUSxDQUFDQyxFQUFFLEVBQUU7SUFDZixPQUFPRCxRQUFRLENBQUNFLElBQUksQ0FBQyxDQUFDO0VBQ3hCLENBQUMsTUFBTTtJQUNMLE1BQU0sSUFBSUcsS0FBSyxDQUFDLGlDQUFpQyxDQUFDO0VBQ3BEO0FBQ0YsQ0FBQyxDQUFDLENBQ0ROLElBQUksQ0FBQyxVQUFDUixJQUFJLEVBQUs7RUFDZCxJQUFJQSxJQUFJLENBQUM0TixLQUFLLElBQUk1TixJQUFJLENBQUM2TixRQUFRLEVBQUU7SUFDL0IsSUFBTUMsU0FBUyxHQUFHOU4sSUFBSSxDQUFDNE4sS0FBSztJQUM1QixJQUFNQyxRQUFRLEdBQUc3TixJQUFJLENBQUM2TixRQUFRO0lBQzlCLElBQU1FLGNBQWMsR0FBRy9OLElBQUksQ0FBQ2dPLFdBQVc7SUFDdkMsSUFBTUMscUJBQXFCLEdBQUc5UixRQUFRLENBQUNDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztJQUN4RTZSLHFCQUFxQixDQUFDQyxZQUFZLENBQ2hDLEtBQUssMkJBQUF6USxNQUFBLENBQ29Cc1EsY0FBYyxDQUN6QyxDQUFDO0VBQ0gsQ0FBQyxNQUFNO0lBQ0xwUCxNQUFNLENBQUN1RCxRQUFRLENBQUNDLElBQUksR0FBRyxRQUFRO0VBQ2pDO0FBQ0YsQ0FBQyxDQUFDO0FBRUpnTSxTQUFTLENBQUMsQ0FBQztBQUNYQyxpQkFBaUIsQ0FBQyxDQUFDOztBQUVuQjtBQUNBLFNBQVNELFNBQVNBLENBQUEsRUFBRztFQUNuQmpPLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FDaEJNLElBQUksQ0FBQyxVQUFDQyxRQUFRO0lBQUEsT0FBS0EsUUFBUSxDQUFDRSxJQUFJLENBQUMsQ0FBQztFQUFBLEVBQUMsQ0FDbkNILElBQUksQ0FBQyxVQUFDUixJQUFJLEVBQUs7SUFDZCxJQUFJcU8sV0FBVztJQUVmLElBQUlyTyxJQUFJLENBQUNzTyxLQUFLLENBQUNwRSxNQUFNLEtBQUssQ0FBQyxFQUFFO01BQzNCO01BQ0E7TUFDQXFFLGVBQWUsQ0FBQyxTQUFTLENBQUM7TUFDMUJBLGVBQWUsQ0FBQyxTQUFTLENBQUM7TUFDMUJBLGVBQWUsQ0FBQyxTQUFTLENBQUM7TUFDMUJBLGVBQWUsQ0FBQyxTQUFTLENBQUM7TUFDMUJBLGVBQWUsQ0FBQyxTQUFTLENBQUM7TUFDMUJBLGVBQWUsQ0FBQyxTQUFTLENBQUM7TUFDMUJBLGVBQWUsQ0FBQyxTQUFTLENBQUM7TUFDMUJBLGVBQWUsQ0FBQyxTQUFTLENBQUM7TUFDMUJBLGVBQWUsQ0FBQyxTQUFTLENBQUM7SUFDNUIsQ0FBQyxNQUFNO01BQ0wsSUFBTUMsU0FBUyxHQUFHLElBQUlDLGVBQWUsQ0FBQzlQLE1BQU0sQ0FBQ3VELFFBQVEsQ0FBQ3dNLE1BQU0sQ0FBQztNQUM3RCxJQUFNQyxjQUFjLEdBQUdILFNBQVMsQ0FBQ0ksR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUM5QyxJQUFJRCxjQUFjLEVBQUU7UUFDbEIsSUFBTUUsS0FBSyxHQUFHQyxRQUFRLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDTCxjQUFjLEVBQUV4QixHQUFHLENBQUMsQ0FBQ1gsUUFBUSxDQUM5RHNDLFFBQVEsQ0FBQ0csR0FBRyxDQUFDQyxJQUNmLENBQUM7UUFDRGIsV0FBVyxHQUFHUSxLQUFLLEdBQUd6TCxRQUFRLENBQUN5TCxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSTtNQUNsRDtNQUNBN08sSUFBSSxDQUFDc08sS0FBSyxDQUFDMU0sT0FBTyxDQUFDLFVBQUN1TixJQUFJLEVBQUU5TSxLQUFLLEVBQUs7UUFDbEMsSUFBTStNLE1BQU0sR0FBR3BQLElBQUksQ0FBQ3FQLEtBQUssQ0FBQ2hOLEtBQUssQ0FBQztRQUNoQyxJQUFNaU4sV0FBVyxHQUFHQyxzQkFBc0IsQ0FBQ0osSUFBSSxFQUFFQyxNQUFNLENBQUM7UUFDeEQ5UyxhQUFhLENBQUNrVCxXQUFXLENBQUNGLFdBQVcsQ0FBQztRQUV0QyxJQUFJakIsV0FBVyxLQUFLZSxNQUFNLEVBQUU7VUFDMUIsSUFBTUssWUFBWSxHQUFHdFQsUUFBUSxDQUFDQyxjQUFjLElBQUFxQixNQUFBLENBQUkyUixNQUFNLENBQUUsQ0FBQztVQUN6RDtVQUNBLElBQUlBLE1BQU0sSUFBSUssWUFBWSxFQUFFO1lBQzFCeFQsUUFBUSxDQUFDbVQsTUFBTSxFQUFFSyxZQUFZLENBQUM7VUFDaEM7UUFDRjtNQUNGLENBQUMsQ0FBQztNQUNGLElBQUk5USxNQUFNLENBQUN1RCxRQUFRLENBQUN3TSxNQUFNLENBQUNnQixRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDN0M7UUFDQUMsT0FBTyxDQUFDQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7TUFDeEM7SUFDRjtFQUNGLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQ25PLEtBQUs7SUFBQSxPQUFLM0IsT0FBTyxDQUFDMkIsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUM7RUFBQSxFQUFDO0FBQ25FO0FBRUEsU0FBUzhOLHNCQUFzQkEsQ0FBQ0osSUFBSSxFQUFFQyxNQUFNLEVBQUU7RUFDNUMsSUFBTVMsT0FBTyxHQUFHMVQsUUFBUSxDQUFDMlQsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM3Q0QsT0FBTyxDQUFDL1IsU0FBUyxDQUFDWSxHQUFHLENBQUMsTUFBTSxDQUFDO0VBQzdCbVIsT0FBTyxDQUFDM0IsWUFBWSxDQUFDLElBQUksS0FBQXpRLE1BQUEsQ0FBSzJSLE1BQU0sQ0FBRSxDQUFDO0VBQ3ZDO0VBQ0EsSUFBTVcsVUFBVSxHQUFHNVQsUUFBUSxDQUFDMlQsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUNoREMsVUFBVSxDQUFDN0IsWUFBWSxDQUFDLEtBQUssOENBQThDLENBQUM7RUFDNUU2QixVQUFVLENBQUNqUyxTQUFTLENBQUNZLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFDckNtUixPQUFPLENBQUNMLFdBQVcsQ0FBQ08sVUFBVSxDQUFDO0VBRS9CLElBQU03USxRQUFRLEdBQUcvQyxRQUFRLENBQUMyVCxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQzdDNVEsUUFBUSxDQUFDRyxXQUFXLEdBQUc4UCxJQUFJO0VBQzNCalEsUUFBUSxDQUFDMUIsS0FBSyxDQUFDd1MsUUFBUSxHQUFHLFFBQVE7RUFDbENILE9BQU8sQ0FBQ0wsV0FBVyxDQUFDdFEsUUFBUSxDQUFDO0VBRTdCMlEsT0FBTyxDQUFDalMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7SUFDNUMzQixRQUFRLENBQUNtVCxNQUFNLEVBQUVTLE9BQU8sQ0FBQztFQUMzQixDQUFDLENBQUM7RUFDRixJQUFJSSxZQUFZO0VBQ2hCSixPQUFPLENBQUNqUyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsWUFBWTtJQUNqRCxTQUFTc1MsWUFBWUEsQ0FBQSxFQUFHO01BQ3RCLElBQU1DLFFBQVEsR0FBR2hVLFFBQVEsQ0FBQzJULGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDOUNLLFFBQVEsQ0FBQzlRLFdBQVcsR0FBRzhQLElBQUk7TUFDM0JnQixRQUFRLENBQUMzUyxLQUFLLENBQUM0UyxRQUFRLEdBQUcsVUFBVTtNQUNwQ0QsUUFBUSxDQUFDM1MsS0FBSyxDQUFDNlMsVUFBVSxHQUFHLFNBQVM7TUFDckNGLFFBQVEsQ0FBQzNTLEtBQUssQ0FBQzRCLEtBQUssR0FBRyxTQUFTO01BQ2hDK1EsUUFBUSxDQUFDM1MsS0FBSyxDQUFDOFMsT0FBTyxHQUFHLFNBQVM7TUFDbENILFFBQVEsQ0FBQzNTLEtBQUssQ0FBQytTLFlBQVksR0FBRyxNQUFNO01BQ3BDSixRQUFRLENBQUMzUyxLQUFLLENBQUNnVCxRQUFRLEdBQUcsT0FBTztNQUNqQ0wsUUFBUSxDQUFDM1MsS0FBSyxDQUFDaVQsWUFBWSxHQUFHLFVBQVU7TUFFeEMsSUFBTUMsSUFBSSxHQUFHYixPQUFPLENBQUN6UyxxQkFBcUIsQ0FBQyxDQUFDO01BQzVDLElBQU04SCxPQUFPLEdBQUd3TCxJQUFJLENBQUNsUyxJQUFJLEdBQUdrUyxJQUFJLENBQUNuVCxLQUFLLEdBQUcsQ0FBQztNQUMxQyxJQUFNNkgsR0FBRyxHQUFHc0wsSUFBSSxDQUFDdEwsR0FBRztNQUVwQmpKLFFBQVEsQ0FBQ2tFLElBQUksQ0FBQ21QLFdBQVcsQ0FBQ1csUUFBUSxDQUFDO01BQ25DQSxRQUFRLENBQUMzUyxLQUFLLENBQUNnQixJQUFJLEdBQUcwRyxPQUFPLEdBQUdpTCxRQUFRLENBQUNRLFdBQVcsR0FBRyxDQUFDLEdBQUcsSUFBSTtNQUMvRFIsUUFBUSxDQUFDM1MsS0FBSyxDQUFDNEgsR0FBRyxHQUFHQSxHQUFHLEdBQUcrSyxRQUFRLENBQUM5TSxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUk7TUFDM0R3TSxPQUFPLENBQUNNLFFBQVEsR0FBR0EsUUFBUTtJQUM3QjtJQUNBLElBQUlqUixRQUFRLENBQUMwUixXQUFXLEdBQUcxUixRQUFRLENBQUN5UixXQUFXLEVBQUU7TUFDL0NWLFlBQVksR0FBR1ksVUFBVSxDQUFDWCxZQUFZLEVBQUUsSUFBSSxDQUFDO0lBQy9DO0VBQ0YsQ0FBQyxDQUFDO0VBQ0ZMLE9BQU8sQ0FBQ2pTLGdCQUFnQixDQUFDLFlBQVksRUFBRSxZQUFZO0lBQ2pEa1QsWUFBWSxDQUFDYixZQUFZLENBQUM7SUFDMUIsSUFBSUosT0FBTyxDQUFDTSxRQUFRLEVBQUU7TUFDcEJOLE9BQU8sQ0FBQ00sUUFBUSxDQUFDbFMsTUFBTSxDQUFDLENBQUM7TUFDekI0UixPQUFPLENBQUNNLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUMzQjtFQUNGLENBQUMsQ0FBQztFQUNGN1QsYUFBYSxDQUFDc0IsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQVk7SUFDbkQsSUFBSWlTLE9BQU8sQ0FBQ00sUUFBUSxFQUFFO01BQ3BCTixPQUFPLENBQUNNLFFBQVEsQ0FBQ2xTLE1BQU0sQ0FBQyxDQUFDO01BQ3pCNFIsT0FBTyxDQUFDTSxRQUFRLEdBQUcsSUFBSTtJQUN6QjtFQUNGLENBQUMsQ0FBQztFQUNGLE9BQU9OLE9BQU87QUFDaEI7QUFFQSxTQUFTdEIsZUFBZUEsQ0FBQ25QLEtBQUssRUFBRTtFQUM5QixJQUFJa1EsV0FBVyxHQUFHblQsUUFBUSxDQUFDMlQsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUMvQ1IsV0FBVyxDQUFDeUIsU0FBUyxHQUFHLE1BQU07RUFDOUJ6QixXQUFXLENBQUM5UixLQUFLLENBQUN3VCxhQUFhLEdBQUcsTUFBTTtFQUV4QyxJQUFJQyxRQUFRLEdBQUc5VSxRQUFRLENBQUMyVCxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQzVDbUIsUUFBUSxDQUFDQyxHQUFHLEdBQUcsOEJBQThCO0VBQzdDRCxRQUFRLENBQUNGLFNBQVMsR0FBRyxXQUFXO0VBQ2hDRSxRQUFRLENBQUN6VCxLQUFLLENBQUNELEtBQUssR0FBRyxNQUFNO0VBQzdCMFQsUUFBUSxDQUFDelQsS0FBSyxDQUFDSCxNQUFNLEdBQUcsTUFBTTtFQUM5QjRULFFBQVEsQ0FBQ3pULEtBQUssQ0FBQzJULGVBQWUsR0FBRy9SLEtBQUs7RUFFdEMsSUFBSWdTLFNBQVMsR0FBR2pWLFFBQVEsQ0FBQzJULGFBQWEsQ0FBQyxJQUFJLENBQUM7RUFDNUNzQixTQUFTLENBQUMvUixXQUFXLEdBQUcsTUFBTTtFQUM5QitSLFNBQVMsQ0FBQzVULEtBQUssQ0FBQzRCLEtBQUssR0FBRyxhQUFhO0VBQ3JDZ1MsU0FBUyxDQUFDNVQsS0FBSyxDQUFDMlQsZUFBZSxHQUFHL1IsS0FBSztFQUN2Q2dTLFNBQVMsQ0FBQzVULEtBQUssQ0FBQzZULFVBQVUsR0FBRyxNQUFNO0VBQ25DRCxTQUFTLENBQUM1VCxLQUFLLENBQUN3VCxhQUFhLEdBQUcsTUFBTTtFQUN0Q0ksU0FBUyxDQUFDNVQsS0FBSyxDQUFDK1MsWUFBWSxHQUFHLE1BQU07RUFFckNqQixXQUFXLENBQUNFLFdBQVcsQ0FBQ3lCLFFBQVEsQ0FBQztFQUNqQzNCLFdBQVcsQ0FBQ0UsV0FBVyxDQUFDNEIsU0FBUyxDQUFDO0VBRWxDalYsUUFBUSxDQUFDQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ29ULFdBQVcsQ0FBQ0YsV0FBVyxDQUFDO0FBQ3BFOztBQUVBO0FBQ0EsU0FBU3JULFFBQVFBLENBQUNtVCxNQUFNLEVBQUVTLE9BQU8sRUFBRTtFQUNqQyxJQUFNeUIsY0FBYyxHQUFHblYsUUFBUSxDQUFDd0YsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO0VBQ3pEMlAsY0FBYyxDQUFDMVAsT0FBTyxDQUFDLFVBQUMyUCxJQUFJLEVBQUs7SUFDL0JBLElBQUksQ0FBQ3pULFNBQVMsQ0FBQ0csTUFBTSxDQUFDLFVBQVUsQ0FBQztFQUNuQyxDQUFDLENBQUM7O0VBRUY7RUFDQTRSLE9BQU8sQ0FBQy9SLFNBQVMsQ0FBQ1ksR0FBRyxDQUFDLFVBQVUsQ0FBQztFQUVqQ2lSLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLFdBQUFuUyxNQUFBLENBQVcyUixNQUFNLENBQUUsQ0FBQztFQUNoRGxULFdBQVcsQ0FBQ3NCLEtBQUssQ0FBQ2lJLFVBQVUsR0FBRyxTQUFTO0VBQ3hDLElBQU1GLEtBQUssR0FBR3JKLFdBQVcsQ0FBQ3lGLGdCQUFnQixDQUFDLDJCQUEyQixDQUFDO0VBQ3ZFNEQsS0FBSyxDQUFDM0QsT0FBTyxDQUFDLFVBQUNVLElBQUksRUFBSztJQUN0QkEsSUFBSSxDQUFDOUUsS0FBSyxDQUFDaUksVUFBVSxHQUFHLFNBQVM7RUFDbkMsQ0FBQyxDQUFDO0VBQ0YsSUFBSWpKLGdCQUFnQixDQUFDZ0IsS0FBSyxDQUFDaUksVUFBVSxLQUFLLFFBQVEsRUFBRTtJQUNsRGpKLGdCQUFnQixDQUFDZ0IsS0FBSyxDQUFDaUksVUFBVSxHQUFHLFNBQVM7RUFDL0M7RUFDQWhKLGNBQWMsQ0FBQ2UsS0FBSyxDQUFDaUksVUFBVSxHQUFHLFFBQVE7RUFFMUN0SixRQUFRLENBQUNDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDb0IsS0FBSyxDQUFDVSxPQUFPLEdBQUcsTUFBTTs7RUFFbEU7RUFDQSxJQUFJc1QsS0FBSyxHQUFHblYsZ0JBQWdCLENBQUNvVixpQkFBaUI7RUFDOUMsT0FBT0QsS0FBSyxFQUFFO0lBQ1osSUFBTUUsV0FBVyxHQUFHRixLQUFLLENBQUNHLGtCQUFrQjtJQUM1QyxJQUFJSCxLQUFLLENBQUNyUSxFQUFFLEtBQUssaUJBQWlCLEVBQUU7TUFDbEM5RSxnQkFBZ0IsQ0FBQ3VWLFdBQVcsQ0FBQ0osS0FBSyxDQUFDO0lBQ3JDO0lBQ0FBLEtBQUssR0FBR0UsV0FBVztFQUNyQjs7RUFFQTtFQUNBLE9BQU9uVixXQUFXLENBQUM4RSxVQUFVLEVBQUU7SUFDN0I5RSxXQUFXLENBQUNxVixXQUFXLENBQUNyVixXQUFXLENBQUM4RSxVQUFVLENBQUM7RUFDakQ7RUFFQXdRLE9BQU8sQ0FBQ3pDLE1BQU0sQ0FBQztFQUNmMEMsUUFBUSxDQUFDMUMsTUFBTSxDQUFDO0FBQ2xCO0FBQUMsU0FFY3lDLE9BQU9BLENBQUFFLEVBQUE7RUFBQSxPQUFBQyxRQUFBLENBQUF0RSxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUFBLFNBQUF1RSxTQUFBO0VBQUFBLFFBQUEsR0FBQTNFLGlCQUFBLGVBQUEzSCxtQkFBQSxHQUFBNEUsSUFBQSxDQUF0QixTQUFBMkgsUUFBdUJDLFFBQVE7SUFBQSxJQUFBQyxZQUFBLEVBQUFDLE9BQUEsRUFJcEJDLGlCQUFpQixFQUFBNVIsUUFBQSxFQUFBVCxJQUFBLEVBQUFzUyxZQUFBLEVBQUFDLFNBQUEsRUFBQUMsS0FBQSxFQUFBQyxXQUFBO0lBQUEsT0FBQS9NLG1CQUFBLEdBQUFzQixJQUFBLFVBQUEwTCxTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQTVILElBQUEsR0FBQTRILFFBQUEsQ0FBQXRKLElBQUE7UUFBQTtVQUFqQmdKLGlCQUFpQixZQUFBTyxtQkFBQSxFQUFHO1lBQzNCUixPQUFPLEdBQUdqVyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUM7WUFDNUNnVyxPQUFPLENBQUM1VSxLQUFLLENBQUNVLE9BQU8sR0FBRyxPQUFPO1lBQy9CNkcsb0RBQWEsQ0FBQ3FOLE9BQU8sRUFBRS9WLGdCQUFnQixDQUFDO1lBQ3hDc0MsTUFBTSxDQUFDZixnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO2NBQzNDa0gsb0RBQWEsQ0FBQ3FOLE9BQU8sRUFBRS9WLGdCQUFnQixDQUFDO1lBQzFDLENBQUMsQ0FBQztVQUNKLENBQUMsRUFSRDtVQVVBO1VBQ0E4VixZQUFZLEdBQUd0QixVQUFVLENBQUN3QixpQkFBaUIsRUFBRSxHQUFHLENBQUM7VUFBQyxLQUM5QzFULE1BQU0sQ0FBQ3VELFFBQVEsQ0FBQ0MsSUFBSSxDQUFDdU4sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUFBaUQsUUFBQSxDQUFBdEosSUFBQTtZQUFBO1VBQUE7VUFBQXNKLFFBQUEsQ0FBQTVILElBQUE7VUFBQTRILFFBQUEsQ0FBQXRKLElBQUE7VUFBQSxPQUVkbkosS0FBSyxhQUFBekMsTUFBQSxDQUFheVUsUUFBUSxDQUFFLENBQUM7UUFBQTtVQUE5Q3pSLFFBQVEsR0FBQWtTLFFBQUEsQ0FBQTVKLElBQUE7VUFBQSxLQUVWdEksUUFBUSxDQUFDQyxFQUFFO1lBQUFpUyxRQUFBLENBQUF0SixJQUFBO1lBQUE7VUFBQTtVQUNieUgsWUFBWSxDQUFDcUIsWUFBWSxDQUFDO1VBQUNRLFFBQUEsQ0FBQXRKLElBQUE7VUFBQSxPQUNSNUksUUFBUSxDQUFDRSxJQUFJLENBQUMsQ0FBQztRQUFBO1VBQTVCWCxJQUFJLEdBQUEyUyxRQUFBLENBQUE1SixJQUFBO1VBQ1Y1TSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDaUQsV0FBVyxHQUNyRFcsSUFBSSxDQUFDNlMsUUFBUSxDQUFDQyxRQUFRO1VBQ3hCM1csUUFBUSxDQUFDQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUNpRCxXQUFXLEdBQ2pEVyxJQUFJLENBQUM2UyxRQUFRLENBQUNDLFFBQVE7VUFDeEIzVyxRQUFRLENBQ0xDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FDL0I4UixZQUFZLENBQUMsYUFBYSxhQUFBelEsTUFBQSxDQUFhdUMsSUFBSSxDQUFDNlMsUUFBUSxDQUFDQyxRQUFRLFFBQUssQ0FBQztVQUVoRVIsWUFBWSxHQUFHdFMsSUFBSSxDQUFDZ0QsUUFBUSxDQUFDK1AsR0FBRyxDQUFDLFVBQUNDLE9BQU8sRUFBSztZQUNsRCxJQUFNbkYsUUFBUSxHQUFHbUYsT0FBTyxDQUFDQyxRQUFRLElBQUksU0FBUztZQUM5QyxJQUFNQyxRQUFRLEdBQ1pGLE9BQU8sQ0FBQ0csV0FBVyxJQUNuQiw4Q0FBOEM7WUFDaEQsSUFBSUMsUUFBUSxHQUFHSixPQUFPLENBQUNLLFFBQVEsSUFBSSxFQUFFO1lBQ3JDRCxRQUFRLEdBQUc5UCxzREFBZSxDQUFDOFAsUUFBUSxDQUFDO1lBQ3BDLE9BQU87Y0FBRXZGLFFBQVEsRUFBUkEsUUFBUTtjQUFFeUYsT0FBTyxFQUFFTixPQUFPLENBQUNPLE9BQU87Y0FBRUwsUUFBUSxFQUFSQSxRQUFRO2NBQUVFLFFBQVEsRUFBUkE7WUFBUyxDQUFDO1VBQ25FLENBQUMsQ0FBQyxFQUVGO1VBQ0EsSUFBSWhCLE9BQU8sRUFBRTtZQUNYL1YsZ0JBQWdCLENBQUN1VixXQUFXLENBQUNRLE9BQU8sQ0FBQztVQUN2QztVQUNBM1YsY0FBYyxDQUFDZSxLQUFLLENBQUNpSSxVQUFVLEdBQUcsU0FBUztVQUFDOE0sU0FBQSxHQUFBOUcsMEJBQUEsQ0FFbEI2RyxZQUFZO1VBQUE7WUFBdEMsS0FBQUMsU0FBQSxDQUFBN0ssQ0FBQSxNQUFBOEssS0FBQSxHQUFBRCxTQUFBLENBQUF2TSxDQUFBLElBQUE0QyxJQUFBLEdBQXdDO2NBQTdCNkosV0FBVyxHQUFBRCxLQUFBLENBQUEzUyxLQUFBO2NBQ3BCMlQsaUJBQWlCLENBQ2ZmLFdBQVcsQ0FBQzVFLFFBQVEsRUFDcEI0RSxXQUFXLENBQUNhLE9BQU8sRUFDbkJiLFdBQVcsQ0FBQ1MsUUFBUSxFQUNwQlQsV0FBVyxDQUFDVyxRQUFRLEVBQ3BCLEtBQ0YsQ0FBQztZQUNIO1VBQUMsU0FBQWpILEdBQUE7WUFBQW9HLFNBQUEsQ0FBQTVNLENBQUEsQ0FBQXdHLEdBQUE7VUFBQTtZQUFBb0csU0FBQSxDQUFBOUssQ0FBQTtVQUFBO1VBQUFrTCxRQUFBLENBQUF0SixJQUFBO1VBQUE7UUFBQTtVQUVEO1VBQ0EsSUFBSStJLE9BQU8sRUFBRSxDQUNiO1FBQUM7VUFBQU8sUUFBQSxDQUFBdEosSUFBQTtVQUFBO1FBQUE7VUFBQXNKLFFBQUEsQ0FBQTVILElBQUE7VUFBQTRILFFBQUEsQ0FBQWMsRUFBQSxHQUFBZCxRQUFBO1VBR0g3UyxPQUFPLENBQUMyQixLQUFLLENBQUMsMkJBQTJCLEVBQUFrUixRQUFBLENBQUFjLEVBQU8sQ0FBQztVQUNqRDtVQUNBLElBQUlyQixPQUFPLEVBQUU7WUFDWC9WLGdCQUFnQixDQUFDdVYsV0FBVyxDQUFDUSxPQUFPLENBQUM7VUFDdkM7UUFBQztVQUdIdFAsUUFBUSxDQUFDM0QsS0FBSyxDQUFDLENBQUM7UUFBQztRQUFBO1VBQUEsT0FBQXdULFFBQUEsQ0FBQXpILElBQUE7TUFBQTtJQUFBLEdBQUErRyxPQUFBO0VBQUEsQ0FFcEI7RUFBQSxPQUFBRCxRQUFBLENBQUF0RSxLQUFBLE9BQUFELFNBQUE7QUFBQTtBQUFBLFNBRWNxRSxRQUFRQSxDQUFBNEIsR0FBQTtFQUFBLE9BQUFDLFNBQUEsQ0FBQWpHLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBQUEsU0FBQWtHLFVBQUE7RUFBQUEsU0FBQSxHQUFBdEcsaUJBQUEsZUFBQTNILG1CQUFBLEdBQUE0RSxJQUFBLENBQXZCLFNBQUFzSixTQUF3QjFCLFFBQVE7SUFBQSxPQUFBeE0sbUJBQUEsR0FBQXNCLElBQUEsVUFBQTZNLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBL0ksSUFBQSxHQUFBK0ksU0FBQSxDQUFBekssSUFBQTtRQUFBO1VBQzlCbkosS0FBSyxlQUFBekMsTUFBQSxDQUFleVUsUUFBUSxHQUFJO1lBQzlCL1IsTUFBTSxFQUFFLE1BQU07WUFDZEMsT0FBTyxFQUFFO2NBQ1AsY0FBYyxFQUFFO1lBQ2xCO1VBQ0YsQ0FBQyxDQUFDLENBQ0NJLElBQUksQ0FBQyxVQUFDQyxRQUFRO1lBQUEsT0FBS0EsUUFBUSxDQUFDRSxJQUFJLENBQUMsQ0FBQztVQUFBLEVBQUMsQ0FDbkNILElBQUksQ0FBQyxVQUFDUixJQUFJLEVBQUs7WUFDZCxJQUFNK1QsT0FBTyxHQUFHL1QsSUFBSSxDQUFDZ1UsS0FBSztZQUMxQkQsT0FBTyxDQUFDblMsT0FBTyxDQUFDLFVBQUNxUyxNQUFNLEVBQUs7Y0FDMUIsSUFBTXBHLFFBQVEsR0FBR29HLE1BQU0sQ0FBQyxVQUFVLENBQUM7Y0FDbkMsSUFBTWpHLFdBQVcsR0FBR2lHLE1BQU0sQ0FBQyxhQUFhLENBQUM7Y0FFekMsSUFBTUMsR0FBRyxHQUFHL1gsUUFBUSxDQUFDMlQsYUFBYSxDQUFDLEtBQUssQ0FBQztjQUN6Q29FLEdBQUcsQ0FBQ3BXLFNBQVMsQ0FBQ1ksR0FBRyxDQUFDLFFBQVEsQ0FBQztjQUUzQixJQUFNeVYsZ0JBQWdCLEdBQUdoWSxRQUFRLENBQUMyVCxhQUFhLENBQUMsS0FBSyxDQUFDO2NBQ3REcUUsZ0JBQWdCLENBQUNqRyxZQUFZLENBQzNCLEtBQUssMkJBQUF6USxNQUFBLENBQ29CdVEsV0FBVyxDQUN0QyxDQUFDO2NBQ0RtRyxnQkFBZ0IsQ0FBQ3JXLFNBQVMsQ0FBQ1ksR0FBRyxDQUFDLGNBQWMsQ0FBQztjQUU5QyxJQUFNMFYsZUFBZSxHQUFHalksUUFBUSxDQUFDMlQsYUFBYSxDQUFDLElBQUksQ0FBQztjQUNwRHNFLGVBQWUsQ0FBQy9VLFdBQVcsR0FBR3dPLFFBQVE7Y0FFdENxRyxHQUFHLENBQUMxRSxXQUFXLENBQUMyRSxnQkFBZ0IsQ0FBQztjQUNqQ0QsR0FBRyxDQUFDMUUsV0FBVyxDQUFDNEUsZUFBZSxDQUFDO2NBRWhDN1gsV0FBVyxDQUFDaVQsV0FBVyxDQUFDMEUsR0FBRyxDQUFDO1lBQzlCLENBQUMsQ0FBQztVQUNKLENBQUMsQ0FBQyxTQUNJLENBQUMsVUFBQ3pTLEtBQUssRUFBSztZQUNoQjNCLE9BQU8sQ0FBQzJCLEtBQUssQ0FBQyxRQUFRLEVBQUVBLEtBQUssQ0FBQztVQUNoQyxDQUFDLENBQUM7UUFBQztRQUFBO1VBQUEsT0FBQXFTLFNBQUEsQ0FBQTVJLElBQUE7TUFBQTtJQUFBLEdBQUEwSSxRQUFBO0VBQUEsQ0FDTjtFQUFBLE9BQUFELFNBQUEsQ0FBQWpHLEtBQUEsT0FBQUQsU0FBQTtBQUFBO0FBRUQsU0FBU1csaUJBQWlCQSxDQUFBLEVBQUc7RUFDM0I7RUFDQSxJQUFJelAsTUFBTSxDQUFDdUQsUUFBUSxDQUFDbVMsUUFBUSxLQUFLLE9BQU8sRUFBRTtJQUN4QztJQUNBblksV0FBVyxDQUFDc0IsS0FBSyxDQUFDaUksVUFBVSxHQUFHLFFBQVE7SUFDdkNqSixnQkFBZ0IsQ0FBQ2dCLEtBQUssQ0FBQ2lJLFVBQVUsR0FBRyxRQUFRO0lBQzVDLElBQU1GLEtBQUssR0FBR3JKLFdBQVcsQ0FBQ3lGLGdCQUFnQixDQUFDLDJCQUEyQixDQUFDO0lBQ3ZFNEQsS0FBSyxDQUFDM0QsT0FBTyxDQUFDLFVBQUNVLElBQUksRUFBSztNQUN0QkEsSUFBSSxDQUFDOUUsS0FBSyxDQUFDaUksVUFBVSxHQUFHLFFBQVE7SUFDbEMsQ0FBQyxDQUFDO0VBQ0o7RUFDQXRKLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUNvQixLQUFLLENBQUNVLE9BQU8sR0FBRyxPQUFPO0FBQ3JFOzs7Ozs7O1VDelVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL2NoYXRzZXJ2ZXJuZXcvLi9zcmMvb25sb2FkLmpzIiwid2VicGFjazovL2NoYXRzZXJ2ZXJuZXcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NoYXRzZXJ2ZXJuZXcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaGF0c2VydmVybmV3L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwiLi9vbmxvYWRcIjtcblxudmFyIGNoYXREaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LWRpc3BsYXlcIik7XG5jb25zdCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlLWNvbnRhaW5lclwiKTtcbmNvbnN0IGNoYXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXQtY29udGFpbmVyXCIpO1xuY29uc3QgbWVtYmVyc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbWJlcnMtbGlzdFwiKTtcbmNvbnN0IG1lbWJlcnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbWJlcnNcIik7XG5jb25zdCB3ZWxjb21lTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VsY29tZS1tZXNzYWdlXCIpO1xuY29uc3QgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UtaW5wdXQnKVxuXG5jb25zdCByYXRlTGltaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhdGUtbGltaXRcIik7XG5jb25zdCByYXRlTGltaXRNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYXRlLWxpbWl0LW1lc3NhZ2VcIik7XG5cbmNvbnN0IGNoYXROYW1lTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdC1uYW1lLWxhYmVsJylcblxuY29uc3QgZGFya092ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhcmstb3ZlcmxheVwiKTtcblxuY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIik7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuXG5pZiAobmF2YmFyICYmIGNvbnRhaW5lciAmJiBzaWRlYmFyKSB7XG4gIGNvbnN0IG5hdmJhckhlaWdodCA9IG5hdmJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gIGNvbnN0IHNpZGViYXJXaWR0aCA9IHNpZGViYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgY2FsYyg5OXZoIC0gJHtuYXZiYXJIZWlnaHR9cHgpYDtcbiAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gYGNhbGMoOTl2dyAtICR7c2lkZWJhcldpZHRofXB4KWA7XG59XG5cbmNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLW5ld1wiKTtcbmNvbnN0IGNyZWF0ZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVwiKTtcblxuY3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKCFjcmVhdGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYW5pbWF0ZS1yb3RhdGVcIikpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjcmVhdGUuY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGUtcm90YXRlLW91dFwiKTtcbiAgICAvLyBDaGVjayBpZiB0aGUgJ2FuaW1hdGUtbGVmdCcgY2xhc3MgaXMgcHJlc2VudFxuICAgIGlmIChjcmVhdGVNZW51LmNsYXNzTGlzdC5jb250YWlucyhcImFuaW1hdGUtbGVmdFwiKSkge1xuICAgICAgY3JlYXRlTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBjcmVhdGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlLWxlZnRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBvZmZzZXRMZWZ0ID0gY3JlYXRlLm9mZnNldExlZnQgKyBjcmVhdGUub2Zmc2V0V2lkdGggKyA4O1xuICAgICAgdmFyIGJ1dHRvbkJvdHRvbSA9IGNyZWF0ZS5vZmZzZXRUb3AgKyBjcmVhdGUub2Zmc2V0SGVpZ2h0O1xuICAgICAgY3JlYXRlTWVudS5zdHlsZS5sZWZ0ID0gb2Zmc2V0TGVmdCArIFwicHhcIjtcbiAgICAgIGNyZWF0ZU1lbnUuc3R5bGUuYm90dG9tID0gNTAgKyBcInB4XCI7XG4gICAgICBjcmVhdGVNZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBjcmVhdGVNZW51LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlLWxlZnRcIik7XG4gICAgICBjcmVhdGUuY2xhc3NMaXN0LmFkZChcImFuaW1hdGUtcm90YXRlXCIpO1xuICAgIH1cbiAgfVxuICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlXCIpO1xuICAgIGlmIChcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gcG9wdXAgJiZcbiAgICAgICFwb3B1cC5jb250YWlucyhldmVudC50YXJnZXQpICYmXG4gICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCJcbiAgICApIHtcbiAgICAgIGNsb3NlUG9wdXAocG9wdXApO1xuICAgIH1cbiAgfTtcbn0pO1xuXG5jb25zdCBjcmVhdGVHcm91cERNQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtZ3JvdXAtZG1cIik7XG5jcmVhdGVHcm91cERNQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGNvbnN0IGNyZWF0ZUdyb3VwRE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwLWRtXCIpO1xuICBjcmVhdGVHcm91cERNLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGRhcmtPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGNvbnN0IGNoYXROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXQtbmFtZScpXG4gIGNoYXROYW1lLmZvY3VzKCk7XG4gIGNsb3NlUG9wdXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVcIikpO1xuICBjaGF0TmFtZUxhYmVsLnN0eWxlLmNvbG9yID0gXCIjY2RjZGNkXCI7XG4gIGNoYXROYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIkNoYXQgTmFtZVwiO1xuICBjb25zdCBjbG9zZUdyb3VwRE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWdyb3VwZG1cIik7XG4gIGNsb3NlR3JvdXBETS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY2xvc2VTZXR1cChjcmVhdGVHcm91cERNKTtcbiAgICBjaGF0TmFtZUxhYmVsLnN0eWxlLmNvbG9yID0gXCIjY2RjZGNkXCI7XG4gICAgY2hhdE5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiQ2hhdCBOYW1lXCI7XG4gIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBncm91cERNU3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY3JlYXRlR3JvdXBETSk7XG4gICAgY29uc3QgcmF0ZUxpbWl0U3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUocmF0ZUxpbWl0KTtcbiAgICBpZiAoXG4gICAgICBldmVudC50YXJnZXQgIT09IGNyZWF0ZUdyb3VwRE0gJiZcbiAgICAgICFjcmVhdGVHcm91cERNLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgIGdyb3VwRE1TdHlsZXMuZGlzcGxheSA9PT0gXCJibG9ja1wiICYmXG4gICAgICByYXRlTGltaXRTdHlsZXMuZGlzcGxheSA9PT0gXCJub25lXCJcbiAgICApIHtcbiAgICAgIGNsb3NlU2V0dXAoY3JlYXRlR3JvdXBETSk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5jb25zdCBjcmVhdGVHcm91cERtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cGRtLWNyZWF0ZVwiKTtcblxuY3JlYXRlR3JvdXBEbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGNoYXROYW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdC1uYW1lXCIpO1xuICBjb25zdCBjaGF0TmFtZSA9IGNoYXROYW1lRWxlbWVudC52YWx1ZTtcbiAgY29uc29sZS5sb2coY2hhdE5hbWUpO1xuICBpZiAoY2hhdE5hbWUgIT09IFwiXCIpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgbmFtZTogY2hhdE5hbWUsXG4gICAgfTtcblxuICAgIGZldGNoKFwiL2NoYXRcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDI5KSB7XG4gICAgICAgICAgcmF0ZUxpbWl0TWVzc2FnZS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBcIllvdSBhcmUgY3JlYXRpbmcgdG9vIG1hbnkgc2VydmVycy4gVHJ5IGFnYWluIGluIGEgZmV3IG1pbnV0ZXNcIjtcbiAgICAgICAgICByYXRlTGltaXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICBkYXJrT3ZlcmxheS5zdHlsZS56SW5kZXggPSBcIjRcIjtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUb28gbWFueSByZXF1ZXN0c1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2suXCIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBncm91cERNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cC1kbVwiKTtcbiAgICAgICAgY2xvc2VTZXR1cChncm91cERNKTtcbiAgICAgICAgY2hhdE5hbWVMYWJlbC5zdHlsZS5jb2xvciA9IFwiI2NkY2RjZFwiO1xuICAgICAgICBjaGF0TmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJDaGF0IE5hbWVcIjtcbiAgICAgICAgY2hhdE5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgICBjb25zdCBjcmVhdGVkQ2hhdCA9IGNyZWF0ZUNoYXRFbGVtZW50KGNoYXROYW1lLCByZXNwb25zZURhdGEuaWQpO1xuICAgICAgICBjaGF0Q29udGFpbmVyLmluc2VydEJlZm9yZShjcmVhdGVkQ2hhdCwgY2hhdENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgY29uc29sZS5sb2coY3JlYXRlZENoYXQpO1xuICAgICAgICByZWRpcmVjdChyZXNwb25zZURhdGEuaWQsIGNyZWF0ZWRDaGF0KTtcbiAgICAgICAgY3JlYXRlZENoYXQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwiY2VudGVyXCIgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY2hhdDpcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2hhdE5hbWVMYWJlbC5zdHlsZS5jb2xvciA9IFwiI2ZhNzc3Y1wiO1xuICAgIGNoYXROYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIkNoYXQgTmFtZSAtIHBsZWFzZSBwcm92aWRlIGEgbmFtZVwiO1xuICB9XG59KTtcblxuY29uc3QgcGFuZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYW5lbFwiKTtcbnBhbmVscy5mb3JFYWNoKChwYW5lbCkgPT4ge1xuICBjb25zdCB0ZXh0ID0gcGFuZWxcbiAgICAucXVlcnlTZWxlY3RvcihcIi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWRcIilcbiAgICAudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgaWYgKHRleHQgPT09IFwiaG9tZVwiKSB7XG4gICAgcGFuZWwucXVlcnlTZWxlY3RvcihcIi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWRcIikuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIGNvbnN0IGxhYmVsID0gcGFuZWwucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpO1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IGJyYW5kaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJicmFuZGluZ1wiKTtcbmJyYW5kaW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvaG9tZVwiO1xufSk7XG5jb25zdCBsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhbmVsIGxhYmVsXCIpO1xuXG5wYW5lbHMuZm9yRWFjaCgocGFuZWwsIGluZGV4KSA9PiB7XG4gIHBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBcInNlbGVjdGVkXCIgY2xhc3MgZnJvbSBhbGwgaWNvbnMgYW5kIGxhYmVsc1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5wYW5lbCAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCIpXG4gICAgICAuZm9yRWFjaCgoaWNvbikgPT4gaWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikpO1xuICAgIGxhYmVscy5mb3JFYWNoKChsKSA9PiBsLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSk7XG5cbiAgICAvLyBBZGQgdGhlIFwic2VsZWN0ZWRcIiBjbGFzcyB0byB0aGUgY2xpY2tlZCBpY29uIGFuZCBsYWJlbFxuICAgIHBhbmVsLnF1ZXJ5U2VsZWN0b3IoXCIubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCIpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICBsYWJlbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgfSk7XG59KTtcblxuY29uc3QgcGVyc29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXJzb25cIik7XG5wZXJzb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhtZW1iZXJzQ29udGFpbmVyLnN0eWxlLndpZHRoKTtcbiAgaWYgKG1lbWJlcnNDb250YWluZXIuc3R5bGUud2lkdGggPT09IFwiMHB4XCIpIHtcbiAgICBtZW1iZXJzQ29udGFpbmVyLnN0eWxlLndpZHRoID0gXCIxOCVcIjtcbiAgICBtZW1iZXJzQ29udGFpbmVyLnN0eWxlLmJvcmRlckxlZnQgPSBcIjFweCBzb2xpZCAjNDE0MDQzXCI7XG4gICAgcGVyc29uLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGVkXCIpO1xuICB9IGVsc2Uge1xuICAgIG1lbWJlcnNDb250YWluZXIuc3R5bGUud2lkdGggPSBcIjBcIjtcbiAgICBtZW1iZXJzQ29udGFpbmVyLnN0eWxlLmJvcmRlckxlZnQgPSBcIm5vbmVcIjtcbiAgICBwZXJzb24uY2xhc3NMaXN0LnJlbW92ZShcInRvZ2dsZWRcIik7XG4gIH1cbn0pO1xuXG5jb25zdCByYXRlTGltaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhdGUtbGltaXQtYnV0dG9uXCIpO1xucmF0ZUxpbWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgcmF0ZUxpbWl0LmNsYXNzTGlzdC5hZGQoXCJ6b29tb3V0XCIpO1xuICByYXRlTGltaXQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJ6b29tT3V0XCIpIHtcbiAgICAgIHJhdGVMaW1pdC5jbGFzc0xpc3QucmVtb3ZlKFwiem9vbW91dFwiKTtcbiAgICAgIHJhdGVMaW1pdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cC1kbVwiKS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICAgICAgZGFya092ZXJsYXkuc3R5bGUuekluZGV4ID0gXCIzXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgbWVzc2FnZUlucHV0LmZvY3VzKCk7XG4gICAgICAgIGRhcmtPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSk7XG5cbmNvbnN0IHNlcnZlckRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXJ2ZXItb3B0aW9uc1wiKTtcbnNlcnZlckRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG5jb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZS1pbnB1dFwiKTtcbmNvbnN0IG1lc3NhZ2VJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcIm1lc3NhZ2UtaW5wdXQtY29udGFpbmVyXCJcbik7XG5jb25zdCBtZXNzYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZXNcIik7XG5cbm1lc3NhZ2VJbnB1dENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgJHt0ZXh0YXJlYS5zY3JvbGxIZWlnaHR9cHhgO1xuXG50ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiOyAvLyBSZXNldCBoZWlnaHQgdG8gYWxsb3cgaXQgdG8gc2hyaW5rXG4gIG1lc3NhZ2VJbnB1dENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjsgLy8gUmVzZXQgY29udGFpbmVyIGhlaWdodFxuICBjb25zdCBuZXdIZWlnaHQgPSBgJHt0ZXh0YXJlYS5zY3JvbGxIZWlnaHR9cHhgOyAvLyBHZXQgdGhlIG5ldyBoZWlnaHRcbiAgY29uc3QgbmV3SGVpZ2h0UGVyY2VudCA9IChwYXJzZUludChuZXdIZWlnaHQpICogMTAwKSAvIG1lc3NhZ2VzLmNsaWVudEhlaWdodDtcblxuICBpZiAobmV3SGVpZ2h0UGVyY2VudCA8PSA1MCkge1xuICAgIC8vIEFzc3VtaW5nIE1BWF9IRUlHSFQgaXMgdGhlIG1heGltdW0gaGVpZ2h0IGZvciBtZXNzYWdlSW5wdXRDb250YWluZXJcbiAgICB0ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSBuZXdIZWlnaHQ7IC8vIFNldCB0ZXh0YXJlYSBoZWlnaHRcbiAgICBtZXNzYWdlSW5wdXRDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gbmV3SGVpZ2h0OyAvLyBTZXQgY29udGFpbmVyIGhlaWdodFxuICB9IGVsc2Uge1xuICAgIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9IGAkezEwMH0lYDsgLy8gU2V0IHRleHRhcmVhIHRvIG1heCBoZWlnaHRcbiAgICBtZXNzYWdlSW5wdXRDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYCR7NTB9JWA7IC8vIFNldCBjb250YWluZXIgdG8gbWF4IGhlaWdodFxuICB9XG59KTtcblxuZnVuY3Rpb24gY2xvc2VTZXR1cChwb3B1cCkge1xuICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiem9vbW91dFwiKTtcbiAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJ6b29tT3V0XCIpIHtcbiAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJ6b29tb3V0XCIpO1xuICAgICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfSk7XG4gIGRhcmtPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gY2xvc2VQb3B1cChwb3B1cCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXQtbmFtZVwiKS52YWx1ZSA9IFwiXCI7XG4gIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGUtbGVmdFwiKTtcbiAgdmFyIGNyZWF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLW5ld1wiKTtcbiAgY3JlYXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlLXJvdGF0ZVwiKTtcbiAgY3JlYXRlLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlLXJvdGF0ZS1vdXRcIik7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRpbWVzdGFtcCh0ZXh0KSB7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZm9ybWF0dGVkQ3VycmVudERhdGUgPSBmb3JtYXRDaGF0RGF0ZShjdXJyZW50RGF0ZSk7XG4gIGNvbnN0IHllc3RlcmRheSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlIC0gODY0MDAwMDApO1xuICBjb25zdCBmb3JtYXR0ZWRZZXN0ZXJkYXkgPSBmb3JtYXRDaGF0RGF0ZSh5ZXN0ZXJkYXkpO1xuXG4gIGNvbnN0IHRpbWVzdGFtcERhdGUgPSBuZXcgRGF0ZSh0ZXh0LnNwbGl0KFwiIFwiKVswXSk7XG5cbiAgY29uc3QgZm9ybWF0dGVkVGltZXN0YW1wRGF0ZSA9IGZvcm1hdENoYXREYXRlKHRpbWVzdGFtcERhdGUpO1xuXG4gIGlmICh0ZXh0LnNwbGl0KFwiIFwiKVswXSA9PT0gZm9ybWF0dGVkQ3VycmVudERhdGUuc3BsaXQoXCIgXCIpWzBdKSB7XG4gICAgcmV0dXJuIGBUb2RheSBhdCAke3RleHQuc3BsaXQoXCIgXCIpWzJdfWA7XG4gIH0gZWxzZSBpZiAodGV4dC5zcGxpdChcIiBcIilbMF0gPT09IGZvcm1hdHRlZFllc3RlcmRheS5zcGxpdChcIiBcIilbMF0pIHtcbiAgICByZXR1cm4gYFllc3RlcmRheSBhdCAke3RleHQuc3BsaXQoXCIgXCIpWzJdfWA7XG4gIH1cblxuICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0Q2hhdERhdGUodGltZXN0YW1wKSB7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgbWVzc2FnZURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xuXG4gIGNvbnN0IG1vbnRoID0gbWVzc2FnZURhdGUuZ2V0TW9udGgoKSArIDE7XG4gIGNvbnN0IGRheSA9IG1lc3NhZ2VEYXRlLmdldERhdGUoKTtcbiAgY29uc3QgeWVhciA9IG1lc3NhZ2VEYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IGhvdXJzID0gbWVzc2FnZURhdGUuZ2V0SG91cnMoKTtcbiAgY29uc3QgbWludXRlcyA9IG1lc3NhZ2VEYXRlLmdldE1pbnV0ZXMoKTtcbiAgY29uc3QgcGVyaW9kID0gaG91cnMgPj0gMTIgPyBcInBtXCIgOiBcImFtXCI7XG4gIGNvbnN0IGZvcm1hdHRlZEhvdXJzID0gaG91cnMgJSAxMiB8fCAxMjsgLy8gQ29udmVydCB0byAxMi1ob3VyIGZvcm1hdFxuICBjb25zdCBmb3JtYXR0ZWRNaW51dGVzID0gbWludXRlcyA8IDEwID8gYDAke21pbnV0ZXN9YCA6IG1pbnV0ZXM7IC8vIFBhZCBtaW51dGVzIHdpdGggemVybyBpZiBuZWVkZWRcblxuICByZXR1cm4gYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9IGF0ICR7Zm9ybWF0dGVkSG91cnN9OiR7Zm9ybWF0dGVkTWludXRlc30ke3BlcmlvZH1gO1xufVxuXG5mdW5jdGlvbiBjZW50ZXJFbGVtZW50KGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICBsZXQgYm91bmRpbmdDbGllbnQgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGxldCBjZW50ZXJYID0gYm91bmRpbmdDbGllbnQubGVmdCArIGJvdW5kaW5nQ2xpZW50LndpZHRoIC8gMjtcbiAgbGV0IGNlbnRlclkgPSBib3VuZGluZ0NsaWVudC50b3AgKyBib3VuZGluZ0NsaWVudC5oZWlnaHQgLyAyO1xuXG4gIGVsZW1lbnQuc3R5bGUubGVmdCA9IGNlbnRlclggLSBlbGVtZW50Lm9mZnNldFdpZHRoIC8gMiArIFwicHhcIjtcbiAgZWxlbWVudC5zdHlsZS50b3AgPSBjZW50ZXJZIC0gZWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyICsgXCJweFwiO1xufVxuXG4vLyBNYWtlIGZvbnRzIHZpc2libGUgb25jZSB0aGUgZG9jdW1lbnQgbG9hZHMgdG8gcHJldmVudCBzcGFuIHRleHQgc2hvd2luZyBvbiByZWxvYWRcbmRvY3VtZW50LmZvbnRzLnJlYWR5LnRoZW4oKCkgPT4ge1xuICBjb25zdCBpY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCIpO1xuICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiZm9udC1sb2FkZWRcIik7XG4gIH0pO1xuICBjb25zdCBvdXRsaW5lZGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpO1xuICBvdXRsaW5lZGljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICBpY29uLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgfSk7XG59KTtcblxuZXhwb3J0IHsgdXBkYXRlVGltZXN0YW1wLCBjZW50ZXJFbGVtZW50LCBjbG9zZVNldHVwLCBmb3JtYXRDaGF0RGF0ZSB9O1xuIiwiaW1wb3J0IHsgdXBkYXRlVGltZXN0YW1wLCBjZW50ZXJFbGVtZW50IH0gZnJvbSBcIi4vaG9tZVwiO1xuXG4vLyBHZXQgcHJvZmlsZSBkYXRhXG5mZXRjaChcIi9wcm9maWxlXCIpXG4gIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHJldHJpZXZlIHByb2ZpbGUgZGF0YVwiKTtcbiAgICB9XG4gIH0pXG4gIC50aGVuKChkYXRhKSA9PiB7XG4gICAgaWYgKGRhdGEuZW1haWwgJiYgZGF0YS51c2VybmFtZSkge1xuICAgICAgY29uc3QgdXNlckVtYWlsID0gZGF0YS5lbWFpbDtcbiAgICAgIGNvbnN0IHVzZXJuYW1lID0gZGF0YS51c2VybmFtZTtcbiAgICAgIGNvbnN0IHByb2ZpbGVQaWN0dXJlID0gZGF0YS5wcm9maWxlSWNvbjtcbiAgICAgIGNvbnN0IHByb2ZpbGVQaWN0dXJlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZS1waWN0dXJlXCIpO1xuICAgICAgcHJvZmlsZVBpY3R1cmVFbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJzcmNcIixcbiAgICAgICAgYC9hc3NldHMvUHJvZmlsZSBJY29ucy8ke3Byb2ZpbGVQaWN0dXJlfWBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbG9naW5cIjtcbiAgICB9XG4gIH0pO1xuXG5sb2FkUm9vbXMoKTtcbnNldENoYXRCYWNrZ3JvdW5kKCk7XG5cbi8vIE9ubG9hZCBmdW5jdGlvbnNcbmZ1bmN0aW9uIGxvYWRSb29tcygpIHtcbiAgZmV0Y2goXCIvZ2V0LXJvb21zXCIpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHZhciB1cmxJRE51bWJlcjtcblxuICAgICAgaWYgKGRhdGEucm9vbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIENyZWF0ZSBlbm91Z2ggYmxhbmsgY2hhdHMgdG8gZmlsbCB1cCBtb3N0IG9mIHRoZSBjaGF0IGVsZW1lbnRcbiAgICAgICAgLy8gVG8gZG8gLSBjcmVhdGUgYSBmdW5jdGlvbiB0aGF0IGNhbiBjYWxjdWxhdGUgaG93IG1hbnkgYmxhbmsgY2hhdHMgdG8gY3JlYXRlXG4gICAgICAgIGNyZWF0ZUJsYW5rQ2hhdChcIiMyQTJBMkFcIik7XG4gICAgICAgIGNyZWF0ZUJsYW5rQ2hhdChcIiMyOTI5MjlcIik7XG4gICAgICAgIGNyZWF0ZUJsYW5rQ2hhdChcIiMyODI4MjhcIik7XG4gICAgICAgIGNyZWF0ZUJsYW5rQ2hhdChcIiMyNzI3MjdcIik7XG4gICAgICAgIGNyZWF0ZUJsYW5rQ2hhdChcIiMyNjI2MjZcIik7XG4gICAgICAgIGNyZWF0ZUJsYW5rQ2hhdChcIiMyNTI1MjVcIik7XG4gICAgICAgIGNyZWF0ZUJsYW5rQ2hhdChcIiMyNDI0MjRcIik7XG4gICAgICAgIGNyZWF0ZUJsYW5rQ2hhdChcIiMyMzIzMjNcIik7XG4gICAgICAgIGNyZWF0ZUJsYW5rQ2hhdChcIiMxZDFkMWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICBjb25zdCBlbmNyeXB0ZWRVcmxJRCA9IHVybFBhcmFtcy5nZXQoXCJjaGF0SURcIik7XG4gICAgICAgIGlmIChlbmNyeXB0ZWRVcmxJRCkge1xuICAgICAgICAgIGNvbnN0IHVybElEID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoZW5jcnlwdGVkVXJsSUQsIGtleSkudG9TdHJpbmcoXG4gICAgICAgICAgICBDcnlwdG9KUy5lbmMuVXRmOFxuICAgICAgICAgICk7XG4gICAgICAgICAgdXJsSUROdW1iZXIgPSB1cmxJRCA/IHBhcnNlSW50KHVybElELCAxMCkgOiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEucm9vbXMuZm9yRWFjaCgoY2hhdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGF0SUQgPSBkYXRhLmNoYXRzW2luZGV4XTtcbiAgICAgICAgICBjb25zdCBjaGF0RWxlbWVudCA9IGNyZWF0ZUJsYW5rQ2hhdEVsZW1lbnQoY2hhdCwgY2hhdElEKTtcbiAgICAgICAgICBjaGF0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoYXRFbGVtZW50KTtcblxuICAgICAgICAgIGlmICh1cmxJRE51bWJlciA9PT0gY2hhdElEKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZENoYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtjaGF0SUR9YCk7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBjaGF0SUQgaXMgcHJlc2VudCBhbmQgY2FsbCB0aGUgcmVkaXJlY3QgZnVuY3Rpb25cbiAgICAgICAgICAgIGlmIChjaGF0SUQgJiYgc2VsZWN0ZWRDaGF0KSB7XG4gICAgICAgICAgICAgIHJlZGlyZWN0KGNoYXRJRCwgc2VsZWN0ZWRDaGF0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcyhcImNoYXRJRFwiKSkge1xuICAgICAgICAgIC8vIElmIHNvLCBjaGFuZ2UgdGhlIFVSTCB0byAvaG9tZVxuICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIFwiL2hvbWVcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIHJvb21zOlwiLCBlcnJvcikpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCbGFua0NoYXRFbGVtZW50KGNoYXQsIGNoYXRJRCkge1xuICBjb25zdCBjaGF0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2hhdERpdi5jbGFzc0xpc3QuYWRkKFwiY2hhdFwiKTtcbiAgY2hhdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtjaGF0SUR9YCk7XG4gIC8vIFNlcnZlciBJY29uXG4gIGNvbnN0IHNlcnZlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBzZXJ2ZXJJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBgL2Fzc2V0cy9Qcm9maWxlIEljb25zL2dyZWVuUHJvZmlsZUljb24ucG5nYCk7XG4gIHNlcnZlckljb24uY2xhc3NMaXN0LmFkZChcImNoYXQtaWNvblwiKTtcbiAgY2hhdERpdi5hcHBlbmRDaGlsZChzZXJ2ZXJJY29uKTtcblxuICBjb25zdCBjaGF0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNlwiKTtcbiAgY2hhdE5hbWUudGV4dENvbnRlbnQgPSBjaGF0O1xuICBjaGF0TmFtZS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gIGNoYXREaXYuYXBwZW5kQ2hpbGQoY2hhdE5hbWUpO1xuXG4gIGNoYXREaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZWRpcmVjdChjaGF0SUQsIGNoYXREaXYpO1xuICB9KTtcbiAgbGV0IGhvdmVyVGltZW91dDtcbiAgY2hhdERpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gc2hvd0hvdmVyRGl2KCkge1xuICAgICAgY29uc3QgaG92ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaG92ZXJEaXYudGV4dENvbnRlbnQgPSBjaGF0O1xuICAgICAgaG92ZXJEaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICBob3ZlckRpdi5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjMkUyRTJFXCI7XG4gICAgICBob3ZlckRpdi5zdHlsZS5jb2xvciA9IFwiI0Q0RDRENFwiO1xuICAgICAgaG92ZXJEaXYuc3R5bGUucGFkZGluZyA9IFwiM3B4IDhweFwiO1xuICAgICAgaG92ZXJEaXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCI7XG4gICAgICBob3ZlckRpdi5zdHlsZS5tYXhXaWR0aCA9IFwiMjAwcHhcIjtcbiAgICAgIGhvdmVyRGl2LnN0eWxlLm92ZXJmbG93V3JhcCA9IFwiYW55d2hlcmVcIjtcblxuICAgICAgY29uc3QgcmVjdCA9IGNoYXREaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBjZW50ZXJYID0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCAvIDI7XG4gICAgICBjb25zdCB0b3AgPSByZWN0LnRvcDtcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChob3ZlckRpdik7XG4gICAgICBob3ZlckRpdi5zdHlsZS5sZWZ0ID0gY2VudGVyWCAtIGhvdmVyRGl2LmNsaWVudFdpZHRoIC8gMiArIFwicHhcIjtcbiAgICAgIGhvdmVyRGl2LnN0eWxlLnRvcCA9IHRvcCAtIGhvdmVyRGl2LmNsaWVudEhlaWdodCAtIDUgKyBcInB4XCI7XG4gICAgICBjaGF0RGl2LmhvdmVyRGl2ID0gaG92ZXJEaXY7XG4gICAgfVxuICAgIGlmIChjaGF0TmFtZS5zY3JvbGxXaWR0aCA+IGNoYXROYW1lLmNsaWVudFdpZHRoKSB7XG4gICAgICBob3ZlclRpbWVvdXQgPSBzZXRUaW1lb3V0KHNob3dIb3ZlckRpdiwgMTAwMCk7XG4gICAgfVxuICB9KTtcbiAgY2hhdERpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KGhvdmVyVGltZW91dCk7XG4gICAgaWYgKGNoYXREaXYuaG92ZXJEaXYpIHtcbiAgICAgIGNoYXREaXYuaG92ZXJEaXYucmVtb3ZlKCk7XG4gICAgICBjaGF0RGl2LmhvdmVyRGl2ID0gbnVsbDsgLy8gUmVtb3ZlIHRoZSByZWZlcmVuY2VcbiAgICB9XG4gIH0pO1xuICBjaGF0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChjaGF0RGl2LmhvdmVyRGl2KSB7XG4gICAgICBjaGF0RGl2LmhvdmVyRGl2LnJlbW92ZSgpO1xuICAgICAgY2hhdERpdi5ob3ZlckRpdiA9IG51bGw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGNoYXREaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJsYW5rQ2hhdChjb2xvcikge1xuICB2YXIgY2hhdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaGF0RWxlbWVudC5jbGFzc05hbWUgPSBcImNoYXRcIjtcbiAgY2hhdEVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXG4gIHZhciBjaGF0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNoYXRJY29uLnNyYyA9IFwiL2Fzc2V0cy90cmFuc3BhcmVudGltYWdlLnBuZ1wiO1xuICBjaGF0SWNvbi5jbGFzc05hbWUgPSBcImNoYXQtaWNvblwiO1xuICBjaGF0SWNvbi5zdHlsZS53aWR0aCA9IFwiMzVweFwiO1xuICBjaGF0SWNvbi5zdHlsZS5oZWlnaHQgPSBcIjM1cHhcIjtcbiAgY2hhdEljb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG5cbiAgdmFyIGg2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNlwiKTtcbiAgaDZFbGVtZW50LnRleHRDb250ZW50ID0gXCJub25lXCI7XG4gIGg2RWxlbWVudC5zdHlsZS5jb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcbiAgaDZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICBoNkVsZW1lbnQuc3R5bGUudXNlclNlbGVjdCA9IFwibm9uZVwiO1xuICBoNkVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICBoNkVsZW1lbnQuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCI7XG5cbiAgY2hhdEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hhdEljb24pO1xuICBjaGF0RWxlbWVudC5hcHBlbmRDaGlsZChoNkVsZW1lbnQpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdC1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQoY2hhdEVsZW1lbnQpO1xufVxuXG4vLyBEeW5hbWljIGphdmFzY2lwcnQgd2hlbiBjaG9vc2luZyBjaGF0c1xuZnVuY3Rpb24gcmVkaXJlY3QoY2hhdElELCBjaGF0RGl2KSB7XG4gIGNvbnN0IHNlbGVjdGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGF0XCIpO1xuICBzZWxlY3Rpb25JdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gIH0pO1xuXG4gIC8vIFNlbGVjdCB0aGUgY2xpY2tlZCBpdGVtXG4gIGNoYXREaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuXG4gIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAvY2hhdC8ke2NoYXRJRH1gKTtcbiAgY2hhdERpc3BsYXkuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICBjb25zdCBpY29ucyA9IGNoYXREaXNwbGF5LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCIpO1xuICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgaWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gIH0pO1xuICBpZiAobWVtYmVyc0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID09PSBcImhpZGRlblwiKSB7XG4gICAgbWVtYmVyc0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gIH1cbiAgd2VsY29tZU1lc3NhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuby1jaGF0LXNlbGVjdGVkXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAvLyBSZW1vdmUgYWxsIGNoaWxkcmVuIGZyb20gY2hhdHNcbiAgbGV0IGNoaWxkID0gbWVzc2FnZUNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZDtcbiAgd2hpbGUgKGNoaWxkKSB7XG4gICAgY29uc3QgbmV4dFNpYmxpbmcgPSBjaGlsZC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKGNoaWxkLmlkICE9PSBcIndlbGNvbWUtbWVzc2FnZVwiKSB7XG4gICAgICBtZXNzYWdlQ29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICB9XG4gICAgY2hpbGQgPSBuZXh0U2libGluZztcbiAgfVxuXG4gIC8vIFJlbW92ZSBhbGwgY2hpbGRyZW4gZnJvbSBtZW1iZXJzXG4gIHdoaWxlIChtZW1iZXJzTGlzdC5maXJzdENoaWxkKSB7XG4gICAgbWVtYmVyc0xpc3QucmVtb3ZlQ2hpbGQobWVtYmVyc0xpc3QuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBnZXRDaGF0KGNoYXRJRCk7XG4gIGdldFVzZXJzKGNoYXRJRCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENoYXQoZW5kcG9pbnQpIHtcbiAgbGV0IGxvYWRpbmdUaW1lcjtcbiAgbGV0IGxvYWRpbmc7XG4gIC8vIEZ1bmN0aW9uIHRvIGFkZCBsb2FkaW5nIHNwaW5uZXIgYWZ0ZXIgYSBkZWxheVxuICBmdW5jdGlvbiBhZGRMb2FkaW5nU3Bpbm5lcigpIHtcbiAgICBsb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nXCIpO1xuICAgIGxvYWRpbmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBjZW50ZXJFbGVtZW50KGxvYWRpbmcsIG1lc3NhZ2VDb250YWluZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChldmVudCkgPT4ge1xuICAgICAgY2VudGVyRWxlbWVudChsb2FkaW5nLCBtZXNzYWdlQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFN0YXJ0IGEgdGltZXIgdG8gYWRkIGxvYWRpbmcgc3Bpbm5lciBhZnRlciA1MDAgbWlsbGlzZWNvbmRzXG4gIGxvYWRpbmdUaW1lciA9IHNldFRpbWVvdXQoYWRkTG9hZGluZ1NwaW5uZXIsIDcwMCk7XG4gIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcImNoYXRcIikpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2dldGNoYXQvJHtlbmRwb2ludH1gKTtcblxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChsb2FkaW5nVGltZXIpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXQtbmFtZS1oZWFkZXJcIikudGV4dENvbnRlbnQgPVxuICAgICAgICAgIGRhdGEuY2hhdERhdGEuQ2hhdE5hbWU7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VsY29tZS1uYW1lXCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgICBkYXRhLmNoYXREYXRhLkNoYXROYW1lO1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2UtaW5wdXRcIilcbiAgICAgICAgICAuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgYE1lc3NhZ2UgJHtkYXRhLmNoYXREYXRhLkNoYXROYW1lfS4uLmApO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzRGF0YSA9IGRhdGEubWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBtZXNzYWdlLlVzZXJuYW1lIHx8IFwiVW5rbm93blwiO1xuICAgICAgICAgIGNvbnN0IHVzZXJJY29uID1cbiAgICAgICAgICAgIG1lc3NhZ2UuUHJvZmlsZUljb24gfHxcbiAgICAgICAgICAgIFwiL2Fzc2V0cy9Qcm9maWxlIEljb25zL3Vua25vd25Qcm9maWxlSWNvbi5wbmdcIjtcbiAgICAgICAgICB2YXIgZGF0ZVNlbnQgPSBtZXNzYWdlLkRhdGVTZW50IHx8IFwiXCI7XG4gICAgICAgICAgZGF0ZVNlbnQgPSB1cGRhdGVUaW1lc3RhbXAoZGF0ZVNlbnQpO1xuICAgICAgICAgIHJldHVybiB7IHVzZXJuYW1lLCBjb250ZW50OiBtZXNzYWdlLkNvbnRlbnQsIHVzZXJJY29uLCBkYXRlU2VudCB9O1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBOb3cgdGhhdCBhbGwgbWVzc2FnZXMgYXJlIGxvYWRlZCwgbWFrZSB0aGUgY2hhdCBjb250YWluZXIgdmlzaWJsZVxuICAgICAgICBpZiAobG9hZGluZykge1xuICAgICAgICAgIG1lc3NhZ2VDb250YWluZXIucmVtb3ZlQ2hpbGQobG9hZGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgd2VsY29tZU1lc3NhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXG4gICAgICAgIGZvciAoY29uc3QgbWVzc2FnZURhdGEgb2YgbWVzc2FnZXNEYXRhKSB7XG4gICAgICAgICAgYXBwZW5kUmljaE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlRGF0YS51c2VybmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VEYXRhLmNvbnRlbnQsXG4gICAgICAgICAgICBtZXNzYWdlRGF0YS51c2VySWNvbixcbiAgICAgICAgICAgIG1lc3NhZ2VEYXRhLmRhdGVTZW50LFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGVyZSdzIGFuIGVycm9yIHdpdGggdGhlIG1haW4gY2hhdCBkYXRhIGZldGNoLCBtYWtlIHRoZSBjaGF0IGNvbnRhaW5lciB2aXNpYmxlXG4gICAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNoYXQgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgLy8gSWYgdGhlcmUncyBhbiBlcnJvciB3aXRoIHRoZSBtYWluIGNoYXQgZGF0YSBmZXRjaCwgbWFrZSB0aGUgY2hhdCBjb250YWluZXIgdmlzaWJsZVxuICAgICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgbWVzc2FnZUNvbnRhaW5lci5yZW1vdmVDaGlsZChsb2FkaW5nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0ZXh0YXJlYS5mb2N1cygpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKGVuZHBvaW50KSB7XG4gIGZldGNoKGAvZ2V0LXVzZXJzLyR7ZW5kcG9pbnR9YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgbWVtYmVycyA9IGRhdGEudXNlcnM7XG4gICAgICBtZW1iZXJzLmZvckVhY2goKG1lbWJlcikgPT4ge1xuICAgICAgICBjb25zdCB1c2VybmFtZSA9IG1lbWJlcltcIlVzZXJuYW1lXCJdO1xuICAgICAgICBjb25zdCBwcm9maWxlSWNvbiA9IG1lbWJlcltcIlByb2ZpbGVJY29uXCJdO1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibWVtYmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IHByb2ZpbGVJY29uSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBwcm9maWxlSWNvbkltYWdlLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICBcInNyY1wiLFxuICAgICAgICAgIGAvYXNzZXRzL1Byb2ZpbGUgSWNvbnMvJHtwcm9maWxlSWNvbn1gXG4gICAgICAgICk7XG4gICAgICAgIHByb2ZpbGVJY29uSW1hZ2UuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtaWNvblwiKTtcblxuICAgICAgICBjb25zdCB1c2VybmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XG4gICAgICAgIHVzZXJuYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IHVzZXJuYW1lO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwcm9maWxlSWNvbkltYWdlKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHVzZXJuYW1lRWxlbWVudCk7XG5cbiAgICAgICAgbWVtYmVyc0xpc3QuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldENoYXRCYWNrZ3JvdW5kKCkge1xuICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCBVUkwgaXMgXCIvaG9tZVwiXG4gIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2hvbWVcIikge1xuICAgIC8vIEhpZGUgdGhlIGNoYXQgaGVhZGVyXG4gICAgY2hhdERpc3BsYXkuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgbWVtYmVyc0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBjb25zdCBpY29ucyA9IGNoYXREaXNwbGF5LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCIpO1xuICAgIGljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgIGljb24uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgfSk7XG4gIH1cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuby1jaGF0LXNlbGVjdGVkXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmV4cG9ydCB7IHJlZGlyZWN0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2hvbWUuanNcIik7XG4iLCIiXSwibmFtZXMiOlsicmVkaXJlY3QiLCJjaGF0RGlzcGxheSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtZXNzYWdlQ29udGFpbmVyIiwiY2hhdENvbnRhaW5lciIsIm1lbWJlcnNMaXN0IiwibWVtYmVyc0NvbnRhaW5lciIsIndlbGNvbWVNZXNzYWdlIiwibWVzc2FnZUlucHV0IiwicmF0ZUxpbWl0IiwicmF0ZUxpbWl0TWVzc2FnZSIsImNoYXROYW1lTGFiZWwiLCJkYXJrT3ZlcmxheSIsIm5hdmJhciIsInF1ZXJ5U2VsZWN0b3IiLCJjb250YWluZXIiLCJzaWRlYmFyIiwibmF2YmFySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwic2lkZWJhcldpZHRoIiwid2lkdGgiLCJzdHlsZSIsImNvbmNhdCIsImNyZWF0ZSIsImNyZWF0ZU1lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZSIsImRpc3BsYXkiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJidXR0b25Cb3R0b20iLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJsZWZ0IiwiYm90dG9tIiwiYWRkIiwid2luZG93Iiwib25jbGljayIsInBvcHVwIiwidGFyZ2V0IiwiY2xvc2VQb3B1cCIsImNyZWF0ZUdyb3VwRE1CdXR0b24iLCJjcmVhdGVHcm91cERNIiwiY2hhdE5hbWUiLCJmb2N1cyIsImNvbG9yIiwidGV4dENvbnRlbnQiLCJjbG9zZUdyb3VwRE0iLCJjbG9zZVNldHVwIiwiZ3JvdXBETVN0eWxlcyIsImdldENvbXB1dGVkU3R5bGUiLCJyYXRlTGltaXRTdHlsZXMiLCJjcmVhdGVHcm91cERtIiwiY2hhdE5hbWVFbGVtZW50IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm5hbWUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsInN0YXR1cyIsInpJbmRleCIsIkVycm9yIiwicmVzcG9uc2VEYXRhIiwiZ3JvdXBETSIsImNyZWF0ZWRDaGF0IiwiY3JlYXRlQ2hhdEVsZW1lbnQiLCJpZCIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJlcnJvciIsInBhbmVscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicGFuZWwiLCJ0ZXh0IiwidG9Mb3dlckNhc2UiLCJsYWJlbCIsImJyYW5kaW5nIiwibG9jYXRpb24iLCJocmVmIiwibGFiZWxzIiwiaW5kZXgiLCJpY29uIiwibCIsInBlcnNvbiIsImJvcmRlckxlZnQiLCJyYXRlTGltaXRCdXR0b24iLCJhbmltYXRpb25OYW1lIiwic2VydmVyRHJvcGRvd24iLCJwcmV2ZW50RGVmYXVsdCIsInRleHRhcmVhIiwibWVzc2FnZUlucHV0Q29udGFpbmVyIiwibWVzc2FnZXMiLCJzY3JvbGxIZWlnaHQiLCJuZXdIZWlnaHQiLCJuZXdIZWlnaHRQZXJjZW50IiwicGFyc2VJbnQiLCJjbGllbnRIZWlnaHQiLCJ1cGRhdGVUaW1lc3RhbXAiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJmb3JtYXR0ZWRDdXJyZW50RGF0ZSIsImZvcm1hdENoYXREYXRlIiwieWVzdGVyZGF5IiwiZm9ybWF0dGVkWWVzdGVyZGF5IiwidGltZXN0YW1wRGF0ZSIsInNwbGl0IiwiZm9ybWF0dGVkVGltZXN0YW1wRGF0ZSIsInRpbWVzdGFtcCIsIm1lc3NhZ2VEYXRlIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJwZXJpb2QiLCJmb3JtYXR0ZWRIb3VycyIsImZvcm1hdHRlZE1pbnV0ZXMiLCJjZW50ZXJFbGVtZW50IiwiZWxlbWVudCIsImJvdW5kaW5nQ2xpZW50IiwiY2VudGVyWCIsImNlbnRlclkiLCJ0b3AiLCJmb250cyIsInJlYWR5IiwiaWNvbnMiLCJvdXRsaW5lZGljb25zIiwidmlzaWJpbGl0eSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiZG9uZSIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJhbGxvd0FycmF5TGlrZSIsIml0IiwiQXJyYXkiLCJpc0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiRiIsIl9lIiwibm9ybWFsQ29tcGxldGlvbiIsImRpZEVyciIsImVyciIsInN0ZXAiLCJfZTIiLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiZnJvbSIsInRlc3QiLCJhcnIiLCJsZW4iLCJhcnIyIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJpbmZvIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJ1bmRlZmluZWQiLCJlbWFpbCIsInVzZXJuYW1lIiwidXNlckVtYWlsIiwicHJvZmlsZVBpY3R1cmUiLCJwcm9maWxlSWNvbiIsInByb2ZpbGVQaWN0dXJlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImxvYWRSb29tcyIsInNldENoYXRCYWNrZ3JvdW5kIiwidXJsSUROdW1iZXIiLCJyb29tcyIsImNyZWF0ZUJsYW5rQ2hhdCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsImVuY3J5cHRlZFVybElEIiwiZ2V0IiwidXJsSUQiLCJDcnlwdG9KUyIsIkFFUyIsImRlY3J5cHQiLCJlbmMiLCJVdGY4IiwiY2hhdCIsImNoYXRJRCIsImNoYXRzIiwiY2hhdEVsZW1lbnQiLCJjcmVhdGVCbGFua0NoYXRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3RlZENoYXQiLCJpbmNsdWRlcyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJjaGF0RGl2IiwiY3JlYXRlRWxlbWVudCIsInNlcnZlckljb24iLCJvdmVyZmxvdyIsImhvdmVyVGltZW91dCIsInNob3dIb3ZlckRpdiIsImhvdmVyRGl2IiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIm1heFdpZHRoIiwib3ZlcmZsb3dXcmFwIiwicmVjdCIsImNsaWVudFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2xhc3NOYW1lIiwicG9pbnRlckV2ZW50cyIsImNoYXRJY29uIiwic3JjIiwiYmFja2dyb3VuZENvbG9yIiwiaDZFbGVtZW50IiwidXNlclNlbGVjdCIsInNlbGVjdGlvbkl0ZW1zIiwiaXRlbSIsImNoaWxkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJuZXh0U2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsInJlbW92ZUNoaWxkIiwiZ2V0Q2hhdCIsImdldFVzZXJzIiwiX3giLCJfZ2V0Q2hhdCIsIl9jYWxsZWUiLCJlbmRwb2ludCIsImxvYWRpbmdUaW1lciIsImxvYWRpbmciLCJhZGRMb2FkaW5nU3Bpbm5lciIsIm1lc3NhZ2VzRGF0YSIsIl9pdGVyYXRvciIsIl9zdGVwIiwibWVzc2FnZURhdGEiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiX2FkZExvYWRpbmdTcGlubmVyIiwiY2hhdERhdGEiLCJDaGF0TmFtZSIsIm1hcCIsIm1lc3NhZ2UiLCJVc2VybmFtZSIsInVzZXJJY29uIiwiUHJvZmlsZUljb24iLCJkYXRlU2VudCIsIkRhdGVTZW50IiwiY29udGVudCIsIkNvbnRlbnQiLCJhcHBlbmRSaWNoTWVzc2FnZSIsInQwIiwiX3gyIiwiX2dldFVzZXJzIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJtZW1iZXJzIiwidXNlcnMiLCJtZW1iZXIiLCJkaXYiLCJwcm9maWxlSWNvbkltYWdlIiwidXNlcm5hbWVFbGVtZW50IiwicGF0aG5hbWUiXSwic291cmNlUm9vdCI6IiJ9