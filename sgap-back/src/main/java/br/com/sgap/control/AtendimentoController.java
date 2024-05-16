package br.com.sgap.control;

import br.com.sgap.model.Atendimento;
import br.com.sgap.service.AtendimentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping
    public ResponseEntity<?> getAll () {
        var atendimentos = atendimentoService.list();
        return ResponseEntity.ok(atendimentos);
    }
}
