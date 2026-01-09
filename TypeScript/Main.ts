
import {student} from "./Student";
import {Person} from "./Person";
import {Faculty} from "./Faculty";
import {Staffs} from "./Staffs"; 

class Main {

    main(): void{
        let Person1= new Person("Dhanu","Bangalore",24);
        Person1.displayAddress();

        let students = new student ("gopi","chennai",22);
        students.displayAddress();
        students.study();

        let faculty = new Faculty("Arul","mumbai",30);
        faculty.displayAddress();
        faculty.teach();

        let staffs= new Staffs("arun","kit",40);
        staffs.displayAddress();
        staffs.work();
    }
}

let app=new Main();
app.main();