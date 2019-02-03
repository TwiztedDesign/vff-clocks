import BasicClock from "./basic-clock";


export default class Countdown extends BasicClock {
    constructor() {
        super();
        this._initial = 0;
        this._reset = true;

    }
    connectedCallback() {
        super.connectedCallback();
    }

    init(){
        return this._initial;
    }

    onInterval(i){
        if(this.get() - i > 0){
            this.set(this.get() - i);
        } else {
            this.set(0);
            // this.stop();
        }
    }

    get reset(){
        return this._reset;
    }
    set reset(value){
        this._time = this._initial * 1000 || 0;
        this._update();
    }
    get initial(){
        return this._initial;
    }

    set initial(value){
        if(value !== undefined){
            this._initial = parseInt(value)|| 0;
            this._time = this._initial * 1000 || 0;
            this._update();
        }
    }

    expose(){
        let exposed = super.expose();
        exposed.initial = "initial";
        exposed.reset = {
            ui      : {
                type : 'pulse',
                label   : 'Click to reset'
            },
            path : 'reset'
        };
        return exposed;
    }
}