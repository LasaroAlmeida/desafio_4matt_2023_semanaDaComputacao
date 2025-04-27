const connection = require('./database/connection');

class processoNegocioModel {
    readAll() {
        const sql = "select * from proc_negc order by ID_PROC";

        return new Promise((resolve, reject) => connection.query(sql, (error, response) => {
            if (error) {
                console.log(error);
                reject(error);
            }
            console.log("Show 1");
            resolve(response);
        }));
    }

    readById(id) {
        console.log(id);
        let sql = `SELECT P.nm_proc,
                        P.nm_item,
                        S.nm_srvd,
                        P.id_ctcd 
                    FROM PROC_NEGC P 
                        JOIN ITEM_CONF I ON P.NM_ITEM = I.NM_ITEM 
                        JOIN SRVD S ON I.NM_SRVD = S.NM_SRVD 
                    WHERE P.ID_PROC = ?`;

        sql = sql.replace("?", id);
        console.log([id]);
        return new Promise((resolve, reject) => connection.query(sql, (error, response) => {
            if (error) {
                console.log(error);
                reject(error);
            }
            console.log("Show 2");
            resolve(response["rows"]);
        }));
    }

    updateStatusById(id, cd_stat) {
        console.log(id);
        let sql = `update proc_negc 
                    set cd_stat = :1
                where id_proc = :2`;

        sql = sql.replace(":1", cd_stat).replace(":2", id);
        return new Promise((resolve, reject) => connection.query(sql, (error, response) => {
            if (error) {
                console.log(error);
                reject(error);
            }
            console.log("Show 3");
            resolve(response);
        }));
    }
}

module.exports = new processoNegocioModel();