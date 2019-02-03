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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Interval = __webpack_require__(5);

var BasicClock = function (_HTMLElement) {
    _inherits(BasicClock, _HTMLElement);

    function BasicClock() {
        _classCallCheck(this, BasicClock);

        var _this = _possibleConstructorReturn(this, (BasicClock.__proto__ || Object.getPrototypeOf(BasicClock)).call(this));

        var self = _this;
        _this._time = _this.init();
        _this.running = false;
        _this._visibility = true;
        _this.interval = new Interval(function (interval) {
            self.onInterval(interval);
            self._update();
        });
        return _this;
    }

    _createClass(BasicClock, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.style.display = 'block';
            this.innerHTML = this._time;
            if (this.autorun) {
                this.start();
            }
            this._update();
        }
    }, {
        key: '_update',
        value: function _update() {
            this.innerHTML = this.format(this._time);
        }
    }, {
        key: 'start',
        value: function start() {
            this.interval.start();
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.interval.stop();
        }
    }, {
        key: 'set',
        value: function set(time) {
            this._time = time;
        }
    }, {
        key: 'get',
        value: function get() {
            return this._time;
        }
    }, {
        key: 'format',
        value: function format() {
            return this._time;
        }
    }, {
        key: 'init',
        value: function init() {
            return 0;
        }
    }, {
        key: 'onInterval',
        value: function onInterval(i) {
            this._time += i;
        }
    }, {
        key: 'expose',
        value: function expose() {
            return {
                visibility: 'show',
                run: 'run'
            };
        }
    }, {
        key: 'options',
        value: function options() {
            return {
                updateOn: 'control'
            };
        }
    }, {
        key: 'autorun',
        get: function get() {
            return this.getAttribute("autorun") === 'true' || this.getAttribute("autorun") === '';
        }
    }, {
        key: 'run',
        get: function get() {
            return this.running;
        },
        set: function set(value) {
            this.running = value;
            this.running ? this.start() : this.stop();
            this.dispatchEvent(new Event(value ? "start" : "stop"));
        }
    }, {
        key: 'show',
        get: function get() {
            return this._visibility;
        },
        set: function set(value) {
            this._visibility = value;
            this.style.display = value ? 'block' : 'none';
        }
    }]);

    return BasicClock;
}(HTMLElement);

exports.default = BasicClock;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _clockSimple = __webpack_require__(2);

var _clockSimple2 = _interopRequireDefault(_clockSimple);

var _systemClock = __webpack_require__(4);

var _systemClock2 = _interopRequireDefault(_systemClock);

var _countdown = __webpack_require__(6);

var _countdown2 = _interopRequireDefault(_countdown);

var _stopwatch = __webpack_require__(7);

var _stopwatch2 = _interopRequireDefault(_stopwatch);

var _basicClock = __webpack_require__(0);

