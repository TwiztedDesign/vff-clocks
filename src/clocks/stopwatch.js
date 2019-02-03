import BasicClock from "./basic-clock";

export default class Stopwatch extends BasicClock {
    constructor() {
        super();
        this._limit = '';
        this._initial = '';
        this._reset = {
            ui      : 'pulse',
            value   : true,
            label   : 'Click to reset'
        };
    }

    connectedCallback() {
        super.connectedCallback();
    }

    _pad(num) {
        return ('0' + num).slice(-2);
    }

    _update(){
        super._update();
        if(this._limit !== '' && this._limit > 0 && this._time >= this._limit * 1000){
            this.run = false;
            this.dispatchEvent(new Event("limit"));
        }
    }

    format(timecode){

        var seconds         = parseInt((timecode / 1000) % 60),
            minutes         = parseInt((timecode / (1000 * 60)));

        return this._pad(minutes) + ":" + this._pad(seconds);
    }


    get limit(){
        return this._limit;
    }

    set limit(value){
        this._limit = value;
    }
    get initial(){
        return this._initial;
    }

    set initial(value){
        if(value !== undefined){
            this._initial = parseInt(value)|| 0;
            // this._time = this._initial;
            // this._update();
        }
    }
    get reset(){
        return this._reset;
    }
    set reset(value){
        this._time = this._initial * 1000 || 0;
        this._update();
    }



    expose(){
        var exposed = super.expose();
        exposed['fromTime'] = "initial";
        exposed['toTime'] = "limit";
        exposed.Reset = 'reset';
        return exposed;
    }

}
