import pool from '../config/db.js';

class Mall {
    static async getAllLocations() {
        const [rows] = await pool.query('SELECT DISTINCT location FROM malls');
        return rows.map(row => row.location);
    }

    static async getAllByLocation(location) {
        const [rows] = await pool.query('SELECT id, name FROM malls WHERE location = ?', [location]);
        return rows;
    }

    static async create(admin_id, name, location) {
        const id = Math.floor(Math.random() * 1000000);
        await pool.query(
            `INSERT INTO malls (id, admin_id, name, location) VALUES (?,?,?,?)`,
            [id, admin_id, name, location]
        );
        return { id };
    }

    static async getMallByAdmin(id) {
        const [rows] = await pool.query('SELECT id FROM malls WHERE admin_id = ?', [id]);
        return rows;
    }
}

export default Mall;
