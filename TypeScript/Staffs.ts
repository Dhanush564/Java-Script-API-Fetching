import { Person } from "./Person";

export class Staffs extends Person{
    name : string;
    address: string;
    age: number;
    
    constructor(name:string,address:string,age:number){
        super(name,address,age);
        this.name=name;
        this.age=age;
        this.address=address;
    }

    work():void{
        console.log(`${this.name} is Working`);
    }

    displayAddress(): void {
        super.displayAddress();
        console.log(`Name:${this.name} - Address:${this.address}`);
    }

}