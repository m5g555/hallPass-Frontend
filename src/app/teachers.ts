export class Teacher{
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
    new Teacher("Mrs. Jons", "jons@gmail.com"),
    new Teacher('Testing Teacher 1', "testing@test"),
    new Teacher('Testing Teacher 2', "testing2@test")
];

export const teacherNames: String[] = teachers.map(teacher => teacher.name);