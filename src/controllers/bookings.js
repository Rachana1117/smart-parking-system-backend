import Booking from "../models/bookings.js";

export default {
    async bookSlot(req, res) {
        try {
            const { user_id, slot_id, time } = req.body;
            const booking = await Booking.book(user_id, slot_id, time, 'booked');

            res.send(booking);
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    },

    async cancelAllBookings(req, res) {
        try {
            const [rows] = await Booking.pool.query('SELECT id FROM bookings WHERE status = ?', ['booked']);
            rows.forEach(async row => {
                await Booking.cancelIfNotCheckedIn(row.id, 30);
            });
            res.send({ message: 'All bookings cancelled successfully' });
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    },

    async getBySlotId(req, res) {
        try {
            const { slot_id } = req.query;
            const booking = await Booking.getBySlotID(slot_id);
            res.send(booking);
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
}
