export class Teacher{
    id: number;
    name: string;
    email: string;
    
    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }
}

export const teachers: Teacher[] = [
    new Teacher("Mr. Smith", "smith@gmail.com"),
    new Teacher("Mrs. Jones", "jones@gmail.com"),
    new Teacher("Mr. Swasd", "swasd@gmail.com"),
    new Teacher("Mrs. Jons", "jons@gmail.com")
];

export const teacherNames: String[] = teachers.map(teacher => teacher.name);