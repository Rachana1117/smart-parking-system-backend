import pool from '../config/db.js';

export class Slot {

    static async getFloors(mall_id) {
        const [rows] = await pool.query('SELECT DISTINCT floor_no FROM slots WHERE mall_id = ?', [mall_id]);
        return rows.map(row => row.floor_no);
    }

    static async getSlotsByFloor(mall_id, floor_no) {
        const [rows] = await pool.query('SELECT id, is_available, slot_no FROM slots WHERE mall_id = ? AND floor_no = ?', [mall_id, floor_no]);
        return rows;
    }

    static async getUserDetailsBySlotId(slot_id) {
        const [rows] = await pool.query('SELECT users.name, users.phone, users.vehicle_no FROM bookings JOIN users ON bookings.user_id = users.id WHERE bookings.slot_id = ?', [slot_id]);
        return rows;
    }
    
    static async create(mall_id, floor_no, slot_no, is_available) {
        const id = Math.floor(Math.random() * 1000000);
        await pool.query(
            `INSERT INTO slots (id, mall_id, floor_no, slot_no, is_available) VALUES (?,?,?,?,?)`,
            [id, mall_id, floor_no, slot_no, is_available]
        );
        return { id };
    }

    static async update(id, is_available) {
        await pool.query('UPDATE slots SET is_available = ? WHERE id = ?', [is_available, id]);
    }
}

export default Slot;
