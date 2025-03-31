import { Component, OnInit } from '@angular/core';
import { OperacionService } from '../../services/operacion.service';
import { Operacion } from 'src/app/Interfaces/operacion.interface';

@Component({
  selector: 'app-operaciones-layout',
  templateUrl: './operaciones-layout.component.html',
  styleUrls: ['./operaciones-layout.component.css']
})
export class OperacionesLayoutComponent implements OnInit {
  operaciones: Operacion[] = [];
  selectedOperacion: Operacion | null = null;

  constructor(private operacionService: OperacionService) {}

  ngOnInit() {
    this.cargarOperaciones();
  }

  cargarOperaciones() {
    this.operacionService.getOperaciones().subscribe(response => {
      if (response.code==200) {
        this.operaciones = response.data.$values;
      }else {
        this.operaciones = [];
      }
    }, error => {
      console.error("Error al cargar la operacion:", error);
    });
  }

  guardarOperacion(operacion: Operacion) {
    if (operacion.id) {
      this.operacionService.updateOperacion(operacion).subscribe(response => {
        if (response.code==200) {
          this.cargarOperaciones();
        }
      });
    } else {
      this.operacionService.addOperacion(operacion).subscribe(response => {
        if (response.code==201) {
          this.cargarOperaciones();
        }
      });
    }
    this.selectedOperacion = null;
  }

  editarOperacion(operacion: Operacion) {
    this.selectedOperacion = { ...operacion };
  }

  eliminarOperacion(id: number) {
    this.operacionService.deleteOperacion(id).subscribe(response => {
      if (response.code==200) {
        this.cargarOperaciones();
      }
    });
  }
}
