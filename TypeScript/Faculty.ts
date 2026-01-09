 import { Person } from "./Person";

 export class Faculty extends Person {
        
    name: string;
    address : string;
    age: number;

    constructor(name:string,address:string,age:number){
        super(name,address,age);
        this.name=name;
        this.address=address;
        this.age=age;
    }
     teach(): void{
        console.log(`${this.name} is teaching`);
     }

     displayAddress(): void {
         super.displayAddress();
         console.log(`Name:${this.name} - Address: ${this.address}`);
     }
    
 }