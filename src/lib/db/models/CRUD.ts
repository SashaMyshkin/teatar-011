interface UpdateOptions{}

export abstract class CRUD<T>{
    abstract selectById():T;
    abstract selectAll():T;
    abstract insertRow():number;
    abstract updateRow():void;
    abstract deleteRow(id:number):void;
}