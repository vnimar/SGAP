package br.com.sgap.control;

import br.com.sgap.model.Atendimento;
import br.com.sgap.service.AtendimentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(value = "/atendimento")
public class AtendimentoController {
    @Autowired
    AtendimentoService atendimentoService;

    @PostMapping
    public ResponseEntity<?> insert(@RequestBody Atendimento data) {
        atendimentoService.insert(data);
        return ResponseEntity.ok().build();
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<Atendimento>> findById (@PathVariable("id") Integer id){
        var atendimento = this.atendimentoService.getById(id);
        return ResponseEntity.ok(atendimento);
    }

    @GetMapping
    public ResponseEntity<?> getAll() {
        var atendimentos = atendimentoService.list();
        return ResponseEntity.ok(atendimentos);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id) {
        atendimentoService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
