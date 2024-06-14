package br.com.sgap.control;

import br.com.sgap.infra.security.TokenService;
import br.com.sgap.model.funcionario.AuthDTO;
import br.com.sgap.model.funcionario.Funcionario;
import br.com.sgap.model.funcionario.LoginResponseDTO;
import br.com.sgap.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/auth")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenService tokenService;
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> verifyLogin(@RequestBody @Valid AuthDTO funcionario) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(funcionario.getEmail(), funcionario.getSenha());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        var accessToken = tokenService.generateToken((Funcionario) auth.getPrincipal());
        return ResponseEntity.ok(new LoginResponseDTO(accessToken));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerFuncionario(@RequestBody @Valid Funcionario funcionarioNovo) {
        try {
            authService.cadastrar(funcionarioNovo);
            return ResponseEntity.ok().build();
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> editFuncionario(@PathVariable("id") Integer id, @RequestBody @Valid Funcionario funcionario) {
            authService.editar(id, funcionario);
            return ResponseEntity.ok().build();

    }

    @GetMapping("/list")
    public ResponseEntity<?> listFuncionarios() {
        var listaUsuarios = authService.listFuncionarios();
        return ResponseEntity.ok(listaUsuarios);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getFuncionarioById(@PathVariable("id") Integer id) {
        var usuario = authService.findById(id);
        return ResponseEntity.ok(usuario);
    }

    @GetMapping("/me")
    public ResponseEntity<?> getUsuarioLogado() {
        try {
            Funcionario usuarioLogado = authService.getUsuarioLogado();
            return ResponseEntity.ok(usuarioLogado);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erro ao obter usuário logado: " + e.getMessage());
        }
    }
}
