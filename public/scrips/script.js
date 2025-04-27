const table = document.getElementsByClassName("table")[0];

function getTable() {
    fetch('http://localhost:3000/hackthon', {
        method: 'GET'
    })
        .then(res => res.json())
        .then(data => {
            createTable(data["values"]);
            // console.log(data);
        })
        .catch(err => {
            console.log(err);
        });
}



function createTable(datas) {
    let cols = ["nm_item", "nm_proc", "cd_stat"];
    datas.forEach(item => {
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        let td = document.createElement('td');
        th.scope = 'row';
        th.innerText = item["id_proc"];
        th.id = item["id_proc"];
        let classColor = ""
        if (item["cd_stat"] == "0") {
            classColor = "error";
        }

        tr.appendChild(th);

        const aMS = document.createElement("a");
        aMS.innerText = "MS";
        const aRI = document.createElement("a");
        aRI.innerText = "RI";
        aMS.classList.add("btn", "btn-danger", "w-25", "m-2");
        aMS.dataset.id = item["id_proc"];
        aMS.dataset.cd_stat = item["cd_stat"];
        aRI.dataset.id = item["id_proc"];
        aRI.dataset.cd_stat = item["cd_stat"];
        aRI.dataset = { id: item["id_proc"], status: item["cd_stat"] }
        aRI.classList.add("btn", "btn-success", "w-25");

        cols.forEach(col => {
            let aux = item[col];
            if (col == "cd_stat") {
                if (item["cd_stat"] == "0") {
                    aux = "Parado";
                    th.classList.add("error");
                    aMS.classList.add("active");
                    aRI.addEventListener("click", reportarIncidente);
                }
                else {
                    aRI.classList.add("active");
                    aMS.addEventListener("click", atualizarStatus);
                    aux = "Funcionando";
                }
            }
            if (classColor != "")
                td.classList.add(classColor);
            td.innerText = aux;
            tr.appendChild(td);
            td = document.createElement('td');
        });
        td.appendChild(aMS);
        td.appendChild(aRI);
        tr.appendChild(td);
        table.getElementsByTagName("tbody")[0].appendChild(tr);
    });
}

function atualizarStatus(event) {
    let id = event.target.dataset.id;
    let cd_stat = event.target.dataset.cd_stat;
    console.log(id, cd_stat);

    fetch('http://localhost:3000/hackthon/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        }
        ,
        body: JSON.stringify({ "cd_stat": (cd_stat == "1") ? "0" : "1" })
    })
        .then(res => res.json())
        .then(data => {
          window.location.reload();
        })
        .catch(err => {
            console.log(err);
        });
}

function reportarIncidente(event) {
    let id = event.target.dataset.id;
    fetch('http://localhost:3000/incident/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
        }
    })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          event.target.classList.add("active");
          event.target.removeEventListener('click', reportarIncidente);
          window.alert("Incidente criado, o número é: " + data["result"]["number"]);
        })
        .catch(err => {
            console.log(err);
        });

}


getTable();

