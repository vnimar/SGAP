package br.com.sgap.repository;

import br.com.sgap.model.funcionario.Cargo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CargoRepository extends JpaRepository<Cargo, Integer> {
}
