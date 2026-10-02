
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class LoginComponent {
  onSubmit(formData: NgForm) {
    if(formData.form.invalid){
      return;
    }
    const enteredEmail=formData.form.value.email;
    const enteredPassword=formData.form.value.password;
    console.log(enteredEmail,enteredPassword);
    formData.form.reset();
  }
}
