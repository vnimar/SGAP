package br.com.sgap.control;

import br.com.sgap.model.atendimento.Atendimento;
import br.com.sgap.model.atendimento.AtendimentoDTO;
import br.com.sgap.service.AtendimentoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/atendimento")
public class AtendimentoController {

    @Autowired
    private AtendimentoService atendimentoService;

    @PostMapping
    public ResponseEntity<?> insert(@RequestBody @Valid Atendimento atendimento) {
        atendimentoService.registerAtendimento(atendimento);
        return ResponseEntity.ok().build();
    }

    @GetMapping("{id}")
    public ResponseEntity<Optional<Atendimento>> findById(@PathVariable("id") Integer id) {
        Optional<Atendimento> atendimento = atendimentoService.findById(id);
        return ResponseEntity.ok(atendimento);
    }

    @GetMapping
    public ResponseEntity<List<Atendimento>> getAll() {
        List<Atendimento> atendimentos = atendimentoService.listAtendimentos();
        return ResponseEntity.ok(atendimentos);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id) {
        atendimentoService.deleteAtendimento(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("{id}")
    public ResponseEntity<?> update(@PathVariable("id") Integer id, @RequestBody Atendimento atendimento) {
        atendimentoService.updateAtendimento(id, atendimento);
        return ResponseEntity.noContent().build();
    }
}
