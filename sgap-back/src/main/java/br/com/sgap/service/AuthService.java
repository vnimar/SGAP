package br.com.sgap.service;

import br.com.sgap.model.funcionario.Funcionario;
import br.com.sgap.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService implements UserDetailsService {
    @Autowired
    FuncionarioRepository repository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return repository.findByEmail(email);
    }

    public void cadastrar(Funcionario novoFuncionario) {
        if (repository.findByEmail(novoFuncionario.getEmail()) != null) {
            throw new IllegalArgumentException("Email já existe");
        }

        String encryptedPassword = new BCryptPasswordEncoder().encode(novoFuncionario.getSenha());
        Funcionario funcionario = new Funcionario(novoFuncionario.getNome(), novoFuncionario.getEmail(), encryptedPassword);
        repository.save(funcionario);
    }

    public void editar(Integer id, Funcionario funcionario) {
        Optional<Funcionario> usuario = repository.findById(id);
        if (usuario.isPresent()) {
            if (repository.findByEmail(funcionario.getEmail()) != null) {
                throw new IllegalArgumentException("Email já existe");
            }

            Funcionario usuarioAtualizado = usuario.get();
            usuarioAtualizado.setNome(funcionario.getNome());
            usuarioAtualizado.setSenha(new BCryptPasswordEncoder().encode(funcionario.getSenha()));
            usuarioAtualizado.setEmail(funcionario.getEmail());
            repository.saveAndFlush(usuarioAtualizado);
        }
    }
}
