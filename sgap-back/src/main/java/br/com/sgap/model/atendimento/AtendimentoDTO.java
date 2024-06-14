package br.com.sgap.model.atendimento;

import br.com.sgap.model.Paciente;
import br.com.sgap.model.funcionario.Funcionario;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AtendimentoDTO {

    private Integer id;
    private String horario;
    private String tipo;
    private String observacao;
    private Funcionario medico;
    private Paciente paciente;

    // Construtor, getters e setters
    public AtendimentoDTO(Atendimento atendimento) {
        this.id = atendimento.getId();
        this.horario = atendimento.getHorario();
        this.tipo = atendimento.getTipo();
        this.observacao = atendimento.getObservacao();
        this.medico = atendimento.getMedico();
        this.paciente = atendimento.getPaciente();
    }
}