var _basicClock2 = _interopRequireDefault(_basicClock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.vff.define('clock-element', _clockSimple2.default);
window.vff.define('system-clock', _systemClock2.default);
window.vff.define('countdown-clock', _countdown2.default);
window.vff.define('stopwatch-clock', _stopwatch2.default);
window.vff.define('basic-clock', _basicClock2.default);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var work = __webpack_require__(3);

function createWorker() {
    var blobURL = URL.createObjectURL(new Blob(['(', work.toString(), ')()'], { type: 'application/javascript' }));
    var worker = new Worker(blobURL);
    URL.revokeObjectURL(blobURL);
    return worker;
}

var Clock = function (_HTMLElement) {
    _inherits(Clock, _HTMLElement);

    function Clock() {
        _classCallCheck(this, Clock);

        var _this = _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).call(this));

        var self = _this;
        _this._worker = createWorker();
        _this._time = 0 + _this.initial;
        _this._memo = _this._time;
        _this._worker.onmessage = function (e) {

            if (!self.running) {
                return;
            }

            if (self.limit >= 0 && e.data - self.interval > self.limit) {
                self.pause();
                self._time = self.limit;
                self.update();
                var event = new Event('limit-reached');
                self.dispatchEvent(event);
            } else {
                self._time = e.data;
                self.update();
            }
        };
        _this.running = false;
        return _this;
    }

    _createClass(Clock, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.innerHTML = '<div class="clock"></div>';
            this.update();
        }
    }, {
        key: 'disconnectedCallback',
        value: function disconnectedCallback() {
            this.running = false;
        }
    }, {
        key: 'pad',
        value: function pad(num) {
            return ('0' + num).slice(-2);
        }
    }, {
        key: 'limitReached',
        value: function limitReached() {
            return this.limit >= 0 && this._time >= this.limit;
        }
    }, {
        key: 'formatTime',
        value: function formatTime() {
            return this._time;
        }
    }, {
        key: 'update',
        value: function update() {
            this.querySelector('.clock').innerHTML = this.formatTime();
        }
    }, {
        key: 'pause',
        value: function pause() {
            this._worker.postMessage({ cmd: 'pause' });
            this.running = false;
        }
    }, {
        key: 'stop',
        value: function stop() {
            this._worker.postMessage({ cmd: 'stop' });
            this._time = this.initial;
            this.running = false;
            this.update();
        }
    }, {
        key: 'start',
        value: function start() {
            this.initial = this._time || this.initial;
            this._memo = this._time || this.initial;
            this._time = 0;
            this.running = true;
            this._worker.postMessage({ cmd: 'start', interval: this.interval, offset: this.__timecode__ || 0, initial: this._memo });
        }
    }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback() {}
    }, {
        key: 'expose',
        value: function expose() {
            return {
                Run: 'run',
                Reset: 'reset',
                Initial: 'initial',
                Limit: 'limit',
                Show: 'show'
            };
        }
    }, {
        key: 'type',
        get: function get() {
            return this.getAttribute("type") || 'system';
        },
        set: function set(value) {
            this.setAttribute('type', value);
        }
    }, {
        key: 'format',
        get: function get() {
            return this.getAttribute("format") || 'hh:mm:ss';
        },
        set: function set(value) {
            this.setAttribute('format', value);
        }
    }, {
        key: 'countFrom',
        get: function get() {
            return this.getAttribute("count-from") || 60000;
        },
        set: function set(value) {
            this.setAttribute('count-from', value);
        }
    }, {
        key: 'interval',
        get: function get() {
            return parseInt(this.getAttribute("interval")) || 100;
        },
        set: function set(value) {
            this.setAttribute('interval', value);
        }
    }, {
        key: 'run',
        get: function get() {
            return this.running;
        },
        set: function set(value) {
            if (this.running !== value) {
                this.running = value;
                this.running ? this.start() : this.pause();
            }
        }
    }, {
        key: 'reset',
        get: function get() {
            return false;
        },
        set: function set(value) {
            if (value) {
                var wasRunning = this.running;
                this.stop();
                if (wasRunning) {
                    this.start();
                }
            }
        }
    }, {
        key: 'initial',
        get: function get() {
            return parseInt(this.getAttribute("initial")) || 0;
        },
        set: function set(value) {
            if (this.initial !== value) {
                this.setAttribute('initial', value);
                this._time = value;
                this.update();
            }
        }
    }, {
        key: 'limit',
        get: function get() {
            var limit = parseInt(this.getAttribute("limit"));
            return Number.isInteger(limit) ? limit : -1;
        },
        set: function set(value) {
            this.setAttribute('limit', value);
        }
    }, {
        key: 'show',
        get: function get() {
            var vis = this.getAttribute("show");
            if (vis !== null) {
                return vis === 'true';
            } else {
                return true;
            }
        },
        set: function set(value) {
            if (value) {
                this.style.visibility = 'visible';
            } else {
                this.style.visibility = 'hidden';
            }
            this.setAttribute('show', value);
        }
    }], [{
        key: 'observedAttributes',
        get: function get() {
            return [];
        }
    }]);

    return Clock;
}(HTMLElement);

