class User {
    id?: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;

    constructor(first_name: string, last_name:string, username: string, email: string) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.email = email;
    }
}