import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListemployeeComponent },
  { path: 'create', component: CreateemployeeComponent },
  { path: 'update/:id', component: UpdateemployeeComponent },
  { path: 'delete/:id', component: DeleteemployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
