
// export interface Pass{
//     id: number;
//     sendingTeacher: string;
//     receivingTeacher: string;
//     studentName: string;
//     timeCreated: string;
//     active: boolean;
// }

// export const passes = [
//     {
//         id: 1,
//         sendingTeacher: "Mr. Smith",
//         receivingTeacher: "Mrs. Jones",
//         studentName: "John Doe",
//         timeCreated: "2020-01-01 12:00:00",
//         active: true
//     },
//     {
//         id: 2,
//         sendingTeacher: "Mr. Swasd",
//         receivingTeacher: "Mrs. Jons",
//         studentName: "Jane Doe",
//         timeCreated: "2022-01-01 12:00:00",
//         active: true
//     }];

import { Teacher, teachers} from './teachers'
export class Pass{
    sendingTeacher: Teacher;
    receivingTeacher: Teacher;
    studentName: string;
    timeCreated: string;
    reason: string;
    state: boolean;

    constructor(sendingTeacherName: String, receivingTeacherName: string, studentName: string, reason:string, timeCreated: string){
        this.sendingTeacher = teachers[teachers.findIndex(teacher => teacher.name == sendingTeacherName)];
        this.receivingTeacher = teachers[teachers.findIndex(teacher => teacher.name == receivingTeacherName)];
        this.studentName = studentName;
        this.timeCreated = timeCreated;
        this.reason = reason;
        this.state = false;
    }

    changeState(states: boolean){
        // Changes the state of a pass from either active to inactive or vice versa
        if(states){
            this.state = true;
        }
        else{
            this.state = false;
        }
    }

}

export const activePasses: Pass[] = [
    new Pass("Mr. Smith", "Mrs. Jones", "John Doe", "testing", "2020-01-01 12:00:00"), 
    new Pass("Mr. Swasd", "Mrs. Jons", "Jane Doe", "other testing", "2022-01-01 12:00:00")
];

export var inactivePasses: Pass[] = [];

// export const passes = [
//     new Pass(1, "Mr. Smith", "Mrs. Jones", "John Doe", "2020-01-01 12:00:00", true), 
//     new Pass(2, "Mr. Swasd", "Mrs. Jons", "Jane Doe", "2022-01-01 12:00:00", true)
// ];