
export interface Pass{
    id: number;
    sendingTeacher: string;
    receivingTeacher: string;
    studentName: string;
    timeCreated: string;
    active: boolean;
}

export const passes = [
    {
        id: 1,
        sendingTeacher: "Mr. Smith",
        receivingTeacher: "Mrs. Jones",
        studentName: "John Doe",
        timeCreated: "2020-01-01 12:00:00",
        active: true
    },
    {
        id: 2,
        sendingTeacher: "Mr. Swasd",
        receivingTeacher: "Mrs. Jons",
        studentName: "Jane Doe",
        timeCreated: "2022-01-01 12:00:00",
        active: true
    }];