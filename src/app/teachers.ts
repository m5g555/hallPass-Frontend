export class Teacher{
    id: number;
    name: string;
    email: string;
    
    constructor(id: number, name: string, email: string){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

export const teachers: Teacher[] = [
    new Teacher(1, "Mr. Smith", "smith@gmail.com"),
    new Teacher(2, "Mrs. Jones", "jones@gmail.com"),
    new Teacher(3, "Mr. Swasd", "swasd@gmail.com"),
    new Teacher(4, "Mrs. Jons", "jons@gmail.com")
];

export const teacherNames: String[] = teachers.map(teacher => teacher.name);