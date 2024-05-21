const GuionService = require('../Services/GuionService');
const guionService = new GuionService();

class GuionController {

    async createGuion(req, res) {
        try {
            const guionistaId = req.user.userId; 
            const guionData = {
                ...req.body,
                GuionistaId: guionistaId
            };
            const guion = await guionService.create(guionData);
            res.status(201).json(guion);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    } 

    async findGuionById(req, res) {
        try {
            const guionId = req.params.id;
            const guion = await guionService.findGuionById(guionId);
            if (!guion) {
                res.status(404).json({ error: 'Guion no encontrado' });
            } else {
                res.status(200).json(guion);
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAllGuiones(req, res) {
        try{
            const guiones = await guionService.findAll(req.body);
            res.status(200).json(guiones);
        }
        catch(error){
            res.status(400).json({error: error.message});
        }
    } 

    async updateGuion(req, res) {
        try {
            const guionId = req.params.id;
            const guion = await guionService.updateGuion(guionId, req.body);
            res.status(200).json(guion);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteGuion(req, res) {
        try {
            const guionId = req.params.id;
            await guionService.deleteGuion(guionId);
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async findAllGuionesByGuionista(req, res) {
        try {
            const guionistaId = req.user.userId;
            console.log(req.body)
            const guionData = {
                ...req.body,
                GuionistaId: guionistaId
            };
            const guiones = await guionService.findAllByGuionistaId(guionistaId);
            res.status(200).json(guiones);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

}

module.exports = new GuionController();
