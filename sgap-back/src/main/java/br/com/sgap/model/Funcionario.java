package br.com.sgap.model;

import jakarta.persistence.*;
import lombok.*;

@Entity(name = "paciente")
@Table(name = "tb_paciente")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode(of = "id")
public class Funcionario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private String email;
    private String senha;
}
