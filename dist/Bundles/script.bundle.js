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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/send.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");

var socket = io("/");
var messageInput = document.getElementById("message-input");
var messageContainer = document.getElementById("message-container");
var messageInputContainer = document.getElementById("message-input-container");
var rateLimit = document.getElementById("rate-limit");
var rateLimitMessage = document.getElementById("rate-limit-message");
var darkOverlay = document.getElementById("dark-overlay");
var username;
var profileIcon;
messageInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && messageInput.value.trim() !== "" && !event.shiftKey) {
    event.preventDefault();
    send();
  }
});
messageInputContainer.addEventListener("mousedown", function (event) {
  event.preventDefault();
  event.stopPropagation();
  if (messageInput !== document.activeElement) {
    messageInput.focus();
  }
});
var sendButton = document.getElementById("send");
sendButton.addEventListener("click", function () {
  send();
});
function send() {
  fetch("/send-message").then(function (response) {
    if (response.ok) {
      return response.json();
    } else if (response.status === 429) {
      rateLimitMessage.textContent = "You are sending too many messages. Try again in a few minutes";
      rateLimit.style.display = "block";
      darkOverlay.style.display = "block";
      messageInput.blur();
      throw new Error("Sending too many messages");
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
        timestamp = (0,_home__WEBPACK_IMPORTED_MODULE_0__.formatChatDate)(timestamp);
        var formattedTimestamp = (0,_home__WEBPACK_IMPORTED_MODULE_0__.updateTimestamp)(timestamp);
        socket.emit("send-chat-message", {
          id: id,
          username: username,
          message: message,
          profileIcon: profileIcon,
          endpoint: endpoint,
          timestamp: timestamp,
          formattedTimestamp: formattedTimestamp
        });
        messageInput.value = "";
        messageInput.style.height = "auto"; // Reset height to allow it to shrink
        messageInputContainer.style.height = "auto";
        messageInput.style.height = "".concat(messageInput.scrollHeight, "px"); // Expand textarea
        messageInputContainer.style.height = "".concat(messageInput.scrollHeight, "px"); // Update container height
      }
    }
  })["catch"](function (error) {
    console.error("Error:", error);
  });
}
socket.on("chat-message", function (data) {
  if (data.chat == window.location.href.split("/").pop()) {
    appendRichMessage(data.name, data.message, data.icon, data.timestamp);
  }
});
socket.on("user-connected", function (name) {
  appendMessage("".concat(name, " connected"));
});
socket.on("user-disconnected", function (name) {
  appendMessage("".concat(name, " disconnected"));
});
function appendMessage(message) {
  var smooth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageContainer.append(messageElement);
  if (smooth) {
    messageContainer.scrollTo({
      top: messageContainer.scrollHeight,
      behavior: "smooth"
    });
  } else {
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
}
function appendRichMessage(name, messagetext, icon, timestamp) {
  var smooth = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
  var message = document.createElement("div");
  message.classList.add("message");

  // Create profile icon element
  var userIcon = document.createElement("img");
  userIcon.setAttribute("src", "/assets/Profile Icons/".concat(icon));
  userIcon.alt = "Profile Icon";
  userIcon.classList.add("profile-icon");
  message.appendChild(userIcon);
  var content = document.createElement("div");
  content.classList.add("message-contents");
  // Create name and date element
  var nameDateElement = document.createElement("div");
  nameDateElement.classList.add("name-date");

  // Name element
  var nameElement = document.createElement("span");
  nameElement.textContent = name;
  nameElement.classList.add("message-name");
  nameDateElement.appendChild(nameElement);
  var dateElement = document.createElement("span");
  dateElement.textContent = timestamp;
  dateElement.classList.add("message-date");
  nameDateElement.appendChild(dateElement);
  content.appendChild(nameDateElement);

  // Create message text element
  var messageTextElement = document.createElement("p");
  messageTextElement.innerText = messagetext;
  messageTextElement.classList.add("message-text");
  content.appendChild(messageTextElement);
  message.append(content);
  messageContainer.appendChild(message);
  if (smooth) {
    messageContainer.scrollTo({
      top: messageContainer.scrollHeight,
      behavior: "smooth"
    });
  } else {
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNsQzFCLFFBQVEsRUFBRTtJQUNaLENBQUMsQ0FBQztFQUNKLENBQUMsTUFBTTtJQUNMbEYsZ0JBQWdCLENBQUNvWixTQUFTLEdBQUdwWixnQkFBZ0IsQ0FBQzRHLFlBQVk7RUFDNUQ7QUFDRixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL2NoYXRzZXJ2ZXJuZXcvLi9zcmMvb25sb2FkLmpzIiwid2VicGFjazovL2NoYXRzZXJ2ZXJuZXcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2hhdHNlcnZlcm5ldy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NoYXRzZXJ2ZXJuZXcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jaGF0c2VydmVybmV3Ly4vc3JjL3NlbmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwiLi9vbmxvYWRcIjtcblxudmFyIGNoYXREaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0LWRpc3BsYXlcIik7XG5jb25zdCBtZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlLWNvbnRhaW5lclwiKTtcbmNvbnN0IGNoYXRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXQtY29udGFpbmVyXCIpO1xuY29uc3QgbWVtYmVyc0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbWJlcnMtbGlzdFwiKTtcbmNvbnN0IG1lbWJlcnNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbWJlcnNcIik7XG5jb25zdCB3ZWxjb21lTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VsY29tZS1tZXNzYWdlXCIpO1xuY29uc3QgbWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UtaW5wdXQnKVxuXG5jb25zdCByYXRlTGltaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhdGUtbGltaXRcIik7XG5jb25zdCByYXRlTGltaXRNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYXRlLWxpbWl0LW1lc3NhZ2VcIik7XG5cbmNvbnN0IGNoYXROYW1lTGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdC1uYW1lLWxhYmVsJylcblxuY29uc3QgZGFya092ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhcmstb3ZlcmxheVwiKTtcblxuY29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXJcIik7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuXG5pZiAobmF2YmFyICYmIGNvbnRhaW5lciAmJiBzaWRlYmFyKSB7XG4gIGNvbnN0IG5hdmJhckhlaWdodCA9IG5hdmJhci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gIGNvbnN0IHNpZGViYXJXaWR0aCA9IHNpZGViYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgY2FsYyg5OXZoIC0gJHtuYXZiYXJIZWlnaHR9cHgpYDtcbiAgY29udGFpbmVyLnN0eWxlLndpZHRoID0gYGNhbGMoOTl2dyAtICR7c2lkZWJhcldpZHRofXB4KWA7XG59XG5cbmNvbnN0IGNyZWF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLW5ld1wiKTtcbmNvbnN0IGNyZWF0ZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyZWF0ZVwiKTtcblxuY3JlYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKCFjcmVhdGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYW5pbWF0ZS1yb3RhdGVcIikpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjcmVhdGUuY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGUtcm90YXRlLW91dFwiKTtcbiAgICAvLyBDaGVjayBpZiB0aGUgJ2FuaW1hdGUtbGVmdCcgY2xhc3MgaXMgcHJlc2VudFxuICAgIGlmIChjcmVhdGVNZW51LmNsYXNzTGlzdC5jb250YWlucyhcImFuaW1hdGUtbGVmdFwiKSkge1xuICAgICAgY3JlYXRlTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBjcmVhdGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlLWxlZnRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBvZmZzZXRMZWZ0ID0gY3JlYXRlLm9mZnNldExlZnQgKyBjcmVhdGUub2Zmc2V0V2lkdGggKyA4O1xuICAgICAgdmFyIGJ1dHRvbkJvdHRvbSA9IGNyZWF0ZS5vZmZzZXRUb3AgKyBjcmVhdGUub2Zmc2V0SGVpZ2h0O1xuICAgICAgY3JlYXRlTWVudS5zdHlsZS5sZWZ0ID0gb2Zmc2V0TGVmdCArIFwicHhcIjtcbiAgICAgIGNyZWF0ZU1lbnUuc3R5bGUuYm90dG9tID0gNTAgKyBcInB4XCI7XG4gICAgICBjcmVhdGVNZW51LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICBjcmVhdGVNZW51LmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlLWxlZnRcIik7XG4gICAgICBjcmVhdGUuY2xhc3NMaXN0LmFkZChcImFuaW1hdGUtcm90YXRlXCIpO1xuICAgIH1cbiAgfVxuICB3aW5kb3cub25jbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlXCIpO1xuICAgIGlmIChcbiAgICAgIGV2ZW50LnRhcmdldCAhPT0gcG9wdXAgJiZcbiAgICAgICFwb3B1cC5jb250YWlucyhldmVudC50YXJnZXQpICYmXG4gICAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCJcbiAgICApIHtcbiAgICAgIGNsb3NlUG9wdXAocG9wdXApO1xuICAgIH1cbiAgfTtcbn0pO1xuXG5jb25zdCBjcmVhdGVHcm91cERNQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGUtZ3JvdXAtZG1cIik7XG5jcmVhdGVHcm91cERNQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIGNvbnN0IGNyZWF0ZUdyb3VwRE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyb3VwLWRtXCIpO1xuICBjcmVhdGVHcm91cERNLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGRhcmtPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGNvbnN0IGNoYXROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXQtbmFtZScpXG4gIGNoYXROYW1lLmZvY3VzKCk7XG4gIGNsb3NlUG9wdXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjcmVhdGVcIikpO1xuICBjaGF0TmFtZUxhYmVsLnN0eWxlLmNvbG9yID0gXCIjY2RjZGNkXCI7XG4gIGNoYXROYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIkNoYXQgTmFtZVwiO1xuICBjb25zdCBjbG9zZUdyb3VwRE0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWdyb3VwZG1cIik7XG4gIGNsb3NlR3JvdXBETS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY2xvc2VTZXR1cChjcmVhdGVHcm91cERNKTtcbiAgICBjaGF0TmFtZUxhYmVsLnN0eWxlLmNvbG9yID0gXCIjY2RjZGNkXCI7XG4gICAgY2hhdE5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiQ2hhdCBOYW1lXCI7XG4gIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBncm91cERNU3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY3JlYXRlR3JvdXBETSk7XG4gICAgY29uc3QgcmF0ZUxpbWl0U3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUocmF0ZUxpbWl0KTtcbiAgICBpZiAoXG4gICAgICBldmVudC50YXJnZXQgIT09IGNyZWF0ZUdyb3VwRE0gJiZcbiAgICAgICFjcmVhdGVHcm91cERNLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiZcbiAgICAgIGdyb3VwRE1TdHlsZXMuZGlzcGxheSA9PT0gXCJibG9ja1wiICYmXG4gICAgICByYXRlTGltaXRTdHlsZXMuZGlzcGxheSA9PT0gXCJub25lXCJcbiAgICApIHtcbiAgICAgIGNsb3NlU2V0dXAoY3JlYXRlR3JvdXBETSk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5jb25zdCBjcmVhdGVHcm91cERtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cGRtLWNyZWF0ZVwiKTtcblxuY3JlYXRlR3JvdXBEbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IGNoYXROYW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdC1uYW1lXCIpO1xuICBjb25zdCBjaGF0TmFtZSA9IGNoYXROYW1lRWxlbWVudC52YWx1ZTtcbiAgY29uc29sZS5sb2coY2hhdE5hbWUpO1xuICBpZiAoY2hhdE5hbWUgIT09IFwiXCIpIHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgbmFtZTogY2hhdE5hbWUsXG4gICAgfTtcblxuICAgIGZldGNoKFwiL2NoYXRcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDI5KSB7XG4gICAgICAgICAgcmF0ZUxpbWl0TWVzc2FnZS50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBcIllvdSBhcmUgY3JlYXRpbmcgdG9vIG1hbnkgc2VydmVycy4gVHJ5IGFnYWluIGluIGEgZmV3IG1pbnV0ZXNcIjtcbiAgICAgICAgICByYXRlTGltaXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICBkYXJrT3ZlcmxheS5zdHlsZS56SW5kZXggPSBcIjRcIjtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUb28gbWFueSByZXF1ZXN0c1wiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2suXCIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlRGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBncm91cERNID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cC1kbVwiKTtcbiAgICAgICAgY2xvc2VTZXR1cChncm91cERNKTtcbiAgICAgICAgY2hhdE5hbWVMYWJlbC5zdHlsZS5jb2xvciA9IFwiI2NkY2RjZFwiO1xuICAgICAgICBjaGF0TmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJDaGF0IE5hbWVcIjtcbiAgICAgICAgY2hhdE5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgICBjb25zdCBjcmVhdGVkQ2hhdCA9IGNyZWF0ZUNoYXRFbGVtZW50KGNoYXROYW1lLCByZXNwb25zZURhdGEuaWQpO1xuICAgICAgICBjaGF0Q29udGFpbmVyLmluc2VydEJlZm9yZShjcmVhdGVkQ2hhdCwgY2hhdENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgICAgY29uc29sZS5sb2coY3JlYXRlZENoYXQpO1xuICAgICAgICByZWRpcmVjdChyZXNwb25zZURhdGEuaWQsIGNyZWF0ZWRDaGF0KTtcbiAgICAgICAgY3JlYXRlZENoYXQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwiY2VudGVyXCIgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgY2hhdDpcIiwgZXJyb3IpO1xuICAgICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY2hhdE5hbWVMYWJlbC5zdHlsZS5jb2xvciA9IFwiI2ZhNzc3Y1wiO1xuICAgIGNoYXROYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIkNoYXQgTmFtZSAtIHBsZWFzZSBwcm92aWRlIGEgbmFtZVwiO1xuICB9XG59KTtcblxuY29uc3QgcGFuZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYW5lbFwiKTtcbnBhbmVscy5mb3JFYWNoKChwYW5lbCkgPT4ge1xuICBjb25zdCB0ZXh0ID0gcGFuZWxcbiAgICAucXVlcnlTZWxlY3RvcihcIi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWRcIilcbiAgICAudGV4dENvbnRlbnQudG9Mb3dlckNhc2UoKTtcbiAgaWYgKHRleHQgPT09IFwiaG9tZVwiKSB7XG4gICAgcGFuZWwucXVlcnlTZWxlY3RvcihcIi5tYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWRcIikuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIGNvbnN0IGxhYmVsID0gcGFuZWwucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpO1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgbGFiZWwuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgIH1cbiAgfVxufSk7XG5cbmNvbnN0IGJyYW5kaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJicmFuZGluZ1wiKTtcbmJyYW5kaW5nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvaG9tZVwiO1xufSk7XG5jb25zdCBsYWJlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhbmVsIGxhYmVsXCIpO1xuXG5wYW5lbHMuZm9yRWFjaCgocGFuZWwsIGluZGV4KSA9PiB7XG4gIHBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUmVtb3ZlIHRoZSBcInNlbGVjdGVkXCIgY2xhc3MgZnJvbSBhbGwgaWNvbnMgYW5kIGxhYmVsc1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5wYW5lbCAubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCIpXG4gICAgICAuZm9yRWFjaCgoaWNvbikgPT4gaWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikpO1xuICAgIGxhYmVscy5mb3JFYWNoKChsKSA9PiBsLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSk7XG5cbiAgICAvLyBBZGQgdGhlIFwic2VsZWN0ZWRcIiBjbGFzcyB0byB0aGUgY2xpY2tlZCBpY29uIGFuZCBsYWJlbFxuICAgIHBhbmVsLnF1ZXJ5U2VsZWN0b3IoXCIubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCIpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICBsYWJlbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgfSk7XG59KTtcblxuY29uc3QgcGVyc29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXJzb25cIik7XG5wZXJzb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhtZW1iZXJzQ29udGFpbmVyLnN0eWxlLndpZHRoKTtcbiAgaWYgKG1lbWJlcnNDb250YWluZXIuc3R5bGUud2lkdGggPT09IFwiMHB4XCIpIHtcbiAgICBtZW1iZXJzQ29udGFpbmVyLnN0eWxlLndpZHRoID0gXCIxOCVcIjtcbiAgICBtZW1iZXJzQ29udGFpbmVyLnN0eWxlLmJvcmRlckxlZnQgPSBcIjFweCBzb2xpZCAjNDE0MDQzXCI7XG4gICAgcGVyc29uLmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGVkXCIpO1xuICB9IGVsc2Uge1xuICAgIG1lbWJlcnNDb250YWluZXIuc3R5bGUud2lkdGggPSBcIjBcIjtcbiAgICBtZW1iZXJzQ29udGFpbmVyLnN0eWxlLmJvcmRlckxlZnQgPSBcIm5vbmVcIjtcbiAgICBwZXJzb24uY2xhc3NMaXN0LnJlbW92ZShcInRvZ2dsZWRcIik7XG4gIH1cbn0pO1xuXG5jb25zdCByYXRlTGltaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhdGUtbGltaXQtYnV0dG9uXCIpO1xucmF0ZUxpbWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgcmF0ZUxpbWl0LmNsYXNzTGlzdC5hZGQoXCJ6b29tb3V0XCIpO1xuICByYXRlTGltaXQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJ6b29tT3V0XCIpIHtcbiAgICAgIHJhdGVMaW1pdC5jbGFzc0xpc3QucmVtb3ZlKFwiem9vbW91dFwiKTtcbiAgICAgIHJhdGVMaW1pdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJncm91cC1kbVwiKS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICAgICAgZGFya092ZXJsYXkuc3R5bGUuekluZGV4ID0gXCIzXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgbWVzc2FnZUlucHV0LmZvY3VzKCk7XG4gICAgICAgIGRhcmtPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSk7XG5cbmNvbnN0IHNlcnZlckRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXJ2ZXItb3B0aW9uc1wiKTtcbnNlcnZlckRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG5jb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZS1pbnB1dFwiKTtcbmNvbnN0IG1lc3NhZ2VJbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICBcIm1lc3NhZ2UtaW5wdXQtY29udGFpbmVyXCJcbik7XG5jb25zdCBtZXNzYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZXNcIik7XG5cbm1lc3NhZ2VJbnB1dENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgJHt0ZXh0YXJlYS5zY3JvbGxIZWlnaHR9cHhgO1xuXG50ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiOyAvLyBSZXNldCBoZWlnaHQgdG8gYWxsb3cgaXQgdG8gc2hyaW5rXG4gIG1lc3NhZ2VJbnB1dENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjsgLy8gUmVzZXQgY29udGFpbmVyIGhlaWdodFxuICBjb25zdCBuZXdIZWlnaHQgPSBgJHt0ZXh0YXJlYS5zY3JvbGxIZWlnaHR9cHhgOyAvLyBHZXQgdGhlIG5ldyBoZWlnaHRcbiAgY29uc3QgbmV3SGVpZ2h0UGVyY2VudCA9IChwYXJzZUludChuZXdIZWlnaHQpICogMTAwKSAvIG1lc3NhZ2VzLmNsaWVudEhlaWdodDtcblxuICBpZiAobmV3SGVpZ2h0UGVyY2VudCA8PSA1MCkge1xuICAgIC8vIEFzc3VtaW5nIE1BWF9IRUlHSFQgaXMgdGhlIG1heGltdW0gaGVpZ2h0IGZvciBtZXNzYWdlSW5wdXRDb250YWluZXJcbiAgICB0ZXh0YXJlYS5zdHlsZS5oZWlnaHQgPSBuZXdIZWlnaHQ7IC8vIFNldCB0ZXh0YXJlYSBoZWlnaHRcbiAgICBtZXNzYWdlSW5wdXRDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gbmV3SGVpZ2h0OyAvLyBTZXQgY29udGFpbmVyIGhlaWdodFxuICB9IGVsc2Uge1xuICAgIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9IGAkezEwMH0lYDsgLy8gU2V0IHRleHRhcmVhIHRvIG1heCBoZWlnaHRcbiAgICBtZXNzYWdlSW5wdXRDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gYCR7NTB9JWA7IC8vIFNldCBjb250YWluZXIgdG8gbWF4IGhlaWdodFxuICB9XG59KTtcblxuZnVuY3Rpb24gY2xvc2VTZXR1cChwb3B1cCkge1xuICBwb3B1cC5jbGFzc0xpc3QuYWRkKFwiem9vbW91dFwiKTtcbiAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJ6b29tT3V0XCIpIHtcbiAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJ6b29tb3V0XCIpO1xuICAgICAgcG9wdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfSk7XG4gIGRhcmtPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gY2xvc2VQb3B1cChwb3B1cCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXQtbmFtZVwiKS52YWx1ZSA9IFwiXCI7XG4gIHBvcHVwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZShcImFuaW1hdGUtbGVmdFwiKTtcbiAgdmFyIGNyZWF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JlYXRlLW5ld1wiKTtcbiAgY3JlYXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlLXJvdGF0ZVwiKTtcbiAgY3JlYXRlLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlLXJvdGF0ZS1vdXRcIik7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRpbWVzdGFtcCh0ZXh0KSB7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgZm9ybWF0dGVkQ3VycmVudERhdGUgPSBmb3JtYXRDaGF0RGF0ZShjdXJyZW50RGF0ZSk7XG4gIGNvbnN0IHllc3RlcmRheSA9IG5ldyBEYXRlKGN1cnJlbnREYXRlIC0gODY0MDAwMDApO1xuICBjb25zdCBmb3JtYXR0ZWRZZXN0ZXJkYXkgPSBmb3JtYXRDaGF0RGF0ZSh5ZXN0ZXJkYXkpO1xuXG4gIGNvbnN0IHRpbWVzdGFtcERhdGUgPSBuZXcgRGF0ZSh0ZXh0LnNwbGl0KFwiIFwiKVswXSk7XG5cbiAgY29uc3QgZm9ybWF0dGVkVGltZXN0YW1wRGF0ZSA9IGZvcm1hdENoYXREYXRlKHRpbWVzdGFtcERhdGUpO1xuXG4gIGlmICh0ZXh0LnNwbGl0KFwiIFwiKVswXSA9PT0gZm9ybWF0dGVkQ3VycmVudERhdGUuc3BsaXQoXCIgXCIpWzBdKSB7XG4gICAgcmV0dXJuIGBUb2RheSBhdCAke3RleHQuc3BsaXQoXCIgXCIpWzJdfWA7XG4gIH0gZWxzZSBpZiAodGV4dC5zcGxpdChcIiBcIilbMF0gPT09IGZvcm1hdHRlZFllc3RlcmRheS5zcGxpdChcIiBcIilbMF0pIHtcbiAgICByZXR1cm4gYFllc3RlcmRheSBhdCAke3RleHQuc3BsaXQoXCIgXCIpWzJdfWA7XG4gIH1cblxuICByZXR1cm4gdGV4dDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0Q2hhdERhdGUodGltZXN0YW1wKSB7XG4gIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgbWVzc2FnZURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xuXG4gIGNvbnN0IG1vbnRoID0gbWVzc2FnZURhdGUuZ2V0TW9udGgoKSArIDE7XG4gIGNvbnN0IGRheSA9IG1lc3NhZ2VEYXRlLmdldERhdGUoKTtcbiAgY29uc3QgeWVhciA9IG1lc3NhZ2VEYXRlLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IGhvdXJzID0gbWVzc2FnZURhdGUuZ2V0SG91cnMoKTtcbiAgY29uc3QgbWludXRlcyA9IG1lc3NhZ2VEYXRlLmdldE1pbnV0ZXMoKTtcbiAgY29uc3QgcGVyaW9kID0gaG91cnMgPj0gMTIgPyBcInBtXCIgOiBcImFtXCI7XG4gIGNvbnN0IGZvcm1hdHRlZEhvdXJzID0gaG91cnMgJSAxMiB8fCAxMjsgLy8gQ29udmVydCB0byAxMi1ob3VyIGZvcm1hdFxuICBjb25zdCBmb3JtYXR0ZWRNaW51dGVzID0gbWludXRlcyA8IDEwID8gYDAke21pbnV0ZXN9YCA6IG1pbnV0ZXM7IC8vIFBhZCBtaW51dGVzIHdpdGggemVybyBpZiBuZWVkZWRcblxuICByZXR1cm4gYCR7bW9udGh9LyR7ZGF5fS8ke3llYXJ9IGF0ICR7Zm9ybWF0dGVkSG91cnN9OiR7Zm9ybWF0dGVkTWludXRlc30ke3BlcmlvZH1gO1xufVxuXG5mdW5jdGlvbiBjZW50ZXJFbGVtZW50KGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICBsZXQgYm91bmRpbmdDbGllbnQgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGxldCBjZW50ZXJYID0gYm91bmRpbmdDbGllbnQubGVmdCArIGJvdW5kaW5nQ2xpZW50LndpZHRoIC8gMjtcbiAgbGV0IGNlbnRlclkgPSBib3VuZGluZ0NsaWVudC50b3AgKyBib3VuZGluZ0NsaWVudC5oZWlnaHQgLyAyO1xuXG4gIGVsZW1lbnQuc3R5bGUubGVmdCA9IGNlbnRlclggLSBlbGVtZW50Lm9mZnNldFdpZHRoIC8gMiArIFwicHhcIjtcbiAgZWxlbWVudC5zdHlsZS50b3AgPSBjZW50ZXJZIC0gZWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyICsgXCJweFwiO1xufVxuXG4vLyBNYWtlIGZvbnRzIHZpc2libGUgb25jZSB0aGUgZG9jdW1lbnQgbG9hZHMgdG8gcHJldmVudCBzcGFuIHRleHQgc2hvd2luZyBvbiByZWxvYWRcbmRvY3VtZW50LmZvbnRzLnJlYWR5LnRoZW4oKCkgPT4ge1xuICBjb25zdCBpY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCIpO1xuICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiZm9udC1sb2FkZWRcIik7XG4gIH0pO1xuICBjb25zdCBvdXRsaW5lZGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpO1xuICBvdXRsaW5lZGljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICBpY29uLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgfSk7XG59KTtcblxuZXhwb3J0IHsgdXBkYXRlVGltZXN0YW1wLCBjZW50ZXJFbGVtZW50LCBjbG9zZVNldHVwLCBmb3JtYXRDaGF0RGF0ZSB9O1xuIiwiaW1wb3J0IHsgdXBkYXRlVGltZXN0YW1wLCBjZW50ZXJFbGVtZW50IH0gZnJvbSBcIi4vaG9tZVwiO1xuXG4vLyBHZXQgcHJvZmlsZSBkYXRhXG5mZXRjaChcIi9wcm9maWxlXCIpXG4gIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHJldHJpZXZlIHByb2ZpbGUgZGF0YVwiKTtcbiAgICB9XG4gIH0pXG4gIC50aGVuKChkYXRhKSA9PiB7XG4gICAgaWYgKGRhdGEuZW1haWwgJiYgZGF0YS51c2VybmFtZSkge1xuICAgICAgY29uc3QgdXNlckVtYWlsID0gZGF0YS5lbWFpbDtcbiAgICAgIGNvbnN0IHVzZXJuYW1lID0gZGF0YS51c2VybmFtZTtcbiAgICAgIGNvbnN0IHByb2ZpbGVQaWN0dXJlID0gZGF0YS5wcm9maWxlSWNvbjtcbiAgICAgIGNvbnN0IHByb2ZpbGVQaWN0dXJlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZmlsZS1waWN0dXJlXCIpO1xuICAgICAgcHJvZmlsZVBpY3R1cmVFbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJzcmNcIixcbiAgICAgICAgYC9hc3NldHMvUHJvZmlsZSBJY29ucy8ke3Byb2ZpbGVQaWN0dXJlfWBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvbG9naW5cIjtcbiAgICB9XG4gIH0pO1xuXG5sb2FkUm9vbXMoKTtcbnNldENoYXRCYWNrZ3JvdW5kKCk7XG5cbi8vIE9ubG9hZCBmdW5jdGlvbnNcbmZ1bmN0aW9uIGxvYWRSb29tcygpIHtcbiAgZmV0Y2goXCIvZ2V0LXJvb21zXCIpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHZhciB1cmxJRE51bWJlcjtcblxuICAgICAgaWYgKGRhdGEucm9vbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIENyZWF0ZSBlbm91Z2ggYmxhbmsgY2hhdHMgdG8gZmlsbCB1cCBtb3N0IG9mIHRoZSBjaGF0IGVsZW1lbnRcbiAgICAgICAgLy8gVG8gZG8gLSBjcmVhdGUgYSBmdW5jdGlvbiB0aGF0IGNhbiBjYWxjdWxhdGUgaG93IG1hbnkgYmxhbmsgY2hhdHMgdG8gY3JlYXRlXG4gICAgICAgIGNyZWF0ZUJsYW5rQ2hhdChcIiMyQTJBMkFcIik7XG4gICAgICAgIGNyZWF0ZUJsYW5rQ2hhdChcIiMyOTI5MjlcIik7XG4gICAgICAgIGNyZWF0ZUJsYW5rQ2hhdChcIiMyODI4MjhcIik7XG4gICAgICAgIGNyZWF0ZUJsYW5rQ2hhdChcIiMyNzI3MjdcIik7XG4gICAgICAgIGNyZWF0ZUJsYW5rQ2hhdChcIiMyNjI2MjZcIik7XG4gICAgICAgIGNyZWF0ZUJsYW5rQ2hhdChcIiMyNTI1MjVcIik7XG4gICAgICAgIGNyZWF0ZUJsYW5rQ2hhdChcIiMyNDI0MjRcIik7XG4gICAgICAgIGNyZWF0ZUJsYW5rQ2hhdChcIiMyMzIzMjNcIik7XG4gICAgICAgIGNyZWF0ZUJsYW5rQ2hhdChcIiMxZDFkMWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICBjb25zdCBlbmNyeXB0ZWRVcmxJRCA9IHVybFBhcmFtcy5nZXQoXCJjaGF0SURcIik7XG4gICAgICAgIGlmIChlbmNyeXB0ZWRVcmxJRCkge1xuICAgICAgICAgIGNvbnN0IHVybElEID0gQ3J5cHRvSlMuQUVTLmRlY3J5cHQoZW5jcnlwdGVkVXJsSUQsIGtleSkudG9TdHJpbmcoXG4gICAgICAgICAgICBDcnlwdG9KUy5lbmMuVXRmOFxuICAgICAgICAgICk7XG4gICAgICAgICAgdXJsSUROdW1iZXIgPSB1cmxJRCA/IHBhcnNlSW50KHVybElELCAxMCkgOiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEucm9vbXMuZm9yRWFjaCgoY2hhdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGF0SUQgPSBkYXRhLmNoYXRzW2luZGV4XTtcbiAgICAgICAgICBjb25zdCBjaGF0RWxlbWVudCA9IGNyZWF0ZUJsYW5rQ2hhdEVsZW1lbnQoY2hhdCwgY2hhdElEKTtcbiAgICAgICAgICBjaGF0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoYXRFbGVtZW50KTtcblxuICAgICAgICAgIGlmICh1cmxJRE51bWJlciA9PT0gY2hhdElEKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZENoYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtjaGF0SUR9YCk7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBjaGF0SUQgaXMgcHJlc2VudCBhbmQgY2FsbCB0aGUgcmVkaXJlY3QgZnVuY3Rpb25cbiAgICAgICAgICAgIGlmIChjaGF0SUQgJiYgc2VsZWN0ZWRDaGF0KSB7XG4gICAgICAgICAgICAgIHJlZGlyZWN0KGNoYXRJRCwgc2VsZWN0ZWRDaGF0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcyhcImNoYXRJRFwiKSkge1xuICAgICAgICAgIC8vIElmIHNvLCBjaGFuZ2UgdGhlIFVSTCB0byAvaG9tZVxuICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIFwiL2hvbWVcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2FkaW5nIHJvb21zOlwiLCBlcnJvcikpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCbGFua0NoYXRFbGVtZW50KGNoYXQsIGNoYXRJRCkge1xuICBjb25zdCBjaGF0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2hhdERpdi5jbGFzc0xpc3QuYWRkKFwiY2hhdFwiKTtcbiAgY2hhdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtjaGF0SUR9YCk7XG4gIC8vIFNlcnZlciBJY29uXG4gIGNvbnN0IHNlcnZlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBzZXJ2ZXJJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBgL2Fzc2V0cy9Qcm9maWxlIEljb25zL2dyZWVuUHJvZmlsZUljb24ucG5nYCk7XG4gIHNlcnZlckljb24uY2xhc3NMaXN0LmFkZChcImNoYXQtaWNvblwiKTtcbiAgY2hhdERpdi5hcHBlbmRDaGlsZChzZXJ2ZXJJY29uKTtcblxuICBjb25zdCBjaGF0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNlwiKTtcbiAgY2hhdE5hbWUudGV4dENvbnRlbnQgPSBjaGF0O1xuICBjaGF0TmFtZS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gIGNoYXREaXYuYXBwZW5kQ2hpbGQoY2hhdE5hbWUpO1xuXG4gIGNoYXREaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZWRpcmVjdChjaGF0SUQsIGNoYXREaXYpO1xuICB9KTtcbiAgbGV0IGhvdmVyVGltZW91dDtcbiAgY2hhdERpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gc2hvd0hvdmVyRGl2KCkge1xuICAgICAgY29uc3QgaG92ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaG92ZXJEaXYudGV4dENvbnRlbnQgPSBjaGF0O1xuICAgICAgaG92ZXJEaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICBob3ZlckRpdi5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjMkUyRTJFXCI7XG4gICAgICBob3ZlckRpdi5zdHlsZS5jb2xvciA9IFwiI0Q0RDRENFwiO1xuICAgICAgaG92ZXJEaXYuc3R5bGUucGFkZGluZyA9IFwiM3B4IDhweFwiO1xuICAgICAgaG92ZXJEaXYuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCI7XG4gICAgICBob3ZlckRpdi5zdHlsZS5tYXhXaWR0aCA9IFwiMjAwcHhcIjtcbiAgICAgIGhvdmVyRGl2LnN0eWxlLm92ZXJmbG93V3JhcCA9IFwiYW55d2hlcmVcIjtcblxuICAgICAgY29uc3QgcmVjdCA9IGNoYXREaXYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBjZW50ZXJYID0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCAvIDI7XG4gICAgICBjb25zdCB0b3AgPSByZWN0LnRvcDtcblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChob3ZlckRpdik7XG4gICAgICBob3ZlckRpdi5zdHlsZS5sZWZ0ID0gY2VudGVyWCAtIGhvdmVyRGl2LmNsaWVudFdpZHRoIC8gMiArIFwicHhcIjtcbiAgICAgIGhvdmVyRGl2LnN0eWxlLnRvcCA9IHRvcCAtIGhvdmVyRGl2LmNsaWVudEhlaWdodCAtIDUgKyBcInB4XCI7XG4gICAgICBjaGF0RGl2LmhvdmVyRGl2ID0gaG92ZXJEaXY7XG4gICAgfVxuICAgIGlmIChjaGF0TmFtZS5zY3JvbGxXaWR0aCA+IGNoYXROYW1lLmNsaWVudFdpZHRoKSB7XG4gICAgICBob3ZlclRpbWVvdXQgPSBzZXRUaW1lb3V0KHNob3dIb3ZlckRpdiwgMTAwMCk7XG4gICAgfVxuICB9KTtcbiAgY2hhdERpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KGhvdmVyVGltZW91dCk7XG4gICAgaWYgKGNoYXREaXYuaG92ZXJEaXYpIHtcbiAgICAgIGNoYXREaXYuaG92ZXJEaXYucmVtb3ZlKCk7XG4gICAgICBjaGF0RGl2LmhvdmVyRGl2ID0gbnVsbDsgLy8gUmVtb3ZlIHRoZSByZWZlcmVuY2VcbiAgICB9XG4gIH0pO1xuICBjaGF0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChjaGF0RGl2LmhvdmVyRGl2KSB7XG4gICAgICBjaGF0RGl2LmhvdmVyRGl2LnJlbW92ZSgpO1xuICAgICAgY2hhdERpdi5ob3ZlckRpdiA9IG51bGw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGNoYXREaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJsYW5rQ2hhdChjb2xvcikge1xuICB2YXIgY2hhdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaGF0RWxlbWVudC5jbGFzc05hbWUgPSBcImNoYXRcIjtcbiAgY2hhdEVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXG4gIHZhciBjaGF0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGNoYXRJY29uLnNyYyA9IFwiL2Fzc2V0cy90cmFuc3BhcmVudGltYWdlLnBuZ1wiO1xuICBjaGF0SWNvbi5jbGFzc05hbWUgPSBcImNoYXQtaWNvblwiO1xuICBjaGF0SWNvbi5zdHlsZS53aWR0aCA9IFwiMzVweFwiO1xuICBjaGF0SWNvbi5zdHlsZS5oZWlnaHQgPSBcIjM1cHhcIjtcbiAgY2hhdEljb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG5cbiAgdmFyIGg2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNlwiKTtcbiAgaDZFbGVtZW50LnRleHRDb250ZW50ID0gXCJub25lXCI7XG4gIGg2RWxlbWVudC5zdHlsZS5jb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcbiAgaDZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICBoNkVsZW1lbnQuc3R5bGUudXNlclNlbGVjdCA9IFwibm9uZVwiO1xuICBoNkVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICBoNkVsZW1lbnQuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCI7XG5cbiAgY2hhdEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hhdEljb24pO1xuICBjaGF0RWxlbWVudC5hcHBlbmRDaGlsZChoNkVsZW1lbnQpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdC1jb250YWluZXJcIikuYXBwZW5kQ2hpbGQoY2hhdEVsZW1lbnQpO1xufVxuXG4vLyBEeW5hbWljIGphdmFzY2lwcnQgd2hlbiBjaG9vc2luZyBjaGF0c1xuZnVuY3Rpb24gcmVkaXJlY3QoY2hhdElELCBjaGF0RGl2KSB7XG4gIGNvbnN0IHNlbGVjdGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGF0XCIpO1xuICBzZWxlY3Rpb25JdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIik7XG4gIH0pO1xuXG4gIC8vIFNlbGVjdCB0aGUgY2xpY2tlZCBpdGVtXG4gIGNoYXREaXYuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuXG4gIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIGAvY2hhdC8ke2NoYXRJRH1gKTtcbiAgY2hhdERpc3BsYXkuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICBjb25zdCBpY29ucyA9IGNoYXREaXNwbGF5LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCIpO1xuICBpY29ucy5mb3JFYWNoKChpY29uKSA9PiB7XG4gICAgaWNvbi5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gIH0pO1xuICBpZiAobWVtYmVyc0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID09PSBcImhpZGRlblwiKSB7XG4gICAgbWVtYmVyc0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gIH1cbiAgd2VsY29tZU1lc3NhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuby1jaGF0LXNlbGVjdGVkXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAvLyBSZW1vdmUgYWxsIGNoaWxkcmVuIGZyb20gY2hhdHNcbiAgbGV0IGNoaWxkID0gbWVzc2FnZUNvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZDtcbiAgd2hpbGUgKGNoaWxkKSB7XG4gICAgY29uc3QgbmV4dFNpYmxpbmcgPSBjaGlsZC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKGNoaWxkLmlkICE9PSBcIndlbGNvbWUtbWVzc2FnZVwiKSB7XG4gICAgICBtZXNzYWdlQ29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICB9XG4gICAgY2hpbGQgPSBuZXh0U2libGluZztcbiAgfVxuXG4gIC8vIFJlbW92ZSBhbGwgY2hpbGRyZW4gZnJvbSBtZW1iZXJzXG4gIHdoaWxlIChtZW1iZXJzTGlzdC5maXJzdENoaWxkKSB7XG4gICAgbWVtYmVyc0xpc3QucmVtb3ZlQ2hpbGQobWVtYmVyc0xpc3QuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBnZXRDaGF0KGNoYXRJRCk7XG4gIGdldFVzZXJzKGNoYXRJRCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldENoYXQoZW5kcG9pbnQpIHtcbiAgbGV0IGxvYWRpbmdUaW1lcjtcbiAgbGV0IGxvYWRpbmc7XG4gIC8vIEZ1bmN0aW9uIHRvIGFkZCBsb2FkaW5nIHNwaW5uZXIgYWZ0ZXIgYSBkZWxheVxuICBmdW5jdGlvbiBhZGRMb2FkaW5nU3Bpbm5lcigpIHtcbiAgICBsb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nXCIpO1xuICAgIGxvYWRpbmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBjZW50ZXJFbGVtZW50KGxvYWRpbmcsIG1lc3NhZ2VDb250YWluZXIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIChldmVudCkgPT4ge1xuICAgICAgY2VudGVyRWxlbWVudChsb2FkaW5nLCBtZXNzYWdlQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFN0YXJ0IGEgdGltZXIgdG8gYWRkIGxvYWRpbmcgc3Bpbm5lciBhZnRlciA1MDAgbWlsbGlzZWNvbmRzXG4gIGxvYWRpbmdUaW1lciA9IHNldFRpbWVvdXQoYWRkTG9hZGluZ1NwaW5uZXIsIDcwMCk7XG4gIGlmICh3aW5kb3cubG9jYXRpb24uaHJlZi5pbmNsdWRlcyhcImNoYXRcIikpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2dldGNoYXQvJHtlbmRwb2ludH1gKTtcblxuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChsb2FkaW5nVGltZXIpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXQtbmFtZS1oZWFkZXJcIikudGV4dENvbnRlbnQgPVxuICAgICAgICAgIGRhdGEuY2hhdERhdGEuQ2hhdE5hbWU7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VsY29tZS1uYW1lXCIpLnRleHRDb250ZW50ID1cbiAgICAgICAgICBkYXRhLmNoYXREYXRhLkNoYXROYW1lO1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2UtaW5wdXRcIilcbiAgICAgICAgICAuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgYE1lc3NhZ2UgJHtkYXRhLmNoYXREYXRhLkNoYXROYW1lfS4uLmApO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzRGF0YSA9IGRhdGEubWVzc2FnZXMubWFwKChtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBtZXNzYWdlLlVzZXJuYW1lIHx8IFwiVW5rbm93blwiO1xuICAgICAgICAgIGNvbnN0IHVzZXJJY29uID1cbiAgICAgICAgICAgIG1lc3NhZ2UuUHJvZmlsZUljb24gfHxcbiAgICAgICAgICAgIFwiL2Fzc2V0cy9Qcm9maWxlIEljb25zL3Vua25vd25Qcm9maWxlSWNvbi5wbmdcIjtcbiAgICAgICAgICB2YXIgZGF0ZVNlbnQgPSBtZXNzYWdlLkRhdGVTZW50IHx8IFwiXCI7XG4gICAgICAgICAgZGF0ZVNlbnQgPSB1cGRhdGVUaW1lc3RhbXAoZGF0ZVNlbnQpO1xuICAgICAgICAgIHJldHVybiB7IHVzZXJuYW1lLCBjb250ZW50OiBtZXNzYWdlLkNvbnRlbnQsIHVzZXJJY29uLCBkYXRlU2VudCB9O1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBOb3cgdGhhdCBhbGwgbWVzc2FnZXMgYXJlIGxvYWRlZCwgbWFrZSB0aGUgY2hhdCBjb250YWluZXIgdmlzaWJsZVxuICAgICAgICBpZiAobG9hZGluZykge1xuICAgICAgICAgIG1lc3NhZ2VDb250YWluZXIucmVtb3ZlQ2hpbGQobG9hZGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgd2VsY29tZU1lc3NhZ2Uuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXG4gICAgICAgIGZvciAoY29uc3QgbWVzc2FnZURhdGEgb2YgbWVzc2FnZXNEYXRhKSB7XG4gICAgICAgICAgYXBwZW5kUmljaE1lc3NhZ2UoXG4gICAgICAgICAgICBtZXNzYWdlRGF0YS51c2VybmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2VEYXRhLmNvbnRlbnQsXG4gICAgICAgICAgICBtZXNzYWdlRGF0YS51c2VySWNvbixcbiAgICAgICAgICAgIG1lc3NhZ2VEYXRhLmRhdGVTZW50LFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiB0aGVyZSdzIGFuIGVycm9yIHdpdGggdGhlIG1haW4gY2hhdCBkYXRhIGZldGNoLCBtYWtlIHRoZSBjaGF0IGNvbnRhaW5lciB2aXNpYmxlXG4gICAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGNoYXQgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgLy8gSWYgdGhlcmUncyBhbiBlcnJvciB3aXRoIHRoZSBtYWluIGNoYXQgZGF0YSBmZXRjaCwgbWFrZSB0aGUgY2hhdCBjb250YWluZXIgdmlzaWJsZVxuICAgICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgbWVzc2FnZUNvbnRhaW5lci5yZW1vdmVDaGlsZChsb2FkaW5nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0ZXh0YXJlYS5mb2N1cygpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXJzKGVuZHBvaW50KSB7XG4gIGZldGNoKGAvZ2V0LXVzZXJzLyR7ZW5kcG9pbnR9YCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgfSlcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY29uc3QgbWVtYmVycyA9IGRhdGEudXNlcnM7XG4gICAgICBtZW1iZXJzLmZvckVhY2goKG1lbWJlcikgPT4ge1xuICAgICAgICBjb25zdCB1c2VybmFtZSA9IG1lbWJlcltcIlVzZXJuYW1lXCJdO1xuICAgICAgICBjb25zdCBwcm9maWxlSWNvbiA9IG1lbWJlcltcIlByb2ZpbGVJY29uXCJdO1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibWVtYmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IHByb2ZpbGVJY29uSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBwcm9maWxlSWNvbkltYWdlLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICBcInNyY1wiLFxuICAgICAgICAgIGAvYXNzZXRzL1Byb2ZpbGUgSWNvbnMvJHtwcm9maWxlSWNvbn1gXG4gICAgICAgICk7XG4gICAgICAgIHByb2ZpbGVJY29uSW1hZ2UuY2xhc3NMaXN0LmFkZChcInByb2ZpbGUtaWNvblwiKTtcblxuICAgICAgICBjb25zdCB1c2VybmFtZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDZcIik7XG4gICAgICAgIHVzZXJuYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IHVzZXJuYW1lO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwcm9maWxlSWNvbkltYWdlKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHVzZXJuYW1lRWxlbWVudCk7XG5cbiAgICAgICAgbWVtYmVyc0xpc3QuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldENoYXRCYWNrZ3JvdW5kKCkge1xuICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCBVUkwgaXMgXCIvaG9tZVwiXG4gIGlmICh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgPT09IFwiL2hvbWVcIikge1xuICAgIC8vIEhpZGUgdGhlIGNoYXQgaGVhZGVyXG4gICAgY2hhdERpc3BsYXkuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgbWVtYmVyc0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICBjb25zdCBpY29ucyA9IGNoYXREaXNwbGF5LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCIpO1xuICAgIGljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgIGljb24uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgfSk7XG4gIH1cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuby1jaGF0LXNlbGVjdGVkXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmV4cG9ydCB7IHJlZGlyZWN0IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHVwZGF0ZVRpbWVzdGFtcCwgZm9ybWF0Q2hhdERhdGUgfSBmcm9tIFwiLi9ob21lXCI7XG5cbmNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcbmNvbnN0IG1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVzc2FnZS1pbnB1dFwiKTtcbmNvbnN0IG1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lc3NhZ2UtY29udGFpbmVyXCIpO1xuY29uc3QgbWVzc2FnZUlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gIFwibWVzc2FnZS1pbnB1dC1jb250YWluZXJcIlxuKTtcbmNvbnN0IHJhdGVMaW1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmF0ZS1saW1pdFwiKTtcbmNvbnN0IHJhdGVMaW1pdE1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJhdGUtbGltaXQtbWVzc2FnZVwiKTtcbmNvbnN0IGRhcmtPdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXJrLW92ZXJsYXlcIik7XG5cbnZhciB1c2VybmFtZTtcbnZhciBwcm9maWxlSWNvbjtcblxubWVzc2FnZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgaWYgKFxuICAgIGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmXG4gICAgbWVzc2FnZUlucHV0LnZhbHVlLnRyaW0oKSAhPT0gXCJcIiAmJlxuICAgICFldmVudC5zaGlmdEtleVxuICApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNlbmQoKTtcbiAgfVxufSk7XG5cbm1lc3NhZ2VJbnB1dENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgaWYgKG1lc3NhZ2VJbnB1dCAhPT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkge1xuICAgIG1lc3NhZ2VJbnB1dC5mb2N1cygpO1xuICB9XG59KTtcblxuY29uc3Qgc2VuZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VuZFwiKTtcbnNlbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgc2VuZCgpO1xufSk7XG5cbmZ1bmN0aW9uIHNlbmQoKSB7XG4gIGZldGNoKFwiL3NlbmQtbWVzc2FnZVwiKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDI5KSB7XG4gICAgICAgIHJhdGVMaW1pdE1lc3NhZ2UudGV4dENvbnRlbnQgPVxuICAgICAgICAgIFwiWW91IGFyZSBzZW5kaW5nIHRvbyBtYW55IG1lc3NhZ2VzLiBUcnkgYWdhaW4gaW4gYSBmZXcgbWludXRlc1wiO1xuICAgICAgICByYXRlTGltaXQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgZGFya092ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgbWVzc2FnZUlucHV0LmJsdXIoKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VuZGluZyB0b28gbWFueSBtZXNzYWdlc1wiKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5lbWFpbCAmJiBkYXRhLnVzZXJuYW1lKSB7XG4gICAgICAgIGxldCBpZCA9IGRhdGEuaWQ7XG4gICAgICAgIHVzZXJuYW1lID0gZGF0YS51c2VybmFtZTtcbiAgICAgICAgcHJvZmlsZUljb24gPSBkYXRhLnByb2ZpbGVJY29uO1xuICAgICAgICBpZiAobWVzc2FnZUlucHV0LnZhbHVlICE9IFwiXCIpIHtcbiAgICAgICAgICBjb25zdCBtZXNzYWdlID0gbWVzc2FnZUlucHV0LnZhbHVlO1xuICAgICAgICAgIGNvbnN0IGNoYXRVUkwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICB2YXIgZW5kcG9pbnQgPSBjaGF0VVJMLnNwbGl0KFwiL1wiKS5wb3AoKTtcbiAgICAgICAgICB2YXIgdGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgdGltZXN0YW1wID0gZm9ybWF0Q2hhdERhdGUodGltZXN0YW1wKTtcbiAgICAgICAgICBsZXQgZm9ybWF0dGVkVGltZXN0YW1wID0gdXBkYXRlVGltZXN0YW1wKHRpbWVzdGFtcCk7XG4gICAgICAgICAgc29ja2V0LmVtaXQoXCJzZW5kLWNoYXQtbWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgIHByb2ZpbGVJY29uLFxuICAgICAgICAgICAgZW5kcG9pbnQsXG4gICAgICAgICAgICB0aW1lc3RhbXAsXG4gICAgICAgICAgICBmb3JtYXR0ZWRUaW1lc3RhbXAsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBtZXNzYWdlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgIG1lc3NhZ2VJbnB1dC5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjsgLy8gUmVzZXQgaGVpZ2h0IHRvIGFsbG93IGl0IHRvIHNocmlua1xuICAgICAgICAgIG1lc3NhZ2VJbnB1dENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjtcbiAgICAgICAgICBtZXNzYWdlSW5wdXQuc3R5bGUuaGVpZ2h0ID0gYCR7bWVzc2FnZUlucHV0LnNjcm9sbEhlaWdodH1weGA7IC8vIEV4cGFuZCB0ZXh0YXJlYVxuICAgICAgICAgIG1lc3NhZ2VJbnB1dENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBgJHttZXNzYWdlSW5wdXQuc2Nyb2xsSGVpZ2h0fXB4YDsgLy8gVXBkYXRlIGNvbnRhaW5lciBoZWlnaHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XG4gICAgfSk7XG59XG5cbnNvY2tldC5vbihcImNoYXQtbWVzc2FnZVwiLCAoZGF0YSkgPT4ge1xuICBpZiAoZGF0YS5jaGF0ID09IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiL1wiKS5wb3AoKSkge1xuICAgIGFwcGVuZFJpY2hNZXNzYWdlKGRhdGEubmFtZSwgZGF0YS5tZXNzYWdlLCBkYXRhLmljb24sIGRhdGEudGltZXN0YW1wKTtcbiAgfVxufSk7XG5cbnNvY2tldC5vbihcInVzZXItY29ubmVjdGVkXCIsIChuYW1lKSA9PiB7XG4gIGFwcGVuZE1lc3NhZ2UoYCR7bmFtZX0gY29ubmVjdGVkYCk7XG59KTtcblxuc29ja2V0Lm9uKFwidXNlci1kaXNjb25uZWN0ZWRcIiwgKG5hbWUpID0+IHtcbiAgYXBwZW5kTWVzc2FnZShgJHtuYW1lfSBkaXNjb25uZWN0ZWRgKTtcbn0pO1xuXG5mdW5jdGlvbiBhcHBlbmRNZXNzYWdlKG1lc3NhZ2UsIHNtb290aCA9IHRydWUpIHtcbiAgY29uc3QgbWVzc2FnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZXNzYWdlRWxlbWVudC5pbm5lclRleHQgPSBtZXNzYWdlO1xuICBtZXNzYWdlQ29udGFpbmVyLmFwcGVuZChtZXNzYWdlRWxlbWVudCk7XG5cbiAgaWYgKHNtb290aCkge1xuICAgIG1lc3NhZ2VDb250YWluZXIuc2Nyb2xsVG8oe1xuICAgICAgdG9wOiBtZXNzYWdlQ29udGFpbmVyLnNjcm9sbEhlaWdodCxcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG1lc3NhZ2VDb250YWluZXIuc2Nyb2xsVG9wID0gbWVzc2FnZUNvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kUmljaE1lc3NhZ2UobmFtZSwgbWVzc2FnZXRleHQsIGljb24sIHRpbWVzdGFtcCwgc21vb3RoID0gdHJ1ZSkge1xuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwibWVzc2FnZVwiKTtcblxuICAvLyBDcmVhdGUgcHJvZmlsZSBpY29uIGVsZW1lbnRcbiAgY29uc3QgdXNlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICB1c2VySWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgYC9hc3NldHMvUHJvZmlsZSBJY29ucy8ke2ljb259YCk7XG4gIHVzZXJJY29uLmFsdCA9IFwiUHJvZmlsZSBJY29uXCI7XG4gIHVzZXJJY29uLmNsYXNzTGlzdC5hZGQoXCJwcm9maWxlLWljb25cIik7XG4gIG1lc3NhZ2UuYXBwZW5kQ2hpbGQodXNlckljb24pO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtZXNzYWdlLWNvbnRlbnRzXCIpO1xuICAvLyBDcmVhdGUgbmFtZSBhbmQgZGF0ZSBlbGVtZW50XG4gIGNvbnN0IG5hbWVEYXRlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hbWVEYXRlRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibmFtZS1kYXRlXCIpO1xuXG4gIC8vIE5hbWUgZWxlbWVudFxuICBjb25zdCBuYW1lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBuYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IG5hbWU7XG4gIG5hbWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtZXNzYWdlLW5hbWVcIik7XG4gIG5hbWVEYXRlRWxlbWVudC5hcHBlbmRDaGlsZChuYW1lRWxlbWVudCk7XG5cbiAgY29uc3QgZGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZGF0ZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aW1lc3RhbXA7XG4gIGRhdGVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtZXNzYWdlLWRhdGVcIik7XG4gIG5hbWVEYXRlRWxlbWVudC5hcHBlbmRDaGlsZChkYXRlRWxlbWVudCk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChuYW1lRGF0ZUVsZW1lbnQpO1xuXG4gIC8vIENyZWF0ZSBtZXNzYWdlIHRleHQgZWxlbWVudFxuICBjb25zdCBtZXNzYWdlVGV4dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbWVzc2FnZVRleHRFbGVtZW50LmlubmVyVGV4dCA9IG1lc3NhZ2V0ZXh0O1xuICBtZXNzYWdlVGV4dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1lc3NhZ2UtdGV4dFwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZXNzYWdlVGV4dEVsZW1lbnQpO1xuXG4gIG1lc3NhZ2UuYXBwZW5kKGNvbnRlbnQpO1xuICBtZXNzYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuXG4gIGlmIChzbW9vdGgpIHtcbiAgICBtZXNzYWdlQ29udGFpbmVyLnNjcm9sbFRvKHtcbiAgICAgIHRvcDogbWVzc2FnZUNvbnRhaW5lci5zY3JvbGxIZWlnaHQsXG4gICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBtZXNzYWdlQ29udGFpbmVyLnNjcm9sbFRvcCA9IG1lc3NhZ2VDb250YWluZXIuc2Nyb2xsSGVpZ2h0O1xuICB9XG59XG4iXSwibmFtZXMiOlsicmVkaXJlY3QiLCJjaGF0RGlzcGxheSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtZXNzYWdlQ29udGFpbmVyIiwiY2hhdENvbnRhaW5lciIsIm1lbWJlcnNMaXN0IiwibWVtYmVyc0NvbnRhaW5lciIsIndlbGNvbWVNZXNzYWdlIiwibWVzc2FnZUlucHV0IiwicmF0ZUxpbWl0IiwicmF0ZUxpbWl0TWVzc2FnZSIsImNoYXROYW1lTGFiZWwiLCJkYXJrT3ZlcmxheSIsIm5hdmJhciIsInF1ZXJ5U2VsZWN0b3IiLCJjb250YWluZXIiLCJzaWRlYmFyIiwibmF2YmFySGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0Iiwic2lkZWJhcldpZHRoIiwid2lkdGgiLCJzdHlsZSIsImNvbmNhdCIsImNyZWF0ZSIsImNyZWF0ZU1lbnUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInN0b3BQcm9wYWdhdGlvbiIsInJlbW92ZSIsImRpc3BsYXkiLCJvZmZzZXRMZWZ0Iiwib2Zmc2V0V2lkdGgiLCJidXR0b25Cb3R0b20iLCJvZmZzZXRUb3AiLCJvZmZzZXRIZWlnaHQiLCJsZWZ0IiwiYm90dG9tIiwiYWRkIiwid2luZG93Iiwib25jbGljayIsInBvcHVwIiwidGFyZ2V0IiwiY2xvc2VQb3B1cCIsImNyZWF0ZUdyb3VwRE1CdXR0b24iLCJjcmVhdGVHcm91cERNIiwiY2hhdE5hbWUiLCJmb2N1cyIsImNvbG9yIiwidGV4dENvbnRlbnQiLCJjbG9zZUdyb3VwRE0iLCJjbG9zZVNldHVwIiwiZ3JvdXBETVN0eWxlcyIsImdldENvbXB1dGVkU3R5bGUiLCJyYXRlTGltaXRTdHlsZXMiLCJjcmVhdGVHcm91cERtIiwiY2hhdE5hbWVFbGVtZW50IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm5hbWUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwianNvbiIsInN0YXR1cyIsInpJbmRleCIsIkVycm9yIiwicmVzcG9uc2VEYXRhIiwiZ3JvdXBETSIsImNyZWF0ZWRDaGF0IiwiY3JlYXRlQ2hhdEVsZW1lbnQiLCJpZCIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJlcnJvciIsInBhbmVscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicGFuZWwiLCJ0ZXh0IiwidG9Mb3dlckNhc2UiLCJsYWJlbCIsImJyYW5kaW5nIiwibG9jYXRpb24iLCJocmVmIiwibGFiZWxzIiwiaW5kZXgiLCJpY29uIiwibCIsInBlcnNvbiIsImJvcmRlckxlZnQiLCJyYXRlTGltaXRCdXR0b24iLCJhbmltYXRpb25OYW1lIiwic2VydmVyRHJvcGRvd24iLCJwcmV2ZW50RGVmYXVsdCIsInRleHRhcmVhIiwibWVzc2FnZUlucHV0Q29udGFpbmVyIiwibWVzc2FnZXMiLCJzY3JvbGxIZWlnaHQiLCJuZXdIZWlnaHQiLCJuZXdIZWlnaHRQZXJjZW50IiwicGFyc2VJbnQiLCJjbGllbnRIZWlnaHQiLCJ1cGRhdGVUaW1lc3RhbXAiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJmb3JtYXR0ZWRDdXJyZW50RGF0ZSIsImZvcm1hdENoYXREYXRlIiwieWVzdGVyZGF5IiwiZm9ybWF0dGVkWWVzdGVyZGF5IiwidGltZXN0YW1wRGF0ZSIsInNwbGl0IiwiZm9ybWF0dGVkVGltZXN0YW1wRGF0ZSIsInRpbWVzdGFtcCIsIm1lc3NhZ2VEYXRlIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJwZXJpb2QiLCJmb3JtYXR0ZWRIb3VycyIsImZvcm1hdHRlZE1pbnV0ZXMiLCJjZW50ZXJFbGVtZW50IiwiZWxlbWVudCIsImJvdW5kaW5nQ2xpZW50IiwiY2VudGVyWCIsImNlbnRlclkiLCJ0b3AiLCJmb250cyIsInJlYWR5IiwiaWNvbnMiLCJvdXRsaW5lZGljb25zIiwidmlzaWJpbGl0eSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiZG9uZSIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJhbGxvd0FycmF5TGlrZSIsIml0IiwiQXJyYXkiLCJpc0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiRiIsIl9lIiwibm9ybWFsQ29tcGxldGlvbiIsImRpZEVyciIsImVyciIsInN0ZXAiLCJfZTIiLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiZnJvbSIsInRlc3QiLCJhcnIiLCJsZW4iLCJhcnIyIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJpbmZvIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJ1bmRlZmluZWQiLCJlbWFpbCIsInVzZXJuYW1lIiwidXNlckVtYWlsIiwicHJvZmlsZVBpY3R1cmUiLCJwcm9maWxlSWNvbiIsInByb2ZpbGVQaWN0dXJlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImxvYWRSb29tcyIsInNldENoYXRCYWNrZ3JvdW5kIiwidXJsSUROdW1iZXIiLCJyb29tcyIsImNyZWF0ZUJsYW5rQ2hhdCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsImVuY3J5cHRlZFVybElEIiwiZ2V0IiwidXJsSUQiLCJDcnlwdG9KUyIsIkFFUyIsImRlY3J5cHQiLCJlbmMiLCJVdGY4IiwiY2hhdCIsImNoYXRJRCIsImNoYXRzIiwiY2hhdEVsZW1lbnQiLCJjcmVhdGVCbGFua0NoYXRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3RlZENoYXQiLCJpbmNsdWRlcyIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJjaGF0RGl2IiwiY3JlYXRlRWxlbWVudCIsInNlcnZlckljb24iLCJvdmVyZmxvdyIsImhvdmVyVGltZW91dCIsInNob3dIb3ZlckRpdiIsImhvdmVyRGl2IiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIm1heFdpZHRoIiwib3ZlcmZsb3dXcmFwIiwicmVjdCIsImNsaWVudFdpZHRoIiwic2Nyb2xsV2lkdGgiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2xhc3NOYW1lIiwicG9pbnRlckV2ZW50cyIsImNoYXRJY29uIiwic3JjIiwiYmFja2dyb3VuZENvbG9yIiwiaDZFbGVtZW50IiwidXNlclNlbGVjdCIsInNlbGVjdGlvbkl0ZW1zIiwiaXRlbSIsImNoaWxkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJuZXh0U2libGluZyIsIm5leHRFbGVtZW50U2libGluZyIsInJlbW92ZUNoaWxkIiwiZ2V0Q2hhdCIsImdldFVzZXJzIiwiX3giLCJfZ2V0Q2hhdCIsIl9jYWxsZWUiLCJlbmRwb2ludCIsImxvYWRpbmdUaW1lciIsImxvYWRpbmciLCJhZGRMb2FkaW5nU3Bpbm5lciIsIm1lc3NhZ2VzRGF0YSIsIl9pdGVyYXRvciIsIl9zdGVwIiwibWVzc2FnZURhdGEiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiX2FkZExvYWRpbmdTcGlubmVyIiwiY2hhdERhdGEiLCJDaGF0TmFtZSIsIm1hcCIsIm1lc3NhZ2UiLCJVc2VybmFtZSIsInVzZXJJY29uIiwiUHJvZmlsZUljb24iLCJkYXRlU2VudCIsIkRhdGVTZW50IiwiY29udGVudCIsIkNvbnRlbnQiLCJhcHBlbmRSaWNoTWVzc2FnZSIsInQwIiwiX3gyIiwiX2dldFVzZXJzIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJtZW1iZXJzIiwidXNlcnMiLCJtZW1iZXIiLCJkaXYiLCJwcm9maWxlSWNvbkltYWdlIiwidXNlcm5hbWVFbGVtZW50IiwicGF0aG5hbWUiLCJzb2NrZXQiLCJpbyIsInRyaW0iLCJzaGlmdEtleSIsInNlbmQiLCJhY3RpdmVFbGVtZW50Iiwic2VuZEJ1dHRvbiIsImJsdXIiLCJjaGF0VVJMIiwiZ2V0VGltZSIsImZvcm1hdHRlZFRpbWVzdGFtcCIsImVtaXQiLCJvbiIsImFwcGVuZE1lc3NhZ2UiLCJzbW9vdGgiLCJtZXNzYWdlRWxlbWVudCIsImlubmVyVGV4dCIsImFwcGVuZCIsInNjcm9sbFRvIiwic2Nyb2xsVG9wIiwibWVzc2FnZXRleHQiLCJhbHQiLCJuYW1lRGF0ZUVsZW1lbnQiLCJuYW1lRWxlbWVudCIsImRhdGVFbGVtZW50IiwibWVzc2FnZVRleHRFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==