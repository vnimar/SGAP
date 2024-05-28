package br.com.sgap.model;

import jakarta.persistence.*;
import lombok.*;

@Entity(name = "funcionario")
@Table(name = "tb_funcionario")
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
