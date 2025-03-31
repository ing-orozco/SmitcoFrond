import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuquesLayoutComponent } from './page/buques-layout/buques-layout.component';
import { BuquesFormComponent } from './components/buques-form/buques-form.component';
import { BuquesTableComponent } from './components/buques-table/buques-table.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BuquesLayoutComponent,
    BuquesFormComponent,
    BuquesTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],exports:[
    BuquesLayoutComponent
  ]
})
export class BuquesModule { }
