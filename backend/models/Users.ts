class User {
    id?: number;
    first_name: string;
    last_name: string;

    constructor(first_name: string, last_name:string) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
}