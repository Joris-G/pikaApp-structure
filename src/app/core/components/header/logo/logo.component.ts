import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {

  constructor(private navCtrl: NavController) { }
  logoClick() {
    this.navCtrl.navigateRoot('home');
  }

}
