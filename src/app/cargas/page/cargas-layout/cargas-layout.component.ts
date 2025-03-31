import { Component, OnInit } from '@angular/core';
import { CargaService } from '../../services/carga.service';
import { Carga } from 'src/app/Interfaces/carga.interface';

@Component({
  selector: 'app-cargas-layout',
  templateUrl: './cargas-layout.component.html',
  styleUrls: ['./cargas-layout.component.css']
})
export class CargasLayoutComponent implements OnInit {
  cargas: Carga[] = [];
  selectedCarga: Carga | null = null;

  constructor(private cargaService: CargaService) {}

  ngOnInit() {
    this.cargarCargas();
  }

  cargarCargas() {
    this.cargaService.getCargas().subscribe(response => {
      if (response.code==200) {
        this.cargas = response.data.$values;
        console.log(response.data.$values);

      }else {
        this.cargas = [];
      }
    }, error => {
      console.error("Error al cargar la carga:", error);
    });
  }

  guardarCarga(carga: Carga) {
    if (carga.id) {
      this.cargaService.updateCarga(carga).subscribe(response => {
        if (response.code==200) {
          this.cargarCargas();
        }
      });
    } else {
      this.cargaService.addCarga(carga).subscribe(response => {
        if (response.code==201) {
          this.cargarCargas();
        }
      });
    }
    this.selectedCarga = null;
  }

  editarCarga(carga: Carga) {
    this.selectedCarga = { ...carga };
  }

  eliminarCarga(id: number) {
    this.cargaService.deleteCarga(id).subscribe(response => {
      if (response.code==200) {
        this.cargarCargas();
      }
    });
  }
}
