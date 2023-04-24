import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudemployeeService } from '../crudemployee.service';

@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent implements OnInit{

  employeeId: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: CrudemployeeService
  ) { }

    ngOnInit() {
      this.employeeId = Number(this.route.snapshot.paramMap.get('id'));
    }
  
    delete() {
      this.employeeService.deleteEmployee(this.employeeId).subscribe(() => {
        this.router.navigate(['/list']);
      });
    }
  
    cancel() {
      this.router.navigate(['/list']);
    }

}
