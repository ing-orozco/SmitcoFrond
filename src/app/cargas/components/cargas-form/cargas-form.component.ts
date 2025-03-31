import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cargas-form',
  templateUrl: './cargas-form.component.html',
  styleUrls: ['./cargas-form.component.css']
})
export class CargasFormComponent {
  @Input() selectedCarga: any = null;
  @Output() onSave = new EventEmitter<any>();

  cargaFormFields = [
    { name: 'tipoCarga', label: 'Tipo de Carga', type: 'text' },
    { name: 'peso', label: 'Peso (kg)', type: 'number' },
    { name: 'destino', label: 'Destino', type: 'text' },
    { name: 'fechaIngreso', label: 'Fecha de Ingreso', type: 'date' },
    { name: 'fechaSalida', label: 'Fecha de Salida', type: 'date' },
    { name: 'buqueId', label: 'Buque ID', type: 'number' }
  ];

  guardarCarga(carga: any) {
    this.onSave.emit(carga);
  }
}
