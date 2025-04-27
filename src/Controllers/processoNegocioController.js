const processoNegocioModel = require("../Model/processoNegocioModel")


class processoNegocioController {
    buscar() {
        return processoNegocioModel.readAll();
    }
    alterar(id, cd_stat) {
        console.log(id, cd_stat);
        return processoNegocioModel.updateStatusById(id, cd_stat);
    }
}

module.exports = new processoNegocioController();