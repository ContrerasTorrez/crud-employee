import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    CreateemployeeComponent,
    ListemployeeComponent,
    UpdateemployeeComponent,
    DeleteemployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule // agregamos nuestro archivo de rutas al arreglo de imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
