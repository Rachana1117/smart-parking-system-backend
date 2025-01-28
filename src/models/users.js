import pool from '../config/db.js';

class User {
    static async create(name, phone, vehicle_no) {
        const id = Math.floor(Math.random() * 1000000);
        await pool.query(
            `INSERT INTO users (id, name, phone, vehicle_no) VALUES (?,?,?,?)`,
            [id, name, phone, vehicle_no]
        );
        return { id };
    }

    static async delete(id) {
        await pool.query('DELETE FROM users WHERE id = ?', [id]);
    }
}

export default User;
