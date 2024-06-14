package br.com.sgap.control;

import br.com.sgap.model.Atendimento;
import br.com.sgap.service.AtendimentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/atendimento")
public class AtendimentoController {

    @Autowired
    private AtendimentoService atendimentoService;

    @PostMapping
    public ResponseEntity<?> insert(@RequestBody Atendimento atendimento) {
        atendimentoService.insert(atendimento);
        return ResponseEntity.ok().build();
    }

    @GetMapping("{id}")
    public ResponseEntity<Atendimento> findById(@PathVariable("id") Integer id) {
        Atendimento atendimento = atendimentoService.getById(id);
        return ResponseEntity.ok(atendimento);
    }

    @GetMapping
    public ResponseEntity<List<Atendimento>> getAll() {
        List<Atendimento> atendimentos = atendimentoService.list();
        return ResponseEntity.ok(atendimentos);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id) {
        atendimentoService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("{id}")
    public ResponseEntity<?> update(@PathVariable("id") Integer id, @RequestBody Atendimento atendimento) {
        atendimentoService.update(id, atendimento);
        return ResponseEntity.noContent().build();
    }
}
