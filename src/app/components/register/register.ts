import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  imports: [FormsModule],
  selector: 'app-register',
  styleUrl: './register.css',
  templateUrl: './register.html',
})
export class RegisterComponent {
  private registerFormSignal = viewChild.required<NgForm>('registerForm');
  private destroyRef = inject(DestroyRef);
  constructor() {
    afterNextRender(() => {
      const registerFormInstance = this.registerFormSignal();

      const loadedFormData = window.localStorage.getItem('saved-register-form');

      if (loadedFormData) {
        const email = JSON.parse(loadedFormData).email;
        const username = JSON.parse(loadedFormData).username;
        setTimeout(() => {
          registerFormInstance.controls['username'].setValue(username);
          registerFormInstance.controls['email'].setValue(email);
        }, 1);
      }

      if (registerFormInstance) {
        registerFormInstance.valueChanges
          ?.pipe(debounceTime(300), takeUntilDestroyed(this.destroyRef))
          .subscribe({
            next: (value) => {
              window.localStorage.setItem(
                'saved-register-form',
                JSON.stringify({
                  username: value.username,
                  email: value.email,
                }),
              );
            },
          });
      }
    });
  }
  submitted: boolean = false;

  onRegister(formData: NgForm) {
    console.log('submit clicked');
    this.submitted = true;
    if (formData.form.invalid) {
      return;
    }
    console.log(formData.form.value);
    window.localStorage.clear();
    formData.resetForm();
    this.submitted = false;
  }
}
