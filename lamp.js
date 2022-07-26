class ElectricLamp {
    trangthai;

    constructor(status) {
        this.trangthai = status;
    }

    turnOn(){
        this.trangthai = true;
    }

    turnOff(){
        this.trangthai = false;
    }
}