import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buques-table',
  templateUrl: './buques-table.component.html',
  styleUrls: ['./buques-table.component.css']
})
export class BuquesTableComponent {
  @Input() buques: any[] = [];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<number>();

  buqueColumns = [
    { key: 'nombre', label: 'Nombre' },
    { key: 'bandera', label: 'Bandera' },
    { key: 'capacidad', label: 'Capacidad' },
    { key: 'estado', label: 'Estado' }
  ];

  editarBuque(buque: any) {
    this.edit.emit(buque);
  }

  eliminarBuque(id: number) {
    this.delete.emit(id);
  }
}
