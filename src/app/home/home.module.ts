import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { BuquesModule } from '../buques/buques.module';
import { CargasModule } from '../cargas/cargas.module';
import { OperacionesModule } from '../operaciones/operaciones.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeLayoutComponent,
  ],
  imports: [
    CommonModule,
    OperacionesModule,
    BuquesModule,
    CargasModule,
    SharedModule
  ]
})
export class HomeModule { }
