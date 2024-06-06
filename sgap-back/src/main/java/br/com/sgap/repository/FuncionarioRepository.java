package br.com.sgap.repository;

import br.com.sgap.model.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FuncionarioRepository  extends JpaRepository<Funcionario, Integer> {
}
