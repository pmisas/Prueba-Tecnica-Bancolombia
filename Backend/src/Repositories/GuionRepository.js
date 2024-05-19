    const Guion = require('../db/Models/guionModel')

    class GuionRepository {

        async createGuion(data){
            return await Guion.create(data);
        }

        async findGuionById(id) {
            return await Guion.findByPk(id);
        }

        async findAllGuion() {
            return await Guion.findAll();
        }

        async updateGuion(id, data) {
            const guion = await this.findGuionById(id);
            if (!guion) throw new Error('Guion no encontrado');
            return await guion.update(data);
        }
    
        async deleteGuion(id) {
            const guion = await this.findGuionById(id);
            if (!guion) throw new Error('Guion no encontrado');
            return await guion.destroy();
        }

    }

    module.exports = GuionRepository;
