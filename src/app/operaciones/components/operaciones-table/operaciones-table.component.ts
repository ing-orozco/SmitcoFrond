import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-operaciones-table',
  templateUrl: './operaciones-table.component.html',
  styleUrls: ['./operaciones-table.component.css']
})
export class OperacionesTableComponent {
  @Input() operaciones: any[] = [];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();

  operacionColumns = [
    { key: 'buqueId', label: 'Buque ID' },
    { key: 'cargaId', label: 'Carga ID' },
    { key: 'usuarioId', label: 'Usuario ID' },
    { key: 'tipoOperacion', label: 'Tipo de Operación' },
    { key: 'fecha', label: 'Fecha' },
    { key: 'estado', label: 'Estado' }
  ];

  editarOperacion(operacion: any) {
    this.edit.emit(operacion);
  }

  eliminarOperacion(id: number) {
    this.delete.emit(id);
  }
}
