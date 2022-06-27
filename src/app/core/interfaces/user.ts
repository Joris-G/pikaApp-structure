import { AbstractControl, UntypedFormGroup } from '@angular/forms';

export interface User {
  username: string;
  lastname?: string;
  firstname?: string;
  password?: string;
  team?: Team;
}

export interface UserFormGroup extends UntypedFormGroup {
  value: User;
  controls: {
    username: AbstractControl;
    lastname: AbstractControl;
    firstname: AbstractControl;
    password: AbstractControl;
  };
}

export interface Team {
  name: string;
}
