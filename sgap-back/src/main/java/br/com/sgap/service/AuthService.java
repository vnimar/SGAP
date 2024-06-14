package br.com.sgap.service;

import br.com.sgap.model.funcionario.Cargo;
import br.com.sgap.model.funcionario.Funcionario;
import br.com.sgap.repository.CargoRepository;
import br.com.sgap.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthService implements UserDetailsService {

    @Autowired
    FuncionarioRepository repository;

    @Autowired
    CargoRepository cargoRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return repository.findByEmail(email);
    }

    public void cadastrar(Funcionario novoFuncionario) {
        if (repository.findByEmail(novoFuncionario.getEmail()) != null) {
            throw new IllegalArgumentException("Email já existe");
        }

        Cargo cargo = cargoRepository.findById(novoFuncionario.getCargo().getId())
                .orElseThrow(() -> new IllegalArgumentException("Cargo não encontrado"));

        String encryptedPassword = new BCryptPasswordEncoder().encode(novoFuncionario.getSenha());
        Funcionario funcionario = new Funcionario(novoFuncionario.getNome(), novoFuncionario.getEmail(), novoFuncionario.getTelefone(), encryptedPassword);
        funcionario.setCargo(cargo);
        repository.save(funcionario);
    }

    public void editar(Integer id, Funcionario funcionario) {
        Optional<Funcionario> usuario = repository.findById(id);
        if (usuario.isPresent()) {
            Cargo cargo = cargoRepository.findById(funcionario.getCargo().getId())
                    .orElseThrow(() -> new IllegalArgumentException("Cargo não encontrado"));

            Funcionario usuarioAtualizado = usuario.get();
            usuarioAtualizado.setNome(funcionario.getNome());
            usuarioAtualizado.setSenha(new BCryptPasswordEncoder().encode(funcionario.getSenha()));
            usuarioAtualizado.setEmail(funcionario.getEmail());
            usuarioAtualizado.setCargo(cargo);
            repository.saveAndFlush(usuarioAtualizado);
        }
    }

    public List<Funcionario> listFuncionarios() {
        return repository.findAll();
    }

    public Optional<Funcionario> findById(Integer id) {
        return repository.findById(id);
    }

    public Funcionario getUsuarioLogado() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        return (Funcionario) loadUserByUsername(email);
    }
}
