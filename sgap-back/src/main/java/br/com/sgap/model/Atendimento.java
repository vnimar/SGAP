package br.com.sgap.model;

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
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    @Column(name = "horario", nullable = false, length = 60)
    private String horario;
    @Column(name = "tipo_atendimento", nullable = false, length = 100)
    private String tipo;
    @Column(name = "observacao", columnDefinition = "TEXT")
    private String observacao;
//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "paciente_id")
//    private Integer paciente_id;
//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "medico_id")
//    private Integer medico_id;
}
