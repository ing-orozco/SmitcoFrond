import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buques-form',
  templateUrl: './buques-form.component.html',
  styleUrls: ['./buques-form.component.css']
})
export class BuquesFormComponent {
  @Input() selectedBuque: any = null;
  @Output() onSave = new EventEmitter<any>();

  buqueFormFields = [
    { name: 'nombre', label: 'Nombre', type: 'text' },
    { name: 'bandera', label: 'Bandera', type: 'text' },
    { name: 'capacidad', label: 'Capacidad (ton)', type: 'number' },
    { name: 'estado', label: 'Estado', type: 'select', options: ['Activo', 'Inactivo'] }
  ];

  guardarBuque(buque: any) {
    this.onSave.emit(buque);
  }
}
