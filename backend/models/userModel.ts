import {DB} from "../db"
export class UserModel {
    private conn;

    constructor() {
        this.conn = new DB().conn;
    }

    async getUsers(id: number) {
        const [rows] = await this.conn.query("SELECT pcs_username, pcs_firstname, pcs_lastname FROM pcs_users WHERE pcs_id = ?", [id])
        return rows;
    }
}
