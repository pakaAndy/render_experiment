
export default class Controller{

    protected zahl: number = 0 ;

    constructor(private branchIndex: number) {
    }

    public getBranchindex(){
        return this.branchIndex ;
    }

    public increment() {
        this.zahl++;
    }

    public getZahl(){
        console.log('getZahl, zahl: ' + this.zahl) ;
        return this.zahl ;
    }

    public updateZahl(zahl: number){
        console.log('Controller updateZahl ' + this.zahl + ' zu ' + zahl) ;
        this.zahl = zahl ;
        console.log('Controller Zahl nun upgedatet zu ' + this.zahl) ;
    }
}
