package br.com.sgap.repository;

import br.com.sgap.model.funcionario.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.userdetails.UserDetails;

public interface FuncionarioRepository extends JpaRepository<Funcionario, Integer> {
    @Query("select f from funcionario f where f.email = :email and f.senha = :senha")
    Funcionario findBySenhaAndEmail(@Param("email") String email, @Param("senha") String senha);

    UserDetails findByEmail(String email);
}
