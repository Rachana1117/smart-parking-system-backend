import pool from '../config/db.js';
import bcrypt from 'bcrypt';

class Admin {
    static async register(name, phone, email, password) {
        const id = Math.floor(Math.random() * 1000000);
        const password_hash = await bcrypt.hash(password, 10);
        await pool.query(
            `INSERT INTO admin (id, name, phone, email, password_hash) VALUES (?,?,?,?,?)`,
            [id, name, phone, email, password_hash]
        );
        return { id };
    }

    static async login(email, password) {
        const [rows] = await pool.query(`SELECT * FROM admin WHERE email = ?`, [email]);
        if (rows.length === 0) {
            return { error: 'Access denied' };
        }
        const isMatch = await bcrypt.compare(password, rows[0].password_hash);
        if (!isMatch) {
            return { error: 'Password is incorrect' };
        }
        return { id: rows[0].id };
    }
}

export default Admin;
