import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudemployeeService } from '../crudemployee.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit{

  id: number = 0;
  employee: Employee = {
    id: 0,
    name: '',
    lastName: '',
    position: '',
    email:'',
    salary: 0
  };

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: CrudemployeeService) { }
    
  ngOnInit(): void {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }
  updateEmployee() {
    this.employeeService.updateEmployee(this.id, this.employee)
      .subscribe(data => {
        console.log(data);
        this.employee = new Employee();
        this.gotoList();
      }, error => console.log(error));
  }
  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

}
