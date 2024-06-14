package br.com.sgap.model;

import br.com.sgap.model.funcionario.Funcionario;
import jakarta.persistence.*;
import lombok.*;

@Entity(name = "atendimento")
@Table(name = "tb_atendimento")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode(of = "id")
public class Atendimento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "horario", nullable = false, length = 60)
    private String horario;
    @Column(name = "tipo_atendimento", nullable = false, length = 100)
    private String tipo;
    @Column(name = "observacao", columnDefinition = "TEXT")
    private String observacao;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "paciente_id")
    private Paciente paciente;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "medico_id")
    private Funcionario medico;
}
