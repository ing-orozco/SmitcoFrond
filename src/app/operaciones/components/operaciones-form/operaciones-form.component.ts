import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-operaciones-form',
  templateUrl: './operaciones-form.component.html',
  styleUrls: ['./operaciones-form.component.css']
})
export class OperacionesFormComponent {
  @Input() selectedOperacion: any = null;
  @Output() onSave = new EventEmitter<any>();

  operacionFormFields = [
    { name: 'buqueId', label: 'Buque ID', type: 'number' },
    { name: 'cargaId', label: 'Carga ID', type: 'number' },
    { name: 'usuarioId', label: 'Usuario ID', type: 'number' },
    { name: 'tipoOperacion', label: 'Tipo de Operación', type: 'text' },
    { name: 'fecha', label: 'Fecha', type: 'date' },
    { name: 'estado', label: 'Estado', type: 'text' }
  ];

  guardarOperacion(operacion: any) {
    this.onSave.emit(operacion);
  }
}
