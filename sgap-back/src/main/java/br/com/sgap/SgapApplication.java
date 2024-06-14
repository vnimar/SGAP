package br.com.sgap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class SgapApplication {

	public static void main(String[] args) {
		SpringApplication.run(SgapApplication.class, args);
	}
}