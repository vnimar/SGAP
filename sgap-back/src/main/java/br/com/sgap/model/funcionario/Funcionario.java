package br.com.sgap.model.funcionario;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@Entity(name = "funcionario")
@Table(name = "tb_funcionarios")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode(of = "id")
public class Funcionario implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    @Column(name="email", nullable = false)
    private String email;
    @Column(name = "telefone", length = 18)
    private String telefone;
    @Column(name = "senha", length = 60)
    private String senha;
    @Column(name = "crm", length = 8)
    private String crm;
    @ManyToOne
    @JoinColumn(name = "cargo_id")
    private Cargo cargo;

    // construtor para o Funcionario sem ID
    public Funcionario(String nome, String email, String telefone, String encryptedPassword) {
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return senha;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
