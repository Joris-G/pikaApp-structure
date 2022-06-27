import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/users/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent {

  constructor(
    private userService: UserService,) { }

  logoutClick() {
    this.userService.logout();
  }
}
