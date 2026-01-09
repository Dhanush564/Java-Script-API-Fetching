import {Person} from "./Person";
 
export class student extends Person {
    
    name: string;
    address: string;
    age: number;

    constructor(name: string, address: string, age: number) {
        super(name,address,age);
        this.name=name;
        this.address=address;
        this.age=age;
    }

    study(): void {
        console.log(`${this.name}` + "is studyning");
    }
    displayAddress(): void {
        super.displayAddress();
        console.log(`Name:${this.name} - Address: ${this.address}`);
    }

}