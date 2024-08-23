import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
    
    //fixture = TestBed.createComponent(LoginComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia Crear', () => {
    expect(component).toBeTruthy();
  });

  it('debe tener un formulario con campos de nombre de usuario, contraseña y role', () => {
    const emailInput = fixture.debugElement.query(By.css('input[name="email"]'));
    const passwordInput = fixture.debugElement.query(By.css('input[name="password"]'));
    const roleInput = fixture.debugElement.query(By.css('input[name="role"]'));
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(roleInput).toBeTruthy();
  });

  it('Deberia tener un boton enviar', () => {
    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));
    expect(submitButton).toBeTruthy();
  });

  it('debería mostrar un mensaje de error cuando el formulario no es válido', () => {
    component.loginForm.controls['email'].setValue('');
    component.loginForm.controls['password'].setValue('');
    component.loginForm.controls['role'].setValue('');
    component.onSubmit();
    fixture.detectChanges();
    const errorMessage = fixture.debugElement.query(By.css('.error-message'));
    expect(errorMessage).toBeTruthy();
  });

  it('debe llamar al método onSubmit cuando se envía el formulario', () => {
    spyOn(component, 'onSubmit');
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', null);
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
