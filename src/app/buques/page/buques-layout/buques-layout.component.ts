import { Component, OnInit } from '@angular/core';
import { BuqueService } from '../../services/buque.service';
import { Buque } from 'src/app/Interfaces/buque.interface';

@Component({
  selector: 'app-buques-layout',
  templateUrl: './buques-layout.component.html',
  styleUrls: ['./buques-layout.component.css']
})
export class BuquesLayoutComponent implements OnInit {
  buques: Buque[] = [];
  selectedBuque: Buque | null = null;

  constructor(private buqueService: BuqueService) {}

  ngOnInit() {
    this.cargarBuques();
  }

  cargarBuques() {
    this.buqueService.getBuques().subscribe(response => {

      if (response.code==200) {
        console.log("Respuesta del backend:", response.data.$values);
        this.buques = response.data.$values;
      }else {
        this.buques = []; // Si no hay datos, asignamos un arreglo vacío
      }
    }, error => {
      console.error("Error al cargar los buques:", error);
    });
  }




  guardarBuque(buque: Buque) {
    if (buque.id) {
      this.buqueService.updateBuque(buque).subscribe(response => {
        if (response.code==200) {
          this.cargarBuques();
        }
      });
    } else {
      this.buqueService.addBuque(buque).subscribe(response => {
        if (response.code==201) {
          this.cargarBuques();
        }
      });
    }
    this.selectedBuque = null;
  }

  editarBuque(buque: Buque) {
    this.selectedBuque = { ...buque };
  }

  eliminarBuque(id: number) {
    this.buqueService.deleteBuque(id).subscribe(response => {
      if (response.code==200) {
        this.cargarBuques();
      }
    });
  }
}
