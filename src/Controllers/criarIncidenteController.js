const processoNegocioModel = require("../Model/processoNegocioModel")
const createIncident = require("../Model/criarIncidentModel")


class criarIncidentController {
    async criar(id) {
        console.log(id);
        try {
            const itemConfiguracao = await processoNegocioModel.readById(id);
            const result = await createIncident(itemConfiguracao[0]["nm_proc"], itemConfiguracao[0]["nm_item"], itemConfiguracao[0]["nm_srvd"], itemConfiguracao[0]["id_ctcd"]);
            // console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new criarIncidentController();
