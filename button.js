class SwitchButton {
    status;
    lamp;

    constructor(status, lamp) {
        this.status = status;
        this.lamp = lamp;
    }

    connectToLamp(lamp){
        this.lamp = lamp;
    }

    switchOff(){
        this.status = false;
        this.lamp.trangthai = false;
    }

    switchOn(){
        this.status = true;
        this.lamp.trangthai = true;
    }
}