package br.com.sgap.service;

import br.com.sgap.model.funcionario.Funcionario;
import br.com.sgap.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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
        Funcionario funcionario = new Funcionario();
        funcionario.setEmail(novoFuncionario.getEmail());
        funcionario.setNome(novoFuncionario.getNome());
        funcionario.setSenha(novoFuncionario.getSenha());
        repository.save(funcionario);
    }

    public void editar(Integer id, Funcionario funcionario) {
        Optional<Funcionario> usuario = repository.findById(id);
        if (usuario.isPresent()) {
            usuario.get().setNome(funcionario.getNome());
            usuario.get().setSenha(funcionario.getSenha());
            usuario.get().setEmail(funcionario.getEmail());
            repository.saveAndFlush(usuario.get());
        }
    }
}
