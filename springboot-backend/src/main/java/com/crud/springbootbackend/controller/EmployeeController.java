package com.crud.springbootbackend.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.springbootbackend.exception.ResourceNotFoundException;
import com.crud.springbootbackend.model.Employee;
import com.crud.springbootbackend.repository.EmployeeRepository;

@CrossOrigin("*")
@RestController
@RequestMapping("/employees")
public class EmployeeController 
{
	@Autowired
	private EmployeeRepository repo;
	
	@GetMapping
	public ArrayList<Employee> getAllEmployees()
	{
		return (ArrayList<Employee>) repo.findAll();
	}
	
	//Create employee method
	@PostMapping
	public Employee createEmployee(@RequestBody Employee employee)
	{
		return repo.save(employee);
	}
	
	//get employee by id REST API
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable long id)
	{
		Employee employee=repo.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Employee not found with id: "+id));
		
		return ResponseEntity.ok(employee);
	}
    
	//updated employee REST API
	@PutMapping("/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable(name="id") long id,@RequestBody Employee employee)
	{
		Employee updateEmployee=repo.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("Employee not found with id: "+id));
		
		updateEmployee.setFirstname(employee.getFirstname());
		updateEmployee.setLastname(employee.getLastname());
		updateEmployee.setEmailId(employee.getEmailId());
		repo.save(updateEmployee);
		
		return ResponseEntity.ok(updateEmployee);
	}
	
	//delete employee REST API
		@DeleteMapping("/{id}")
		public Employee deleteEmployee(@PathVariable long id)
		{
			Employee employee=repo.findById(id)
					.orElseThrow(()->new ResourceNotFoundException("Employee not found with id: "+id));
			
			repo.delete(employee);
			return employee;
			
		}
		
}
