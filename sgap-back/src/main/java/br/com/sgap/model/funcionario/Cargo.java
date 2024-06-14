package br.com.sgap.model.funcionario;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity(name = "cargo")
@Table(name = "tb_cargo")
@Data
public class Cargo {
    @Id
    private Integer id;
    private String tipo;
}
