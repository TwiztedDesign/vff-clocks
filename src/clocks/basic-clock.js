const Interval = require('./interval-worker');

export default class BasicClock extends HTMLElement {
    constructor() {
        super();

        let self = this;
        this._time = this.init();
        this.running = false;
        this._visibility = true;
        this.interval = new Interval(function(interval){
            self.onInterval(interval);
            self._update();
        });
    }

    connectedCallback() {
        this.style.display = 'block';
        this.innerHTML = this._time;
        if(this.autorun){this.start();}
        this._update();
    }

    _update(){
        this.innerHTML = this.format(this._time);
    }
    start(){
        this.interval.start();
    }
    stop(){
        this.interval.stop();
    }
    set(time){
        this._time = time;
    }
    get(){
        return this._time;
    }
    format(){
        return this._time;
    }
    init(){
        return 0;
    }
    onInterval(i){
        this._time += i;
    }
    get autorun(){
        return this.getAttribute("autorun") === 'true' || this.getAttribute("autorun") === '';
    }

    get run(){
        return this.running;
    }
    set run(value){
        this.running = value;
        this.running? this.start() : this.stop();
        this.dispatchEvent(new Event(value? "start" : "stop"));
    }
    get show(){
        return this._visibility;
    }
    set show(value){
        this._visibility = value;
        this.style.display = value? 'block' : 'none';
    }

    expose(){
        return {
            visibility : 'show',
            run : 'run'
        };
    }
    options(){
        return {
            updateOn : 'control'
        };
    }

}


