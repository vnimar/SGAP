package br.com.sgap.control;

import br.com.sgap.infra.security.TokenService;
import br.com.sgap.model.funcionario.Funcionario;
import br.com.sgap.model.funcionario.LoginResponseDTO;
import br.com.sgap.repository.FuncionarioRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/auth")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenService tokenService;
    @Autowired
    private FuncionarioRepository funcionarioRepository;

    @PostMapping("/login")
    public ResponseEntity<?> verifyLogin(@RequestBody @Valid Funcionario funcionario) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(funcionario.getEmail(), funcionario.getSenha());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        var accessToken = tokenService.generateToken((Funcionario) auth.getPrincipal());
        return ResponseEntity.ok(new LoginResponseDTO(accessToken));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody @Valid Funcionario funcionarioNovo) {
        if(this.funcionarioRepository.findByEmail(funcionarioNovo.getEmail()) != null){
            return ResponseEntity.badRequest().build();
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(funcionarioNovo.getSenha());
        Funcionario novoUsuario = new Funcionario(funcionarioNovo.getNome(), funcionarioNovo.getEmail(), encryptedPassword);

        this.funcionarioRepository.save(novoUsuario);

        return ResponseEntity.ok().build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Funcionario> editar(@PathVariable("id") String id, @RequestBody Funcionario funcionario) {
        if(this.funcionarioRepository.findByEmail(funcionario.getEmail()) != null){
            return ResponseEntity.badRequest().build();
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(funcionario.getSenha());
        Funcionario usuarioAtualizado = new Funcionario(funcionario.getNome(), funcionario.getEmail(), encryptedPassword);

        this.funcionarioRepository.save(usuarioAtualizado);

        return ResponseEntity.ok().build();
    }
}
