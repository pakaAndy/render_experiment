import Controller from "./Controller";

export default class Controllers{

    controllers: Controller[] = [] ;

    public addController(zahl: number){
        let index = this.controllers.length ;
        this.controllers.push(new Controller(index)) ;
        this.controllers[index].updateZahl(zahl) ;
    }

    public getControllers(){
        return this.controllers ;
    }

    public controllerSetZahl(zahl: number, index: number){
        this.controllers[index].updateZahl(zahl) ;
    }

}