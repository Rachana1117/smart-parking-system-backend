import Admin from "../models/admin.js";

export default {
    async register(req, res) {
        try {
            const { name, phone, email, password } = req.body;
            const admin = await Admin.register(name, phone, email, password);
            res.status(201).send(admin);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    },

    async login(req, res) {
        try {
            const { email, password } = req.body;
            const admin = await Admin.login(email, password);
            if (admin.error) {
                throw Error(admin.error);
            }
            res.send(admin);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }
    }
}
