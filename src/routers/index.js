const routerProcessos = require("./processoNegocioRouter");
const routerIncident = require("./criarIncidenteRouter");

module.exports = (app, express) =>{
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(routerProcessos);
    app.use(routerIncident);
}