import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class CrudemployeeService {

  private baseUrl = 'http://localhost:8080/api/employees'; // reemplaza la URL con la ruta a tu API de Spring Boot
  
  constructor(private http:HttpClient) { }
  
  getEmployee(id: number):Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, {name:employee.name,lastName:employee.lastName,email:employee.email,salary:employee.salary,position:employee.position});
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}`);
  }
  
}
