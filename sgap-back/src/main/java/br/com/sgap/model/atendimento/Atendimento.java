package br.com.sgap.model.atendimento;

import br.com.sgap.model.Paciente;
import br.com.sgap.model.funcionario.Funcionario;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Paciente paciente;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "medico_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Funcionario medico;
}
