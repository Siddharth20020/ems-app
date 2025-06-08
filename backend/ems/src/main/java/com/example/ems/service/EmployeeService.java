package com.example.ems.service;

import com.example.ems.model.Employee;
import java.util.List;

public interface EmployeeService {
    Employee create(Employee employee);
    Employee update(Long id, Employee employee);
    void delete(Long id);
    List<Employee> getAll();
    Employee getById(Long id);
}
