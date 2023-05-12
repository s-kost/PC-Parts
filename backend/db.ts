const mysql2 = require("mysql2");

export class DB {
    public conn;

    constructor() {
        this.conn = mysql2.createPool({
            host: "localhost",
            port: 3306,
            user: "smnkst",
            password: "123",
            database: "pc_prts"
        }).promise()
    }
}
