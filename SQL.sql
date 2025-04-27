
CREATE DATABASE EMP01;
--SERVIDORES
CREATE TABLE SRVD ( 
	NM_SRVD VARCHAR(10) PRIMARY KEY, -- NOME_SERVIDOR
	NM_TIPO VARCHAR(30) NOT NULL --NOME_TIPO
)

CREATE TABLE ITEM_CONF (
	NM_ITEM VARCHAR(10) NOT NULL PRIMARY KEY,
	NM_SRVD VARCHAR(10) REFERENCES SRVD(NM_SRVD),
	NM_TIPO VARCHAR(30) NOT NULL
)

CREATE TABLE PROC_NEGC(
	ID_PROC SERIAL PRIMARY KEY,
	NM_ITEM VARCHAR(10) REFERENCES ITEM_CONF(NM_ITEM),
	NM_PROC VARCHAR(60) NOT NULL,
	CD_STAT VARCHAR(5) NOT NULL,
	NM_AR_RESP VARCHAR(30) NOT NULL,
	ID_CTCD INT NOT NULL
);



INSERT INTO SRVD (NM_SRVD, NM_TIPO) VALUES ('AWS0001', 'Servidor');
INSERT INTO ITEM_CONF (NM_ITEM, NM_SRVD, NM_TIPO) VALUES ('VM00001', 'AWS0001', 'Virtual Machine');
INSERT INTO ITEM_CONF (NM_ITEM, NM_SRVD, NM_TIPO) VALUES ('VM00002', 'AWS0001', 'Virtual Machine');
INSERT INTO ITEM_CONF (NM_ITEM, NM_SRVD, NM_TIPO) VALUES ('VM00003', 'AWS0001', 'Virtual Machine');
INSERT INTO ITEM_CONF (NM_ITEM, NM_SRVD, NM_TIPO) VALUES ('VM00004', 'AWS0001', 'Virtual Machine');
INSERT INTO ITEM_CONF (NM_ITEM, NM_SRVD, NM_TIPO) VALUES ('VM00005', 'AWS0001', 'Virtual Machine');
INSERT INTO ITEM_CONF (NM_ITEM, NM_SRVD, NM_TIPO) VALUES ('VM00006', 'AWS0001', 'Virtual Machine');
INSERT INTO ITEM_CONF (NM_ITEM, NM_SRVD, NM_TIPO) VALUES ('VM00007', 'AWS0001', 'Virtual Machine');
INSERT INTO ITEM_CONF (NM_ITEM, NM_SRVD, NM_TIPO) VALUES ('VM00008', 'AWS0001', 'Virtual Machine');


select * from item_conf i join srvd s on i.nm_srvd = s.nm_srvd

insert into proc_negc (nm_item, nm_proc, cd_stat, nm_ar_resp, id_ctcd) values ('VM00001','Recebimento de Pedidos', '1', 'Vendas', 1);
insert into proc_negc (nm_item, nm_proc, cd_stat, nm_ar_resp, id_ctcd) values ('VM00002','Processar Pagamentos', '0', 'Financeiro', 1);
insert into proc_negc (nm_item, nm_proc, cd_stat, nm_ar_resp, id_ctcd) values ('VM00003','Gerenciamento de Estoque', '1', 'Almoxarifado', 3);
insert into proc_negc (nm_item, nm_proc, cd_stat, nm_ar_resp, id_ctcd) values ('VM00004','Emissão de Faturas', '1', 'Financeiro', 1);
insert into proc_negc (nm_item, nm_proc, cd_stat, nm_ar_resp, id_ctcd) values ('VM00003','Suporte ao cliente', '0', 'Vendas', 1);
insert into proc_negc (nm_item, nm_proc, cd_stat, nm_ar_resp, id_ctcd) values ('VM00008','Backup diário', '1', 'Tecnologia da Informação', 1);
insert into proc_negc (nm_item, nm_proc, cd_stat, nm_ar_resp, id_ctcd) values ('VM00005','Monitoramento Segurança de Rede', '1', 'Seguranca da Informacao', 1);
insert into proc_negc (nm_item, nm_proc, cd_stat, nm_ar_resp, id_ctcd) values ('VM00006','Cadastro de Funcionário', '0', 'RH', 2);
insert into proc_negc (nm_item, nm_proc, cd_stat, nm_ar_resp, id_ctcd) values ('VM00001','Registro de ponto', '1', 'Sistemas de Informacao', 1);
insert into proc_negc (nm_item, nm_proc, cd_stat, nm_ar_resp, id_ctcd) values ('VM00007','Consulta de Benefícios', '0', 'Sistemas de Informacao', 3);
insert into proc_negc (nm_item, nm_proc, cd_stat, nm_ar_resp, id_ctcd) values ('VM00006','Programacao de Ferias', '1', 'RH', 3);
insert into proc_negc (nm_item, nm_proc, cd_stat, nm_ar_resp, id_ctcd) values ('VM00002','Noticias da Empresa', '1', 'Comercial e Marketing', 3);
insert into proc_negc (nm_item, nm_proc, cd_stat, nm_ar_resp, id_ctcd) values ('VM00008','Biblioteca Empresarial', '1', 'RH', 3);
insert into proc_negc (nm_item, nm_proc, cd_stat, nm_ar_resp, id_ctcd) values ('VM00003','Cadastro de Ativos', '0', 'Almoxarifado', 3);
insert into proc_negc (nm_item, nm_proc, cd_stat, nm_ar_resp, id_ctcd) values ('VM00001','Registro de Tarefas', '1', 'Sistemas de Informacao', 1);
insert into proc_negc (nm_item, nm_proc, cd_stat, nm_ar_resp, id_ctcd) values ('VM00005','Gerador de relatórios', '1', 'Vendas', 1);
insert into proc_negc (nm_item, nm_proc, cd_stat, nm_ar_resp, id_ctcd) values ('VM00001','Gerador folha de pagamento', '0', 'Financeiro', 1);
insert into proc_negc (nm_item, nm_proc, cd_stat, nm_ar_resp, id_ctcd) values ('VM00001','Cadastro de Documentos', '1', 'RH', 3);
select * from proc_negc

update proc_negc 
set cd_stat = '1'
where id_proc in (9, 10, 11, 13,16);

select * from proc_negc where nm_item = 'VM00008'

select * from item_conf

