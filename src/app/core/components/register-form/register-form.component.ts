import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { UserFormGroup } from '../../interfaces/user';
import { UserService } from '../../services/users/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {

  public registerForm: UntypedFormGroup;
  constructor(
    private userService: UserService
  ) {
    this.registerForm = new UntypedFormGroup({
      username: new UntypedFormControl(),
      password: new UntypedFormControl(),
      firstname: new UntypedFormControl(),
      lastname: new UntypedFormControl(),
    }) as UserFormGroup;
  }

  register() {
    console.log(this.registerForm.value, this.registerForm);
    this.userService.register(this.registerForm.value);
  }

}
