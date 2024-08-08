import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ FormsModule ] // Importa FormsModule para que se puedan usar ngModel
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct vowel for number 1', () => {
    component.numero = 1;
    component.mostrarVocal();
    expect(component.mensaje).toBe('La vocal correspondiente al número 1 es: A');
  });

  it('should display the correct vowel for number 2', () => {
    component.numero = 2;
    component.mostrarVocal();
    expect(component.mensaje).toBe('La vocal correspondiente al número 2 es: E');
  });

  it('should display the correct vowel for number 5', () => {
    component.numero = 5;
    component.mostrarVocal();
    expect(component.mensaje).toBe('La vocal correspondiente al número 5 es: U');
  });

  it('should display an error message for numbers outside the valid range', () => {
    component.numero = 6;
    component.mostrarVocal();
    expect(component.mensaje).toBe('Número fuera de rango. Ingrese un número entre 1 y 5.');
  });

  it('should display an error message when no number is provided', () => {
    component.numero = null;
    component.mostrarVocal();
    expect(component.mensaje).toBe('Número fuera de rango. Ingrese un número entre 1 y 5.');
  });
});

