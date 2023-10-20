import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaAlumnosComponent } from './lista-alumnos.component';

describe('ListaAlumnosComponent', () => {
  let component: ListaAlumnosComponent;
  let fixture: ComponentFixture<ListaAlumnosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAlumnosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle agregarAFavoritos', () => {
    const alumno = 'Carlos'; // Simula un alumno
    component.agregarAFavoritos(alumno);
    // Aquí puedes agregar las expectativas relevantes para probar la función agregarAFavoritos
  });

  it('should handle eliminarAlumno', () => {
    const alumno = 'Carlos'; // Simula un alumno
    component.eliminarAlumno(alumno);
    // Aquí puedes agregar las expectativas relevantes para probar la función eliminarAlumno
  });
});

