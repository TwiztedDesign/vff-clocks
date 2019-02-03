import Clock from "./clocks/clock-simple";
import SystemClock from "./clocks/system-clock";
import Countdown from "./clocks/countdown";
import Stopwatch from "./clocks/stopwatch";
import BasicClock from "./clocks/basic-clock";

window.vff.define('clock-element', Clock);
window.vff.define('system-clock', SystemClock);
window.vff.define('countdown-clock', Countdown);
window.vff.define('stopwatch-clock', Stopwatch);
window.vff.define('basic-clock', BasicClock);

