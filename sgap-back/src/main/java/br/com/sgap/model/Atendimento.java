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
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
    @Column(name = "horario", nullable = false)
    private String horario;
    @Column(name = "tipo", nullable = false, length = 100)
    private String tipo;
    @Column(name = "observacao", nullable = false, columnDefinition = "TEXT")
    private String observacao;
//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "paciente_id")
//    private Integer paciente_id;
//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "medico_id")
//    private Integer medico_id;
}