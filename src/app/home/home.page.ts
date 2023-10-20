import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  productos: any = [];

  constructor(private consultaService: ConsultaService) {}

  ngOnInit() {
    this.consultaService.getProductos().subscribe((data: any) => {
      this.productos = data;
    });
  }
}


