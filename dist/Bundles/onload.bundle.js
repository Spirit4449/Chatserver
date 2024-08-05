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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/onload.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0c2VydmVybmV3Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy8uL3NyYy9vbmxvYWQuanMiLCJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaGF0c2VydmVybmV3L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaGF0c2VydmVybmV3L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NoYXRzZXJ2ZXJuZXcvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9jaGF0c2VydmVybmV3L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jaGF0c2VydmVybmV3L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCIuL29ubG9hZFwiO1xuXG52YXIgY2hhdERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXQtZGlzcGxheVwiKTtcbmNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2UtY29udGFpbmVyXCIpO1xuY29uc3QgY2hhdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdC1jb250YWluZXJcIik7XG5jb25zdCBtZW1iZXJzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVtYmVycy1saXN0XCIpO1xuY29uc3QgbWVtYmVyc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVtYmVyc1wiKTtcbmNvbnN0IHdlbGNvbWVNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWxjb21lLW1lc3NhZ2VcIik7XG5jb25zdCBtZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZS1pbnB1dCcpXG5cbmNvbnN0IHJhdGVMaW1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmF0ZS1saW1pdFwiKTtcbmNvbnN0IHJhdGVMaW1pdE1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhdGUtbGltaXQtbWVzc2FnZVwiKTtcblxuY29uc3QgY2hhdE5hbWVMYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0LW5hbWUtbGFiZWwnKVxuXG5jb25zdCBkYXJrT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGFyay1vdmVybGF5XCIpO1xuXG5jb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmJhclwiKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XG5cbmlmIChuYXZiYXIgJiYgY29udGFpbmVyICYmIHNpZGViYXIpIHtcbiAgY29uc3QgbmF2YmFySGVpZ2h0ID0gbmF2YmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgY29uc3Qgc2lkZWJhcldpZHRoID0gc2lkZWJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGBjYWxjKDk5dmggLSAke25hdmJhckhlaWdodH1weClgO1xuICBjb250YWluZXIuc3R5bGUud2lkdGggPSBgY2FsYyg5OXZ3IC0gJHtzaWRlYmFyV2lkdGh9cHgpYDtcbn1cblxuY29uc3QgY3JlYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtbmV3XCIpO1xuY29uc3QgY3JlYXRlTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlXCIpO1xuXG5jcmVhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoIWNyZWF0ZS5jbGFzc0xpc3QuY29udGFpbnMoXCJhbmltYXRlLXJvdGF0ZVwiKSkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNyZWF0ZS5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZS1yb3RhdGUtb3V0XCIpO1xuICAgIC8vIENoZWNrIGlmIHRoZSAnYW5pbWF0ZS1sZWZ0JyBjbGFzcyBpcyBwcmVzZW50XG4gICAgaWYgKGNyZWF0ZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYW5pbWF0ZS1sZWZ0XCIpKSB7XG4gICAgICBjcmVhdGVNZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGNyZWF0ZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGUtbGVmdFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG9mZnNldExlZnQgPSBjcmVhdGUub2Zmc2V0TGVmdCArIGNyZWF0ZS5vZmZzZXRXaWR0aCArIDg7XG4gICAgICB2YXIgYnV0dG9uQm90dG9tID0gY3JlYXRlLm9mZnNldFRvcCArIGNyZWF0ZS5vZmZzZXRIZWlnaHQ7XG4gICAgICBjcmVhdGVNZW51LnN0eWxlLmxlZnQgPSBvZmZzZXRMZWZ0ICsgXCJweFwiO1xuICAgICAgY3JlYXRlTWVudS5zdHlsZS5ib3R0b20gPSA1MCArIFwicHhcIjtcbiAgICAgIGNyZWF0ZU1lbnUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgIGNyZWF0ZU1lbnUuY2xhc3NMaXN0LmFkZChcImFuaW1hdGUtbGVmdFwiKTtcbiAgICAgIGNyZWF0ZS5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZS1yb3RhdGVcIik7XG4gICAgfVxuICB9XG4gIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdmFyIHBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVcIik7XG4gICAgaWYgKFxuICAgICAgZXZlbnQudGFyZ2V0ICE9PSBwb3B1cCAmJlxuICAgICAgIXBvcHVwLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgIHBvcHVwLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIlxuICAgICkge1xuICAgICAgY2xvc2VQb3B1cChwb3B1cCk7XG4gICAgfVxuICB9O1xufSk7XG5cbmNvbnN0IGNyZWF0ZUdyb3VwRE1CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZS1ncm91cC1kbVwiKTtcbmNyZWF0ZUdyb3VwRE1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgY29uc3QgY3JlYXRlR3JvdXBETSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JvdXAtZG1cIik7XG4gIGNyZWF0ZUdyb3VwRE0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgZGFya092ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgY29uc3QgY2hhdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdC1uYW1lJylcbiAgY2hhdE5hbWUuZm9jdXMoKTtcbiAgY2xvc2VQb3B1cChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVwiKSk7XG4gIGNoYXROYW1lTGFiZWwuc3R5bGUuY29sb3IgPSBcIiNjZGNkY2RcIjtcbiAgY2hhdE5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiQ2hhdCBOYW1lXCI7XG4gIGNvbnN0IGNsb3NlR3JvdXBETSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtZ3JvdXBkbVwiKTtcbiAgY2xvc2VHcm91cERNLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjbG9zZVNldHVwKGNyZWF0ZUdyb3VwRE0pO1xuICAgIGNoYXROYW1lTGFiZWwuc3R5bGUuY29sb3IgPSBcIiNjZGNkY2RcIjtcbiAgICBjaGF0TmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJDaGF0IE5hbWVcIjtcbiAgfSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGNvbnN0IGdyb3VwRE1TdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjcmVhdGVHcm91cERNKTtcbiAgICBjb25zdCByYXRlTGltaXRTdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShyYXRlTGltaXQpO1xuICAgIGlmIChcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gY3JlYXRlR3JvdXBETSAmJlxuICAgICAgIWNyZWF0ZUdyb3VwRE0uY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxuICAgICAgZ3JvdXBETVN0eWxlcy5kaXNwbGF5ID09PSBcImJsb2NrXCIgJiZcbiAgICAgIHJhdGVMaW1pdFN0eWxlcy5kaXNwbGF5ID09PSBcIm5vbmVcIlxuICAgICkge1xuICAgICAgY2xvc2VTZXR1cChjcmVhdGVHcm91cERNKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmNvbnN0IGNyZWF0ZUdyb3VwRG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwZG0tY3JlYXRlXCIpO1xuXG5jcmVhdGVHcm91cERtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgY2hhdE5hbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LW5hbWVcIik7XG4gIGNvbnN0IGNoYXROYW1lID0gY2hhdE5hbWVFbGVtZW50LnZhbHVlO1xuICBjb25zb2xlLmxvZyhjaGF0TmFtZSk7XG4gIGlmIChjaGF0TmFtZSAhPT0gXCJcIikge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBuYW1lOiBjaGF0TmFtZSxcbiAgICB9O1xuXG4gICAgZmV0Y2goXCIvY2hhdFwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MjkpIHtcbiAgICAgICAgICByYXRlTGltaXRNZXNzYWdlLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIFwiWW91IGFyZSBjcmVhdGluZyB0b28gbWFueSBzZXJ2ZXJzLiBUcnkgYWdhaW4gaW4gYSBmZXcgbWludXRlc1wiO1xuICAgICAgICAgIHJhdGVMaW1pdC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgIGRhcmtPdmVybGF5LnN0eWxlLnpJbmRleCA9IFwiNFwiO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRvbyBtYW55IHJlcXVlc3RzXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvay5cIik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2VEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwRE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwLWRtXCIpO1xuICAgICAgICBjbG9zZVNldHVwKGdyb3VwRE0pO1xuICAgICAgICBjaGF0TmFtZUxhYmVsLnN0eWxlLmNvbG9yID0gXCIjY2RjZGNkXCI7XG4gICAgICAgIGNoYXROYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIkNoYXQgTmFtZVwiO1xuICAgICAgICBjaGF0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGNvbnN0IGNyZWF0ZWRDaGF0ID0gY3JlYXRlQ2hhdEVsZW1lbnQoY2hhdE5hbWUsIHJlc3BvbnNlRGF0YS5pZCk7XG4gICAgICAgIGNoYXRDb250YWluZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZWRDaGF0LCBjaGF0Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICAgICBjb25zb2xlLmxvZyhjcmVhdGVkQ2hhdCk7XG4gICAgICAgIHJlZGlyZWN0KHJlc3BvbnNlRGF0YS5pZCwgY3JlYXRlZENoYXQpO1xuICAgICAgICBjcmVhdGVkQ2hhdC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJjZW50ZXJcIiB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBjaGF0OlwiLCBlcnJvcik7XG4gICAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBjaGF0TmFtZUxhYmVsLnN0eWxlLmNvbG9yID0gXCIjZmE3NzdjXCI7XG4gICAgY2hhdE5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiQ2hhdCBOYW1lIC0gcGxlYXNlIHByb3ZpZGUgYSBuYW1lXCI7XG4gIH1cbn0pO1xuXG5jb25zdCBwYW5lbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhbmVsXCIpO1xucGFuZWxzLmZvckVhY2goKHBhbmVsKSA9PiB7XG4gIGNvbnN0IHRleHQgPSBwYW5lbFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZFwiKVxuICAgIC50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xuICBpZiAodGV4dCA9PT0gXCJob21lXCIpIHtcbiAgICBwYW5lbC5xdWVyeVNlbGVjdG9yKFwiLm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZFwiKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgY29uc3QgbGFiZWwgPSBwYW5lbC5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIik7XG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG4gICAgfVxuICB9XG59KTtcblxuY29uc3QgYnJhbmRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJyYW5kaW5nXCIpO1xuYnJhbmRpbmcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9ob21lXCI7XG59KTtcbmNvbnN0IGxhYmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFuZWwgbGFiZWxcIik7XG5cbnBhbmVscy5mb3JFYWNoKChwYW5lbCwgaW5kZXgpID0+IHtcbiAgcGFuZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBSZW1vdmUgdGhlIFwic2VsZWN0ZWRcIiBjbGFzcyBmcm9tIGFsbCBpY29ucyBhbmQgbGFiZWxzXG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhbmVsIC5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWRcIilcbiAgICAgIC5mb3JFYWNoKChpY29uKSA9PiBpY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSk7XG4gICAgbGFiZWxzLmZvckVhY2goKGwpID0+IGwuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpKTtcblxuICAgIC8vIEFkZCB0aGUgXCJzZWxlY3RlZFwiIGNsYXNzIHRvIHRoZSBjbGlja2VkIGljb24gYW5kIGxhYmVsXG4gICAgcGFuZWwucXVlcnlTZWxlY3RvcihcIi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWRcIikuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIGxhYmVsc1tpbmRleF0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICB9KTtcbn0pO1xuXG5jb25zdCBwZXJzb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlcnNvblwiKTtcbnBlcnNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKG1lbWJlcnNDb250YWluZXIuc3R5bGUud2lkdGgpO1xuICBpZiAobWVtYmVyc0NvbnRhaW5lci5zdHlsZS53aWR0aCA9PT0gXCIwcHhcIikge1xuICAgIG1lbWJlcnNDb250YWluZXIuc3R5bGUud2lkdGggPSBcIjE4JVwiO1xuICAgIG1lbWJlcnNDb250YWluZXIuc3R5bGUuYm9yZGVyTGVmdCA9IFwiMXB4IHNvbGlkICM0MTQwNDNcIjtcbiAgICBwZXJzb24uY2xhc3NMaXN0LmFkZChcInRvZ2dsZWRcIik7XG4gIH0gZWxzZSB7XG4gICAgbWVtYmVyc0NvbnRhaW5lci5zdHlsZS53aWR0aCA9IFwiMFwiO1xuICAgIG1lbWJlcnNDb250YWluZXIuc3R5bGUuYm9yZGVyTGVmdCA9IFwibm9uZVwiO1xuICAgIHBlcnNvbi5jbGFzc0xpc3QucmVtb3ZlKFwidG9nZ2xlZFwiKTtcbiAgfVxufSk7XG5cbmNvbnN0IHJhdGVMaW1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmF0ZS1saW1pdC1idXR0b25cIik7XG5yYXRlTGltaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICByYXRlTGltaXQuY2xhc3NMaXN0LmFkZChcInpvb21vdXRcIik7XG4gIHJhdGVMaW1pdC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC5hbmltYXRpb25OYW1lID09PSBcInpvb21PdXRcIikge1xuICAgICAgcmF0ZUxpbWl0LmNsYXNzTGlzdC5yZW1vdmUoXCJ6b29tb3V0XCIpO1xuICAgICAgcmF0ZUxpbWl0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwLWRtXCIpLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgICAgICBkYXJrT3ZlcmxheS5zdHlsZS56SW5kZXggPSBcIjNcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBtZXNzYWdlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgZGFya092ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KTtcblxuY29uc3Qgc2VydmVyRHJvcGRvd24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcnZlci1vcHRpb25zXCIpO1xuc2VydmVyRHJvcGRvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbmNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlLWlucHV0XCIpO1xuY29uc3QgbWVzc2FnZUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwibWVzc2FnZS1pbnB1dC1jb250YWluZXJcIlxuKTtcbmNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlc1wiKTtcblxubWVzc2FnZUlucHV0Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGAke3RleHRhcmVhLnNjcm9sbEhlaWdodH1weGA7XG5cbnRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgdGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7IC8vIFJlc2V0IGhlaWdodCB0byBhbGxvdyBpdCB0byBzaHJpbmtcbiAgbWVzc2FnZUlucHV0Q29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiOyAvLyBSZXNldCBjb250YWluZXIgaGVpZ2h0XG4gIGNvbnN0IG5ld0hlaWdodCA9IGAke3RleHRhcmVhLnNjcm9sbEhlaWdodH1weGA7IC8vIEdldCB0aGUgbmV3IGhlaWdodFxuICBjb25zdCBuZXdIZWlnaHRQZXJjZW50ID0gKHBhcnNlSW50KG5ld0hlaWdodCkgKiAxMDApIC8gbWVzc2FnZXMuY2xpZW50SGVpZ2h0O1xuXG4gIGlmIChuZXdIZWlnaHRQZXJjZW50IDw9IDUwKSB7XG4gICAgLy8gQXNzdW1pbmcgTUFYX0hFSUdIVCBpcyB0aGUgbWF4aW11bSBoZWlnaHQgZm9yIG1lc3NhZ2VJbnB1dENvbnRhaW5lclxuICAgIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9IG5ld0hlaWdodDsgLy8gU2V0IHRleHRhcmVhIGhlaWdodFxuICAgIG1lc3NhZ2VJbnB1dENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBuZXdIZWlnaHQ7IC8vIFNldCBjb250YWluZXIgaGVpZ2h0XG4gIH0gZWxzZSB7XG4gICAgdGV4dGFyZWEuc3R5bGUuaGVpZ2h0ID0gYCR7MTAwfSVgOyAvLyBTZXQgdGV4dGFyZWEgdG8gbWF4IGhlaWdodFxuICAgIG1lc3NhZ2VJbnB1dENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgJHs1MH0lYDsgLy8gU2V0IGNvbnRhaW5lciB0byBtYXggaGVpZ2h0XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjbG9zZVNldHVwKHBvcHVwKSB7XG4gIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJ6b29tb3V0XCIpO1xuICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudC5hbmltYXRpb25OYW1lID09PSBcInpvb21PdXRcIikge1xuICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcInpvb21vdXRcIik7XG4gICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9KTtcbiAgZGFya092ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiBjbG9zZVBvcHVwKHBvcHVwKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdC1uYW1lXCIpLnZhbHVlID0gXCJcIjtcbiAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKFwiYW5pbWF0ZS1sZWZ0XCIpO1xuICB2YXIgY3JlYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtbmV3XCIpO1xuICBjcmVhdGUuY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGUtcm90YXRlXCIpO1xuICBjcmVhdGUuY2xhc3NMaXN0LmFkZChcImFuaW1hdGUtcm90YXRlLW91dFwiKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGltZXN0YW1wKHRleHQpIHtcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBmb3JtYXR0ZWRDdXJyZW50RGF0ZSA9IGZvcm1hdENoYXREYXRlKGN1cnJlbnREYXRlKTtcbiAgY29uc3QgeWVzdGVyZGF5ID0gbmV3IERhdGUoY3VycmVudERhdGUgLSA4NjQwMDAwMCk7XG4gIGNvbnN0IGZvcm1hdHRlZFllc3RlcmRheSA9IGZvcm1hdENoYXREYXRlKHllc3RlcmRheSk7XG5cbiAgY29uc3QgdGltZXN0YW1wRGF0ZSA9IG5ldyBEYXRlKHRleHQuc3BsaXQoXCIgXCIpWzBdKTtcblxuICBjb25zdCBmb3JtYXR0ZWRUaW1lc3RhbXBEYXRlID0gZm9ybWF0Q2hhdERhdGUodGltZXN0YW1wRGF0ZSk7XG5cbiAgaWYgKHRleHQuc3BsaXQoXCIgXCIpWzBdID09PSBmb3JtYXR0ZWRDdXJyZW50RGF0ZS5zcGxpdChcIiBcIilbMF0pIHtcbiAgICByZXR1cm4gYFRvZGF5IGF0ICR7dGV4dC5zcGxpdChcIiBcIilbMl19YDtcbiAgfSBlbHNlIGlmICh0ZXh0LnNwbGl0KFwiIFwiKVswXSA9PT0gZm9ybWF0dGVkWWVzdGVyZGF5LnNwbGl0KFwiIFwiKVswXSkge1xuICAgIHJldHVybiBgWWVzdGVyZGF5IGF0ICR7dGV4dC5zcGxpdChcIiBcIilbMl19YDtcbiAgfVxuXG4gIHJldHVybiB0ZXh0O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRDaGF0RGF0ZSh0aW1lc3RhbXApIHtcbiAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBtZXNzYWdlRGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XG5cbiAgY29uc3QgbW9udGggPSBtZXNzYWdlRGF0ZS5nZXRNb250aCgpICsgMTtcbiAgY29uc3QgZGF5ID0gbWVzc2FnZURhdGUuZ2V0RGF0ZSgpO1xuICBjb25zdCB5ZWFyID0gbWVzc2FnZURhdGUuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgaG91cnMgPSBtZXNzYWdlRGF0ZS5nZXRIb3VycygpO1xuICBjb25zdCBtaW51dGVzID0gbWVzc2FnZURhdGUuZ2V0TWludXRlcygpO1xuICBjb25zdCBwZXJpb2QgPSBob3VycyA+PSAxMiA/IFwicG1cIiA6IFwiYW1cIjtcbiAgY29uc3QgZm9ybWF0dGVkSG91cnMgPSBob3VycyAlIDEyIHx8IDEyOyAvLyBDb252ZXJ0IHRvIDEyLWhvdXIgZm9ybWF0XG4gIGNvbnN0IGZvcm1hdHRlZE1pbnV0ZXMgPSBtaW51dGVzIDwgMTAgPyBgMCR7bWludXRlc31gIDogbWludXRlczsgLy8gUGFkIG1pbnV0ZXMgd2l0aCB6ZXJvIGlmIG5lZWRlZFxuXG4gIHJldHVybiBgJHttb250aH0vJHtkYXl9LyR7eWVhcn0gYXQgJHtmb3JtYXR0ZWRIb3Vyc306JHtmb3JtYXR0ZWRNaW51dGVzfSR7cGVyaW9kfWA7XG59XG5cbmZ1bmN0aW9uIGNlbnRlckVsZW1lbnQoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gIGxldCBib3VuZGluZ0NsaWVudCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgbGV0IGNlbnRlclggPSBib3VuZGluZ0NsaWVudC5sZWZ0ICsgYm91bmRpbmdDbGllbnQud2lkdGggLyAyO1xuICBsZXQgY2VudGVyWSA9IGJvdW5kaW5nQ2xpZW50LnRvcCArIGJvdW5kaW5nQ2xpZW50LmhlaWdodCAvIDI7XG5cbiAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gY2VudGVyWCAtIGVsZW1lbnQub2Zmc2V0V2lkdGggLyAyICsgXCJweFwiO1xuICBlbGVtZW50LnN0eWxlLnRvcCA9IGNlbnRlclkgLSBlbGVtZW50Lm9mZnNldEhlaWdodCAvIDIgKyBcInB4XCI7XG59XG5cbi8vIE1ha2UgZm9udHMgdmlzaWJsZSBvbmNlIHRoZSBkb2N1bWVudCBsb2FkcyB0byBwcmV2ZW50IHNwYW4gdGV4dCBzaG93aW5nIG9uIHJlbG9hZFxuZG9jdW1lbnQuZm9udHMucmVhZHkudGhlbigoKSA9PiB7XG4gIGNvbnN0IGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWRcIik7XG4gIGljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoXCJmb250LWxvYWRlZFwiKTtcbiAgfSk7XG4gIGNvbnN0IG91dGxpbmVkaWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XG4gIG91dGxpbmVkaWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgIGljb24uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICB9KTtcbn0pO1xuXG5leHBvcnQgeyB1cGRhdGVUaW1lc3RhbXAsIGNlbnRlckVsZW1lbnQsIGNsb3NlU2V0dXAsIGZvcm1hdENoYXREYXRlIH07XG4iLCJpbXBvcnQgeyB1cGRhdGVUaW1lc3RhbXAsIGNlbnRlckVsZW1lbnQgfSBmcm9tIFwiLi9ob21lXCI7XG5cbi8vIEdldCBwcm9maWxlIGRhdGFcbmZldGNoKFwiL3Byb2ZpbGVcIilcbiAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gcmV0cmlldmUgcHJvZmlsZSBkYXRhXCIpO1xuICAgIH1cbiAgfSlcbiAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICBpZiAoZGF0YS5lbWFpbCAmJiBkYXRhLnVzZXJuYW1lKSB7XG4gICAgICBjb25zdCB1c2VyRW1haWwgPSBkYXRhLmVtYWlsO1xuICAgICAgY29uc3QgdXNlcm5hbWUgPSBkYXRhLnVzZXJuYW1lO1xuICAgICAgY29uc3QgcHJvZmlsZVBpY3R1cmUgPSBkYXRhLnByb2ZpbGVJY29uO1xuICAgICAgY29uc3QgcHJvZmlsZVBpY3R1cmVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9maWxlLXBpY3R1cmVcIik7XG4gICAgICBwcm9maWxlUGljdHVyZUVsZW1lbnQuc2V0QXR0cmlidXRlKFxuICAgICAgICBcInNyY1wiLFxuICAgICAgICBgL2Fzc2V0cy9Qcm9maWxlIEljb25zLyR7cHJvZmlsZVBpY3R1cmV9YFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9sb2dpblwiO1xuICAgIH1cbiAgfSk7XG5cbmxvYWRSb29tcygpO1xuc2V0Q2hhdEJhY2tncm91bmQoKTtcblxuLy8gT25sb2FkIGZ1bmN0aW9uc1xuZnVuY3Rpb24gbG9hZFJvb21zKCkge1xuICBmZXRjaChcIi9nZXQtcm9vbXNcIilcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdmFyIHVybElETnVtYmVyO1xuXG4gICAgICBpZiAoZGF0YS5yb29tcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gQ3JlYXRlIGVub3VnaCBibGFuayBjaGF0cyB0byBmaWxsIHVwIG1vc3Qgb2YgdGhlIGNoYXQgZWxlbWVudFxuICAgICAgICAvLyBUbyBkbyAtIGNyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgY2FuIGNhbGN1bGF0ZSBob3cgbWFueSBibGFuayBjaGF0cyB0byBjcmVhdGVcbiAgICAgICAgY3JlYXRlQmxhbmtDaGF0KFwiIzJBMkEyQVwiKTtcbiAgICAgICAgY3JlYXRlQmxhbmtDaGF0KFwiIzI5MjkyOVwiKTtcbiAgICAgICAgY3JlYXRlQmxhbmtDaGF0KFwiIzI4MjgyOFwiKTtcbiAgICAgICAgY3JlYXRlQmxhbmtDaGF0KFwiIzI3MjcyN1wiKTtcbiAgICAgICAgY3JlYXRlQmxhbmtDaGF0KFwiIzI2MjYyNlwiKTtcbiAgICAgICAgY3JlYXRlQmxhbmtDaGF0KFwiIzI1MjUyNVwiKTtcbiAgICAgICAgY3JlYXRlQmxhbmtDaGF0KFwiIzI0MjQyNFwiKTtcbiAgICAgICAgY3JlYXRlQmxhbmtDaGF0KFwiIzIzMjMyM1wiKTtcbiAgICAgICAgY3JlYXRlQmxhbmtDaGF0KFwiIzFkMWQxZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgIGNvbnN0IGVuY3J5cHRlZFVybElEID0gdXJsUGFyYW1zLmdldChcImNoYXRJRFwiKTtcbiAgICAgICAgaWYgKGVuY3J5cHRlZFVybElEKSB7XG4gICAgICAgICAgY29uc3QgdXJsSUQgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdChlbmNyeXB0ZWRVcmxJRCwga2V5KS50b1N0cmluZyhcbiAgICAgICAgICAgIENyeXB0b0pTLmVuYy5VdGY4XG4gICAgICAgICAgKTtcbiAgICAgICAgICB1cmxJRE51bWJlciA9IHVybElEID8gcGFyc2VJbnQodXJsSUQsIDEwKSA6IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YS5yb29tcy5mb3JFYWNoKChjaGF0LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNoYXRJRCA9IGRhdGEuY2hhdHNbaW5kZXhdO1xuICAgICAgICAgIGNvbnN0IGNoYXRFbGVtZW50ID0gY3JlYXRlQmxhbmtDaGF0RWxlbWVudChjaGF0LCBjaGF0SUQpO1xuICAgICAgICAgIGNoYXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hhdEVsZW1lbnQpO1xuXG4gICAgICAgICAgaWYgKHVybElETnVtYmVyID09PSBjaGF0SUQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ2hhdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2NoYXRJRH1gKTtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGNoYXRJRCBpcyBwcmVzZW50IGFuZCBjYWxsIHRoZSByZWRpcmVjdCBmdW5jdGlvblxuICAgICAgICAgICAgaWYgKGNoYXRJRCAmJiBzZWxlY3RlZENoYXQpIHtcbiAgICAgICAgICAgICAgcmVkaXJlY3QoY2hhdElELCBzZWxlY3RlZENoYXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKFwiY2hhdElEXCIpKSB7XG4gICAgICAgICAgLy8gSWYgc28sIGNoYW5nZSB0aGUgVVJMIHRvIC9ob21lXG4gICAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgXCIvaG9tZVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgcm9vbXM6XCIsIGVycm9yKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJsYW5rQ2hhdEVsZW1lbnQoY2hhdCwgY2hhdElEKSB7XG4gIGNvbnN0IGNoYXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaGF0RGl2LmNsYXNzTGlzdC5hZGQoXCJjaGF0XCIpO1xuICBjaGF0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIGAke2NoYXRJRH1gKTtcbiAgLy8gU2VydmVyIEljb25cbiAgY29uc3Qgc2VydmVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIHNlcnZlckljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIGAvYXNzZXRzL1Byb2ZpbGUgSWNvbnMvZ3JlZW5Qcm9maWxlSWNvbi5wbmdgKTtcbiAgc2VydmVySWNvbi5jbGFzc0xpc3QuYWRkKFwiY2hhdC1pY29uXCIpO1xuICBjaGF0RGl2LmFwcGVuZENoaWxkKHNlcnZlckljb24pO1xuXG4gIGNvbnN0IGNoYXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg2XCIpO1xuICBjaGF0TmFtZS50ZXh0Q29udGVudCA9IGNoYXQ7XG4gIGNoYXROYW1lLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbiAgY2hhdERpdi5hcHBlbmRDaGlsZChjaGF0TmFtZSk7XG5cbiAgY2hhdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJlZGlyZWN0KGNoYXRJRCwgY2hhdERpdik7XG4gIH0pO1xuICBsZXQgaG92ZXJUaW1lb3V0O1xuICBjaGF0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBzaG93SG92ZXJEaXYoKSB7XG4gICAgICBjb25zdCBob3ZlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBob3ZlckRpdi50ZXh0Q29udGVudCA9IGNoYXQ7XG4gICAgICBob3ZlckRpdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICAgIGhvdmVyRGl2LnN0eWxlLmJhY2tncm91bmQgPSBcIiMyRTJFMkVcIjtcbiAgICAgIGhvdmVyRGl2LnN0eWxlLmNvbG9yID0gXCIjRDRENEQ0XCI7XG4gICAgICBob3ZlckRpdi5zdHlsZS5wYWRkaW5nID0gXCIzcHggOHB4XCI7XG4gICAgICBob3ZlckRpdi5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcbiAgICAgIGhvdmVyRGl2LnN0eWxlLm1heFdpZHRoID0gXCIyMDBweFwiO1xuICAgICAgaG92ZXJEaXYuc3R5bGUub3ZlcmZsb3dXcmFwID0gXCJhbnl3aGVyZVwiO1xuXG4gICAgICBjb25zdCByZWN0ID0gY2hhdERpdi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGNlbnRlclggPSByZWN0LmxlZnQgKyByZWN0LndpZHRoIC8gMjtcbiAgICAgIGNvbnN0IHRvcCA9IHJlY3QudG9wO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhvdmVyRGl2KTtcbiAgICAgIGhvdmVyRGl2LnN0eWxlLmxlZnQgPSBjZW50ZXJYIC0gaG92ZXJEaXYuY2xpZW50V2lkdGggLyAyICsgXCJweFwiO1xuICAgICAgaG92ZXJEaXYuc3R5bGUudG9wID0gdG9wIC0gaG92ZXJEaXYuY2xpZW50SGVpZ2h0IC0gNSArIFwicHhcIjtcbiAgICAgIGNoYXREaXYuaG92ZXJEaXYgPSBob3ZlckRpdjtcbiAgICB9XG4gICAgaWYgKGNoYXROYW1lLnNjcm9sbFdpZHRoID4gY2hhdE5hbWUuY2xpZW50V2lkdGgpIHtcbiAgICAgIGhvdmVyVGltZW91dCA9IHNldFRpbWVvdXQoc2hvd0hvdmVyRGl2LCAxMDAwKTtcbiAgICB9XG4gIH0pO1xuICBjaGF0RGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhclRpbWVvdXQoaG92ZXJUaW1lb3V0KTtcbiAgICBpZiAoY2hhdERpdi5ob3ZlckRpdikge1xuICAgICAgY2hhdERpdi5ob3ZlckRpdi5yZW1vdmUoKTtcbiAgICAgIGNoYXREaXYuaG92ZXJEaXYgPSBudWxsOyAvLyBSZW1vdmUgdGhlIHJlZmVyZW5jZVxuICAgIH1cbiAgfSk7XG4gIGNoYXRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNoYXREaXYuaG92ZXJEaXYpIHtcbiAgICAgIGNoYXREaXYuaG92ZXJEaXYucmVtb3ZlKCk7XG4gICAgICBjaGF0RGl2LmhvdmVyRGl2ID0gbnVsbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gY2hhdERpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmxhbmtDaGF0KGNvbG9yKSB7XG4gIHZhciBjaGF0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNoYXRFbGVtZW50LmNsYXNzTmFtZSA9IFwiY2hhdFwiO1xuICBjaGF0RWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cbiAgdmFyIGNoYXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgY2hhdEljb24uc3JjID0gXCIvYXNzZXRzL3RyYW5zcGFyZW50aW1hZ2UucG5nXCI7XG4gIGNoYXRJY29uLmNsYXNzTmFtZSA9IFwiY2hhdC1pY29uXCI7XG4gIGNoYXRJY29uLnN0eWxlLndpZHRoID0gXCIzNXB4XCI7XG4gIGNoYXRJY29uLnN0eWxlLmhlaWdodCA9IFwiMzVweFwiO1xuICBjaGF0SWNvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcblxuICB2YXIgaDZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg2XCIpO1xuICBoNkVsZW1lbnQudGV4dENvbnRlbnQgPSBcIm5vbmVcIjtcbiAgaDZFbGVtZW50LnN0eWxlLmNvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xuICBoNkVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gIGg2RWxlbWVudC5zdHlsZS51c2VyU2VsZWN0ID0gXCJub25lXCI7XG4gIGg2RWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gIGg2RWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcblxuICBjaGF0RWxlbWVudC5hcHBlbmRDaGlsZChjaGF0SWNvbik7XG4gIGNoYXRFbGVtZW50LmFwcGVuZENoaWxkKGg2RWxlbWVudCk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LWNvbnRhaW5lclwiKS5hcHBlbmRDaGlsZChjaGF0RWxlbWVudCk7XG59XG5cbi8vIER5bmFtaWMgamF2YXNjaXBydCB3aGVuIGNob29zaW5nIGNoYXRzXG5mdW5jdGlvbiByZWRpcmVjdChjaGF0SUQsIGNoYXREaXYpIHtcbiAgY29uc3Qgc2VsZWN0aW9uSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoYXRcIik7XG4gIHNlbGVjdGlvbkl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgfSk7XG5cbiAgLy8gU2VsZWN0IHRoZSBjbGlja2VkIGl0ZW1cbiAgY2hhdERpdi5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG5cbiAgaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgbnVsbCwgYC9jaGF0LyR7Y2hhdElEfWApO1xuICBjaGF0RGlzcGxheS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gIGNvbnN0IGljb25zID0gY2hhdERpc3BsYXkucXVlcnlTZWxlY3RvckFsbChcIi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWRcIik7XG4gIGljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICBpY29uLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgfSk7XG4gIGlmIChtZW1iZXJzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPT09IFwiaGlkZGVuXCIpIHtcbiAgICBtZW1iZXJzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgfVxuICB3ZWxjb21lTWVzc2FnZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vLWNoYXQtc2VsZWN0ZWRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIC8vIFJlbW92ZSBhbGwgY2hpbGRyZW4gZnJvbSBjaGF0c1xuICBsZXQgY2hpbGQgPSBtZXNzYWdlQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkO1xuICB3aGlsZSAoY2hpbGQpIHtcbiAgICBjb25zdCBuZXh0U2libGluZyA9IGNoaWxkLm5leHRFbGVtZW50U2libGluZztcbiAgICBpZiAoY2hpbGQuaWQgIT09IFwid2VsY29tZS1tZXNzYWdlXCIpIHtcbiAgICAgIG1lc3NhZ2VDb250YWluZXIucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIH1cbiAgICBjaGlsZCA9IG5leHRTaWJsaW5nO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGFsbCBjaGlsZHJlbiBmcm9tIG1lbWJlcnNcbiAgd2hpbGUgKG1lbWJlcnNMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICBtZW1iZXJzTGlzdC5yZW1vdmVDaGlsZChtZW1iZXJzTGlzdC5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGdldENoYXQoY2hhdElEKTtcbiAgZ2V0VXNlcnMoY2hhdElEKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q2hhdChlbmRwb2ludCkge1xuICBsZXQgbG9hZGluZ1RpbWVyO1xuICBsZXQgbG9hZGluZztcbiAgLy8gRnVuY3Rpb24gdG8gYWRkIGxvYWRpbmcgc3Bpbm5lciBhZnRlciBhIGRlbGF5XG4gIGZ1bmN0aW9uIGFkZExvYWRpbmdTcGlubmVyKCkge1xuICAgIGxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvYWRpbmdcIik7XG4gICAgbG9hZGluZy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGNlbnRlckVsZW1lbnQobG9hZGluZywgbWVzc2FnZUNvbnRhaW5lcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBjZW50ZXJFbGVtZW50KGxvYWRpbmcsIG1lc3NhZ2VDb250YWluZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gU3RhcnQgYSB0aW1lciB0byBhZGQgbG9hZGluZyBzcGlubmVyIGFmdGVyIDUwMCBtaWxsaXNlY29uZHNcbiAgbG9hZGluZ1RpbWVyID0gc2V0VGltZW91dChhZGRMb2FkaW5nU3Bpbm5lciwgNzAwKTtcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluY2x1ZGVzKFwiY2hhdFwiKSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvZ2V0Y2hhdC8ke2VuZHBvaW50fWApO1xuXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KGxvYWRpbmdUaW1lcik7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdC1uYW1lLWhlYWRlclwiKS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgZGF0YS5jaGF0RGF0YS5DaGF0TmFtZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWxjb21lLW5hbWVcIikudGV4dENvbnRlbnQgPVxuICAgICAgICAgIGRhdGEuY2hhdERhdGEuQ2hhdE5hbWU7XG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgLmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZS1pbnB1dFwiKVxuICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBgTWVzc2FnZSAke2RhdGEuY2hhdERhdGEuQ2hhdE5hbWV9Li4uYCk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZXNEYXRhID0gZGF0YS5tZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICBjb25zdCB1c2VybmFtZSA9IG1lc3NhZ2UuVXNlcm5hbWUgfHwgXCJVbmtub3duXCI7XG4gICAgICAgICAgY29uc3QgdXNlckljb24gPVxuICAgICAgICAgICAgbWVzc2FnZS5Qcm9maWxlSWNvbiB8fFxuICAgICAgICAgICAgXCIvYXNzZXRzL1Byb2ZpbGUgSWNvbnMvdW5rbm93blByb2ZpbGVJY29uLnBuZ1wiO1xuICAgICAgICAgIHZhciBkYXRlU2VudCA9IG1lc3NhZ2UuRGF0ZVNlbnQgfHwgXCJcIjtcbiAgICAgICAgICBkYXRlU2VudCA9IHVwZGF0ZVRpbWVzdGFtcChkYXRlU2VudCk7XG4gICAgICAgICAgcmV0dXJuIHsgdXNlcm5hbWUsIGNvbnRlbnQ6IG1lc3NhZ2UuQ29udGVudCwgdXNlckljb24sIGRhdGVTZW50IH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE5vdyB0aGF0IGFsbCBtZXNzYWdlcyBhcmUgbG9hZGVkLCBtYWtlIHRoZSBjaGF0IGNvbnRhaW5lciB2aXNpYmxlXG4gICAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgICAgbWVzc2FnZUNvbnRhaW5lci5yZW1vdmVDaGlsZChsb2FkaW5nKTtcbiAgICAgICAgfVxuICAgICAgICB3ZWxjb21lTWVzc2FnZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG5cbiAgICAgICAgZm9yIChjb25zdCBtZXNzYWdlRGF0YSBvZiBtZXNzYWdlc0RhdGEpIHtcbiAgICAgICAgICBhcHBlbmRSaWNoTWVzc2FnZShcbiAgICAgICAgICAgIG1lc3NhZ2VEYXRhLnVzZXJuYW1lLFxuICAgICAgICAgICAgbWVzc2FnZURhdGEuY29udGVudCxcbiAgICAgICAgICAgIG1lc3NhZ2VEYXRhLnVzZXJJY29uLFxuICAgICAgICAgICAgbWVzc2FnZURhdGEuZGF0ZVNlbnQsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Igd2l0aCB0aGUgbWFpbiBjaGF0IGRhdGEgZmV0Y2gsIG1ha2UgdGhlIGNoYXQgY29udGFpbmVyIHZpc2libGVcbiAgICAgICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgY2hhdCBkYXRhOlwiLCBlcnJvcik7XG4gICAgICAvLyBJZiB0aGVyZSdzIGFuIGVycm9yIHdpdGggdGhlIG1haW4gY2hhdCBkYXRhIGZldGNoLCBtYWtlIHRoZSBjaGF0IGNvbnRhaW5lciB2aXNpYmxlXG4gICAgICBpZiAobG9hZGluZykge1xuICAgICAgICBtZXNzYWdlQ29udGFpbmVyLnJlbW92ZUNoaWxkKGxvYWRpbmcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRleHRhcmVhLmZvY3VzKCk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcnMoZW5kcG9pbnQpIHtcbiAgZmV0Y2goYC9nZXQtdXNlcnMvJHtlbmRwb2ludH1gLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICB9LFxuICB9KVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBtZW1iZXJzID0gZGF0YS51c2VycztcbiAgICAgIG1lbWJlcnMuZm9yRWFjaCgobWVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gbWVtYmVyW1wiVXNlcm5hbWVcIl07XG4gICAgICAgIGNvbnN0IHByb2ZpbGVJY29uID0gbWVtYmVyW1wiUHJvZmlsZUljb25cIl07XG5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJtZW1iZXJcIik7XG5cbiAgICAgICAgY29uc3QgcHJvZmlsZUljb25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIHByb2ZpbGVJY29uSW1hZ2Uuc2V0QXR0cmlidXRlKFxuICAgICAgICAgIFwic3JjXCIsXG4gICAgICAgICAgYC9hc3NldHMvUHJvZmlsZSBJY29ucy8ke3Byb2ZpbGVJY29ufWBcbiAgICAgICAgKTtcbiAgICAgICAgcHJvZmlsZUljb25JbWFnZS5jbGFzc0xpc3QuYWRkKFwicHJvZmlsZS1pY29uXCIpO1xuXG4gICAgICAgIGNvbnN0IHVzZXJuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNlwiKTtcbiAgICAgICAgdXNlcm5hbWVFbGVtZW50LnRleHRDb250ZW50ID0gdXNlcm5hbWU7XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHByb2ZpbGVJY29uSW1hZ2UpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodXNlcm5hbWVFbGVtZW50KTtcblxuICAgICAgICBtZW1iZXJzTGlzdC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0Q2hhdEJhY2tncm91bmQoKSB7XG4gIC8vIENoZWNrIGlmIHRoZSBjdXJyZW50IFVSTCBpcyBcIi9ob21lXCJcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gXCIvaG9tZVwiKSB7XG4gICAgLy8gSGlkZSB0aGUgY2hhdCBoZWFkZXJcbiAgICBjaGF0RGlzcGxheS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBtZW1iZXJzQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIGNvbnN0IGljb25zID0gY2hhdERpc3BsYXkucXVlcnlTZWxlY3RvckFsbChcIi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWRcIik7XG4gICAgaWNvbnMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgaWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICB9KTtcbiAgfVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vLWNoYXQtc2VsZWN0ZWRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuZXhwb3J0IHsgcmVkaXJlY3QgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvb25sb2FkLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbInJlZGlyZWN0IiwiY2hhdERpc3BsYXkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibWVzc2FnZUNvbnRhaW5lciIsImNoYXRDb250YWluZXIiLCJtZW1iZXJzTGlzdCIsIm1lbWJlcnNDb250YWluZXIiLCJ3ZWxjb21lTWVzc2FnZSIsIm1lc3NhZ2VJbnB1dCIsInJhdGVMaW1pdCIsInJhdGVMaW1pdE1lc3NhZ2UiLCJjaGF0TmFtZUxhYmVsIiwiZGFya092ZXJsYXkiLCJuYXZiYXIiLCJxdWVyeVNlbGVjdG9yIiwiY29udGFpbmVyIiwic2lkZWJhciIsIm5hdmJhckhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsInNpZGViYXJXaWR0aCIsIndpZHRoIiwic3R5bGUiLCJjb25jYXQiLCJjcmVhdGUiLCJjcmVhdGVNZW51IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJzdG9wUHJvcGFnYXRpb24iLCJyZW1vdmUiLCJkaXNwbGF5Iiwib2Zmc2V0TGVmdCIsIm9mZnNldFdpZHRoIiwiYnV0dG9uQm90dG9tIiwib2Zmc2V0VG9wIiwib2Zmc2V0SGVpZ2h0IiwibGVmdCIsImJvdHRvbSIsImFkZCIsIndpbmRvdyIsIm9uY2xpY2siLCJwb3B1cCIsInRhcmdldCIsImNsb3NlUG9wdXAiLCJjcmVhdGVHcm91cERNQnV0dG9uIiwiY3JlYXRlR3JvdXBETSIsImNoYXROYW1lIiwiZm9jdXMiLCJjb2xvciIsInRleHRDb250ZW50IiwiY2xvc2VHcm91cERNIiwiY2xvc2VTZXR1cCIsImdyb3VwRE1TdHlsZXMiLCJnZXRDb21wdXRlZFN0eWxlIiwicmF0ZUxpbWl0U3R5bGVzIiwiY3JlYXRlR3JvdXBEbSIsImNoYXROYW1lRWxlbWVudCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJuYW1lIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJzdGF0dXMiLCJ6SW5kZXgiLCJFcnJvciIsInJlc3BvbnNlRGF0YSIsImdyb3VwRE0iLCJjcmVhdGVkQ2hhdCIsImNyZWF0ZUNoYXRFbGVtZW50IiwiaWQiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiZXJyb3IiLCJwYW5lbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInBhbmVsIiwidGV4dCIsInRvTG93ZXJDYXNlIiwibGFiZWwiLCJicmFuZGluZyIsImxvY2F0aW9uIiwiaHJlZiIsImxhYmVscyIsImluZGV4IiwiaWNvbiIsImwiLCJwZXJzb24iLCJib3JkZXJMZWZ0IiwicmF0ZUxpbWl0QnV0dG9uIiwiYW5pbWF0aW9uTmFtZSIsInNlcnZlckRyb3Bkb3duIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0YXJlYSIsIm1lc3NhZ2VJbnB1dENvbnRhaW5lciIsIm1lc3NhZ2VzIiwic2Nyb2xsSGVpZ2h0IiwibmV3SGVpZ2h0IiwibmV3SGVpZ2h0UGVyY2VudCIsInBhcnNlSW50IiwiY2xpZW50SGVpZ2h0IiwidXBkYXRlVGltZXN0YW1wIiwiY3VycmVudERhdGUiLCJEYXRlIiwiZm9ybWF0dGVkQ3VycmVudERhdGUiLCJmb3JtYXRDaGF0RGF0ZSIsInllc3RlcmRheSIsImZvcm1hdHRlZFllc3RlcmRheSIsInRpbWVzdGFtcERhdGUiLCJzcGxpdCIsImZvcm1hdHRlZFRpbWVzdGFtcERhdGUiLCJ0aW1lc3RhbXAiLCJtZXNzYWdlRGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXkiLCJnZXREYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwicGVyaW9kIiwiZm9ybWF0dGVkSG91cnMiLCJmb3JtYXR0ZWRNaW51dGVzIiwiY2VudGVyRWxlbWVudCIsImVsZW1lbnQiLCJib3VuZGluZ0NsaWVudCIsImNlbnRlclgiLCJjZW50ZXJZIiwidG9wIiwiZm9udHMiLCJyZWFkeSIsImljb25zIiwib3V0bGluZWRpY29ucyIsInZpc2liaWxpdHkiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImRvbmUiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiYWxsb3dBcnJheUxpa2UiLCJpdCIsIkFycmF5IiwiaXNBcnJheSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIkYiLCJfZSIsIm5vcm1hbENvbXBsZXRpb24iLCJkaWRFcnIiLCJlcnIiLCJzdGVwIiwiX2UyIiwibWluTGVuIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsImZyb20iLCJ0ZXN0IiwiYXJyIiwibGVuIiwiYXJyMiIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiaW5mbyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwidW5kZWZpbmVkIiwiZW1haWwiLCJ1c2VybmFtZSIsInVzZXJFbWFpbCIsInByb2ZpbGVQaWN0dXJlIiwicHJvZmlsZUljb24iLCJwcm9maWxlUGljdHVyZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJsb2FkUm9vbXMiLCJzZXRDaGF0QmFja2dyb3VuZCIsInVybElETnVtYmVyIiwicm9vbXMiLCJjcmVhdGVCbGFua0NoYXQiLCJ1cmxQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJlbmNyeXB0ZWRVcmxJRCIsImdldCIsInVybElEIiwiQ3J5cHRvSlMiLCJBRVMiLCJkZWNyeXB0IiwiZW5jIiwiVXRmOCIsImNoYXQiLCJjaGF0SUQiLCJjaGF0cyIsImNoYXRFbGVtZW50IiwiY3JlYXRlQmxhbmtDaGF0RWxlbWVudCIsImFwcGVuZENoaWxkIiwic2VsZWN0ZWRDaGF0IiwiaW5jbHVkZXMiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiY2hhdERpdiIsImNyZWF0ZUVsZW1lbnQiLCJzZXJ2ZXJJY29uIiwib3ZlcmZsb3ciLCJob3ZlclRpbWVvdXQiLCJzaG93SG92ZXJEaXYiLCJob3ZlckRpdiIsInBvc2l0aW9uIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJtYXhXaWR0aCIsIm92ZXJmbG93V3JhcCIsInJlY3QiLCJjbGllbnRXaWR0aCIsInNjcm9sbFdpZHRoIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImNsYXNzTmFtZSIsInBvaW50ZXJFdmVudHMiLCJjaGF0SWNvbiIsInNyYyIsImJhY2tncm91bmRDb2xvciIsImg2RWxlbWVudCIsInVzZXJTZWxlY3QiLCJzZWxlY3Rpb25JdGVtcyIsIml0ZW0iLCJjaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwibmV4dFNpYmxpbmciLCJuZXh0RWxlbWVudFNpYmxpbmciLCJyZW1vdmVDaGlsZCIsImdldENoYXQiLCJnZXRVc2VycyIsIl94IiwiX2dldENoYXQiLCJfY2FsbGVlIiwiZW5kcG9pbnQiLCJsb2FkaW5nVGltZXIiLCJsb2FkaW5nIiwiYWRkTG9hZGluZ1NwaW5uZXIiLCJtZXNzYWdlc0RhdGEiLCJfaXRlcmF0b3IiLCJfc3RlcCIsIm1lc3NhZ2VEYXRhIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsIl9hZGRMb2FkaW5nU3Bpbm5lciIsImNoYXREYXRhIiwiQ2hhdE5hbWUiLCJtYXAiLCJtZXNzYWdlIiwiVXNlcm5hbWUiLCJ1c2VySWNvbiIsIlByb2ZpbGVJY29uIiwiZGF0ZVNlbnQiLCJEYXRlU2VudCIsImNvbnRlbnQiLCJDb250ZW50IiwiYXBwZW5kUmljaE1lc3NhZ2UiLCJ0MCIsIl94MiIsIl9nZXRVc2VycyIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwibWVtYmVycyIsInVzZXJzIiwibWVtYmVyIiwiZGl2IiwicHJvZmlsZUljb25JbWFnZSIsInVzZXJuYW1lRWxlbWVudCIsInBhdGhuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==