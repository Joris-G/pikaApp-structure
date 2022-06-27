import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  public loginForm: UntypedFormGroup;
  constructor(
    private userService: UserService,
    private navCtrl: NavController) {
    this.loginForm = new UntypedFormGroup({
      username: new UntypedFormControl(),
      password: new UntypedFormControl()
    });
  }
  login(username: string, password: string) {
    console.log(username, password);
    const user: User = {
      username,
      password
    };
    this.userService.login(user);
  }
  createUserClick() {
    this.navCtrl.navigateForward('register');
  }
}
