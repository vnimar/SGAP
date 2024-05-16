package br.com.sgap.control;

import br.com.sgap.model.Atendimento;
import br.com.sgap.service.AtendimentoService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/atendimento")
public class AtendimentoControler {
    @Autowired
    AtendimentoService atendimentoService;

    @PostMapping
    public ResponseEntity<Atendimento> insert(@RequestBody Atendimento data) {
        atendimentoService.insert(data);
        return ResponseEntity.ok().build();
    }
}