exports.default = Clock;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function worker() {
    var now = Date.now || function () {
        return new Date().getTime();
    };
    var delay;
    var startedAt;
    var delayed;
    var timeoutId = null;
    var offset;

    self.onmessage = function (event) {

        var data = event.data;

        switch (data.cmd) {

            case 'stop':

                clearTimeout(timeoutId);
                timeoutId = null;
                break;
            case 'pause':
                clearTimeout(timeoutId);
                timeoutId = null;
                break;
            case 'resume':
                break;
            case 'reset':
                break;
            case 'start':

                delay = data.interval;
                offset = data.offset || 0;
                var isLive = data.offset > 100000000;
                var initial = data.initial || 0;

                startedAt = isLive ? new Date(offset - initial) : now() - initial;
                delayed = 0;
                timeoutId = self.setTimeout(tick, delay);

                break;
        }
    };

    function tick() {
        delayed += delay;
        var tickedAt = now();
        var elapsed = tickedAt - startedAt;
        var drifted = elapsed - delayed;
        self.postMessage(elapsed);
        timeoutId = self.setTimeout(tick, delay - drifted);
    }
}

module.exports = worker;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _basicClock = __webpack_require__(0);

var _basicClock2 = _interopRequireDefault(_basicClock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Countdown = function (_BasicClock) {
    _inherits(Countdown, _BasicClock);

    function Countdown() {
        _classCallCheck(this, Countdown);

        return _possibleConstructorReturn(this, (Countdown.__proto__ || Object.getPrototypeOf(Countdown)).call(this));
    }

    _createClass(Countdown, [{
        key: "connectedCallback",
        value: function connectedCallback() {
            _get(Countdown.prototype.__proto__ || Object.getPrototypeOf(Countdown.prototype), "connectedCallback", this).call(this);
        }
    }, {
        key: "init",
        value: function init() {
            return Date.now();
        }
    }, {
        key: "onInterval",
        value: function onInterval() {
            this.set(Date.now());
        }
    }, {
        key: "_pad",
        value: function _pad(num) {
            return ('0' + num).slice(-2);
        }
    }, {
        key: "format",
        value: function format(timestamp) {
            var seconds = parseInt(timestamp / 1000 % 60),
                minutes = parseInt(timestamp / (1000 * 60) % 60),
                hours = parseInt(timestamp / (1000 * 60 * 60) % 24),
                milliseconds = parseInt(timestamp % 1000 / 100);

            return this._pad(hours) + ":" + this._pad(minutes) + ":" + this._pad(seconds) + '.' + milliseconds;
        }
    }]);

    return Countdown;
}(_basicClock2.default);

exports.default = Countdown;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function work() {

    var now = Date.now || function () {
        return new Date().getTime();
    };
    var interval, delayed, startedAt;
    var timeoutId = null;

    self.onmessage = function (event) {
        var data = event.data;

        switch (data.cmd) {

            case 'stop':
                clearTimeout(timeoutId);
                timeoutId = null;
                break;
            case 'start':
                if (!timeoutId) {
                    interval = data.interval || 30;
                    startedAt = now();
                    delayed = 0;
                    timeoutId = self.setTimeout(tick, interval);
                }
                break;
        }
    };

    function tick() {
        delayed += interval;
        var tickedAt = now();
        var elapsed = tickedAt - startedAt;
        var drifted = elapsed - delayed;
        self.postMessage(interval);
        timeoutId = self.setTimeout(tick, interval - drifted);
    }
}

function createWorker() {
    var blobURL = URL.createObjectURL(new Blob(['(', work.toString(), ')()'], { type: 'application/javascript' }));
    var worker = new Worker(blobURL);
    URL.revokeObjectURL(blobURL);
    return worker;
}

var Interval = function () {
    function Interval(cb, options) {
        _classCallCheck(this, Interval);

        this._options = options || {};
        this._worker = createWorker();
        this._worker.onmessage = function (e) {
            cb(e.data);
        };
    }

    _createClass(Interval, [{
        key: 'start',
        value: function start() {
            this._worker.postMessage({ cmd: 'start', interval: this._options.interval });
        }
    }, {
        key: 'stop',
        value: function stop() {
            this._worker.postMessage({ cmd: 'stop', interval: this._options.interval });
        }
    }]);

    return Interval;
}();

module.exports = Interval;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _basicClock = __webpack_require__(0);

var _basicClock2 = _interopRequireDefault(_basicClock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Countdown = function (_BasicClock) {
    _inherits(Countdown, _BasicClock);

    function Countdown() {
        _classCallCheck(this, Countdown);

        var _this = _possibleConstructorReturn(this, (Countdown.__proto__ || Object.getPrototypeOf(Countdown)).call(this));

        _this._initial = 0;
        _this._reset = true;

        return _this;
    }

    _createClass(Countdown, [{
        key: "connectedCallback",
        value: function connectedCallback() {
            _get(Countdown.prototype.__proto__ || Object.getPrototypeOf(Countdown.prototype), "connectedCallback", this).call(this);
        }
    }, {
        key: "init",
        value: function init() {
            return this._initial;
        }
    }, {
        key: "onInterval",
        value: function onInterval(i) {
            if (this.get() - i > 0) {
                this.set(this.get() - i);
            } else {
                this.set(0);
                // this.stop();
            }
        }
    }, {
        key: "expose",
        value: function expose() {
            var exposed = _get(Countdown.prototype.__proto__ || Object.getPrototypeOf(Countdown.prototype), "expose", this).call(this);
            exposed.initial = "initial";
            exposed.reset = {
                ui: {
                    type: 'pulse',
                    label: 'Click to reset'
                },
                path: 'reset'
            };
            return exposed;
        }
    }, {
        key: "reset",
        get: function get() {
            return this._reset;
        },
        set: function set(value) {
            this._time = this._initial * 1000 || 0;
            this._update();
        }
    }, {
        key: "initial",
        get: function get() {
            return this._initial;
        },
        set: function set(value) {
            if (value !== undefined) {
                this._initial = parseInt(value) || 0;
                this._time = this._initial * 1000 || 0;
                this._update();
            }
        }
    }]);

    return Countdown;
}(_basicClock2.default);

exports.default = Countdown;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _basicClock = __webpack_require__(0);

var _basicClock2 = _interopRequireDefault(_basicClock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stopwatch = function (_BasicClock) {
    _inherits(Stopwatch, _BasicClock);

    function Stopwatch() {
        _classCallCheck(this, Stopwatch);

        var _this = _possibleConstructorReturn(this, (Stopwatch.__proto__ || Object.getPrototypeOf(Stopwatch)).call(this));

        _this._limit = '';
        _this._initial = '';
        _this._reset = {
            ui: 'pulse',
            value: true,
            label: 'Click to reset'
        };
        return _this;
    }

    _createClass(Stopwatch, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            _get(Stopwatch.prototype.__proto__ || Object.getPrototypeOf(Stopwatch.prototype), 'connectedCallback', this).call(this);
        }
    }, {
        key: '_pad',
        value: function _pad(num) {
            return ('0' + num).slice(-2);
        }
    }, {
        key: '_update',
        value: function _update() {
            _get(Stopwatch.prototype.__proto__ || Object.getPrototypeOf(Stopwatch.prototype), '_update', this).call(this);
            if (this._limit !== '' && this._limit > 0 && this._time >= this._limit * 1000) {
                this.run = false;
                this.dispatchEvent(new Event("limit"));
            }
        }
    }, {
        key: 'format',
        value: function format(timecode) {

            var seconds = parseInt(timecode / 1000 % 60),
                minutes = parseInt(timecode / (1000 * 60));

            return this._pad(minutes) + ":" + this._pad(seconds);
        }
    }, {
        key: 'expose',
        value: function expose() {
            var exposed = _get(Stopwatch.prototype.__proto__ || Object.getPrototypeOf(Stopwatch.prototype), 'expose', this).call(this);
            exposed['fromTime'] = "initial";
            exposed['toTime'] = "limit";
            exposed.Reset = 'reset';
            return exposed;
        }
    }, {
        key: 'limit',
        get: function get() {
            return this._limit;
        },
        set: function set(value) {
            this._limit = value;
        }
    }, {
        key: 'initial',
        get: function get() {
            return this._initial;
        },
        set: function set(value) {
            if (value !== undefined) {
                this._initial = parseInt(value) || 0;
                // this._time = this._initial;
                // this._update();
            }
        }
    }, {
        key: 'reset',
        get: function get() {
            return this._reset;
        },
        set: function set(value) {
            this._time = this._initial * 1000 || 0;
            this._update();
        }
    }]);

    return Stopwatch;
}(_basicClock2.default);

exports.default = Stopwatch;

/***/ })
/******/ ]);
//# sourceMappingURL=vff-ext.js.map