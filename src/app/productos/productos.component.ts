import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  constructor(private consulta: ConsultaService) {}

  ngOnInit() {}

  obtenerProductos(): Observable<any> {
    return this.consulta.getProductos();
  }
}
