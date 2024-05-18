package br.com.sgap.service;

import br.com.sgap.model.Atendimento;
import br.com.sgap.repository.AtendimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AtendimentoService {
    @Autowired
    AtendimentoRepository atendimentoRepository;

    public Atendimento insert(Atendimento data) {
        Atendimento atendimento = new Atendimento();
        atendimento.setHorario(data.getHorario());
        atendimento.setTipo(data.getTipo());
        atendimento.setObservacao(data.getObservacao());
        return atendimentoRepository.save(atendimento);
    }

    public List<Atendimento> list() {
        List<Atendimento> atendimentos = atendimentoRepository.findAll();
        return atendimentos;
    }

    public void delete(Integer id) {
        atendimentoRepository.deleteById(id);
    }

    public Optional<Atendimento> getById(Integer id) {
        var atendimento = atendimentoRepository.getReferenceById(id);
        return Optional.of(atendimento);
    }
}
