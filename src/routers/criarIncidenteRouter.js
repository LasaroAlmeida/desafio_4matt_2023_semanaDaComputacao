const { Router } = require('express');
const router = Router();
const criarIncidenteController = require('../Controllers/criarIncidenteController');

// http methods

router.get("/incident/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const incident = await criarIncidenteController.criar(Number(id));
        // console.log(incident)
        res.status(201).json(incident);
    } catch (err) {
        res.status(400).json(err.message);
    }
});

    
module.exports = router;