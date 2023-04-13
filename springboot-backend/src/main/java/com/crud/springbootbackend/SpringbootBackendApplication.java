package com.crud.springbootbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.crud.springbootbackend.model.Employee;
import com.crud.springbootbackend.repository.EmployeeRepository;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}
    
	@Autowired
	private EmployeeRepository repo;
	
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
//		Employee e=new Employee();
//		e.setFirstname("Gopi");
//		e.setLastname("ashok");
//		e.setEmailId("gopi@gmail.com");
//		repo.save(e);
//		
//		Employee e1=new Employee();
//		e1.setFirstname("Gova");
//		e1.setLastname("ashok");
//		e1.setEmailId("gova@gmail.com");
//		repo.save(e1);
		
		
		
	}

}
