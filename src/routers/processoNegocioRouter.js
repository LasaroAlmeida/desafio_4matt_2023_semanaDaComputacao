const { Router } = require('express');
const router = Router();
const processoNegocioController = require('../Controllers/processoNegocioController');

// http methods

router.get("/hackthon", (req, res) => {
    const itensConfiguracao = processoNegocioController.buscar();
    itensConfiguracao.then(itensConfiguracao => res.status(200)
        .json({ "values": itensConfiguracao["rows"] }))
        .catch(error => res.status(400).json(error.message));
});


router.put("/hackthon/:id", (req, res) => {
    const {id} = req.params;
    const cd_stat = req.body.cd_stat;
    console.log(req.body);
    const response = processoNegocioController.alterar(Number(id), cd_stat);
    res.send(response);
});


module.exports = router;