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

create table if not exists tb_atendimento(
	id int auto_increment primary key,
    `horario` VARCHAR(60) not null,
    paciente_id int,
    medico_id int,
    tipo varchar(100) not null,
    observacao text not null,
    foreign key (medico_id) references tb_funcionarios (id),
    foreign key (paciente_id) references tb_paciente (id)
)ENGINE = InnoDB;

insert into tb_cargo (tipo) values ('Atendente');
insert into tb_cargo (tipo) values ('Medico');
select * from tb_cargo;

insert into tb_funcionarios (nome, email, telefone, senha, cargo_id) values ('Carlos Cavalcante', 'caca@gmail.com', '75102835', '123321', '1');
insert into tb_funcionarios (crm, nome, email, telefone, senha, cargo_id) values ('DF-26603', 'Henrique Lacerda', 'hl@gmail.com', '72105534', '321123', '2');
select * from tb_funcionarios;

insert into tb_paciente (nome, email, telefone) values ('Igor Miranda', 'igmimo@gmail.com', '95428361');
select * from tb_paciente;

-- insert into tb_atendimento (atendimento_data, paciente_id, medico_id) values ('2024-04-16', '09:15', '1', '2');
select * from tb_atendimento;

SELECT tb_paciente.nome AS 'Paciente', tb_funcionarios.nome AS 'Medico', 
		tb_atendimento.atendimento_data AS 'Data_Atendimento', tb_atendimento.atendimento_hora AS 'Hora_Atendimento'
		FROM tb_atendimento JOIN  tb_paciente ON tb_atendimento.paciente_id = tb_paciente.id
		JOIN tb_funcionarios ON tb_atendimento.medico_id = tb_funcionarios.id;