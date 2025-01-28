import pool from '../config/db.js';

class Booking {
    static async book(userId, slotId, time, status) {
        const id = Math.floor(Math.random() * 1000000);
        await pool.query(
            `INSERT INTO bookings (id, user_id, slot_id, time, status) VALUES (?,?,?,?,?)`,
            [id, userId, slotId, time, status]
        );
        return { id };
    }

    static async cancelIfNotCheckedIn(bookingId, gracePeriodMinutes) {
        try {
            const [rows] = await pool.query(
                'SELECT time, user_id FROM bookings WHERE id = ?',
                [bookingId]
            );
            if (rows.length === 0) {
                throw new Error('Booking not found');
            }

            const bookingTime = new Date(rows[0].time);
            const currentTime = new Date();
            const gracePeriod = gracePeriodMinutes * 60 * 1000;

            if (currentTime - bookingTime > gracePeriod) {
                await pool.query('DELETE FROM bookings WHERE id = ?', [bookingId]);
                const userId = rows[0].user_id;
                await pool.query('DELETE FROM users WHERE id = ?', [userId]);
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    static async getBySlotID(slotID) {
        const [row] = await pool.query('SELECT id FROM bookings WHERE slot_id = ?', [slotID]);
        return row;
    }
}

export default Booking;
