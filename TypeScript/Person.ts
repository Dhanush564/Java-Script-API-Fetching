export class Person {
    name: string;
    address: string;
    age: number;

    constructor(name: string, address: string, age: number) {
        this.name = name;
        this.address = address;
        this.age = age;
    }
    displayAddress(): void {
        console.log(`Address: ${this.address}`);
    }
    
}