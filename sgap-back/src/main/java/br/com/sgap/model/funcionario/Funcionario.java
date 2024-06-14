package br.com.sgap.model.funcionario;

import jakarta.persistence.*;
import lombok.*;

@Entity(name = "funcionario")
@Table(name = "tb_funcionarios")
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

    // construtor para o Funcionario sem ID
    public Funcionario(String nome, String email, String encryptedPassword) {
    }
}
