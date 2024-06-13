package br.com.sgap.control;

import br.com.sgap.model.Paciente;
import br.com.sgap.service.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(value = "/paciente")
public class PacienteController {
    @Autowired
    private PacienteService pacienteService;

    @PostMapping
    public ResponseEntity<?> insert(@RequestBody Paciente cliente){
        pacienteService.insert(cliente);
        return ResponseEntity.ok().build();
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<Paciente>> findById (@PathVariable("id") String id){
        var paciente = this.pacienteService.getById(id);
        return ResponseEntity.ok(paciente);
    }

    @GetMapping
    public ResponseEntity<?> getAll(){
        var pacientes = pacienteService.list();
        return ResponseEntity.ok(pacientes);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable("id") String id){
        pacienteService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("{id}")
    public ResponseEntity<Paciente> update(@PathVariable("id") String id, @RequestBody Paciente paciente){
        pacienteService.update(id, paciente);
        return ResponseEntity.noContent().build();
    }
}
