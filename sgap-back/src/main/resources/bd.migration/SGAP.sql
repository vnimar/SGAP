drop database if exists SGAP;
create schema if not exists SGAP default char set utf8;
use SGAP;

create table if not exists tb_cargo(
	id int auto_increment primary key,
    tipo varchar(50) null
)ENGINE = InnoDB;

create table if not exists tb_funcionarios(
	id int auto_increment primary key,
    crm varchar(8) null,
    nome varchar(150) not null,
    email varchar(100) not null,
    telefone varchar(18) not null,
    senha char(50) not null,
    cargo_id int,
    foreign key (cargo_id) references tb_cargo (id)
)ENGINE = InnoDB;

create table if not exists tb_paciente(
	id int auto_increment primary key,
    nome varchar(150) not null,
    email varchar(100) not null,
    telefone varchar(18) not null
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `SGAP`.`tb_atendimento`(
	`id` VARCHAR(255) PRIMARY KEY,
    `horario` VARCHAR(60) NOT NULL,
    `tipo_atendimento` varchar(100) NOT NULL,
    `observacao` TEXT NULL,
	paciente_id INT,
    medico_id INT,
    FOREIGN KEY (medico_id) REFERENCES tb_funcionarios (id),
    FOREIGN KEY (paciente_id) REFERENCES tb_paciente (id)
)ENGINE = InnoDB;

insert into tb_cargo (tipo) values ('Atendente');
insert into tb_cargo (tipo) values ('Medico');
select * from tb_cargo;

insert into tb_funcionarios (nome, email, telefone, senha, cargo_id) values ('Carlos Cavalcante', 'caca@gmail.com', '75102835', '123321', '1');
insert into tb_funcionarios (crm, nome, email, telefone, senha, cargo_id) values ('DF-26603', 'Henrique Lacerda', 'hl@gmail.com', '72105534', '321123', '2');
select * from tb_funcionarios;

insert into tb_paciente (nome, email, telefone) values ('Igor Miranda', 'igmimo@gmail.com', '95428361');
select * from tb_paciente;

-- Inserindo Atendimento e consultando:
INSERT INTO `tb_atendimento` (id, horario, tipo_atendimento, observacao, paciente_id, medico_id) VALUES (UUID(), '2024-05-17 23:19:38', 'Cardiologia', null, '1', '2');
SELECT * FROM `tb_atendimento`;

SELECT tb_paciente.nome AS 'Paciente', tb_funcionarios.nome AS 'Medico',
		tb_atendimento.atendimento_data AS 'Data_Atendimento', tb_atendimento.atendimento_hora AS 'Hora_Atendimento'
		FROM tb_atendimento JOIN  tb_paciente ON tb_atendimento.paciente_id = tb_paciente.id
		JOIN tb_funcionarios ON tb_atendimento.medico_id = tb_funcionarios.id;
       