import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cargas-table',
  templateUrl: './cargas-table.component.html',
  styleUrls: ['./cargas-table.component.css']
})
export class CargasTableComponent {
  @Input() cargas: any[] = [];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();

  cargaColumns = [
    { key: 'tipoCarga', label: 'Tipo de Carga' },
    { key: 'peso', label: 'Peso (kg)' },
    { key: 'destino', label: 'Destino' },
    { key: 'fechaIngreso', label: 'Fecha de Ingreso' },
    { key: 'fechaSalida', label: 'Fecha de Salida' },
    { key: 'buqueId', label: 'Buque ID' }
  ];


  editarCarga(carga: any) {
    this.edit.emit(carga);
  }

  eliminarCarga(id: number) {
    this.delete.emit(id);
  }
}
