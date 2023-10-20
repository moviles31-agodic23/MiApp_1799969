import { Component, OnInit } from '@angular/core';
import { AlertController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent implements OnInit {
  alumnos: any[] = ["Carlos", "Alberto", "Eduardo", "Barbara", "Georgina", "Kevin"];

  constructor(
    private alertController: AlertController,
    private actionSheetController: ActionSheetController
  ) {}

  ngOnInit() {}

  async agregarAFavoritos(alumno: string) {

  }

  async eliminarAlumno(alumno: string) {

  }

  async mostrarOpciones(alumno: string) {
    const alert = await this.alertController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Agregar a Favoritos',
          handler: () => {
            this.agregarAFavoritos(alumno); 
          },
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.mostrarActionSheet(alumno); 
          },
        },
      ],
    });

    await alert.present();
  }

  async mostrarActionSheet(alumno: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.eliminarAlumno(alumno);
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
        },
      ],
    });

    await actionSheet.present();
  }
}


