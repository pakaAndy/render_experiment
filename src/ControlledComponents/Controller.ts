export default class Controller{

    protected zahl: number = 0 ;

    public update(newZahl: number){
        this.zahl = newZahl ;
    }

    public getZahl(){
        return this.zahl * 2 ;
    }


}