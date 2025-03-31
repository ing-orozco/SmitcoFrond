import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargasTableComponent } from './components/cargas-table/cargas-table.component';
import { CargasFormComponent } from './components/cargas-form/cargas-form.component';
import { CargasLayoutComponent } from './page/cargas-layout/cargas-layout.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CargasTableComponent,
    CargasFormComponent,
    CargasLayoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],exports:[
    CargasLayoutComponent
  ]
})
export class CargasModule { }
