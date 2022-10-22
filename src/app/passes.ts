
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
    // Stored as a number of ms since 1970
    timeCreated: number;
    reason: string;
    state: boolean;
    timeCounter: Date = new Date()

    constructor(sendingTeacherName: string, receivingTeacherName: string, studentName: string, reason?:string, timeCreated?: number){
        // The question mark in the constructor means that it is an optional parameter
        if (teachers.findIndex(teacher => teacher.name == sendingTeacherName) != -1){
        this.sendingTeacher = teachers[teachers.findIndex(teacher => teacher.name == sendingTeacherName)];}
        else{this.sendingTeacher= new Teacher(0, sendingTeacherName, "Unknown");}
        this.receivingTeacher = teachers[teachers.findIndex(teacher => teacher.name == receivingTeacherName)];
        this.studentName = studentName;
        // If reason is not specified, set it to "No reason specified"
        if(reason == undefined){
            this.reason = "No reason specified";}
        else{this.reason = reason;}
        this.state = false;
        // If timeCreated is not specified, set it to the current time
        if(timeCreated == undefined){
            this.timeCreated = this.timeCounter.getTime()
        }
        else{
            this.timeCreated = timeCreated;
        }
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
    new Pass("Mr. Smith", "Mrs. Jones", "John Doe", "testing", 12), 
    new Pass("Mr. Swasd", "Mrs. Jons", "Jane Doe", "other testing", 35)
];

export var inactivePasses: Pass[] = [];

// export const passes = [
//     new Pass(1, "Mr. Smith", "Mrs. Jones", "John Doe", "2020-01-01 12:00:00", true), 
//     new Pass(2, "Mr. Swasd", "Mrs. Jons", "Jane Doe", "2022-01-01 12:00:00", true)
// ];