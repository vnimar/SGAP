package br.com.sgap.service;

import br.com.sgap.model.atendimento.Atendimento;
import br.com.sgap.model.Paciente;
import br.com.sgap.model.atendimento.AtendimentoDTO;
import br.com.sgap.model.funcionario.Funcionario;
import br.com.sgap.repository.AtendimentoRepository;
import br.com.sgap.repository.FuncionarioRepository;
import br.com.sgap.repository.PacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class AtendimentoService {
    @Autowired
    private AtendimentoRepository repository;
    @Autowired
    private FuncionarioRepository funcionarioRepository;
    @Autowired
    private PacienteRepository pacienteRepository;

    public void registerAtendimento(Atendimento novoAtendimento) {
        Funcionario medico = funcionarioRepository.findById(novoAtendimento.getMedico().getId())
                .orElseThrow(() -> new IllegalArgumentException("Médico não encontrado"));
        Paciente paciente = pacienteRepository.findById(novoAtendimento.getPaciente().getId())
                .orElseThrow(() -> new IllegalArgumentException("Paciente não encontrado"));

        Atendimento atendimento = new Atendimento();
        atendimento.setHorario(novoAtendimento.getHorario());
        atendimento.setTipo(novoAtendimento.getTipo());
        atendimento.setObservacao(novoAtendimento.getObservacao());
        atendimento.setMedico(medico);
        atendimento.setPaciente(paciente);
        repository.save(atendimento);
    }

    public void updateAtendimento(Integer id, Atendimento atendimento) {
        Optional<Atendimento> atendimentoEncontrado = repository.findById(id);
        if (atendimentoEncontrado.isPresent()) {
            Funcionario medico = funcionarioRepository.findById(atendimento.getMedico().getId())
                    .orElseThrow(() -> new IllegalArgumentException("Médico não encontrado"));
            Paciente paciente = pacienteRepository.findById(atendimento.getPaciente().getId())
                    .orElseThrow(() -> new IllegalArgumentException("Paciente não encontrado"));

            Atendimento atendimentoAtualizado = atendimentoEncontrado.get();
            repository.saveAndFlush(atendimentoAtualizado);
        }
    }

    public List<Atendimento> listAtendimentos() {
        return repository.findAll();
    }

    public Optional<Atendimento> findById(Integer id) {
        return repository.findById(id);
    }

    public void deleteAtendimento(Integer id) {
        repository.deleteById(id);
    }
}
