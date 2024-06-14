package br.com.sgap.service;

import br.com.sgap.model.Atendimento;
import br.com.sgap.model.Paciente;
import br.com.sgap.model.funcionario.Funcionario;
import br.com.sgap.repository.AtendimentoRepository;
import br.com.sgap.repository.FuncionarioRepository;
import br.com.sgap.repository.PacienteRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AtendimentoService {
    @Autowired
    AtendimentoRepository atendimentoRepository;
    @Autowired
    FuncionarioRepository medicoRepository;
    @Autowired
    PacienteRepository pacienteRepository;

    public void insert(Atendimento data) {
        Funcionario medico = medicoRepository.findById(data.getMedico().getId())
                .orElseThrow(() -> new EntityNotFoundException("Médico não encontrado com o ID: " + data.getMedico().getId()));

        Paciente paciente = pacienteRepository.findById(data.getPaciente().getId())
                .orElseThrow(() -> new EntityNotFoundException("Paciente não encontrado com o ID: " + data.getPaciente().getId()));

        Atendimento atendimento = new Atendimento();
        atendimento.setHorario(data.getHorario());
        atendimento.setTipo(data.getTipo());
        atendimento.setObservacao(data.getObservacao());
        atendimento.setMedico(medico);
        atendimento.setPaciente(paciente);

        atendimentoRepository.save(atendimento);
    }

    public List<Atendimento> list() {
        return atendimentoRepository.findAll();
    }

    public void delete(Integer id) {
        atendimentoRepository.deleteById(id);
    }

    public Atendimento getById(Integer id) {
        return atendimentoRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Atendimento não encontrado com o ID: " + id));
    }

    public void update(Integer id, Atendimento atendimento) {
        Optional<Atendimento> optionalAtendimento = atendimentoRepository.findById(id);
        if (optionalAtendimento.isEmpty()) {
            throw new EntityNotFoundException("Atendimento não encontrado com o ID: " + id);
        }

        Atendimento existingAtendimento = optionalAtendimento.get();
        existingAtendimento.setHorario(atendimento.getHorario());
        existingAtendimento.setTipo(atendimento.getTipo());
        existingAtendimento.setObservacao(atendimento.getObservacao());

        atendimentoRepository.save(existingAtendimento);
    }
}
