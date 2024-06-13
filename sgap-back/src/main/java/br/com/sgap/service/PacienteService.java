package br.com.sgap.service;

import br.com.sgap.model.Paciente;
import br.com.sgap.repository.PacienteRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PacienteService {
    @Autowired
    PacienteRepository pacienteRepository;

    public void insert(Paciente cliente){
        Paciente paciente = new Paciente();
        paciente.setNome(cliente.getNome());
        paciente.setEmail(cliente.getEmail());
        paciente.setTelefone(cliente.getTelefone());
        pacienteRepository.save(paciente);
    }

    public List<Paciente> list(){
        return  pacienteRepository.findAll();
    }

    public void delete(Integer id){
        pacienteRepository.deleteById(id);
    }

    public Optional<Paciente> getById(Integer id){
        return pacienteRepository.findById(id);
    }

    public void update(Integer id, Paciente paciente){
        Optional<Paciente> optionalPaciente = pacienteRepository.findById(id);
        if(optionalPaciente.isEmpty()){
            throw new EntityNotFoundException("Paciente não encontrado com o ID: " + id);
        }

        Paciente pacienteAtt = optionalPaciente.get();
        pacienteAtt.setNome(paciente.getNome());
        pacienteAtt.setTelefone(paciente.getTelefone());
        pacienteAtt.setEmail(paciente.getEmail());

        pacienteRepository.saveAndFlush(pacienteAtt);
    }
}
