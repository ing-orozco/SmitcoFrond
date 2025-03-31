import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperacionesFormComponent } from './components/operaciones-form/operaciones-form.component';
import { OperacionesTableComponent } from './components/operaciones-table/operaciones-table.component';
import { OperacionesLayoutComponent } from './page/operaciones-layout/operaciones-layout.component';
import { CrudFormComponent } from '../shared/components/crud-form/crud-form.component';
import { CrudTableComponent } from '../shared/components/crud-table/crud-table.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    OperacionesFormComponent,
    OperacionesTableComponent,
    OperacionesLayoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],exports:[
    OperacionesLayoutComponent
  ]
})
export class OperacionesModule { }
