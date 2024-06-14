DROP DATABASE IF EXISTS SGAP;
CREATE SCHEMA IF NOT EXISTS SGAP DEFAULT CHARSET utf8;
USE SGAP;

CREATE TABLE IF NOT EXISTS `SGAP`.`tb_cargo`(
	id INT auto_increment primary key,
    tipo VARCHAR(50) null
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `SGAP`.`tb_funcionarios`(
	id INT auto_increment primary key,
    crm VARCHAR(8) null,
    nome VARCHAR(150) not null,
    email VARCHAR(100) not null,
    telefone VARCHAR(18) not null,
    senha CHAR(60) not null,
    cargo_id int,
    foreign key (cargo_id) references tb_cargo (id)
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `SGAP`.`tb_paciente`(
	id INT auto_increment primary key,
    nome VARCHAR(150) not null,
    email VARCHAR(100) not null,
    telefone VARCHAR(18) not null
)ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `SGAP`.`tb_atendimento`(
	`id` INT AUTO_INCREMENT PRIMARY KEY,
    `horario` VARCHAR(60) NOT NULL,
    `tipo_atendimento` VARCHAR(100) NOT NULL,
    `observacao` TEXT NULL,
	paciente_id INT,
    medico_id INT,
    FOREIGN KEY (medico_id) REFERENCES tb_funcionarios (id),
    FOREIGN KEY (paciente_id) REFERENCES tb_paciente (id)
)ENGINE = InnoDB;

-- criando cargos:
INSERT INTO tb_cargo (tipo) values ('Atendente'); -- cargo 1 = Atendente
INSERT INTO tb_cargo (tipo) values ('Médico'); -- cargo 2 = Médico
SELECT * FROM tb_cargo;

-- Inserindo Médico e Funcionário e consultando todos funcionários:
INSERT INTO tb_funcionarios (nome, email, telefone, senha, cargo_id) VALUES ('Carlos Cavalcante', 'caca@gmail.com', '75102835', '$2a$10$jS4vO66K/WhqtiyG7TdO2eU06aSZOjmlIyXHKf8s90JsR39eGZ94e', '1'); -- senha 123321
INSERT INTO tb_funcionarios (crm, nome, email, telefone, senha, cargo_id) VALUES ('DF-26603', 'Henrique Lacerda', 'hl@gmail.com', '72105534', '$2a$10$/QNsu5dVIZkCp7eHB6dq2eZfAuaK6KlQaNNDma7ut7XVJ1G1HODja', '2'); -- senha 123456
SELECT * FROM tb_funcionarios;

-- Inserindo Paciente e consultando:
INSERT INTO tb_paciente (nome, email, telefone) VALUES ('Igor Miranda', 'igmimo@gmail.com', '95428361');
SELECT * FROM tb_paciente;

-- Inserindo Atendimento e consultando:
INSERT INTO `tb_atendimento` (id, horario, tipo_atendimento, observacao, paciente_id, medico_id) VALUES (UUID(), '2024-05-17 23:19:38', 'Cardiologia', null, '1', '2');
SELECT * FROM `tb_atendimento`;

SELECT tb_paciente.nome AS 'Paciente', tb_funcionarios.nome AS 'Medico',
		tb_atendimento.horario AS 'DataHora_Atendimento'
		FROM tb_atendimento JOIN  tb_paciente ON tb_atendimento.paciente_id = tb_paciente.id
		JOIN tb_funcionarios ON tb_atendimento.medico_id = tb_funcionarios.id;
