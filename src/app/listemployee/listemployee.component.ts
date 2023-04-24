import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CrudemployeeService } from '../crudemployee.service';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit{

  // employees: Observable<Employee[]> = new Observable<Employee[]> (subscriber => {subscriber.next([new Employee()])});
  employees: Observable<Employee[]> = new Observable<Employee[]>;

  constructor(private employeeService:CrudemployeeService,private router:Router){}

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }

}
