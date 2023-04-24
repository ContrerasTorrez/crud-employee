import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CrudemployeeService } from '../crudemployee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit{
  
  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: CrudemployeeService,
              private router: Router) { }

  ngOnInit(): void {}

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }
  save() {
    console.log(this.employee.name);
    this.employeeService
      .createEmployee(this.employee).subscribe(data => {
        console.log(data);
        this.employee = new Employee();
        this.gotoList();
      }, 
      error => console.log(error));
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/list']);
  }

}
