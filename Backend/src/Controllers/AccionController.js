const AccionService = require('../services/AccionService');
const accionService = new AccionService();

class AccionController {
    
    async createAccion(req, res) {
        try {
            const accion = await accionService.createAccion(req.body);
            res.status(201).json(accion);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAccionById(req, res) {
        try {
            const accionId = req.params.id;
            const accion = await accionService.findAccionById(accionId);
            if (!accion) {
                res.status(404).json({ error: 'Accion no encontrada' });
            } else {
                res.status(200).json(accion);
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAllAcciones(req, res) {
        try {
            const acciones = await accionService.findAllAcciones();
            res.status(200).json(acciones);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateAccion(req, res) {
        try {
            const accionId = req.params.id;
            const accion = await accionService.updateAccion(accionId, req.body);
            res.status(200).json(accion);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteAccion(req, res) {
        try {
            const accionId = req.params.id;
            await accionService.deleteAccion(accionId);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new AccionController();
