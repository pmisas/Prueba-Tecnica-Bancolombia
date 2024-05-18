const GuionService = require('../Services/GuionService');
const guionService = new GuionService();

class GuionController {

    async createGuion(req, res) {
        try{
            const guion = await guionService.create(req.body);
            res.status(201).json(guion);
        }
        catch(error){
            res.status(400).json({error: error.message});
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

}

module.exports = new GuionController();
