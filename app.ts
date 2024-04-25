import inquirer from "inquirer";

class Student {


    name: string;
    grade: string;
    age: number;
    roll: number;
    paper: string;
    marks: number;

    constructor(roll: number, name: string, age: number, grade: string,paper:string="Try Again NExt time",marks:number) {
        this.roll = roll;
        console.log(`ROLL NUMBER : | ${this.roll} |`)
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.paper=paper;
        this.marks=marks
    }

    introduce() {
        console.table({
            "Student Details": {
                "Roll Number": this.roll,
                "Name": this.name,
                "Age": this.age,
                "Grade": this.grade,
                "Total Marks": 550,
                "Obtain Marks": this.marks,
                "Clear Paper": this.paper
    }})
    }
}

const students: Student[] = [
    new Student(10020, "Abdul Haseeb", 18, "A","All",550),
    new Student(10030, "Amreen", 19, "B","5",440),
    new Student(10040, "sonia", 17,"d","2",540),
     new Student(10060, "hamza", 17, "b","3",410),
     new Student(10080, "zaniab", 12, "d","3",280),
     new Student(10090, "shery", 12, "b","2",370),

];

const result = async () => {
    let{rol} = await inquirer.prompt([
        {
            name: "rol",
            type: "number",
            message: "Enter Roll Number: "
        }
    ]);

    const student = students.find(student => student.roll === rol);

    if (student) {
        console.log(student.introduce());
    } else {
     await forgot()
    
    }
};
let forgot = async() =>{
    let{name} = await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Forget Roll-NUMBER || ENTER YOUR NAME "
        }
    ]);
    const student = students.find(student => student.name === name);
    if (student) {
        console.log(student.introduce());
        
    } 
    else{
        console.log(`Contact Our Help Line`)
    }

}


result();
