import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudFormComponent } from './components/crud-form/crud-form.component';
import { CrudTableComponent } from './components/crud-table/crud-table.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CrudFormComponent,
    CrudTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],exports:[
    CrudFormComponent,
    CrudTableComponent
  ]
})
export class SharedModule { }
