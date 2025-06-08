package com.example.ems.service;

import com.example.ems.model.Employee;
import com.example.ems.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public Employee create(Employee employee) {
        return repository.save(employee);
    }

    public Employee update(Long id, Employee employee) {
        Employee e = repository.findById(id).orElseThrow();
        e.setName(employee.getName());
        e.setRole(employee.getRole());
        e.setDepartment(employee.getDepartment());
        e.setSalary(employee.getSalary());
        return repository.save(e);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    public List<Employee> getAll() {
        return repository.findAll();
    }

    public Employee getById(Long id) {
        return repository.findById(id).orElseThrow();
    }
}
