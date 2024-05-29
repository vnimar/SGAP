package br.com.sgap.service;

import br.com.sgap.model.Atendimento;
import br.com.sgap.repository.AtendimentoRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AtendimentoService {
    @Autowired
    AtendimentoRepository atendimentoRepository;

    public void insert(Atendimento data) {
        Atendimento atendimento = new Atendimento();
        atendimento.setHorario(data.getHorario());
        atendimento.setTipo(data.getTipo());
        atendimento.setObservacao(data.getObservacao());
        atendimentoRepository.save(atendimento);
    }

    public List<Atendimento> list() {
        return atendimentoRepository.findAll();
    }

    public void delete(String id) {
        atendimentoRepository.deleteById(id);
    }

    public Optional<Atendimento> getById(String id) {
        return atendimentoRepository.findById(id);
    }

    public void update(String id, Atendimento atendimento) {
        Optional<Atendimento> optionalAtendimento = atendimentoRepository.findById(id);
        if(optionalAtendimento.isEmpty()){
            throw new EntityNotFoundException("Atendimento não encontrado com o ID: " + id);
        }

        Atendimento atendimentoAtt = optionalAtendimento.get();
        atendimentoAtt.setHorario(atendimento.getHorario());
        atendimentoAtt.setTipo(atendimento.getTipo());
        atendimentoAtt.setObservacao(atendimento.getObservacao());

        atendimentoRepository.saveAndFlush(atendimentoAtt);
    }
}
