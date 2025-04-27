const axios = require('axios');

url = "https://4matttecnologiadainformacaoltdademo3.service-now.com/api/now/table/incident"

async function createIncident(nm_proc, nm_item, nm_srvd, id_ctcd) {
    let requestBody = {
        "caller_id": "bda0693e1b42f1d034255311604bcb30",
        "short_description": "UFJF - Grupo 4 - Lásaro de Almeida Deodoro - Incidente hackathon",
        "description": `incidente criado automático - ${nm_proc} - hospedado em ${nm_item} - virtualizado por ${nm_srvd} - criticidade: ${id_ctcd}`,
        "category": "software",
        "work_notes": `Data de parada: ${new Date().toLocaleString()}`
    }
    return axios.post(url, requestBody, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${Buffer.from(`${process.env.USER_NAME}:${process.env.USER_PASSWORD}`).toString('base64')}`
        }
    })
        .then(response => {
            // console.log("Resposta", response["data"]);
            return response["data"];
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
    // return response;

}

module.exports = createIncident;