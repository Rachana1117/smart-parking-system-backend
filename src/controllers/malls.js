import Mall from '../models/malls.js';

export default {
    async getAll(req, res) {
        try {
            const malls = await Mall.getAllLocations();
            res.send(malls);
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    },

    async getMallByAdmin(req, res) {
        try {
            const { id } = req.query;
            const malls = await Mall.getMallByAdmin(id);
            res.send(malls);
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    },

    async getAllByLocation(req, res) {
        try {
            const { location } = req.query;
            const malls = await Mall.getAllByLocation(location);
            res.send(malls);
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    },

    async create(req, res) {
        try {
            const { admin_id, name, location } = req.body;
            const mall = await Mall.create(admin_id, name, location);
            res.status(201).send(mall);
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    },
}
